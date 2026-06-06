import { useState } from "react"; // importa el hook useState de React
import "./Formulario.css"; // importa los estilos del formulario
import useFormulario from "../Hooks/useFormulario"; // importa el hook personalizado para enviar el formulario

function Formulario() { // define el componente Formulario
    const [form, setForm] = useState({ // estado local para los campos del formulario
        nombre: "", // nombre del usuario
        apellido: "", // apellido del usuario
        email: "", // correo electrónico
        edad: "", // edad ingresada
        peso: "", // peso ingresado
        genero: "", // género, debe ser un caracter
    });
    const [submitData, setSubmitData] = useState(null); // estado que activa el envío del formulario
    const { result, error, loading } = useFormulario(submitData); // usa el hook para enviar datos cuando submitData cambia

    const handleChange = (event) => { // función para actualizar los valores del formulario
        const { name, value } = event.target; // obtiene el nombre y valor del campo
        setForm((prevForm) => ({ ...prevForm, [name]: value })); // actualiza solo el campo cambiado
    };

    const handleSubmit = (event) => { // función que maneja el envío del formulario
        event.preventDefault(); // evita que el formulario recargue la página
        setSubmitData({ // guarda los datos para que el hook los envíe
            ...form, // copia todos los valores actuales del formulario
            edad: form.edad ? Number(form.edad) : null, // convierte edad a número o null
            peso: form.peso ? Number(form.peso) : null, // convierte peso a número o null
        });
    };

    return (
        <div className="formulario"> {/* contenedor principal del formulario */}
            <h1>Formulario</h1> {/* título del formulario */}

            <form onSubmit={handleSubmit}> {/* formulario HTML con evento onSubmit */}
                <input
                    name="nombre" // nombre del campo para el estado
                    value={form.nombre} // valor controlado desde el estado
                    onChange={handleChange} // actualiza el estado cuando cambia
                    type="text" // tipo de campo
                    placeholder="Nombre" // texto de ayuda
                    required // hace el campo obligatorio
                />
                <input
                    name="apellido"
                    value={form.apellido}
                    onChange={handleChange}
                    type="text"
                    placeholder="Apellido"
                    required
                />
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Correo"
                    required
                />
                <input
                    name="edad"
                    value={form.edad}
                    onChange={handleChange}
                    type="number"
                    placeholder="Edad"
                    min="0" // evita valores negativos
                />
                <input
                    name="peso"
                    value={form.peso}
                    onChange={handleChange}
                    type="number"
                    placeholder="Peso"
                    min="0" // evita valores negativos
                    step="any" // permite decimales
                />
                <input
                    name="genero"
                    value={form.genero}
                    onChange={handleChange}
                    type="text"
                    placeholder="Genero (M/F)"
                    maxLength={1} // limita a un carácter
                />

                <button type="submit" disabled={loading}> {/* botón de envío */}
                    {loading ? "Enviando..." : "Enviar"} {/* cambia el texto mientras carga */}
                </button>
            </form>

            {error && <p className="error">{error}</p>} {/* muestra mensaje de error si existe */}
            {result && <p className="success">Formulario enviado. ID {result.id}</p>} {/* muestra éxito si se recibió resultado */}
        </div>
    );
}

export default Formulario; // exporta el componente por defecto
