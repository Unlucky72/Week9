import Text from "./Text"

const MyList = ({header, items}) => {
    return (
        <div>
            <h1>{header}</h1>
            <ol>
                {items.map((text) => (
                    <Text key={text.id} text={text.text}/>
                ))}
            </ol>
        </div>
    )
}
export default MyList