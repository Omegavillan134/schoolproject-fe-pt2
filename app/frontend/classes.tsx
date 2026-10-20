import { useLoaderData, Link } from "react-router"
import { Classes } from "./data/classes"; 

export function loader() {return {classes: Classes}}

export default function classes() {
    const {classes} = useLoaderData<typeof loader>();

    return (
        <div>
            <div className="relative">
                <Link to="/student/add-new-class" className="fixed top-20 right-20 link card bg-green-400 ">Add New Class?</Link>
            </div>
            <div className="grid grid-cols-3 gap-10 min-h-80 w-180 pt-20">
            {classes.map((val,key) => {
            return(
                    <Link key={val.id || key} to={`/student/${val.slug}/class`}>
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