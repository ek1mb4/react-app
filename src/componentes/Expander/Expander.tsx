import {Fragment, useState} from "react";

interface Props {
    children: string;
    maxChar?: number;
}
export function Expander({children, maxChar}: Props) {
    const [maxValue, setValue]= useState(maxChar);
    const onExpand = ()=> {
        if(maxValue && maxValue > 0){
            setValue(-1);
        } else {
            setValue(maxChar);
        }
    }
    return (
        <Fragment>
         <div className={'border p-5 rounded-lg relative duration-700 transition-all'}>
             <button className={'alert-close'} onClick={onExpand}>
                 {maxValue && maxValue > 1 ? '➕': '➖'}
             </button>
             <div> {maxValue && maxValue > 0 ? children.slice(0, maxValue) : children}</div>
         </div>
        </Fragment>
    );
}