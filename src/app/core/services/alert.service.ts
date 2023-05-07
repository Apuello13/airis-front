import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

const confirmButtonText: string = 'Aceptar';
const cancelButtonText: string = 'Cancelar';

@Injectable({ providedIn: 'root' })
export class AlertService {
  success(text: string) {
    Swal.fire({
      title: 'Éxito',
      text,
      icon: 'success',
      confirmButtonText,
    });
  }

  error(text: string) {
    Swal.fire({
      title: 'Error',
      text,
      icon: 'error',
      confirmButtonText,
    });
  }

  info(text: string) {
    Swal.fire({
      title: 'Información',
      text,
      icon: 'info',
      confirmButtonText,
    });
  }

  confirmDelete() {
    return Swal.fire({
      title: 'Estás segur@?',
      text: 'Desea realizar esta acción?',
      icon: 'info',
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
    });
  }

  logOut() {
    return Swal.fire({
      title: 'Información',
      text: 'Desea cerrar sesión?',
      icon: 'info',
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
    });
  }

  confirmClose() {
    return Swal.fire({
      title: 'Información',
      text: '¿Desea salir?',
      icon: 'info',
      confirmButtonText,
      cancelButtonText,
      showCancelButton: true,
    });
  }
}
