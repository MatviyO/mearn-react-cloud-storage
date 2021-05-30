import React, {FC, useEffect, useState} from 'react'
import './animation.scss'
import {CSSTransition, SwitchTransition, Transition} from "react-transition-group";

type Props = {}

const Animations: FC<Props> = () => {
    const [loaderVisible, setLoaderVisible] = useState(false)
    const [mode, setMode] = useState("out-in")
    const [toggle, setTogle] = useState(false)

    useEffect(() => {
        setTimeout(() => setLoaderVisible(!loaderVisible), 1000)
        setTimeout(() => setLoaderVisible(!loaderVisible), 3000)
    }, []);

    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setMode(e.target.value)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="disk">
                        <div className="disk__btns">
                            <div className="disk__upload ms-2">

                                <SwitchTransition mode={mode as "out-in" | "in-out"}>
                                    <CSSTransition
                                        key={toggle as any}
                                        classNames={"fade"}
                                        timeout={500}>
                                        <button className="btn btn-dark" onClick={() => {
                                            setTogle(!toggle)
                                            setLoaderVisible(!loaderVisible)
                                        }}>
                                            {loaderVisible ? "Hide" : 'Show'}

                                        </button>
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="wrap">
                        <Transition
                            in={loaderVisible}
                            timeout={500}
                            mountOnEnter
                            unmountOnExit
                        >
                            {state => <div className={`circle ${state}`}/>}

                        </Transition>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Animations;
