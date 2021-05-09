import React, {FC} from 'react'
import './input.scss'

type Props = {
    type: string
    placeholder: string
}

const Input: FC<Props> = ({type, placeholder}) => {
    return(
            <input type={type} placeholder={placeholder}/>
    );
}

export default Input;
