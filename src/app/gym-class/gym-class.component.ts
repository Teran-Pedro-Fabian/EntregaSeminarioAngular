import { Component } from '@angular/core';
import { GymClass } from './gymClass';
import { ServicioReservaService } from '../servicio-reserva.service';

@Component({
  selector: 'app-gym-class',
  standalone: false,
  templateUrl: './gym-class.component.html',
  styleUrl: './gym-class.component.scss'
})
export class GymClassComponent {

  class: GymClass[]= [
    {
    actividad: 'Zumba',
    instructor: 'Juan Perez',
    fecha: "Lunes, Miecoles y Viernes 18HS",
    precio: 1500,
    cupos: 30,
    imagen: '../assets/zumba-fitness-1024x683.jpg',
    enPromocion: true,
    reserva: 0
    },
    {
    actividad: 'gym',
    instructor: 'Juan Perez',
    fecha: "Lunes, Miecoles y Viernes 18HS",
    precio: 1500,
    cupos: 20,
    imagen: '../assets/zumba-fitness-1024x683.jpg',
    enPromocion: false,
    reserva: 0,
    },
    {
    actividad: 'mma',
    instructor: 'Juan Perez',
    fecha: "Lunes, Miecoles y Viernes 18HS",
    precio: 1500,
    cupos: 0,
    imagen: '../assets/zumba-fitness-1024x683.jpg',
    enPromocion: true,
    reserva: 0
    },
    {
    actividad: 'karate',
    instructor: 'Juan Perez',
    fecha: "Lunes, Miecoles y Viernes 18HS",
    precio: 1500,
    cupos: 20,
    imagen: '../assets/zumba-fitness-1024x683.jpg',
    enPromocion: false,
    reserva: 0
    },
    {
    actividad: 'boxeo',
    instructor: 'Juan Perez',
    fecha: "Lunes, Miecoles y Viernes 18HS",
    precio: 1500,
    cupos: 0,
    imagen: '../assets/zumba-fitness-1024x683.jpg',
    enPromocion: true,
    reserva: 0
    },
    {
    actividad: 'Lucha Libre',
    instructor: 'Juan Perez',
    fecha: "Lunes, Miecoles y Viernes 18HS",
    precio: 1500,
    cupos: 10,
    imagen: '../assets/zumba-fitness-1024x683.jpg',
    enPromocion: false,
    reserva: 0
    }
  ]

  constructor(private servicio: ServicioReservaService) {}

  //funciones
  addToCart(clase: GymClass) {
    this.servicio.addToCart(clase);
    clase.cupos-= clase.reserva;
    clase.reserva = 0; 
  }














}