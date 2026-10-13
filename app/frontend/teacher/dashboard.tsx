import Calendar from "../components/calendar";
import {Link, useLoaderData, useParams} from "react-router"


type SectionId = string;
type ActivityId = string;


interface Section {id: SectionId; name: string}
interface Activity {id: ActivityId; name: string, SectionId: SectionId}



const Hardcoded_Section: Section[] = [
            {id: "1", name: "BSCS 3A"},
            {id: "2", name: "BSCS 3B"},
            {id: "3", name: "BSCS 3C"},
]

const Hardcoded_Activity: Activity[] = [
            {id: "1", name: "Activity 1", SectionId: "1"},
            {id: "2", name: "Activity 2", SectionId: "1"},
            {id: "3", name: "Activity 3", SectionId: "1"},
            {id: "4", name: "Activity 1", SectionId: "2"},
            {id: "5", name: "Activity 2", SectionId: "2"},
            {id: "6", name: "Activity 3", SectionId: "2"},
            {id: "7", name: "Activity 1", SectionId: "3"},
            {id: "8", name: "Activity 2", SectionId: "3"},
            {id: "9", name: "Activity 3", SectionId: "3"},
]

export function loader() {
    return{
        Section: Hardcoded_Section,
        Activity: Hardcoded_Activity
    }
}

export default function dashboard() {
    const {Section, Activity} = useLoaderData<typeof loader>();
    return (
        <>
            <div className="grid grid-cols-10 gap-4 pt-10 min-h-screen">
            <h1 className="col-span-10 text-2xl font-bold">Dashboard</h1>
                <div className="card col-span-4 row-span-5">
                    <div className="h-full">
                        <div className="flex flex-col justify-evenly gap-4">
                            {Section.map((val, key)=> {
                                const SectionAct = Activity.filter(act => act.SectionId === val.id)
                                return(
                                    <div key={val.id || key} className="card">
                                        <div>
                                            {val.name}
                                            <div className="flex flex-row-flex-wrap justify-evenly gap-2">
                                            {SectionAct.map((val, key) => {
                                                return(
                                                <div key={val.id || key} className="card">
                                                    {val.name}
                                                </div>
                                                )
                                            })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="card col-span-3 row-span-5">
                    <div className="grid grid-cols-6 gap-4 h-full">
                        <div className="col-span-1 flex items-center justify-center flex flex-col justify-evenly">
                            <input type="checkbox" />
                            <input type="checkbox" />
                            <input type="checkbox" />
                        </div>
                        <div className="col-span-5 flex flex-col justify-evenly">
                            <p>DCIT: Java(58%)</p>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                    </div>
                    
                </div>
                <div className="col-start-8 col-span-2 row-span-2 ml-6">
                    <Calendar />
                </div>
            </div>
        </>
)
}