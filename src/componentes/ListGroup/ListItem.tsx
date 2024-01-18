export function ListItem({goal, index, changeIndex, selectedIndex}) {
    return  (
        <div key={goal.id}
             onClick={()=> changeIndex(index)}
             className={selectedIndex === index ? 'list-item !bg-indigo-500 text-white': 'list-item'}>
            <div className={'col-span-1'}>
                 {goal.id}
            </div>
            <div className={'col-span-10'}>
                {goal.goal}
            </div>
            <div className={'col-span-1 text-center'}>
                {goal.year}
            </div>
        </div>
    );
}
