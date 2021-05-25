import React, {FC, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {IStateReducer} from "../../../interfaces/IStateReducer";
import {createDir} from "../../../services/file";
import './popup.scss'
import {setPopupDisplay} from "../../../redux/action/fileAction";

type Props = {
}

const Popup: FC<Props> = () => {
    const [dirName, setDirName] = useState('');
    const popupDisplay = useSelector((state: IStateReducer) => state.files.popupDisplay)
    const currentDir = useSelector((state: IStateReducer) => state.files.currentDir)
    const dispatch = useDispatch()

    function createHandler() {
        dispatch(createDir(currentDir, dirName))
        setDirName('')
            dispatch(setPopupDisplay('none'))
    }

    return(
        <div className="popup" style={{ display: popupDisplay}}>
            <div className="popup__content" onClick={(e) => e.stopPropagation()}>
                <div className="popup__header">
                    <div className="popup__title fw-bold">Create new folder</div>
                    <button className="popup__close btn btn-dark " onClick={() =>  dispatch(setPopupDisplay('none'))}>X</button>
                </div>
                <input type="text" className="form-control" placeholder="Enter name..." value={dirName} onChange={(event) => setDirName(event.target.value)}/>
                <button type="button" className="btn btn-dark " onClick={() => createHandler() }>Save</button>
            </div>
        </div>
    );
}

export default Popup;
