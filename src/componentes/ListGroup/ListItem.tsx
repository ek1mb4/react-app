import {BtnListItem} from "./BtnListItem.tsx";

export function ListItem({goal, index, changeIndex, selectedIndex}) {
    return  (
        <div key={goal.id}
             onClick={()=> changeIndex(index)}
             className={selectedIndex === index ? 'list-item !bg-indigo-500 text-white': 'list-item'}>
            <div className={'col-span-1'}>
                 {goal.id}
            </div>
            <div className={'col-span-8'}>
                {goal.goal}
            </div>
            <div className={'col-span-1 text-center'}>
                {goal.year}
            </div>
            <div className={'col-span-2 text-center'}>
                <BtnListItem>❌ ✅</BtnListItem>
                {goal.done ? '✅':''}
            </div>
        </div>
    );
}
