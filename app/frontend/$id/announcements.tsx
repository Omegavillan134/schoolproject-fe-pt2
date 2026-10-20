import type { Route } from "./+types/announcements";
import { getClassBySlug } from "../data/classes";
import { useLoaderData } from "react-router";
import { useRef } from "react";

export function loader({ params }: Route.LoaderArgs) {
    const cls = getClassBySlug(params.id);
    if (!cls) throw new Response("Class not found", { status: 404 });
    return {
        cls,
    };
}

export default function Announcements() {
    const { cls } = useLoaderData<typeof loader>();
    const dialogRef = useRef<HTMLDialogElement>(null);

    return (
        <div className="grid grid-cols-3 gap-2">
            <dialog
                ref={dialogRef}
                className="m-auto w-full max-w-sm rounded-lg p-6 shadow-xl backdrop:bg-black/40"
            >
                <h2 className="text-lg font-semibold">Hello</h2>
                <button
                    type="button"
                    className="card link mt-4"
                    onClick={() => dialogRef.current?.close()}
                >
                    Close Modal?
                </button>
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
                    <button type="button" onClick={() => dialogRef.current?.showModal()}>
                        Open Modal
                    </button>
                    <button type="button" className="card link bg-green-400">
                        Submit?
                    </button>
                </div>
            </div>
        </div>
    );
}
