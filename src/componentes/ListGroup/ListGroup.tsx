import {Fragment, useState} from "react";
import {ListHeader} from "./ListHeader.tsx";
import {goalsList} from "../../db/fake.db.ts";
import {ListItem} from "./ListItem.tsx";
import {produce} from "immer";
import {Free} from "../../core/entities/Free.tsx";

export const ListGroup = () => {

    const [goals, setGoals] = useState([...goalsList]);
    const message = goals.length === 0 && 'There no goals to show. Sorry!';

    function updateGoal(goal: Free) {

        setGoals(produce(goals, draft=> {
            const updatedGoal = draft.find(x => x.id === goal.id);
            if(updatedGoal){
                updatedGoal.done = goal.done;
            }
        }))
        console.log('Updated Goal: ', goal);
    }


    return (
        <Fragment>
            <ListHeader/>
            {
                goals.map((goal, index)=> {
                    return <ListItem goal={goal} key={index}  updateGoal={updateGoal} />
                })
            }
            {message}
        </Fragment>
    );
};
