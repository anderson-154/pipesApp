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
  heroes: Heroe[] = [
    {
      nombre:'superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre:'batman',
      vuela:false,
      color: Color.negro
    },
    {
      nombre:'robin',
      vuela:false,
      color: Color.verde
    },
    {
      nombre:'Daredevil',
      vuela:false,
      color: Color.rojo
    },
    {
      nombre:'linterna verde',
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
}
