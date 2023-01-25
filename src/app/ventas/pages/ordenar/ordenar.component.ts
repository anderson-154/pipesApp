import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  toogle:boolean=true;
  ordenarPor:string=''

  heroes: Heroe[] = [
    {
      nombre:'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color: Color.negro
    },
    {
      nombre:'Robin',
      vuela:false,
      color: Color.verde
    },
    {
      nombre:'Daredevil',
      vuela:false,
      color: Color.rojo
    },
    {
      nombre:'Linterna verde',
      vuela:true,
      color: Color.verde
    }
  ]
  changeToogle(){
    // if(this.toogle==true){
    //   this.toogle=false;
    // }else{
    //   this.toogle=true;
    // }

    this.toogle = !this.toogle;
    //(this.toogle) ? this.toogle=false : this.toogle=true
  }

  cambiarOrden(valor:string){
    this.ordenarPor = valor;
  }
}
