import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function menssageOk(){

    MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ffea00',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        onOpen: () => {
          // `MySwal` is una subclase de `Swal`
          //  setTimeout(() => MySwal.clickConfirm(), 2500);
        }
      }).then((e) => {
        return e.value? MySwal.fire("Shorthand works too") : false
    });

}

function menssageOkCancel(){

    MySwal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ffea00',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        onOpen: () => {
          // `MySwal` is una subclase de `Swal`
          //  setTimeout(() => MySwal.clickConfirm(), 2500);
        }
      }).then((e) => {
        return e.value? MySwal.fire("Shorthand works too") : false
    });
}

exports.module = {
    menssageOk,
    menssageOkCancel
}