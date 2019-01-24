import React, { Component } from 'react'

class Login extends Component {
    constructor(props){
        super(props)

        this.email = null
        this.senha = null

        this.autenticaUsuario = this.autenticaUsuario.bind(this)
        
    }

    autenticaUsuario(){
        console.log(this.email.value, this.senha.value)
    }

    render(){
        return(
            <div className='container'>
                <h1>Login</h1>
                
                    <div className='form-group'>
                        <label forhtml='exampleInputEmail1'>Email address</label>
                        <input type='email' name="email" ref={ref => this.email = ref} className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='nome@email.com' />
                        <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
                    </div>
                    <div className='form-group'>
                        <label forhtml='exampleInputPassword1'>Password</label>
                        <input type='password' name="senha" ref={ref => this.senha = ref} className='form-control' id='exampleInputPassword1' placeholder='Senha' />
                    </div>
                    
                    <button type='button' onClick={this.autenticaUsuario} className='btn btn-primary'>Submit</button>
                

            </div>
        )
    }
}

export default Login