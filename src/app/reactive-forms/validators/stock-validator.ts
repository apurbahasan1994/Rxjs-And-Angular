import { AbstractControl } from "@angular/forms";

export class StockValidators{
  static checkBranch(control:AbstractControl){
    const regex=/^[a-z]/i;
    const valid=regex.test(control.value);
    return valid?null:{invalidBranch:true}
  }
  static checkStockEists(control:AbstractControl){

    const stockItem=control.get('stock');

    const selector=control.get('selector');
    if(!(stockItem && selector)) return null;
    const exists=stockItem.value.some((stock:any)=>{
      return stock.product_id===parseInt(selector.value.product_id );
    });
    console.log(exists);
    return exists?{stocExists:true}:null;
  }
}
