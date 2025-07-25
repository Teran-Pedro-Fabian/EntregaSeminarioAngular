import { Injectable } from '@angular/core';
import { GymClass } from './gym-class/gymClass';
import { BehaviorSubject } from 'rxjs';

// maneja la logica de las reservas
@Injectable({
  providedIn: 'root'
})
export class ServicioReservaService {
  
  reservas: BehaviorSubject<GymClass[]> = new BehaviorSubject<GymClass[]>([]);
  constructor() { }

  addToCart(clase: GymClass): void {
    let claseSeleccionada: GymClass | undefined = this.reservas.getValue().find((v1) => v1.actividad == clase.actividad && v1.instructor == clase.instructor && v1.fecha == clase.fecha);
    let copiaClase = { ...clase };
    if(!claseSeleccionada) {
      // Si no existe, la agregamos al carrito
      this.reservas.next([...this.reservas.getValue(), copiaClase]);
    } else {
      // Si ya existe, actualizamos la reserva
      claseSeleccionada.reserva += clase.reserva;
      this.reservas.next([...this.reservas.getValue()]);
    }
    
  }
}