import React, {FC} from 'react'
import './file.scss'
import dir from '../../../../assets/img/dir.png'
import fileIcon from '../../../../assets/img/file.png'

type Props = {
    file: {
        [key: string]: any
    }
}

const File: FC<Props> = ({file}) => {
    return(
        <div className="file">
            <img className="file__img" src={file.type === 'dir' ? dir : fileIcon} alt=""/>
            <div className="file__name">{file.name}</div>
            <div className="file__date">{file.date.slice(0, 10)}</div>
            <div className="file__size">{file.size}</div>
        </div>
    );
}

export default File;
