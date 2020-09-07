import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import { FetchSpreadData } from './components/FetchSpreadData';
import { Reportsheet } from './components/Reportsheet';
import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/SpreadSheet-data/:startDateIndex?' component={FetchSpreadData} />
        <Route path='/SpreadSheet-typescript/:startDateIndex?' component={Reportsheet} />
    </Layout>
);
