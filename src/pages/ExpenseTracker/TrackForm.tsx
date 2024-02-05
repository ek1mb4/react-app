import {Fragment, useState} from "react";
import {categories} from "../../db";
import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {ExpenseEntity} from "../../core/entities/ExpenseEntity.tsx";
import {ExpenseItem} from "./ExpenseItem.tsx";

const schema = z.object({
    description: z.string().min(3),
    amount: z.number().min(1),
    category: z.string().min(1)
})

type FormData = z.infer<typeof schema>;
export function TrackForm() {
    const [expenses, setExpenses] = useState<ExpenseEntity[]>([])
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: FieldValues)=> {
        const newExpense: ExpenseEntity = {
            id: expenses.length + 1,
            description: data.description,
            amount: data.amount,
            category: data.category
        }
        setExpenses([...expenses, newExpense]);

    }

function removeExpense(item: ExpenseEntity){
    setExpenses([...expenses.filter(x=>x.id != item.id)])
}
    return (
        <Fragment>
            <div className={'max-w-[100%] mx-auto bg-white rounded-lg shadow'}>
                <form onSubmit={handleSubmit(onSubmit)} className={'px-6 py-4'}>
                    <div className="grid grid-col-12 gap-5">
                        <div className="col-span-12">
                            <h2 className={'font-bold text-xl text-indigo-800'}>Add and track your expenses</h2>
                        </div>
                        <div className="col-span-12">
                            <label htmlFor="descrption">Description</label>
                            <input {...register('description')} type="text" id={'description'} placeholder={'Describe your expense'}/>
                            {errors.description && <p className={'error'}>{errors.description.message}</p>}
                        </div>
                        <div className="col-span-12">
                            <label htmlFor="amount">Amount</label>
                            <input {...register('amount', {valueAsNumber: true})} type="number" id={'amount'} placeholder={'Describe the amount'}/>
                            {errors.amount && <p className={'error'}>{errors.amount.message}</p>}
                        </div>
                        <div className="col-span-12">
                            <label htmlFor="descrption">Category</label>
                           <select {...register('category')}>
                               <option value={null}>Select category</option>
                               {categories.map((category)=> <option key={category.id}>{category.category}</option>)}
                           </select>
                            {errors.category && <p className={'error'}>{errors.category.message}</p>}
                        </div>
                        <div className="col-span-12">
                            <button className={'bg-indigo-800 text-white text-sm'}>Submit</button>
                        </div>
                    </div>
                </form>
                <div className={'border-t-2'}>
                    <div className={'p-5'}>
                        <div><h2 className={'heading'}>My expenses</h2></div>
                        {
                            expenses.length < 1 ?
                            <p className={'text-sm font-medium'}>
                                You have no expenses. Add them in the form above.
                            </p> :
                                <div className={'grid grid-cols-12 shadow p-2 rounded-lg mb-2 text-sm text-white bg-indigo-800 font-medium'}>
                                    <div className={'col-span-5 flex items-center'}>
                                        Description
                                    </div>
                                    <div className={'col-span-4 flex items-center'}>
                                        Category
                                    </div>
                                    <div className={'col-span-2 flex items-center font-bold'}>
                                        Amount
                                    </div>
                                    <div className={'col-span-1 flex items-center'}>
                                        #
                                    </div>
                                </div>
                        }
                        <div>

                        </div>
                        <div>
                            {
                                expenses.map(((expense, index)=> {
                                   return <ExpenseItem key={index} expense={expense} removeExpense={removeExpense} />
                                }))
                            }
                        </div>
                        <div className={'grid grid-cols-12 shadow p-2 rounded-lg mb-2 text-sm text-white bg-indigo-800 font-medium'}>
                            <div className={'col-span-10 flex items-center'}>
                                <strong>Total</strong>
                            </div>

                            <div className={'col-span-2 flex items-center text-right'}>
                                {expenses.reduce((counter, expense)=> counter + expense.amount, 0).toFixed(2)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}