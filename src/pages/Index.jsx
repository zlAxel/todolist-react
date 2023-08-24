
// ! -----------------------------------------
// ! Importación de librerías

import { useLoaderData } from "react-router-dom";

// ! Importación de componentes
import { Header } from "../components/Header"
import { Tasks } from "../components/Tasks"

// ! API
import { getTasks } from "../api/tasks"

// ! -----------------------------------------
// ! Creamos el loader ( Tareas )

export function loader () {
    const tasks = getTasks();

    return tasks;
}

export const Index = () => {
    const tasks = useLoaderData();

    return (
        <>
            {/* // ! Sección Header */}
            <Header />

            <div id="tasks" className="my-5">
                {/* // ! Sección Tasks */}
                <Tasks tasks={ tasks } />
            </div>
            {/* // ! Sección Footer */}
            <p className="text-xs text-slate-500 text-center">Última actualización hace 12 minutos</p>
        </>
    )
}
