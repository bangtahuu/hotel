import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ListRoomPage} from './containers/ListRoomPage';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'


class ThaiBinhHotel extends React.Component{
    render(){
        return <ListRoomPage/>;
    }
}

ReactDOM.render(<ThaiBinhHotel />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();