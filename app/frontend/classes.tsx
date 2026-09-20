import { useLoaderData, Link } from "react-router"

export function loader() {
    return{
        classes:[
            [1, "Java", "Sir Opella"],
            [2, "DataBase", "Marmeto"],
            [3, "Soft Eng", "Hugo"]
        ]
    }
}

export default function classes() {
    const {classes} = useLoaderData<typeof loader>();

    return (
        <div>
            <tbody>
            <div className="grid grid-cols-3 gap-10 min-h-80 w-180">
            {classes.map((val,key) => {
                const [id, subject, instructor] = val;
                return(
                    <Link to={`/${subject}/class`}>
                        <div key={id || key} className="card flex items-center justify-center items-center flex-col h-80 w-60">
                            <p>{subject}</p>
                            <p>{instructor}</p>
                        </div>
                    </Link>
                )
            })}
            </div>
            </tbody>
        </div>
)
}