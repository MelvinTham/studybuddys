import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import "../node_modules/aos/dist/aos.css";
AOS.init();
const theme = createMuiTheme();

ReactDOM.render(<MuiThemeProvider theme={theme}>
    <App />
</MuiThemeProvider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
