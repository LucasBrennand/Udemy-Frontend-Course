import { useState } from "react"

function Tasks() {
    const [currentTasks, setCurrentTasks] = useState([])

    return (
        <div className="flex flex-row flex-wrap gap-20 w-full border-2 border-amber-400">
            <div className="w-64 border-2 h-44 p-5 border-b-blue-600">
                <h1>Title</h1>
                <h2>Message</h2>
            </div>
            <div className="w-64 border-2 h-44 p-5 border-b-blue-600">
                <h1>Title</h1>
                <h2>Message</h2>
            </div>
            <div className="w-64 border-2 h-44 p-5 border-b-blue-600">
                <h1>Title</h1>
                <h2>Message</h2>
            </div>
            <div className="w-64 border-2 h-44 p-5 border-b-blue-600">
                <h1>Title</h1>
                <h2>Message</h2>
            </div>
            <div className="w-64 border-2 h-44 p-5 border-b-blue-600">
                <h1>Title</h1>
                <h2>Message</h2>
            </div>
            <div className="w-64 border-2 h-44 p-5 border-b-blue-600">
                <h1>Title</h1>
                <h2>Message</h2>
            </div>

        </div>
    )
}

export default Tasks