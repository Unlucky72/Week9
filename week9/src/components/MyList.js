

const MyList = ({updateItem, header, items}) => {
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => (
                    <li key ={items.id} onClick ={() => updateItem(item.id)}>
                        <p>{item.text}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default MyList