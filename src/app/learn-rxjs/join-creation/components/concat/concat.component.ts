import { Component, OnInit } from '@angular/core';
import { concat, from, Observable, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent implements OnInit {
  nums$:Observable<any>;
  names$:Observable<any>;
  constructor() { }

  ngOnInit(): void {
    this.nums$=of(23,24,25);
    this.names$=from(["A","B","C"]);
    concat(this.nums$,this.names$).subscribe(data=>{
      console.log(data);
    })

    // output 23 24 25 ---- A B C
  }

}
