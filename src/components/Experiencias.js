import React from 'react';
import {Link} from 'react-router-dom';

export default class Experiencias extends React.Component { 
    render() {
        return (
            <kor-card grid-cols="9" class="h-100">
                <kor-grid>
                    <kor-card flat grid-cols="12" class="h-100">
                        <Link to={"/perfil"}>
                            <kor-button label="Volver" color="tertiary" slot="header"></kor-button>
                        </Link>

                        <br />
                        <kor-text size="header-1">Seleccione una asignatura</kor-text>
                        <kor-table readonly columns="3fr 5fr 5fr 2fr 3fr" class="w-100">
                            <kor-table-row>
                                <kor-table-cell head>Sigla</kor-table-cell>
                                <kor-table-cell head>Nombre</kor-table-cell>
                                <kor-table-cell head>Tipo</kor-table-cell>
                                <kor-table-cell head>Periodo</kor-table-cell>
                            </kor-table-row>
                            <kor-table-row>
                                <kor-table-cell>INF155</kor-table-cell>
                                <kor-table-cell>Informática Teórica</kor-table-cell>
                                <kor-table-cell><a>Corrección</a></kor-table-cell>
                                <kor-table-cell>2018-2</kor-table-cell>
                            </kor-table-row>
                            <kor-table-row>
                                <kor-table-cell>INF246</kor-table-cell>
                                <kor-table-cell>Sistemas Operativos</kor-table-cell>
                                <kor-table-cell><a>Cátedra</a></kor-table-cell>
                                <kor-table-cell>2019-2</kor-table-cell>
                            </kor-table-row>
                            <kor-table-row>
                                <kor-table-cell>INF239</kor-table-cell>
                                <kor-table-cell>Bases de Datos</kor-table-cell>
                                <kor-table-cell><a>Laboratorio</a></kor-table-cell>
                                <kor-table-cell>2019-1</kor-table-cell>
                            </kor-table-row>
                        </kor-table>
                    </kor-card>
                </kor-grid>

            </kor-card>
            
        )
    }
}