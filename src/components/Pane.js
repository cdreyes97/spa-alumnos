import React from 'react';
import { Link } from 'react-router-dom';
import foto from './foto_perfil.png'

export default class Pane extends React.Component {

    render() {
        return (
            <kor-pane slot="left" class='pane'>
                <Link to="/perfil" className="link-pane"><kor-avatar label="Juan Perez" image={foto} info="jp@alumnos.inf.utfsm.cl"></kor-avatar></Link>
                
                <Link to="/inicio" className="link-pane">
                    <kor-button label="Inicio" color="Primary" class="pane-item"></kor-button>
                </Link>
                <Link to="/perfil" className="link-pane">
                    <kor-button label="Perfil" color="Primary" class="pane-item"></kor-button>
                </Link>
                <Link to="/mispostulaciones" className="link-pane">
                    <kor-button label="Mis Postulaciones" color="Primary" class="pane-item"></kor-button>
                </Link>
                
                <kor-button label="Cerrar Sesión" color="Secondary" class="close-item"></kor-button>
            </kor-pane>
        )
    }

}