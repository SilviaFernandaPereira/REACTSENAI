

// export default function CampoTexto(props){
//     console.log (props);
//     let texto = "Digite seu ";
//     let texto1 = texto + props.etiqueta + "...";
//     return (
//         <div>
//             <label>{props.etiqueta}</label>
//             <input type={props.tipo} placeholder= {texto1}/>
//         </div>
//     )
// }
import './style.css';

export default function CampoTexto(props) {

    function aoDigitar (event) {
        console.log(event.target.value);
    }

    return(
        <div className='container'>
            <label>{props.label}</label>
            <input
                type={props.type} 
                placeholder={props.placeholder}
                required={props.required} 
                onChange={aoDigitar}
            />
        </div>
    );
}