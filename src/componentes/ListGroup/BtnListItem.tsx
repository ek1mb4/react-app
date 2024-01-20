import {Fragment} from "react";

export function BtnListItem({children, setAsDone}){

    return(
        <Fragment>
            <button onClick={setAsDone}>{children}</button>
        </Fragment>
    )
}