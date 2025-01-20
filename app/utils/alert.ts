import Swal from 'sweetalert2'

type AlertType = 'success' | 'error' | 'info' | 'warning'

const MixinAlert = (type: AlertType, title: string) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: type,
        title
      });
}

export { MixinAlert };

