import { Component } from '@angular/core';
import { interval, ReplaySubject } from 'rxjs';

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

  //KeyValue pipe

  persona={
    nombre:'Anderson',
    edad:21,
    direccion:'Cali, Colombia'
  }


  //JSON pipe

  heroes = [
    {
      nombre:'superman',
      vuela: true
    },
    {
      nombre:'robin',
      vuela: false
    },
    {
      nombre:'aquaman',
      vuela: false
    },
  ]

  //async pipe

  miObservable = interval(1000);
  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    },3500)
  });
}
