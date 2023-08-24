
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
