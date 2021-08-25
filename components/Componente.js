import React,{Component} from 'react';

//<button onClick={alert("Hola")}></button> ESTO NO ES DE ACA SALE UN CARTEL

//CREACION DE UN COMPONENTE CON CLASE
class Componente extends Component {
render(){
   return <h2> {this.props.msg} </h2>;
}
}

export default Componente;

//CREACION DE UN COMPONENTE CON FUNCION declarada

/*function Componente (props){
    return <h2> {props.msg} </h2>;
}

export default Componente;
*/

//CREACION DE UN COMPONENTE CON FUNCION expresada

//const Componente = (props) => <h2> {props.msg} </h2>;
//export default Componente;

 
