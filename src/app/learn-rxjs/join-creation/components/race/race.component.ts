import { Component, OnInit } from '@angular/core';
import { Observable, race } from 'rxjs';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  source$:Observable<any>;

  constructor() { }

  ngOnInit(): void {
   this.source$= race([this.api1(),this.api2(),this.api3()])

  }

  async api1(){
    const prom=await new Promise((resolve)=>{
      setTimeout(() => {
        resolve('first api returned')
      }, 1000);

    });
    return prom;
  }
  async api2(){
    const prom=await new Promise((resolve)=>{
      setTimeout(() => {
        resolve('2ndapi returned')
      }, 200);

    });
    return prom;
  }
  async api3(){
    const prom=await new Promise((resolve)=>{
      setTimeout(() => {
        resolve('3rd api returned')
      }, 300);

    });
    return prom;
  }
 

}
