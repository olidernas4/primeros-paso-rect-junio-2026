import usePersonaje from "../Hooks/userPersoanje";


function Personaje() {
    const personaje = usePersonaje(2);
        console.log(personaje);
    if (!personaje) {
        return <h2>Cargando...</h2>
    }
    return (

        <div>
            <img
                src={personaje.image}
                alt={personaje.name}
            />
            <h2>{personaje.name}</h2>
            <p>{personaje.status}</p>
            <p>{personaje.gender}</p>
            <p>{personaje.origin.name}</p>

        </div>

    );
}

export default Personaje;