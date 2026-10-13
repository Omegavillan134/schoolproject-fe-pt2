import { useLoaderData, Link } from "react-router";

type TeacherID = string;
type LectureID = string;

interface Teacher { id: TeacherID; name: string }
interface Lectures {id: LectureID; name: string; TeacherID: TeacherID}

const Hardcoded_Teacher: Teacher[] = [
    {id: "user-1", name:"Hugo"},
    {id: "user-2", name:"Ops"},
    {id: "user-3", name:"Marmeto"}
]

const Hardcoded_Lectures: Lectures[] = [
    {id: "Lecture-101", name: "How to sleep with my voice", TeacherID: "user-1"},
    {id: "Lecture-102", name: "How i got to my position today 2hr", TeacherID: "user-2"},
    {id: "Lecture-103", name: "Networking", TeacherID: "user-3"},
    {id: "Lecture-104", name: "hello", TeacherID: "user-3"},
    {id: "Lecture-105", name: "there", TeacherID: "user-1"},
    {id: "Lecture-106", name: "pipol", TeacherID: "user-2"}
]


export function loader() {
    return{
        teachers: Hardcoded_Teacher,
        Lectures: Hardcoded_Lectures
    }
}

export default function lectures() {
    const { teachers, Lectures } = useLoaderData<typeof loader>();
    return (
        <div>
            {teachers.map((val, key) =>{
                const teacherLectures = Lectures.filter(lecture => lecture.TeacherID === val.id)
                return(
                    <div key={val.id || key} className="card flex flex-col gap-2">
                        <p>{val.name}</p>
                        <div className="flex flex-wrap gap-3">
                        {teacherLectures.map((lecture, i) => (
                            <div key={lecture.id || i} className="card">
                                {lecture.name}
                            </div>
                        ))}
                        </div>
                    </div>
                )
            })}
        </div>
            
)
}