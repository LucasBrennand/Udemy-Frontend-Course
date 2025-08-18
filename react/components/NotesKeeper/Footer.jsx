
function Footer() {
    const date = new Date()
    return(
        <footer className="flex flex-row justify-center w-full absolute bottom-0">
            <h1>Lucas Brennand @ {date.getFullYear()}</h1>
        </footer>
    )
}

export default Footer