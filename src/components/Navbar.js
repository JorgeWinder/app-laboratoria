import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './style/Navbar.css'

import Logo from '../images/logo.png'
import M from 'materialize-css'

export default class Navbar extends Component {

    state = {

    }


    handleClick = (e) => {
        const instance = M.Sidenav.getInstance(document.querySelector('.sidenav'))
        instance.close()
    }

    componentDidMount(){

        const elems = document.querySelectorAll('.tooltipped')
        M.Tooltip.init(elems)

        M.Sidenav.init(document.querySelector('.sidenav'));

    }

    render() {
        return (
            <React.Fragment>

                <div className="navbar-fixed">
                    <nav className="white">
                        <Link to="#" data-target="slide-out" className="sidenav-trigger"><i id="imenu" className="material-icons">menu</i></Link>
                        <Link to="/" className="brand-logo left">
                            <img src={Logo} alt="" className="responsive-img" width="50"/><div><span>APP</span></div>
                        </Link>

                        <ul className="right hide-on-med-and-down">
                            <li><a href="./"> </a></li>
                            <li><a href="./"> </a></li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="./"> </a></li>
                            <li><a href="./"> </a></li>
                            <li><Link to="./" className="tooltipped" data-position="bottom" data-tooltip="Cerrar sesión" href="." alt="Cerrar sesión"><i className="material-icons prefix">exit_to_app</i></Link></li>
                        </ul>

                    </nav>
                </div>


                <ul id="slide-out" className="sidenav">
                    <li>
                        <a href="./encuestas-asignadas" className="brand-logo center">
                        <img src={Logo} alt="" className="responsive-img" width="50"/>
                        </a>
                    </li>

                    <li><div className="divider"></div></li>
                    <li>
                        <Link href="./encuestas-asignadas" className="waves-effect" to="/home" onClick={this.handleClick}>
                            <i className="material-icons prefix">home</i>Inicio
                        </Link>
                    </li>
                    <li><div className="divider"></div></li>
                    <li>
                        <Link  href="." className="waves-effect" to="/" onClick={this.handleClick}>
                            <i className="material-icons prefix">exit_to_app</i>Cerrar sesión
                        </Link>
                    </li>
                    <li><div className="divider"></div></li>
                </ul>


            </React.Fragment>

        )
    }
}
