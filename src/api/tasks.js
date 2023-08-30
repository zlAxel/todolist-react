
// ! -----------------------------------------------
// ! Funcion para obtener las tareas de la API

export async function getTasks () {
    try {
        const url = import.meta.env.VITE_API_URL;

        const response = await fetch( url )
        const result   = await response.json()

        return result
    } catch (error) {
        console.log(error)
    }
}

// ! -----------------------------------------------
// ! Funcion para eliminar una tarea de la API

export async function deleteTask ( id ) {
    try {
        const url = `${ import.meta.env.VITE_API_URL }/${ id }`;

        const response = await fetch( url, {
            method: 'DELETE',
        })

        await response.json()
    } catch (error) {
        console.log( error );
    }
}

// ! -----------------------------------------------
// ! Funcion para agregar una tarea a la API

export async function addTask ( task ) {
    try {
        const url = import.meta.env.VITE_API_URL;

        // ? Asignamos los valores a la tarea
        task.completed = false;                                                     // * Asignamos el estado de la tarea
        task.date      = new Date().toISOString().slice(0, 19).replace('T', ' ');   // * Asignamos la fecha con formato (yyyy-mm-dd hh:mm:ss)
        task.user      = "axel";                                                    // * Asignamos el usuario

        const response = await fetch( url, {
            method: 'POST',
            body: JSON.stringify( task ),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json()
    } catch (error) {
        console.log( error );
    }
}

// ! -----------------------------------------------
// ! Funcion para actualizar el estado una tarea de la API ( PATCH )

export async function updateCheckTask ( task_id, state ){
    try {
        const url = `${ import.meta.env.VITE_API_URL }/${ task_id }`;

        // * Asignamos el estado de la tarea
        state = { completed: state };

        const response = await fetch( url, {
            method: 'PATCH',
            body: JSON.stringify( state ),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        await response.json()
    } catch (error) {
        console.log( error );
    }
}
