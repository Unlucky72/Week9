import "./MyList"
import MyList from "./MyList"
import {useState} from "react"

const MyContainer = () => {
    const [items, setText] = useState([
        {id: "1", text: "This is an item"},
        {id: "2", text: "Also this"},
    ]);


    return (
        <div>

            <MyList 
                header = "Really epic list component"
                items = {items}
            />
        </div>
    )
}

export default MyContainer
