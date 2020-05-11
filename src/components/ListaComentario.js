import React from 'react'
import Comentario from './Comentario'

export default function ListaComentario(props) {

        
    function GetFormatDate(fecha) {
        // const todayTime = new Date(fecha);
        // const month = todayTime.getMonth() + 1;
        // const day = todayTime.getDate();
        // const year = todayTime.getFullYear();
        // return month + "/" + day + "/" + year;

        const mydate = new Date(fecha);
        const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"][mydate.getMonth()];
        const str = mydate.getDate() + ' de ' + month + ' de ' + mydate.getFullYear() + ' ' + mydate.getHours().toString().padStart(2,"0") + ':' + mydate.getMinutes().toString().padStart(2,"0") + ':' + mydate.getSeconds().toString().padStart(2,"0");
        return str
    }

    function tipo_publicacion(tp){
        if(tp === 1){
            return ("🌎")
        }
        return ("👨‍👨‍👧‍👦")
    }

    return(
        props.comentarios.map((comentario)=>{

            return (
                <Comentario 
                key={comentario._id} 
                id={comentario._id} 
                user={comentario.user} 
                comentario={comentario.comentario} 
                tipo_publicacion={tipo_publicacion(parseInt(comentario.tipo_publicacion))} 
                fecha_reg={GetFormatDate(comentario.fecha_reg)} 
                handleDelete={props.handleDelete}
                handleEditModal={props.handleEditModal}
                />
            )

        })
    )

}
