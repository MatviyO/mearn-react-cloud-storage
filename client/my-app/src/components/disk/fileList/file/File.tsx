import React, {FC} from 'react'

type Props = {
    type: string
    placeholder: string
}

const File: FC<Props> = ({type, placeholder}) => {
    return(
        <input type={type} placeholder={placeholder}/>
    );
}

export default File;
