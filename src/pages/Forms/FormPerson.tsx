import {Fragment} from "react";
import {BtnPrime} from "../../componentes/Buttons/BtnPrime/BtnPrime.tsx";
import {FieldValues, useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3),
    age: z.number({invalid_type_error: 'Age field is required'}).min(18, {message: 'You must be at least 18 to apply'}),
})

type FormData = z.infer<typeof schema>;


export function FormPerson() {


    const {register, handleSubmit,
        formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});

    const onSubmit = (data: FieldValues)=> console.log(data);


    return (
        <Fragment>
            <div className={'w-96 mx-auto'}>
                <div className={'shadow-lg rounded-lg bg-white overflow-hidden'}>
                    <div className={'bg-indigo-500 text-white'}>
                        <h3 className={'font-bold text-xl mb-3 p-3'}>Person form</h3>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className={'p-4'}>
                            <div className={'mb-5'}>
                                <p className={'text-indigo-800'}>Tell us your name and your age and we will tell you when you will die</p>
                            </div>
                            <div className={'grid grid-cols-12 gap-2'}>
                                <div className={'col-span-12'}>
                                    <label htmlFor="name">Name</label>
                                    <input {...register('name')}
                                           className={'border'} type="text" placeholder={'Name '} id="name" />
                                    {errors.name && <p className={'error'}>{errors.name.message}</p>}


                                </div>
                                <div className={'col-span-12 mb-3'}>
                                    <label htmlFor="age">Age</label>
                                     <input {...register('age', {valueAsNumber: true})}
                                         className={'border'} type="number" placeholder={'Age '} id="age" />
                                    {errors.age && <p className={'error'}>{errors.age.message}</p>}
                                </div>
                                <div className={'col-span-12 py-3'}>
                                    <BtnPrime disabled={!isValid}>Save</BtnPrime>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}