import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-operator',
  templateUrl: './from-operator.component.html',
  styleUrls: ['./from-operator.component.scss']
})
export class FromOperatorComponent implements OnInit {
  @ViewChild('btn') private btn:ElementRef;

  selectedValue = 'array';
  constructor() { }

  ngOnInit() {

  }
  onChangeView($event: any) {
    this.selectedValue = $event.value;
    if (this.selectedValue === 'promise') {
      this.showPromise();
    }
    if(this.selectedValue==='event'){
     this.showFromEvent();
    }
  }
  async showPromise() {
    // const promise: Promise<any> = await new Promise<any>((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve("After 1 sec this data will be available")
    //   }, 1000)
    // });
    // from(promise).subscribe(data => {
    //   console.log(data);
    // })
  }
 
  showFromEvent(){
   setTimeout(() => {
    fromEvent(this?.btn?.nativeElement,'click').subscribe(data=>{
      alert('clicked')
    })
   }, 1000);
  }

}
