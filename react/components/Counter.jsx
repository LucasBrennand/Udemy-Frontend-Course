import { use, useState } from "react"

function Counter(){
    const [count, setCount] = useState(0)

    const increase = () =>{
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }
    return(
        <div className="w-50 m-50 h-40 gap-4 bg-amber-600 flex flex-col justify-center items-center">
            <h1 className="text-6xl">{count}</h1>
            <button onClick={increase} className="bg-amber-300 w-20 hover:cursor-pointer" >Increase</button>
            <button onClick={decrease} className="bg-amber-300 w-20 hover:cursor-pointer" >Decrease</button>
        </div>
    )
}

export default Counter