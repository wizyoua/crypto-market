import React from 'react'
import { Switch,Route, Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

//import all of the components in 1 line, we made file index.js in components so we can just bring in all of our components and can 1 line import them all.
import { Navbar, Exchanges, Homepage, CryptoDetails, Cryptocurrencies, News } from './components';
import './App.css';

const App = () => {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch >
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges/>
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies/>
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>
                            <Route exact path="/news">
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            
                <div className="footer" >
                    <Typography.Title level={5} style={{color:'white', textAlign: 'center'}}>
                        Crypto News <br />
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default App
