import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';


@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    forkJoin([this.apiCallFirst(), this.apiCallSecond()]).subscribe(data => {
      console.log(data);
    })
  }

  async apiCallFirst() {
    const res=await new Promise((resolve)=>{
      setTimeout(() => {
        resolve([1,2,3,4]);
      }, 100);
    });
    return res;

  }
  async apiCallSecond() {
    const res=await new Promise((resolve)=>{
      setTimeout(() => {
        resolve([5,6,7,8]);
      }, 100);
    });
    return res;
  }

}
