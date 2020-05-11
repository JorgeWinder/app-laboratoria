import React from 'react'
import './style/Comentario.css'
import { Link } from 'react-router-dom'

// import { Link } from 'react-router-dom'

export default function Comentario(props) {



    return (
        <section className="container containerHome">

                <div className="card white darken-1 hoverable">
                    <div className="card-content ">
                        <span className="card-title"></span>
                        <p className="center-v"> {props.tipo_publicacion}
                            <span style={{"paddingLeft": "15px"}}>{props.fecha_reg}
                            </span>
                        </p>
                        <br/>
                        <blockquote>
                                {props.comentario}
                        </blockquote>

                    </div>
                    <div className="card-action">

                        <div className="row row-card">

                            <div className="col s3 l8"></div>

                            <div className="col s3 l2" >
                                <Link to="#" className="center-v" onClick={props.handleEditModal.bind(this, props.id, props.comentario)}><i className="material-icons prefix">edit</i><span className="grey-text"> <b>Editar</b></span></Link>
                            </div>
                            <div className="col s3 l2">
                                <Link to="#" className="center-v" onClick={props.handleDelete.bind(this, props.id)}><i className="material-icons prefix">delete</i><span className="grey-text"> <b>Eliminar</b></span></Link>
                                {/* <Link to="#" className="center-v" onClick={handleEliminarComentario.bind(this, props.id)}><i className="material-icons prefix">delete</i><span className="grey-text"> <b>Eliminar</b></span></Link> */}
                            </div>

                        </div>


                    </div>
                </div>

                </section>
    )
}
