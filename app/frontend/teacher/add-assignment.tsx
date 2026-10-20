import CreateFile from "../create-file"

export default function() {
    
    return(
        <div className=" flex min-h-screen items-center justify-center p-4">
            <div className="flex w-full max-w-sm flex-col items-center gap-4">
                <div className="card w-full flex flex-col">
                    <div className="w-full">
                        <p>Assignment Title:</p>
                        <input className="card w-full" type="text" />
                        <p>Description:</p>
                        <input className="card min-h-80 w-full" type="text" />
                    </div>
                    <div className="">
                        <p>Add File?</p>
                        <CreateFile />
                    </div>
                    <div className="flex pt-2 gap-2">
                        <button className="card link bg-green-400">Post</button>
                        <button className="card link">Cancel</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}