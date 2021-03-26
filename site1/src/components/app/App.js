import React,{ Component } from 'react';
import './App.css';

import ErrorBoundry from "../error/error-boundry";

import Header from "../pages/header";
import Page2 from "../pages/page2";
import Page3 from "../pages/page3";
import Page4 from "../pages/page4";
import Page5 from "../pages/page5";
import Page6 from "../pages/page6";
import Footer from "../pages/footer";
import Popup from "../pages/popup";

export default class App extends Component{
  render() {
    return (
        <ErrorBoundry>
            <Header />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Footer />
            <Popup />
        </ErrorBoundry>
    );
  }
}

