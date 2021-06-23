import {useContext} from 'react'
import HeaderContext from '../context/HeaderContext'

export default function ToggleNavColor(){
    const {color, toggleColor} = useContext(HeaderContext);

    return(
        <button onClick={() => toggleColor(!color)}>
            Toggle Navigation color
        </button>
    )
}