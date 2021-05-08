import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS} from '@angular/forms';

function verificarCaracterEspecial(c:AbstractControl){
  if (c.value == null) return null;
  if(/[+-]/g.test(c.value) == true){
    return {sinCaracterEspecial: true}
  }
  return null;
} 

@Directive({
  selector: '[appValidacion]',
  providers:[
    {provide: NG_VALIDATORS, multi: true, useValue:verificarCaracterEspecial}
  ]
})
export class ValidacionDirective {
  constructor() { }
}