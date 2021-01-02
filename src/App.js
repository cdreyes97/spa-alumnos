import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import '@kor-ui/kor';
import '@kor-ui/kor/kor-styles.css';

import Pane from './components/Pane';
import LandingPage from './components/LandigPage';
import ElegirAsignatura from './components/ElegirAsignatura';
import PostularInterfaces from './components/PostularInterfaces';
import MisPostulaciones from './components/MisPostulaciones';
import Perfil from './components/Perfil';
import Experiencias from './components/Experiencias';

function App() {
    return (
        <BrowserRouter>
            <kor-page flat theme="dark" class="page">
                <Pane />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/inicio" component={LandingPage} />
                    <Route path="/elegir" component={ElegirAsignatura} />
                    <Route path="/postular/inf322" component={PostularInterfaces} />
                    <Route path="/mispostulaciones" component={MisPostulaciones} />
                    <Route path="/perfil" component={Perfil} />
                    <Route path="/experiencias" component={Experiencias}/>
                </Switch>
            </kor-page>
        </BrowserRouter>
  );
}

export default App;
