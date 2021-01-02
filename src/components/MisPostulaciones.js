import React from 'react';
import { Link } from 'react-router-dom'

export default class MisPostulaciones extends React.Component {

    togglePop = event => {
        alert("Postulación Anulada");
        event.preventDefault();
    };

    render() {
        return (
            <kor-grid>
                <kor-card grid-cols="12" class="h-100">
                    <Link to="/inicio">
                        <kor-button label="Volver" color="Tertiary" slot="header"></kor-button>
                    </Link>

                    <br />
                    <kor-table readonly columns="2fr 5fr 4fr 2fr 3fr 4fr" class="w-100">
                        <kor-table-row >
                            <kor-table-cell head>Sigla</kor-table-cell>
                            <kor-table-cell head>Asignatura</kor-table-cell>
                            <kor-table-cell head>Profesor(a)</kor-table-cell>
                            <kor-table-cell head>Tipo</kor-table-cell>
                            <kor-table-cell head>Estado</kor-table-cell>
                            <kor-table-cell head></kor-table-cell>
                        </kor-table-row>
                        <kor-table-row>
                            <kor-table-cell>INF322</kor-table-cell>
                            <kor-table-cell>Diseño de Interfaces Usuarias</kor-table-cell>
                            <kor-table-cell><a>Carlos Buil</a></kor-table-cell>
                            <kor-table-cell>2</kor-table-cell>
                            <kor-table-cell>Pendiente</kor-table-cell>
                            <kor-table-cell>
                                <div className="btn" onClick={this.togglePop}>
                                    <Link to={"/inicio"}>
                                        <kor-button label="Anular postulación" color="Secondary"></kor-button>
                                    </Link>
                                </div>
                            </kor-table-cell>
                        </kor-table-row>
                    </kor-table>
                </kor-card>
            </kor-grid>

        )
    }
}