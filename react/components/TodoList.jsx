import { useState } from "react"

function TodoList() {
    const [items, setItems] = useState(["Eating", "Shopping"])
    const [itemName, setItemName] = useState("")
    const handleChange = (event) => {
        const { name, value } = event.target
        setItemName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setItems(prevItems => [...prevItems, itemName])
        setItemName("")
    }
    return (
        <div className="bg-amber-200 h-dvh flex flex-col items-center">
            <form action="" className="bg-gray-100 w-48 h-72 mt-6 rounded-2xl shadow-md flex flex-col items-center">
                <h1 className="text-center text-2xl bg-amber-200 mt-5 p-2">Todo List</h1>
                <div className="flex flex-row mt-7 gap-3 w-full justify-center items-center">
                    <input className="border-b-2 border-dotted w-24" type="text" name="itemNameInput" value={itemName} onChange={handleChange} placeholder="Add an item" id="" />
                    <input className="border-2 border-cyan-200 cursor-pointer" onClick={handleSubmit} type="submit" value="Add" />
                </div>
                <div>
                    {items.map((items, index) => {
                        return (
                            <li key={index}>{items}</li>
                        )
                    })}
                </div>
            </form>
        </div>
    )
}

export default TodoList