import {Fragment} from "react";

export function SnackBar({alertActive, showAlert}) {
    return (
        <Fragment>
            <div className={!alertActive && 'opacity-0 transition-opacity duration-700'}>
                <div className={'alert'}>
                    <div className={'relative'}>
                        <button className={'alert-close'} onClick={()=> showAlert(false)}>❌</button>
                        <div className={'p-3'}>
                            <h2 className={'alert-title'}>I am an alert yuuuuh</h2>
                            <div>
                                <p>I am a busy alert ohh like me please. I live you alone after a white</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
