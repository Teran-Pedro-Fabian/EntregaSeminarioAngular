import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

@Input() quantity!: number ;

@Input() max!:number;

@Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();




  //funciones


  //incremetan y decrementan los cupos del input
  masLugares(): void{
    // Si la reserva es menor a los cupos, se puede aumentar
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity); 
    }
  }
  //incremetan y decrementan los cupos del input
    menosLugares(): void{
    // Si la reserva es mayor a 0, se puede disminuir
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }


}
