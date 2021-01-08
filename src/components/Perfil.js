import React from 'react';
import { Link } from 'react-router-dom'
import foto from './foto_perfil.png'

export default class Perfil extends React.Component {

    render() {
        return (
            <kor-grid>
                <kor-card grid-cols="12" class="h-100">
                    <Link to="/inicio">
                        <kor-button label="Volver" color="tertiary" slot="header"></kor-button>
                    </Link>
                    <br /> 
                    <kor-grid>
                        <kor-card flat grid-cols="12">
                            <kor-text size="header-1" class="perfil-title">Datos del usuario</kor-text>
                        </kor-card>

                        <kor-card flat grid-cols="2">
                            <kor-image class="w-100" src={foto}></kor-image>
                        </kor-card>

                        <kor-card flat grid-cols="5">
                            <kor-text size="header-1" class="perfil-color">Nombre Completo</kor-text>
                            <kor-text size="header-2" class="perfil-content" >Juan Antonio Perez Correa</kor-text>
                            <kor-text size="header-1" class="perfil-color">Rut</kor-text>
                            <kor-text size="header-2" class="perfil-content">11111111-1</kor-text>
                            <kor-text size="header-1" class="perfil-color">Cantidad de ayudantías previas</kor-text>
                            <kor-text size="header-2" class="perfil-content">3</kor-text>
                            <kor-text size="header-1" class="perfil-color">Prioridad académica</kor-text>
                            <kor-text size="header-2" class="perfil-content">Infinito</kor-text>
                        </kor-card>
                        <kor-card flat grid-cols="5">
                            <kor-text size="header-1" class="perfil-color">Carrera</kor-text>
                            <kor-text size="header-2" class="perfil-content">Ingeniería Civil Informática</kor-text>
                            <kor-text size="header-1" class="perfil-color">Rol USM</kor-text>
                            <kor-text size="header-2" class="perfil-content">22222222-2</kor-text>
                            <kor-text size="header-1" class="perfil-color">Nivel de ayudante</kor-text>
                            <kor-text size="header-2" class="perfil-content">A</kor-text>
                            <kor-text size="header-1" class="perfil-color">Campus de estudio</kor-text>
                            <kor-text size="header-2" class="perfil-content">Casa central</kor-text>
                        </kor-card>

                        <kor-card flat grid-cols="12" flex-direction="row">
                            <kor-card flat grid-cols="4">
                                <Link to={"/actualizar"}>
                                    <kor-button style={{ marginLeft: "auto", marginRight: "auto"}} label="Actualizar Resumen Académico" slot="header" class="perfil-button"></kor-button>
                                </Link>
                            </kor-card>
                            
                            <kor-card flat grid-cols="4">
                                <Link to={"/certificaciones"}>
                                    <kor-button style={{ marginLeft: "auto", marginRight: "auto"}} label="Ver certificaciones" slot="header" class="perfil-button"></kor-button>
                                </Link>
                            </kor-card>
                            <kor-card flat grid-cols="4">
                                <Link to={"/experiencias"}>
                                    <kor-button style={{ marginLeft: "auto", marginRight: "auto"}} label="Ver experiencias" slot="header" class="perfil-button"></kor-button>
                                </Link>
                            </kor-card>
                        </kor-card>
                    </kor-grid>                     
                </kor-card>
            </kor-grid>
        )
    }
}