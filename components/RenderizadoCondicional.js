import React,{Component} from 'react';

//cuando un valor del estado o props cambia y se obliga a repintar la clases-boton de log in o log out-
// dependiendo del valor se renderizan unos u otros componentes.

function Login(){
    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}
// lo mejor seria hacerlo en otro archivo para que sean independientes los distintos componentes pero dado el aprendisaje de REnderizado lo realizo aqui.
function Logout(){
    return(
        <div>
            <h3>Logout</h3>
        </div>
    )
}



export default class RenderizadoCondicional extends Component {
    constructor(props){
        super(props);
        this.state={
            session:true,
        };
    }
    render(){
        return (
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session ? <Login/> : <Logout/>}           
            </div>
        )
    }
}