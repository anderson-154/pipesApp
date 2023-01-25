import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'vuela'
})
export class VuelaPipe implements PipeTransform{
    transform(valor:boolean,): string {
    //     if(enMayus){
    //         return valor.toUpperCase()
    //     }
    //     return valor.toLocaleLowerCase()
        return (valor) ? 'vuela': 'no vuela';
    }
}