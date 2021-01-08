import React from 'react';
import {Link} from 'react-router-dom';

export default class LandingPage extends React.Component { 
    render() {
        return (
            <kor-card grid-cols="9" class="h-100">
                <kor-grid>
                    <kor-card flat grid-cols="12" class="h-100">
                        <Link to={"/inicio"}>
                            <kor-button label="Volver" color="tertiary" slot="header"></kor-button>
                        </Link>

                        <br />
                        <kor-text size="header-1">Seleccione una asignatura</kor-text>
                        <kor-table readonly columns="3fr 5fr 5fr 2fr 3fr" class="w-100">
                            <kor-table-row>
                                <kor-table-cell head>Sigla</kor-table-cell>
                                <kor-table-cell head>Nombre</kor-table-cell>
                                <kor-table-cell head>Contactar profesor(a)</kor-table-cell>
                                <kor-table-cell head>Vacantes</kor-table-cell>
                                <kor-table-cell head></kor-table-cell>
                            </kor-table-row>
                            <kor-table-row>
                                <kor-table-cell>INF322</kor-table-cell>
                                <kor-table-cell>Diseño de Interfaces Usuarias</kor-table-cell>
                                <kor-table-cell><a>Carlos Buil</a></kor-table-cell>
                                <kor-table-cell>2</kor-table-cell>
                                <kor-table-cell>
                                    <Link to="/postular/inf322">
                                        <kor-button label="Seleccionar"></kor-button>
                                    </Link>
                                    
                                </kor-table-cell>
                            </kor-table-row>
                            <kor-table-row>
                                <kor-table-cell>INF266</kor-table-cell>
                                <kor-table-cell>Sistemas de Gestión</kor-table-cell>
                                <kor-table-cell><a>Luis Hevia</a></kor-table-cell>
                                <kor-table-cell>3</kor-table-cell>
                                <kor-table-cell>
                                    <kor-button label="Seleccionar"></kor-button>
                                </kor-table-cell>
                            </kor-table-row>
                        </kor-table>
                    </kor-card>
                </kor-grid>

            </kor-card>
            
        )
    }
}