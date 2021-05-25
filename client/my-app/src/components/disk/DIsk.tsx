import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {IStateReducer} from "../../interfaces/IStateReducer";
import {createDir, getFiles} from "../../services/file";
import FileList from "./fileList/FileList";
import './disk.scss'
import {setPopupDisplay} from "../../redux/action/fileAction";
import Popup from "./Popup/Popup";

type Props = {
    type: string
    placeholder: string
}

const Disk: FC<Props> = ({type, placeholder}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector((state: IStateReducer) => state.files.currentDir)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    function createander() {
        dispatch(setPopupDisplay('flex'))

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="disk">
                        <div className="disk__btns">
                            <button type="button" className="btn btn-dark me-2">Back</button>
                            <button type="button" className="btn btn-dark" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={() => createander()}>Create
                            </button>
                        </div>
                        <FileList/>
                        <Popup/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Disk;
