import { Component, OnInit } from '@angular/core';
import { interval, Observable, take, timer, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  templateUrl: './zip.component.html',
  styleUrls: ['./zip.component.scss']
})
export class ZipComponent implements OnInit {
  source$:Observable<any>;
  constructor() { }

  ngOnInit(): void {
    this.source$= zip([interval(1000).pipe(take(8)),interval(2000).pipe(take(8)),interval(5000).pipe(take(8))])
    this.source$.subscribe(data=>{
      console.log(data);
    })
  }
 

}
