import type { Route } from "./+types/announcements"
import { Classes, getClassBySlug } from "../data/classes"
import { useLoaderData } from "react-router";
import { useNavigate } from "react-router"

export function loader({params}: Route.LoaderArgs) {
    const cls = getClassBySlug(params.id);
    if(!cls) throw new Response("Class not found", {status: 404})
    return {
        cls,
    }
}

export default function announcements() {
    const {cls} = useLoaderData<typeof loader>();
    const modal = document.querySelector("dialog");
    const nav = useNavigate();

    return(
        
        <div className="grid grid-cols-3 gap-2">
            <dialog className="flex justify-center">
                <h2>Hello</h2>
                <button>Close Modal?</button>
            </dialog>
            <div className="flex col-span-3">
                <div className="card min-w-full min-h-60">
                    <p>{cls.subject}</p>
                </div>
            </div>
            <div className="flex card col-span-2 flex-col">
                <h1>Header</h1>
                <p className="pt-5">description</p>
            </div>
            <div className="flex col-start-3 col-span-1">
                <div className="card min-w-full min-h-80 flex flex-col gap-4">
                    <button onClick={() => modal?.showModal()}>Open Modal</button>
                    <button className="card link bg-green-400">Submit?</button>
                </div>
            </div>
        </div>
    )
}