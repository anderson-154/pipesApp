import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower:string='anderson cardenas'
  nombreUpper:string='ANDERSON CARDENAS'
  nombreCompleto:string='anDERson CarDEnaS'
  fecha:Date = new Date()

}
