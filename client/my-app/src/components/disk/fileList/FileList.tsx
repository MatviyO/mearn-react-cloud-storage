import React, {FC} from 'react'
import './filelist.scss'
import {useSelector} from "react-redux";
import {IStateReducer} from "../../../interfaces/IStateReducer";
import File from "./file/File";
import {CSSTransition, TransitionGroup} from "react-transition-group";

type Props = {
}
const FileList: FC<Props> = ({}) => {
    const files = useSelector((state: IStateReducer) => state.files.files)

    if (!files.length) {
        return (
            <div className="loader">File list empty</div>
        )
    }

    return(
        <div className="filelist">
            <div className="filelist__header">
                <div className="filelist__name">Name</div>
                <div className="filelist__date">Date</div>
                <div className="filelist__size">Space</div>
                <div className="filelist__action">Action</div>
            </div>
            <TransitionGroup>
                {files.map((file: any) =>
                    <CSSTransition
                        key={file._id}
                        timeout={500}
                        classNames={'file'}
                        exit={false}
                    >
                        <File file={file} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
}

export default FileList;
