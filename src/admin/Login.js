import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import {auth} from './../firebase-config';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            estaAutenticado: false,
            estaLogando: false,
            erro: false
        }

        this.email = null;
        this.senha = null;

        this.autenticaUsuario = this.autenticaUsuario.bind(this);
    }

    autenticaUsuario() {
        this.setState({estaLogando: true, erro: false});

        auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(user => {
                console.log('usuario logado', user);
                this.setState({estaAutenticado: true});
            })
            .catch(err => {
                console.log(err);
                this.setState({estaAutenticado:false, erro: true, estaLogando:false});
            })
    }

    render() {
        if (this.state.estaAutenticado) {
            return <Redirect to='/admin' />
        }

        return (
            <div className="container" style={{padding:'100px'}}>
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" name="email" ref={ref => this.email = ref} id="email" aria-describedby="emailHelp" placeholder="nome@email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" name="senha" ref={ref => this.senha = ref} id="senha" />
                    {this.state.erro && <small id="emailHelp" className="form-text text-muted">e-mail e/ou senha inválidos</small>}
                </div>
                <button type="button" disabled={this.state.estaLogando} className="btn btn-primary" onClick={this.autenticaUsuario}>Acessar</button>
            </div>
        );
    }

}

export default Login;