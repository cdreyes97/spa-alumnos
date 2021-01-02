import React from 'react';
import { Link } from 'react-router-dom';

export default class PostularInterfaces extends React.Component {

    togglePop = event => {
        alert("Postulación Exitosa");
        event.preventDefault();
    };

    render() {
        return (
            <kor-grid>
                <kor-card grid-cols="12" class="h-100">
                    <Link to="/elegir">
                        <kor-button label="Volver" color="tertiary" slot="header"></kor-button>
                    </Link>
                    <br />
                    <kor-text size="header-1">INF322: Diseño de Interfaces Usuarias</kor-text>
                    <kor-table readonly columns="5fr 5fr 3fr 3fr" class="w-100">
                        <kor-table-row >
                            <kor-table-cell head>Tipo</kor-table-cell>
                            <kor-table-cell head>Horas Semanales</kor-table-cell>
                            <kor-table-cell head>Vacantes</kor-table-cell>
                            <kor-table-cell head></kor-table-cell>
                        </kor-table-row>
                        <kor-table-row>
                            <kor-table-cell>Cátedra</kor-table-cell>
                            <kor-table-cell>8</kor-table-cell>
                            <kor-table-cell>1</kor-table-cell>
                            <kor-table-cell>
                                <div className="btn" onClick={this.togglePop}>
                                    <Link to={"/inicio"}>
                                        <kor-button label="Postular" color="Primary"></kor-button>
                                    </Link>
                                </div>
                            </kor-table-cell>
                        </kor-table-row>
                        <kor-table-row>
                            <kor-table-cell>Corrección</kor-table-cell>
                            <kor-table-cell>8</kor-table-cell>
                            <kor-table-cell>2</kor-table-cell>
                            <kor-table-cell>
                                <div className="btn" onClick={this.togglePop}>
                                    <Link to={"/inicio"}>
                                        <kor-button label="Postular" color="Primary"></kor-button>
                                    </Link>
                                </div>
                            </kor-table-cell>
                        </kor-table-row>
                        <kor-table-row>
                            <kor-table-cell>Laboratorio</kor-table-cell>
                            <kor-table-cell>8</kor-table-cell>
                            <kor-table-cell>0</kor-table-cell>
                            <kor-table-cell>
                                <kor-button disabled label="Postular" color="Primary"></kor-button>
                            </kor-table-cell>
                        </kor-table-row>
                    </kor-table>
                </kor-card>
            </kor-grid>
        )
    }
}