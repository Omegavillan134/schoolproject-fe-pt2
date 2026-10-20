import Calendar from "../frontend/components/calendar";
import {Link} from "react-router"
import { useState } from "react"

type TableRow = {
    id: number;
    name: string;
}

export default function dashboard() {
    const [name, setName] = useState("")
    const [rows, setRows] = useState<TableRow[]>([
        {id:1, name:""}
    ])

    const updateRow = (id: number, field: keyof TableRow, value:string) =>
        setRows(rows.map(row =>
            row.id === id? {...row, [field]: value}: row
        ))

        const removeFirstItem = () => {
            setRows(id => id.slice(1))
        }
    
    return (
        <>
            <div className="grid grid-cols-10 gap-4 pt-10 min-h-screen">
            <h1 className="col-span-10 text-2xl font-bold">Dashboard</h1>
                <div className="card col-span-4 row-span-5">
                    <div className="grid grid-cols-6 row-gap-4 h-full">
                        <div className="col-span-3 flex flex-col justify-evenly">
                            <h1>Completion Rate:</h1>
                            <h1>pending</h1>
                            <p>5</p>
                            <h1>missing</h1>
                            <p>5</p>
                            <h1>Finished</h1>
                            <p>5</p>
                        </div>
                        <div className="col-span-3 flex flex-col justify-evenly">
                            <p>DCIT: Java(58%)</p>
                            <p>Hello</p>
                            <p>Hello</p>
                        </div>
                    </div>
                </div>
                <div className="card col-span-3 row-span-3">
                    <div className="grid grid-cols-6 gap-4 flex flex-col">
                        <div className="col-span-1 flex gap-4">
                            <table>
                                <tbody>
                                    {rows.map(row =>
                                        <tr key={row.id}>
                                            <td><input type="checkbox" /></td>
                                            <td>{row.name}</td>
                                            <td><button onClick={removeFirstItem}>X</button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table> 
                        </div>
                    </div>
                    <div className="w-full flex">
                            <input value={name} onChange={e => setName(e.target.value)} type="text" className="card" />
                                <button onClick={() =>{
                                    setRows([...rows, {id: Date.now(), name: name}]);
                                    setName("")
                                }}
                                className="card link bg-green-400">Add To to-do list</button>
                                <button onClick={removeFirstItem} className="card link">remove recent to-do</button>    
                        </div>
                </div>
                <div className="col-start-8 col-span-2 row-span- ml-6">
                    <Calendar />
                </div>
            </div>
        </>
)
}