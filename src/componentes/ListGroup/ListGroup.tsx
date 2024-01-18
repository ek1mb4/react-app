import {Fragment, useState} from "react";
import {ListHeader} from "./ListHeader.tsx";
import {goals} from "../../db/fake.db.ts";
import {ListItem} from "./ListItem.tsx";

export const ListGroup = () => {

    const [itemIndex, setItemIndex] = useState(-1);
    const message = goals.length === 0 && 'There no goals to show. Sorry!';
    function changeItemIndex(i: number) {

        setItemIndex(i);
    }
    return (
        <Fragment>

            <ListHeader/>
            {
                goals.map((goal, index)=> {
                    return <ListItem goal={goal} key={index} index={index} changeIndex={changeItemIndex} selectedIndex={itemIndex} />
                })
            }
            {message}
        </Fragment>
    );
};
