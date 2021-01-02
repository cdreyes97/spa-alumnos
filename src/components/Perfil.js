import React from 'react';
import { Link } from 'react-router-dom'

export default class Perfil extends React.Component {

    

    render() {
        return (
            <kor-grid>
                <kor-card grid-cols="12" grid-rows="12" class="h-100">
                    <Link to="/inicio">
                        <kor-button label="Volver" color="tertiary" slot="header"></kor-button>
                    </Link>
                    <br />
                    <kor-grid>
                        <kor-card flat grid-cols="12" style={{backgroundColor: "rgba(43, 85, 167)"}}>
                            <kor-text size="header-1" style={{fontSize: "40px", textAlign: "center"}}>Datos del ayudante</kor-text>
                        </kor-card>

                        <kor-card flat grid-cols="2" grid-rows="1">
                        <kor-image style={{width: "100%", height: "auto"}} src = "https://github.com/baca2094/Tarea1-PSW/blob/master/foto_perfil.png?raw=true"></kor-image>
                        </kor-card>

                        <kor-card flat grid-cols="5" grid-rows="8">
                        <kor-text size="header-1" style={{backgroundColor: "rgba(53, 92, 170)"}}>Nombre Completo</kor-text>
                        <kor-text size="header-1" >Juan Antonio Perez Correa</kor-text>
                        <kor-text size="header-1" style={{backgroundColor: "rgba(53, 92, 170)"}}>Rut</kor-text>
                        <kor-text size="header-1">11111111-1</kor-text>
                        <kor-text size="header-1" style={{backgroundColor: "rgba(53, 92, 170)"}}>Veces que ha sido ayudante</kor-text>
                        <kor-text size="header-1">3</kor-text>
                        <kor-text size="header-1" style={{backgroundColor: "rgba(53, 92, 170)"}}>Prioridad académica</kor-text>
                        <kor-text size="header-1">Infinito</kor-text>
                        </kor-card>
                        <kor-card flat grid-cols="5" grid-rows="8">
                        <kor-text size="header-1" style={{backgroundColor: "rgba(53, 92, 170)"}}>Carrera</kor-text>
                        <kor-text size="header-1">Ingeniería Civil Informática</kor-text>
                        <kor-text size="header-1" style={{backgroundColor: "rgba(53, 92, 170)"}}>Rol USM</kor-text>
                        <kor-text size="header-1">22222222-2</kor-text>
                        <kor-text size="header-1" style={{backgroundColor: "rgba(53, 92, 170)"}}>Nivel de ayudante</kor-text>
                        <kor-text size="header-1">A</kor-text>
                        <kor-text size="header-1" style={{backgroundColor: "rgba(53, 92, 170)"}}>Campus de estudio</kor-text>
                        <kor-text size="header-1">Casa central</kor-text>
                        
                        </kor-card>
                    <kor-card flat grid-cols="3" grid-rows="10">
                        <Link to={"/actualizar"}>
                            <kor-button style={{marginLeft: "auto", marginRight: "auto", padding: "5px 32px"}} label="Actualizar Resumen Académico" color="tertiary" slot="header"></kor-button>
                        </Link>
                        </kor-card>
                        <kor-card flat grid-cols="3" grid-rows="10">
                        <Link to={"/certificaciones"}>
                            <kor-button style={{marginLeft: "auto", marginRight: "auto", padding: "5px 47px"}} label="Ver certificaciones" color="tertiary" slot="header"></kor-button>
                        </Link>
                        </kor-card>
                        <kor-card flat grid-cols="3" grid-rows="1">
                        <Link to={"/experiencias"}>
                            <kor-button style={{marginLeft: "auto", marginRight: "auto", padding: "5px 54px"}} label="Ver experiencias" color="tertiary" slot="header"></kor-button>
                        </Link>
                    </kor-card>
                    </kor-grid>                     
                </kor-card>
            </kor-grid>
        )
    }
}