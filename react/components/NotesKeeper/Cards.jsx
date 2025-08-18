import notes from './notes.js'

function Cards() {
    const cards = notes.map(card => {
        return (
            <div className=' bg-amber-100 text-justify p-5'   key={card.key}>
                <h1 className='text-center text-cyan-500 text-2xl'>{card.title}</h1>
                <p>{card.content}</p>
            </div>
        )
    })
    return(
        <div className='grid grid-cols-3 gap-5 m-3 h-full'>
            {cards}
        </div>
    )
}

export default Cards