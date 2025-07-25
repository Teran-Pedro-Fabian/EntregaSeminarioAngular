import { Component, OnInit } from '@angular/core';
import { ServicioReservaService } from '../servicio-reserva.service';
import { GymClass } from '../gym-class/gymClass';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reservas',
  standalone: false,
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss'
})

export class ReservasComponent implements OnInit {
  
  reservas$!: Observable<GymClass[]>;


  constructor(private servicio: ServicioReservaService) {
    this.reservas$ = this.servicio.reservas.asObservable();
    }

  ngOnInit(): void {

  }



}
