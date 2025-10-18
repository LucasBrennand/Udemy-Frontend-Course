
function InputBox(params) {
    return (
        <div className=" h-60 m-40 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col p-5">
            <input className="text-4xl" type="text" placeholder="Title..." />
            <textarea className="overflow-hidden text-4xl h-full resize-none" name="" id="" placeholder="Message..."></textarea>
            <input className="self-end-safe relative top-8 text-white text-2xl bg-amber-300 rounded-full w-16 cursor-pointer" type="submit" value="ADD" />
            
        </div>
    )
}

export default InputBox;