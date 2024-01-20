import {Fragment} from "react";
interface BtnProps {
    children: string;
}
export function BtnListItem({children}: BtnProps) {
    return(
      <Fragment>
          {children}
      </Fragment>
    );
}