import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';
import { Product } from '../../models/product.interface';
import { StockValidators } from '../../validators/stock-validator';
@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {
  products: Product[] = [
    {
      "id": 1, "price": 2800, "name": "Macbook Pro"
    },
    {
      "id": 2, "price": 2800, "name": "Iphone"
    },
    {
      "id": 3, "price": 2800, "name": "Apple Watch"
    },
    {
      "id": 4, "price": 2800, "name": "Apple Tv"
    }
  ];
  total=0;
  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('',[Validators.required,StockValidators.checkBranch],[this.validateBranch]),
      code: new FormControl('',[Validators.required])
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  },{validators:StockValidators.checkStockEists});
  constructor() { }

  async validateBranch(control:AbstractControl){
    const promise =await new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(control.value.length<5){
          resolve(true);
        }
      }, 5000);
    });
    console.log(promise)
    if(promise){
      return {notMoreThanFive:true};
    }
    return null;

  }

  ngOnInit(): void {
    this.form.get('stock')?.valueChanges.subscribe(data=>{
      this.catculateTotal(data);
    })
  }
  catculateTotal(value:{ product_id: any, quantity: number }[]){
    this.total=value.reduce((prev,next)=>{
      return prev+next.quantity;
    },0)
  }
  onSubmit() {

  }
  createStock(stock:any){
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id,10)),
      quantity: new FormControl(stock.quantity||10)
    });

  }
  addStock($event:any){

    console.log($event.product_id.value)
    const controls=this.form.get('stock') as FormArray;
    controls.push(this.createStock($event));

  }
  removed({group,index}:{group:any,index:any}){
    const controls=this.form.get('stock') as FormArray;
    controls.removeAt(index);
   }

}
