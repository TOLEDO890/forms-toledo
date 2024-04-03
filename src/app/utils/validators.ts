import { AbstractControl } from '@angular/forms';



export function noToledoValidator(formControl: AbstractControl) {
  if (
    typeof formControl.value === 'string' &&
    formControl.value.toLowerCase().includes('toledo')
  ) {
    return {
      noToledoError: 'No se admiten Toledos',
    };
  }


  return null;
}