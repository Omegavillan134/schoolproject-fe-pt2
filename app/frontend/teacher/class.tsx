import { useLoaderData, Link, useParams } from "react-router"
import { Classes, getClassBySlug } from "../data/classes"
import type { Route } from "./+types/class"

type TeacherId = string;
type AssignmentId = string;
type AnnouncementId = string;
type ModuleId = string;

interface Teacher {id: TeacherId; name: string; subject: string;}
interface Assignment {id: AssignmentId; name: string; TeacherId: TeacherId}
interface Announcement {id: AnnouncementId; name: string; TeacherId: TeacherId}
interface Module {id: ModuleId; name: string; TeacherId: TeacherId}

const Hardcoded_Teacher: Teacher[]=[
    {id: "1", name: "Sir Opella", subject:"Java"},
    {id: "2", name: "Sir Hugo", subject:"Soft Engineering"},
    {id: "3", name: "Sir Ian", subject:"Networking"},
]

const Hardcoded_Assignment: Assignment[] = [
    {id: "1", name:"bla bla", TeacherId:"1"},
    {id: "2", name:"bla bla", TeacherId:"3"},
    {id: "3", name:"bla bla", TeacherId:"2"},
    {id: "4", name:"bla bla", TeacherId:"3"},
    {id: "5", name:"bla bla", TeacherId:"2"},
    {id: "6", name:"bla bla", TeacherId:"1"},
    {id: "7", name:"bla bla", TeacherId:"1"},
]

const Hardcoded_Announcement: Announcement[] = [
    {id: "1", name:"bla bla", TeacherId:"2"},
    {id: "2", name:"bla bla", TeacherId:"3"},
    {id: "3", name:"bla bla", TeacherId:"1"},
    {id: "4", name:"bla bla", TeacherId:"1"},
    {id: "5", name:"bla bla", TeacherId:"3"},
    {id: "6", name:"bla bla", TeacherId:"2"},
    {id: "7", name:"bla bla", TeacherId:"2"},
]

const Hardcoded_Module: Module[] = [
    {id: "1", name: "bla bla", TeacherId: "2"},
    {id: "2", name: "bla bla", TeacherId: "3"},
    {id: "3", name: "bla bla", TeacherId: "1"},
    {id: "4", name: "bla bla", TeacherId: "2"},
    {id: "5", name: "bla bla", TeacherId: "2"},
    {id: "6", name: "bla bla", TeacherId: "3"},
    {id: "7", name: "bla bla", TeacherId: "1"},
    {id: "8", name: "bla bla", TeacherId: "2"},
]

export function loader({params}: Route.LoaderArgs) {
    const cls = getClassBySlug(params.id);
    if(!cls) throw new Response("Class not found", {status: 404})
    return {
        cls,
        Teacher: Hardcoded_Teacher,
        Assignment: Hardcoded_Assignment,
        Announcement: Hardcoded_Announcement,
        Module: Hardcoded_Module
    }
}

export default function classed(){
    const { cls, Teacher, Assignment, Announcement, Module } = useLoaderData<typeof loader>();

    // map side effects removed
    return(
        <div className="grid grid-cols-3 grid-rows-[auto_1fr] gap-4">
            <div className="flex col-span-3">
                <div className="card min-w-full min-h-60">
                    <p>{cls.subject}</p>
                </div>
            </div>
            <div className="flex col-span-1 min-h-0">
                <div className="card min-w-full overflow-y-auto min-h-0">
                    <p>Students</p>
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-left">Attendance</th>
                                <th className="text-left">Student</th>
                                <th className="text-left">Remarks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>Lotho</td>
                                <td><input type="text" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex col-span-1">
                    <div className="card min-w-full">
                        <h1>Assignments</h1>
                        {Teacher.map((val) => {
                            const c = Classes.find((c) => c.id === val.id);
                            return (
                                <Link key={val.id} to={`/teacher/${c?.slug}/announcements`} className="card my-4 block">
                                    <p>{c?.slug}</p>
                                </Link>
                            );
                        })}
                        <Link to="/teacher/new-assignment" className="card link">Add Assingment</Link>
                    </div>
            </div>
            <div className="flex col-span-1">
                <div className="card min-w-full"><p>Modules</p></div>
            </div>
        </div>
    )
}