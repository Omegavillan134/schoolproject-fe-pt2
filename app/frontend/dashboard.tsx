import Calendar from "../frontend/components/calendar";
import {Link} from "react-router"

export default function dashboard() {
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
                <div className="col-start-8 col-span-2 row-span- ml-6">
                    <Calendar />
                </div>
            </div>
        </>
)
}