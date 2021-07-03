import React from 'react';
import './App.css';
import Layout from './Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import CatsLandingPage from './compinents/CatsLandingPage';

const HomePage = React.lazy(() => import('./compinents/HomePage'));

function App() {
  return (
    <>
      <Switch>
        <Layout>
          <React.Suspense fallback={<p>Loading...</p>}>
            <Route exact path='/' component={HomePage} />
            <Route path='/catInfo/:num' component={CatsLandingPage} />
          </React.Suspense>
        </Layout>
      </Switch>
    </>
  );
}

export default App;
