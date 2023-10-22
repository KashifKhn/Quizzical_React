import React, { useState } from 'react'

const OptButton = (props) => {
    const [selected, setSelected] = useState(false)
    function handleSelect(id) {
        if(props.id === id)
            setSelected(!selected)
        console.log(id)
    }
    function decodeString(str) {
        const textArea = document.createElement('textarea')
        textArea.innerHTML = str
        return textArea.value
    }
    return (
        <button
            onClick={() => handleSelect(props.id)}
            key={props.id}
            className={`text-[10px] font-[500] border-dark-clr border-[1px] px-3 py-1 rounded-lg ${selected ? "bg-select-clr" : "bg-transparent"}`}>
            {decodeString(props.option)}
        </button>
    )
}

export default OptButton
