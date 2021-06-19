import React, {FC} from 'react'
import './file.scss'
import dir from '../../../../assets/img/dir.png'
import fileIcon from '../../../../assets/img/file.png'
import {useDispatch, useSelector} from "react-redux";
import {pushToStack, setCurrentDir} from "../../../../redux/action/fileAction";
import {IStateReducer} from "../../../../interfaces/IStateReducer";
import {deleteFile, downloadFile} from "../../../../services/file";
import sizeFormat from "../../../../utils/sizeFormat";

interface IFile {
    [key: string]: any
}

type Props = {
    file: {
        [key: string]: any
    }
}

const File: FC<Props> = ({file}) => {
    const dispatch = useDispatch()
    const currentDir = useSelector((state: IStateReducer) => state.files.currentDir)

    function openDirHandler(file: IFile) {
        if (file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }
    }
    const downloadClickHandler = (e: any) => {
        downloadFile(file)
    }

    const deleteCLickHandler = (e: any) => {
        dispatch(deleteFile(file))
    }


    return(
        <div className="file" onClick={() => openDirHandler(file)}>
            <img className="file__img" src={file.type === 'dir' ? dir : fileIcon} alt=""/>
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0, 10)}</div>
            <div className="file__size">{sizeFormat(file.size)}</div>
            <div className="file__action">
                { file.type !== 'dir' && <button type="button"
                                                 onClick={(e) => downloadClickHandler(e)}
                                                 className="btn btn-dark me-2">Download</button>}
                <button type="button" onClick={(e) => deleteCLickHandler(e)} className="btn btn-dark">Delete</button>
            </div>
        </div>
    );
}

export default File;
