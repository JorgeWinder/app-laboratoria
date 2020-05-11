import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

import 'materialize-css/dist/css/materialize.css'
import Logo from '../images/logo.png'
import './style/Login.css'

import Api from '../api'

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default class Login extends Component {

    state = {
        load: '',
        error: '',
        form: {
            usuario: '',
            password: ''
        },
        redirect: false,
    }

    handleSubmmit = async (e) =>{
        e.preventDefault()
        //this.props.history.push('/home')
        //window.location = '/home'
        document.querySelector(".progress").style.display = 'block'

        !this.state.form.usuario? document.querySelector("#usuario").classList.add("invalid") : document.querySelector("#usuario").classList.remove("invalid")
        !this.state.form.password? document.querySelector("#password").classList.add("invalid") : document.querySelector("#password").classList.remove("invalid")

        const form = new FormData()
        form.append('usuario', this.state.form.usuario)
        form.append('password', this.state.form.password)

        const cabecera = new Headers()
        cabecera.append('Authorization', 'Basic ' + btoa(form.get('usuario') + ":" + form.get('password')))
        console.log(btoa(form.get('usuario') + ":" + form.get('password')))

        const { data: {
            access_token
        } } = await Api.postData('http://localhost:3001/auth/token', form, cabecera)


        setTimeout(()=>{

            document.querySelector(".progress").style.display = 'none'

            if(access_token){
                console.log(access_token)
                localStorage.setItem("user",this.state.form.usuario)
                this.setState({redirect: true})
            }else{
                this.menssageNoOk()
            }

        }, 800)

    }
    

    handleChange = (e) =>{
        this.setState({form: {
            ...this.state.form,
            [e.target.name] : e.target.value
        }})
    }

    menssageOk = (e) => {
        MySwal.fire({
            title: 'Mensaje de confirmación',
            text: "Bienvenid@ a Laboratoria APP",
            icon: 'success',
            confirmButtonColor: '#ffea00',
            onOpen: () => {
              // `MySwal` es una subclase de `Swal`
              //  setTimeout(() => MySwal.clickConfirm(), 2500);
            }
          })
    }

    menssageNoOk = (e) => {
        MySwal.fire({
            title: 'Mensaje de alerta',
            text: "No pudo conectarse a Laboratoria APP",
            icon: 'warning',
            confirmButtonColor: '#ffea00'
          })
    }

    // componentWillMount(){
    //     // Se ejecuta cuando los componentes están por renderizarse
    // }

    componentDidMount(){
        // Se ejecuta cuando los componentes se han renderizaron
        document.querySelector(".progress").style.display = 'none'

    }

    render() {

        if(this.state.redirect){
            // window.location = "/home"
            // this.props.history.push('/home')
            return (
                    <Redirect to='/home' />
            )
        }

        return (
            <React.Fragment>

                <form onSubmit={this.handleSubmmit}>

                        <section className="container" id="login">

                            <div className="card white">
                                            <div className="progress">
                                                <div className="indeterminate"></div>
                                            </div>
                                            <div className="card-content">

                                                    <span className="card-title center">

                                                        <a href="." className="brand-logo">
                                                            <img src={Logo} alt="" className="responsive-img" width="80" />
                                                        </a>
                                                    </span>

                                                    <div className="row">

                                                        <div className="input-field col s12 l12">
                                                            <input id="usuario" name="usuario" type="text" className="validate" onChange={this.handleChange} value={this.state.form.usuario}/>
                                                            <label htmlFor="usuario">Nombre de usuario</label>
                                                            <span className="helper-text" data-error="El campo usuario no debe estar en blanco" data-success=""></span>
                                                        </div>

                                                        <div className="input-field col s12 l12">
                                                            <input id="password" name="password" type="password" className="validate" onChange={this.handleChange} value={this.state.form.password} />
                                                            <label htmlFor="password">Contraseña</label>
                                                            <span className="helper-text" data-error="El campo password no debe estar en blanco" data-success=""></span>
                                                        </div>

                                                    </div>

                                            </div>
                                            <div className="card-action center-align">

                                                <div className="row">
                                                    <div className="col s12 m12 l12">
                                                            <button id="btnIniciar" className="btn btn-large waves-effect blue darken-4 yellow accent-3 black-text" type="submit">
                                                                <b>Iniciar sesión</b>
                                                            </button>
                                                    </div>
                                                </div>

                                            </div>
                            </div>

                    </section>



                    {/* <section className="container-wide" id="imgporta" style="width: 65%;float: left; padding-left: 90px;"> */}

                        {/* <!-- <img src="application/assets/img/portada_sicV2.png" className="responsive-img" alt="" style="width: 100%;"> --> */}

                    {/* </section> */}
 
    </form>


            </React.Fragment>

        )
    }
}
