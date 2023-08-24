import { Form, redirect, useNavigate } from "react-router-dom";

import { deleteTask } from "../api/tasks";
import '../assets/css/tasks.css'

export async function action({ params }) {
    if( confirm('¿Estás seguro de eliminar la tarea?') ){
        deleteTask( params.taskId );
    }

    return redirect('/');
}

export const Tasks = ({ tasks }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='px-4 py-6 pb-8'>
                { 
                tasks.length ? 
                    tasks.map((task, index) => (
                        <div key={ index } className='flex justify-between items-center space-y-2'>
                            <div id="checklist" className='w-full flex flex-grow'>
                                <input id="01" type="checkbox" name="r" value="1" />
                                <label onClick={ () => navigate(`/tasks/${ task.id }/edit`) }>{ task.title }</label>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <div className={`px-4 py-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center ${ task.priority == "Alta" ? 'text-rose-600' : 'text-emerald-500' } text-xs font-semibold`}>
                                    { task.priority }
                                </div>
                                <Form method="POST" action={`/tasks/${ task.id }/delete`}>
                                    <button type='submit' className='p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-rose-600 text-rose-600 hover:text-white transition-colors duration-200'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>   
                                    </button>
                                </Form>
                            </div>
                        </div>
                    ))
                : 
                    <p className='text-center text-indigo-500 font-semibold'>No hay tareas registradas aún</p>
                }
            </div>
        </>
    )
}
