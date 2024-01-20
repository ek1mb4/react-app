import {BtnListItem} from "./BtnListItem.tsx";

export function ListItem({goal, updateGoal}) {
    const setAsDone = ()=> {
        const updatedGoal = {
            ...goal, done: !goal.done
        }
        updateGoal(updatedGoal);
    }
    return  (
        <div key={goal.id}
             className={goal.done ? 'list-item !bg-indigo-500 text-white': 'list-item'}>
            <div className={'col-span-1'}>
                 {goal.id}
            </div>
            <div className={'col-span-9'}>
                {goal.goal}
            </div>
            <div className={'col-span-1 text-center'}>
                {goal.year}
            </div>
            <div className={'col-span-1 text-center'}>
                <BtnListItem setAsDone={setAsDone}>{goal.done ? '✅':'❌'}</BtnListItem>
            </div>
        </div>
    );
}
