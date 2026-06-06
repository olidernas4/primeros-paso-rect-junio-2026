import { useEffect, useState } from "react"; // importa hooks de React

function useFormulario(formData) { // define el custom hook que recibe los datos del formulario
    const [result, setResult] = useState(null); // almacena la respuesta del servidor
    const [error, setError] = useState(null); // almacena el mensaje de error si ocurre uno
    const [loading, setLoading] = useState(false); // indica si la petición está en curso

    useEffect(() => { // efecto que se ejecuta cuando cambia formData
        if (!formData) return; // si no hay datos, no hace nada

        const enviarFormulario = async () => { // función asíncrona que envía los datos
            setLoading(true); // marca como cargando
            setError(null); // resetea errores anteriores

            try {
                const respuesta = await fetch("http://127.0.0.1:8000/formularios", { // envía petición POST a la API
                    method: "POST", // método HTTP POST
                    mode: "cors", // permite CORS
                    credentials: "include", // incluye cookies si existen
                    headers: {
                        "Content-Type": "application/json", // indica que se envía JSON
                    },
                    body: JSON.stringify(formData), // convierte los datos del formulario a JSON
                });

                if (!respuesta.ok) { // si el servidor responde con un error
                    const texto = await respuesta.text(); // intenta leer como texto primero
                    console.error("Error del servidor:", texto); // muestra el error en consola
                    throw new Error(`Error ${respuesta.status}: ${texto}`); // lanza el error con el estado HTTP
                }

                const data = await respuesta.json(); // lee la respuesta JSON exitosa
                setResult(data); // guarda el resultado en el estado
            } catch (err) {
                console.error("Error al enviar:", err); // muestra el error completo en consola
                setError(err.message); // guarda el mensaje de error en el estado
            } finally {
                setLoading(false); // termina el estado de carga
            }
        };

        enviarFormulario(); // ejecuta la función de envío
    }, [formData]); // reejecuta el efecto cuando cambian los datos del formulario

    return { result, error, loading }; // devuelve el resultado, el error y el estado de carga
}

export default useFormulario; // exporta el hook por defecto
