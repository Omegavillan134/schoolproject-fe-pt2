import { useLoaderData, Link } from "react-router"
import { teacherClasses } from "../data/classes";

export function loader() {return {classes: teacherClasses}}

export default function classes() {
    const {classes} = useLoaderData<typeof loader>();

    return (
        
        <div>
            <div className="relative">
                <Link to="/teacher/create-class" className="fixed top-20 right-20 link bg-green-500 ">Create new Class</Link> 
            </div>
            {classes.length > 0?(
            <tbody>
                <div className="grid grid-cols-3 gap-10 min-h-80 w-180 pt-20">
                    {classes.map((val,key) => {
                        return(
                            <Link key={val.id} to={`/teacher/${val.slug}/class`}>
                                <div className="card link flex h-80 w-60 flex-col items-center justify-center">
                                    <p>{val.subject}</p>
                                    <p>{val.instructor}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </tbody>
            ) : (
                <p>no classes found</p>
            )}  
        </div>
)
}