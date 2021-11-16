

const MyList = ({updateItem, header, items}) => {
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((item) => (
                    <li key ={item.id} onClick ={() => updateItem(item.id)}>
                        <p style={{textDecoration: item.clicked ? "line-through":""}}>{item.text}</p>
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default MyList