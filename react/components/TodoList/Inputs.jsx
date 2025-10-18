function Inputs({ itemName, handleChange, handleSubmit }) {
  return (
    <div className="flex flex-row mt-7 gap-3 w-full justify-center items-center">
      <input
        className="border-b-2 border-dotted w-24"
        type="text"
        value={itemName}
        onChange={handleChange}
        placeholder="Add an item"
      />
      <input
        className="border-2 border-cyan-200 cursor-pointer"
        onClick={handleSubmit}
        type="submit"
        value="Add"
      />
    </div>
  )
}

export default Inputs
