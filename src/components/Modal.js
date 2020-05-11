import React, { Component } from 'react'
import M from 'materialize-css'
import { Link } from 'react-router-dom';

export default class Modal extends Component {


    componentDidMount(){

        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems)

        const instance = M.Modal.getInstance(document.querySelector("#modal1"));
        instance.open()

        document.querySelector('#modal1 #comentario').select()
    }

    render() {
        return (
            <div>

                {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a> */}

                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Actualizar comentario o post</h4>
                        <p>
                            <textarea id="comentario" name="comentario" onChange={this.props.handleChange} className="" rows="60" style={{'height': '9rem'}} defaultValue={this.props.comentario}>
                            </textarea>
                        </p>
                    </div>
                    <div className="modal-footer">
                        <Link to="#" onClick={this.props.handleUpdate} className="modal-close waves-effect waves-yellow btn-flat">Actulizar</Link>
                        <Link to="#" onClick={this.props.handleCloseModal} className="modal-close waves-effect waves-yellow btn-flat">Cerrar</Link>
                    </div>
                </div>

            </div>
        )
    }
}
