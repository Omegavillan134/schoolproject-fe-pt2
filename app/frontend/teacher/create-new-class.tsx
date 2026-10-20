export default function createNewClass() {
    return (
        <div>
            <div className="flex min-h-screen items-center justify-center p-4">
                <div className="flex w-full max-w-sm flex-col items-center gap-4">
                    <div className="flex card flex-col w-full">
                        <div className="w-full">
                            <p>Class Name</p>
                            <input className="card max-w" type="text" placeholder="Class Name" />
                            <select className="card min-w-auto min-h-10" name="class" id="class">
                                <option>BSCS 3A</option>
                                <option>BSCS 3B</option>
                                <option>BSCS 3C</option>
                            </select>
                        </div>
                        <div className="pt-3">
                            <p>Class Description</p>
                            <input type="text" className="w-full card min-h-70" />
                        </div>
                        <div className="pt-2">
                            <button className="card link bg-green-400">Create Class</button>
                            <button className="card link">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}