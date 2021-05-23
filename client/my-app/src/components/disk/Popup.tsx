import React, {FC, useState} from 'react'
import {useSelector} from "react-redux";
import {IStateReducer} from "../../interfaces/IStateReducer";

type Props = {
    type: string
    placeholder: string
}

const Popup: FC<Props> = () => {
    const [dirName, setDirName] = useState('');
    const popupDisplay = useSelector((state: IStateReducer) => state.files.popupDisplay)

    return(
        <div className="popup">
            <input type="text" value={dirName} onChange={(event) => setDirName(event.target.value)}/>
            <button type="button" className="btn btn-dark me-2">Save</button>
        </div>
    );
}

export default Popup;
