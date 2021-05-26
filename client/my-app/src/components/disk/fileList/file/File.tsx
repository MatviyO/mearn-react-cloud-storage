import React, {FC} from 'react'
import './file.scss'
import dir from '../../../../assets/img/dir.png'
import fileIcon from '../../../../assets/img/file.png'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../redux/action/fileAction";
import {IStateReducer} from "../../../../interfaces/IStateReducer";

type Props = {
    file: {
        [key: string]: any
    }
}

const File: FC<Props> = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector((state: IStateReducer) => state.files.currentDir)

    function openDirHandler() {
        dispatch(pushToStack(currentDir))
        dispatch(setCurrentDir(file._id))
    }
    return(
        <div className="file" onClick={file.type === 'dir' ? () => openDirHandler() : undefined}>
            <img className="file__img" src={file.type === 'dir' ? dir : fileIcon} alt=""/>
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0, 10)}</div>
            <div className="file__size">{file.size}</div>
        </div>
    );
}

export default File;
