import React from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom'

export default class LandingPage extends React.Component {

    render() {
        return (
            <kor-grid>
                <kor-card grid-cols="9" class="h-100">
                    <kor-tabs slot="header">
                        <Link><kor-tab-item label="Informática" active></kor-tab-item></Link>
                        
                        <kor-tab-item label="Metalúrgica"></kor-tab-item>
                        <kor-tab-item label="Mecánica"></kor-tab-item>
                    </kor-tabs>


                    <kor-text size="header-1" class="mt-2">Fechas importantes: Departamento de Informática</kor-text>

                    <kor-table readonly columns="3fr 1fr 1fr" class="w-100">
                        <kor-table-row slot="header" >
                            <kor-table-cell head>Evento</kor-table-cell
                            >
                            <kor-table-cell head>Inicio</kor-table-cell>
                            <kor-table-cell head>Término</kor-table-cell>
                        </kor-table-row>
                        <kor-table-row>
                            <kor-table-cell>Inicio de Postulaciones</kor-table-cell>
                            <kor-table-cell>04 / 01 / 2021</kor-table-cell>
                            <kor-table-cell>05 / 01 / 2021</kor-table-cell>
                        </kor-table-row>
                        <kor-table-row>
                            <kor-table-cell>Cierre de Postulaciones</kor-table-cell>
                            <kor-table-cell>05 / 01 / 2021</kor-table-cell>
                            <kor-table-cell>---</kor-table-cell>
                        </kor-table-row>
                        <kor-table-row>
                            <kor-table-cell>Selección por profesores</kor-table-cell>
                            <kor-table-cell>06 / 01 / 2021</kor-table-cell>
                            <kor-table-cell>07 / 01 / 2021</kor-table-cell>
                        </kor-table-row>
                        <kor-table-row>
                            <kor-table-cell>2° llamado y recepción de documentos sobrehoras</kor-table-cell>
                            <kor-table-cell>08 / 01 / 2021</kor-table-cell>
                            <kor-table-cell>09 / 01 / 2021</kor-table-cell>
                        </kor-table-row>
                    </kor-table>

                    <Link to={"/elegir"} class="link-postular">
                        <kor-button label="Postular" color="Primary" class="boton-postular"></kor-button>
                    </Link>
                    

                </kor-card>
                <kor-card grid-cols="3">
                    <kor-grid>
                    <kor-card flat grid-cols="12" grid-rows="12">
                            <kor-text size="header-1">Por tus notas te sugerimos postular a:</kor-text>
                            <kor-divider spacing="s" orientation="horizontal"></kor-divider>
                            <kor-table columns="1fr">
                                <kor-table-row>
                                    <Link to="/postular/inf322">
                                        <kor-table-cell>Interfaces Usuarias</kor-table-cell>
                                    </Link>
                                    
                                </kor-table-row>
                                <kor-table-row>
                                    <kor-table-cell>Sistemas de Gestión</kor-table-cell>
                                </kor-table-row>
                            </kor-table>
                        </kor-card>
                    </kor-grid>
                </kor-card>
            </kor-grid>
        )
    }


}