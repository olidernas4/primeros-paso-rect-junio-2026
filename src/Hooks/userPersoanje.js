import { useEffect, useState } from "react";

function usePersonaje(id) {

    const [personaje, setPersonaje] = useState(null);

    useEffect(() => {

        const obtenerPersonaje = async () => {


            const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

            const data = await respuesta.json();

            setPersonaje(data);
        };

        obtenerPersonaje();

    }, [id]);

    return personaje;

}
export default usePersonaje;