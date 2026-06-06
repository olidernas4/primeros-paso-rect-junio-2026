
import"./Formulario.css";

function Formulario() {
return(

    <div className="formulario">
        <h1>Formulario</h1>

        <form>

            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="correo" />
            <textarea placeholder="Mensaje"></textarea>

            <button>Enviar</button>



        </form>
    </div>

    );

    
}
export default Formulario;