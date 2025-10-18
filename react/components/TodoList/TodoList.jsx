import { useState } from "react"
import Items from "./Items"
import Inputs from "./Inputs"

function TodoList() {
  const [items, setItems] = useState(["Eating", "Shopping"])
  const [itemName, setItemName] = useState("")

  const handleChange = (event) => {
    setItemName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (itemName.trim() === "") return
    setItems(prevItems => [...prevItems, itemName])
    setItemName("")
  }

  return (
    <div className="bg-amber-200 h-dvh flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 w-48 h-72 mt-6 rounded-2xl shadow-md flex flex-col items-center"
      >
        <h1 className="text-center text-2xl bg-amber-200 mt-5 p-2">
          Todo List
        </h1>
        <Inputs
          itemName={itemName}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Items items={items} />
      </form>
    </div>
  )
}

export default TodoList
