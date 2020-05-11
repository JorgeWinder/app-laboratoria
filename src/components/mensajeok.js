import React from 'react'
// import ReactDOM from 'react-dom'

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import SweetAlert from 'sweetalert2-react';
const MySwal = withReactContent(Swal);

function mensajeOk() {

  
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

      return true


}


export default mensajeOk

