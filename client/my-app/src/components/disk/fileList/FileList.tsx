import React, {FC} from 'react'
import './filelist.scss'
import {useSelector} from "react-redux";
import {IStateReducer} from "../../../interfaces/IStateReducer";
import File from "./file/File";

type Props = {

}

const FileList: FC<Props> = ({}) => {
    const files = useSelector((state: IStateReducer) => state.files.files).map((file, index) => <File key={index} file={file}/>)
    // const files = [
    //     {_id: 1 , name: 'name', type: 'dir', size: '5gb', date: '20.20.2020'},
    //     {_id: 2 , name: 'name2', type: 'file', size: '51gb', date: '44.22.2020'},
    //     {_id: 3 , name: 'name3', type: 'dir', size: '52gb', date: '11.33.2020'}
    // ]
    //     .map(file => <File key={file._id} file={file} />)

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
