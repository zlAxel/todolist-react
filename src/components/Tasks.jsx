import { Form, redirect, useNavigate } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import { useEffect } from "react";

import { deleteTask, updateCheckTask } from "../api/tasks";
import '../assets/css/tasks.css'

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

export async function action({ params }) {
    if( confirm('¿Estás seguro de eliminar la tarea?') ){
        await deleteTask( params.taskId );

        toast.success('Tarea eliminada correctamente.');
    }

    return redirect('/');
}

export const Tasks = ({ tasks }) => {
    const navigate = useNavigate();

    async function checkTask ( e ) {
        const checkbox = e.target;

        await updateCheckTask( checkbox.id, checkbox.checked );
    }

    useEffect(() => {
      // * Obtenemos todos los inputs con el atributo "data-checked"
      const inputs = document.querySelectorAll('input[type="checkbox"]');

      // * Recorremos los inputs
      inputs.forEach( input => {
          // * Asignamos el valor del atributo "data-checked" a la propiedad "checked" del input
          input.checked = eval( input.dataset.checked );
      })
    }, [])
    

    return (
        <>
            <div className='px-4 py-6 pb-8'>
                { 
                tasks.length ? 
                    tasks.map((task, index) => (
                        <div key={ index } className='flex justify-between items-center space-y-2'>
                            <div id="checklist" className='w-full flex flex-grow'>
                                <input id={ task.id } type="checkbox" name="completed" value="1" onChange={ e => checkTask( e ) } data-checked={ task.completed } />
                                <label onClick={ () => navigate(`/tasks/${ task.id }/edit`) }>{ task.title }</label>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <div className={`px-4 py-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center ${ task.priority == "Alta" ? 'text-rose-600' : 'text-cyan-500' } text-xs font-semibold`}>
                                    { task.priority }
                                </div>
                                <Form method="POST" action={`/tasks/${ task.id }/delete`}>
                                    <button id="button_destroy" type='submit' className='p-2 border border-slate-200 rounded-md inline-flex space-x-1 items-center hover:bg-rose-600 text-rose-600 hover:text-white transition-colors duration-200'>
                                        <lord-icon src="https://cdn.lordicon.com/kfzfxczd.json" trigger="hover" target="#button_destroy" state="hover-empty" class="w-4 h-4 current-color"></lord-icon>
                                    </button>
                                </Form>
                            </div>
                        </div>
                    ))
                : 
                    <p className='text-center text-cyan-500 font-semibold'>No hay tareas registradas aún</p>
                }
            </div>
            <Toaster expand={true} position="top-right" richColors closeButton />
        </>
    )
}
