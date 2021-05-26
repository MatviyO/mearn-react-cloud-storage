import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {IStateReducer} from "../../interfaces/IStateReducer";
import {getFiles} from "../../services/file";
import FileList from "./fileList/FileList";
import './disk.scss'
import {setCurrentDir, setPopupDisplay} from "../../redux/action/fileAction";
import Popup from "./Popup/Popup";

type Props = {
}

const Disk: FC<Props> = () => {
    const dispatch = useDispatch()
    const currentDir = useSelector((state: IStateReducer) => state.files.currentDir)
    const dirDisk = useSelector((state: IStateReducer) => state.files.dirStack)

    useEffect(() => {
        dispatch(getFiles(currentDir))
    }, [currentDir])

    function createander() {
        dispatch(setPopupDisplay('flex'))

    }
    function backClickHandler() {
        const backDirId = dirDisk.pop()
        dispatch(setCurrentDir(backDirId as string))
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="disk">
                        <div className="disk__btns">
                            {currentDir && <button type="button" className="btn btn-dark me-2"
                                     onClick={() => backClickHandler()}>Back</button>}
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
