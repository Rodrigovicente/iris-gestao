import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'telefone' })
export class TelefonePipe implements PipeTransform {

	transform(telefone: string | number): any {
    if (telefone) {
      const value = telefone.toString().replace(/\D/g, '');

      let foneFormatado = '';

      if (value.length > 12) {
        foneFormatado = value.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 11) {
        foneFormatado = value.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');

      } else if (value.length > 10) {
        foneFormatado = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 9) {
        foneFormatado = value.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');

      } else if (value.length > 5) {
        foneFormatado = value.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');

      } else if (value.length > 1) {
        foneFormatado = value.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
      } else {
        if (telefone !== '') { foneFormatado = value.replace(/^(\d*)/, '($1'); }
      }
	  return foneFormatado ==='(' ? '' : foneFormatado.toString();
    }
  }
}