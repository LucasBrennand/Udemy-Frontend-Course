
function Form() {
    return(
        <form action="" className="flex flex-col items-center justify-center gap-3 w-3xl">
            <input type="text" placeholder="Username" className="w-[80%] text focus:outline-cyan-500 outline-1 bg-gray-700 outline-white p-2 text-white" />
            <input type="password" placeholder="Password" className="w-[80%] outline-1 bg-gray-700 focus:outline-cyan-500 outline-white p-2 text-white" />
            <input type="submit" value="Login" className="w-[80%] outline-1 hover:cursor-pointer hover:transition-opacity hover:opacity-10 bg-white outline-white p-2 text-gray-500" />
        </form>
    )
}

export default Form