
function Items(props) {
    let items = props.items
    return (
        <div>
            {items.map((items, index) => {
                return (
                    <li key={index}>{items}</li>
                )
            })}
        </div>
    )
}

export default Items