import { useLoaderData, Link } from "react-router"
import { Classes } from "./data/classes"; 

export function loader() {return {classes: Classes}}

export default function classes() {
    const {classes} = useLoaderData<typeof loader>();

    return (
        <div>

            <div className="grid grid-cols-3 gap-10 min-h-80 w-180">
            {classes.map((val,key) => {
                return(
                    <Link key={val.id} to={`/student/${val.slug}/class`}>
                        <div className="card link flex h-80 w-60 flex-col items-center justify-center">
                            <p>{val.subject}</p>
                            <p>{val.instructor}</p>
                        </div>
                    </Link>
                )
            })}
            </div>

        </div>
)
}