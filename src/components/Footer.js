import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer className="page-footer grey darken-2">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m8 l6">
                                
                                <p className="grey-text text-lighten-4">Laboratoria APP - Muro de comentarios y post</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2020 Laboratoria

                            <a className="grey-text text-lighten-4 right" href="#!">Desarrollado por : JORGE WINDER</a>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
            
        )
    }
}
