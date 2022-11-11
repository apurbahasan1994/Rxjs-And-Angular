import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'app-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {
  @Input('parent') public parent: FormGroup;
  @Input('products') public products: Product[];
  @Output('onStockAdd') public onStockAdd:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
  }
  addStock(){
    debugger
    if(this.parent.invalid){
      return;
    }
    this.onStockAdd.emit(this.parent.get('selector')?.value);
   this.parent.get('selector')?.reset({
    product_id:'',
    quantity:10
   })
  }
}
