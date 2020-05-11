import React, { Component } from 'react'
import Api from '../api'
import M from 'materialize-css'

export class TipoPublicacion extends Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    }

    fetchTipo = async () =>{
        const {data} = await Api.getData("http://localhost:3001/tipo-publicacion")
        this.setState({
            data: data
        })

    }

    componentDidMount(){
        this.fetchTipo()
    }

    componentDidUpdate(){
        const elems = document.querySelectorAll('select')
        M.FormSelect.init(elems)
        // document.querySelector("#tipo_publicacion").selectedIndex = "2"
        // document.querySelector("#tipo_publicacion").dispatchEvent(new Event('click'))
    }

    render() {

        if (this.state.loading === true && !this.state.data) {
            return (
            <div>
                {/* <select className="browser-default">
                <option value="" disabled defaultValue>PUBLICAR PARA</option>
                </select> */}
            </div>
            )
        }

        return (
            <React.Fragment>
                <select id="tipo_publicacion" name="tipo_publicacion" onChange={this.props.onChange}>
                    <option value="" disabled defaultValue>Publicar para</option>
                    {

                        this.state.data.map(elemento=>{

                            if(elemento._id===1){
                                return(
                                    <option key={elemento._id} value={elemento._id}>🌎 {elemento.descripcion}</option>
                                )
                            }

                            return(
                                <option key={elemento._id} value={elemento._id}>👨‍👨‍👧‍👦 {elemento.descripcion}</option>
                            )

                        })

                    }
                
                </select>
                
            </React.Fragment>
        )
    }
}

export default TipoPublicacion
