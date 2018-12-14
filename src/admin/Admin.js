import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {auth} from './../firebase-config';
import AdminMenu from './AdminMenu';
import AdminPortifolio from './AdminPortifolio';

class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            estaAutenticado: false,
            estaLogando: true,
            user: null
        }
    }

    //assim que o componente renderizar
    componentDidMount() {
        auth.onAuthStateChanged(user => {
           this.setState({
               estaLogando: false,
               estaAutenticado: !!user, //!! true casa != de null e false caso = null
               user //mesmo nome da variavel, não preciso informar user : user
           }); 
        });
    }

    render() {
        if (this.state.estaLogando) {
            return (
                <div className='container'>
                    <h3><span className="glyphicon glyphicon-refresh"></span>Aguarde...</h3>
                </div>
            );
        }
        if (!this.state.estaAutenticado) {
            return <Redirect to='/login' />
        }
        return (
            <div className="container">
                <h2>Painel Administrativo</h2>
                <Route path='/' component={AdminMenu} />
                <Route path={`${this.props.match.url}/portifolio`} component={AdminPortifolio} />
            </div>
        );
    }

}

export default Admin;