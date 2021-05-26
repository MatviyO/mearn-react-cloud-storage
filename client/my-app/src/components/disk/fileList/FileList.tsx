import React, {FC} from 'react'
import './filelist.scss'
import {useSelector} from "react-redux";
import {IStateReducer} from "../../../interfaces/IStateReducer";
import File from "./file/File";

type Props = {
}
const FileList: FC<Props> = ({}) => {
    const files = useSelector((state: IStateReducer) => state.files.files).map((file, index) => <File key={index} file={file}/>)

    return(
        <div className="filelist">
            <div className="filelist__header">
                <div className="filelist__name">Name</div>
                <div className="filelist__date">Date</div>
                <div className="filelist__size">Space</div>
            </div>
            {files}
        </div>
    );
}

export default FileList;
