import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './style/Home.css'
// import M from 'materialize-css'
import { Link } from 'react-router-dom'

import ListaComentario from '../components/ListaComentario'
import TipoPublicacion from '../components/TipoPublicacion'
import Modal from '../components/Modal'

import Api from '../api'

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const MySwal = withReactContent(Swal);


export default class Home extends Component {

    state = {
        loading: true,
        error: null,
        form: {idComentarioUpdate: null},
        openModal: true,
        openModalEdit: false,
        comentarios: [],
    }


    handleChange = (e) =>{
        this.setState({form: {
            ...this.state.form,
            [e.target.name] : e.target.value
        }})


    }

    
    handleInput = (e)=>{
        if(e.target.value.length>0){
            document.querySelector("#publicar").classList.remove("disabled")
        }else{
            document.querySelector("#publicar").classList.add("disabled")
        }
        
    }


    handleSave =async (e) =>{

        const form_data = new FormData();

        for (const key in this.state.form ) {
            form_data.append(key, this.state.form[key]);
            console.log(`${key} -> ${form_data.get(key)}`)
        }

        try {

            const { data } = await Api.postData('http://localhost:3001/comentario', form_data)
            console.log([].concat(data, this.state.comentarios))
            document.querySelector('#comentario').value=''
            this.setState({comentarios: [].concat(data,this.state.comentarios)})
        } catch (error) {
            this.menssageError()
        }

    }

    handleDelete = (id)=>{

        MySwal.fire({
            title: 'Confirma eliminar el comentario?',
            text: "Está por eliminar el seleccionado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ffea00',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí',
            cancelButtonText: 'Cancelar',
          }).then(async(e) => {

            if(e.value){
                
                await Api.deleteData('http://localhost:3001/comentario/' + id)

                console.log("Eliminado de lista : " + id)
                const lista = this.state.comentarios.filter(element => {
                    return element._id !== id
                });

                this.setState({comentarios: lista})

                MySwal.fire({title: "Comentario eliminado", confirmButtonColor: '#ffea00',})
            }
            
        })

    }

    handleUpdate = async ()=>{

        const form_data = new FormData();

        for (const key in this.state.form ) {
            form_data.append(key, this.state.form[key]);
            console.log(`${key} -> ${form_data.get(key)}`)
        }


        try {

            await Api.patchData('http://localhost:3001/comentario/' + this.state.form.idComentarioUpdate, form_data)

            let lista = []

            // this.state.comentarios.forEach(element => {
            //     if(element._id === this.state.form.idComentarioUpdate){
            //         element.comentario = form_data.get('comentario')
            //     }
            //     lista.push(element)
            // });

            lista = this.state.comentarios

            for (let i = 0; i < lista.length; i++) {
                if (lista[i]._id === this.state.form.idComentarioUpdate) {
                    lista[i].comentario = form_data.get('comentario')
                    break;
                }
            }
            
            this.setState({comentarios: lista})
            this.setState({openModalEdit: false})

            MySwal.fire({title: "Comentario actualizado", confirmButtonColor: '#ffea00',})
        } catch (error) {
            
        }
    }

    handleEditModal = (id, comentario)=>{
        this.setState({openModalEdit: true})
        this.setState({form: {idComentarioUpdate: id, comentario: comentario}})
    }

    fetchComentarios = async () =>{
        const {data} = await Api.getData('http://localhost:3001/comentario')
        console.log(data)
        this.setState({comentarios: data})
        
    }

    componentDidMount(){
        this.setState({form: {user: localStorage.getItem("user"), tipo_publicacion: 1}}) 
        this.menssageOk()
        document.querySelector("#publicar").classList.add("disabled")
        this.fetchComentarios()

    }


    
    menssageOk = (e) => {

        MySwal.fire({
            title: 'Mensaje de confirmación',
            text: "Bienvenid@ a Laboratoria APP",
            icon: 'success',
            confirmButtonColor: '#ffea00',
            onOpen: () => {

            },
            onClose: ()=>{
              this.setState({openModal: false})
              document.querySelector('#comentario').focus()
            }
          })
    }

    menssageError = (e) => {
        MySwal.fire({
            title: 'Mensaje de alerta',
            text: "Hubo problemas al registrar su comentario",
            icon: 'warning',
            confirmButtonColor: '#ffea00'
          })
    }

    menssageDelete = () => {

        MySwal.fire({
            title: 'Confirma eliminar el comentario?',
            text: "Está por eliminar el seleccionado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ffea00',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí!',
            onOpen: () => {
              // `MySwal` is una subclase de `Swal`
              //  setTimeout(() => MySwal.clickConfirm(), 2500);
            }
          }).then((e) => {
            if(e.value){
                
                MySwal.fire("Comentario eliminado")
            }
            // return e.value? MySwal.fire("Comentario eliminado") : false
        })

    }




    render() {

        

        return (

            <React.Fragment>


                <section className="container containerHome">

                <div className="card white darken-1">
                    <div className="card-content ">
                        <span className="card-title"></span>
                        <p>Escribe un comentario o reflexió</p>
                        <br/>
                        <p><textarea id="comentario" name="comentario" onChange={this.handleChange} onInput={this.handleInput} className="" rows="10" style={{'height': '8rem'}}>
                        </textarea></p>

                    </div>
                    <div className="card-action">

                        <div className="row row-card">

                            <div className="col s0 l7 right-align">

                            </div>
                            
                            <div className="col s6 l3 right-align">
                                {this.state.openModal===false && <TipoPublicacion onChange={this.handleChange}/>}
                            </div>
                            <div className="col s6 l2 right-align">
                                <Link to="#" id="publicar" className="btn waves-effect yellow accent-3 black-text" onClick={this.handleSave}><b>Publicar </b></Link>
                            </div>

                        </div>


                    </div>
                </div>

                </section>

                <ListaComentario comentarios={this.state.comentarios} handleDelete={this.handleDelete} handleEditModal={this.handleEditModal}/>

                {this.state.openModalEdit ? ReactDOM.createPortal(<Modal comentario={this.state.form.comentario} idComentarioUpdate={this.state.form.idComentarioUpdate} handleChange={this.handleChange} handleUpdate={this.handleUpdate}
                                                                    handleCloseModal={()=>{this.setState({openModalEdit: false}); delete this.state.form.idComentarioUpdate; delete this.state.form.comentario; this.setState({form: {user: localStorage.getItem("user"), tipo_publicacion: 1}});  }}/>, 
                document.getElementById("modal")): false
                }

            </React.Fragment>

        )
    }
}
