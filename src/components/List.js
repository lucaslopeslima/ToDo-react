import React from "react"
import Card from "./card"

function DoneImg(props){
    if(props.done){
        return (<i className="fas fa-check-circle"></i>)
    } else{
        return(<i className="far fa-circle"></i>)
    }
}


function List(props){


    return(<ul>
        {props.items.map(item=><li key={item.id}>
            <Card className={item.done?"done item":"item"}>
                {item.text}
                <div>
                    <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}></DoneImg></button>
                    <button onClick={()=> {props.onItemDeleted(item)}}><i className="fas fa-trash-alt"></i></button>
                </div>
            </Card>
        </li>)}
    </ul>)
}

export default List