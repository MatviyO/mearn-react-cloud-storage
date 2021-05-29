import React, {FC, useState} from 'react'
import './animation.scss'
type Props = {
}

const Animations: FC<Props> = () => {
    const [loaderVisible, setLoaderVisible] = useState(false)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="disk">
                        <div className="disk__btns">
                            <div className="disk__upload ms-2">
                                <button type="button" className="btn btn-dark"
                                    onClick={() => setLoaderVisible(!loaderVisible)}
                                    >{loaderVisible ? "Hide" : 'Show'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="wrap">
                        { loaderVisible &&  <div className="circle"/>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Animations;
