import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
//i18nSelecet
  nombre:string='anderson'
  genero:string='masculino'

  invitacionMap={
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[]=['maria','pedro','rosa','andy']
  clientesMap={
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando.'
  }

  CambiarCliente(){
    this.nombre='rosa'
    this.genero='femenino'
  }

  borrarCliente(){
      this.clientes.pop()
  }
}
