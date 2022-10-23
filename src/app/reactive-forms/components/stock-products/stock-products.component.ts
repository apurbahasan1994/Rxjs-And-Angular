import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {
  @Input('parent') public parent: FormGroup;
  @Output('removed') public removed:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  get stocks(){
    return (this.parent.get('stock') as FormArray).controls;
  }
  remove(group:any,index:any){
    this.removed.emit({group,index});
  }

}
