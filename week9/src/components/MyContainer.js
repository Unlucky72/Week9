import "./MyList"
import MyList from "./MyList"
import {useState} from "react"

const MyContainer = () => {
    const [items, setItems] = useState([
        {id: "1", text: "This is an item", clicked: false},
        {id: "2", text: "Also this", clicked: false},
    ]);
    const[text, setText] = useState("");

    const onSubmit = (e)=>{

        e.preventDefault(); 
        let count = items.length +1;

        items.push({
            id: String(count), text: text, clicked: false
        })
        setText("");
        setItems(items);
        

    }

    const onPress = (e) =>{
        setItems(items.map((item=>{
            if (item.id === e && item.clicked === false){
                return {id: item.id, text: item.text, clicked: true};
            }
            if(item.id === e && item.clicked === true){
                return {id: item.id, text: item.text, clicked: false};
            }
            else{
                return item
            }
                
        })));
    }

    return (
        <div>
            <MyList 
                updateItem =  {onPress}
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
