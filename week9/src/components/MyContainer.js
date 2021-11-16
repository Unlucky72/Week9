import "./MyList"
import MyList from "./MyList"
import {useState} from "react"

const MyContainer = () => {
    const [items, setItems] = useState([
        {id: "1", text: "This is an item"},
        {id: "2", text: "Also this"},
    ]);
    const[text, setText] = useState("");

    const onSubmit = (e)=>{

        e.preventDefault(); 
        let count = items.length +1;

        items.push({
            id: String(count), text: text
        })
        setText("");
        setItems(items);
        

    }

    return (
        <div>
            <MyList 
                header = "Really epic list component"
                items = {items}
            />
            <form onSubmit={onSubmit}>
                <textarea placeholder = "Add text" onChange= {(e) => setText(e.target.value)} value = {text} ></textarea>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}


export default MyContainer
