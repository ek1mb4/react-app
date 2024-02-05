import {Fragment} from "react";

export function ExpenseItem({expense, removeExpense}) {
    return (
        <Fragment>
           <div className={'grid grid-cols-12 shadow p-2 rounded-lg mb-2 text-sm text-indigo-800 font-medium'}>
               <div className={'col-span-5 flex items-center'}>
                   {expense.description}
               </div>
               <div className={'col-span-4 flex items-center'}>
                   {expense.category}
               </div>
               <div className={'col-span-2 flex items-center font-bold'}>
                   {expense.amount}
               </div>
               <div className={'col-span-1 flex items-center'}>
                   <button onClick={()=>removeExpense(expense)} className={'p-1 rounded-full'}>❌</button>
               </div>
           </div>
        </Fragment>
    );
}