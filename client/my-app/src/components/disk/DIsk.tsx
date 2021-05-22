import React, {FC, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {IStateReducer} from "../../interfaces/IStateReducer";
import {getFiles} from "../../services/file";
import FileList from "./fileList/FileList";
import './disk.scss'
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

    return(
        <div className="disk">
            <div className="disk__btns">
                <button type="button" className="btn btn-dark me-2">Back</button>
                <button type="button" className="btn btn-dark">Create</button>
            </div>
            <FileList />
        </div>
    );
}

export default Disk;
