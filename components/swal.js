import Swal from "sweetalert2";

export function success() {
  Swal.fire({
    icon: "success",
    title: "Success",
    showConfirmButton: false,
    timer: 1500,
  });
}

export function error(error) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: error,
  });
}
