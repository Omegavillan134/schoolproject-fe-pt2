export default function() {
    return(
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="flex w-full max-w-sm flex-col items-center gap-4">
                <div className="card w-full flex flex-col items-center">
                    <p>Enter code to enter class: </p>
                    <div className="flex flex-col items-center">
                        <div>
                            <input className="card" type="text"/>
                        </div>
                        <div className="pt-2 flex gap-3">
                            <button className="card link">Cancel</button>
                            <button className="card link bg-green-400">Enter Class</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}