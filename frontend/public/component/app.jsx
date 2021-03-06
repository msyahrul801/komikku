import React from 'react';
import { Route, Switch } from 'react-router';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Header from './header/header';
import NavBar from './navbar/navbar';
import SessionFormContainer from './session_form/session_form_container';
import MangaIndexContainer from './manga/manga_index_container';
import MangaDetailContainer from './manga/manga_detail_container';
import ReaderContainer from "./reader/reader_container";

const App = () => (
    <div className="main-container">
        <Header />
        <Route path="/" component={NavBar} />
        <Switch>
            <AuthRoute exact path="/login" component={ SessionFormContainer } />
            <Route exact path="/" component={ MangaIndexContainer }/>
            <Route exact path="/manga/:alias" component={ MangaDetailContainer } />
            <Route exact path="/reader" component={ ReaderContainer } />
        </Switch>
    </div>
);

export default App;