import Header from "./Header"
import InputBox from "./InputBox";
import Tasks from "./Tasks";

function Keeper(params) {
    return (
        <div className="h-dvh bg-white flex flex-col">
            <Header />
            <InputBox/>
            <Tasks/>
        </div>
    )
}

export default Keeper;