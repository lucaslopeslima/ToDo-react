import React from "react"
import Card from "./card"

function DoneImg(props){
    if(props.done){
        return (<i className="fas fa-check-circle"></i>)
    } else{
        return(<i className="far fa-circle"></i>)
    }
}


function ListItem(props){
    return(<li>
            <Card className={props.item.done?"done item":"item"}>
                {props.item.text}
                <div>
                    <button onClick={()=>{props.onDone(props.item)}}><DoneImg done={props.item.done}></DoneImg></button>
                    <button onClick={()=> {props.onItemDeleted(props.item)}}><i className="fas fa-trash-alt"></i></button>
                </div>
            </Card>
        </li>)
}

export default ListItem