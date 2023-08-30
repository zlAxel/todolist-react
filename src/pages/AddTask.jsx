import { useNavigate, Form, redirect } from "react-router-dom";
import { Toaster, toast } from 'sonner'
import { addTask } from "../api/tasks";

export async function action ({ request }){
    const formData = await request.formData();
    const data     = Object.fromEntries( formData );

    if( ! data.title ){
        toast.error('El título de la tarea es obligatorio.');
        return null;
    }
    toast.dismiss();

    await addTask( data );

    return redirect('/');
}

export const AddTask = () => {
    const navigate = useNavigate();
    return (
        <section>
            <header className="flex flex-row justify-between items-center">
                <div>
                    <h1 className="text-3xl font-medium">Crear tarea</h1>
                    {/* <p className="text-slate-500 mt-1">Hola, aquí tienes tus últimas tareas</p> */}
                </div>
                <button onClick={ () => navigate(-1) } className="-rotate-90 cursor-pointer hover:text-cyan-600 transition-colors">
                    <lord-icon
                        src="https://cdn.lordicon.com/xsdtfyne.json"
                        trigger="hover"
                        class="current-color"
                        state="hover-1">
                    </lord-icon>
                </button>
            </header>
            <Form method="POST" className='mt-10 mb-6 space-y-6'>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="text-lg font-semibold pl-2">Tarea</label>
                    <input name="title" type="text" placeholder="Ingrese el nombre de la tarea" className="border-2 rounded-md p-2 px-4 outline-0" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="text-lg font-semibold pl-2">Descripción</label>
                    <textarea name="description" placeholder="Ingrese la descripción de la tarea" rows="4" className="border-2 rounded-md p-2 px-4 outline-0" />
                </div>
                <div className="grid w-full grid-cols-4 gap-2 rounded-xl pb-6">
                    <div>
                        <input type="radio" name="priority" id="Alta" value="Alta" className="peer hidden" defaultChecked />
                        <label htmlFor="Alta" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-cyan-600 peer-checked:font-bold peer-checked:text-white">Alta</label>
                    </div>
                    <div>
                        <input type="radio" name="priority" id="Baja" value="Baja" className="peer hidden" />
                        <label htmlFor="Baja" className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-cyan-600 peer-checked:font-bold peer-checked:text-white">Baja</label>
                    </div>
                </div>
                <button type="submit" className="bg-cyan-600 font-bold text-white py-2 px-6 rounded-md hover:bg-cyan-700 transition-colors">Guardar</button>
            </Form>
            <Toaster expand={true} position="top-right" richColors closeButton />
        </section>
    )
}
