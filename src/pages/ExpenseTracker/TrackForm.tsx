import {FormEvent, Fragment} from "react";
import {BtnPrime} from "../../componentes/Buttons/BtnPrime/BtnPrime.tsx";

export function TrackForm() {
    const handleSubmit = (event: FormEvent)=> {
        event.preventDefault();
        console.log('Submitted: ', event.target);
    }
    return (
        <Fragment>
        <h3 className={'font-bold text-xl mb-3'}>This is the track form</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={'grid grid-cols-12 gap-2'}>
                        <div className={'col-span-12'}>
                            <label htmlFor="name">Name</label>
                            <input className={'border'} type="text" placeholder={'Name '} id="name" />
                        </div>
                        <div className={'col-span-12 mb-3'}>
                            <label htmlFor="age">Age</label>
                            <input className={'border'} type="text" placeholder={'Age '} id="age" />
                        </div>
                        <div className={'col-span-12'}>
                           <BtnPrime>Save</BtnPrime>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    );
}