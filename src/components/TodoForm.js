import React, { useState } from "react";

function TodoForm(props){
    const[text, setText] = useState("")

    function handleChange(event){
        let t = event.target.value;
        setText(t)

    }
    function addItem(event){
        event.preventDefault()
        if(text){
            props.onAddItem(text)
            setText("")   
        }
        
    }

    return(<form>
        <input id="input" onChange={handleChange} type="text" autoFocus value={text} ></input>
        <button className="bt-add" onClick={addItem}>Adicionar Tarefa</button>
    </form>)
}
    export default TodoForm