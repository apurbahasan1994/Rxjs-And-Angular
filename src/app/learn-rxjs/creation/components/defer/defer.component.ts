import { Component, OnInit } from '@angular/core';
import { defer, Observable, of } from 'rxjs';

@Component({
  selector: 'app-defer',
  templateUrl: './defer.component.html',
  styleUrls: ['./defer.component.scss']
})
export class DeferComponent implements OnInit {
  source1$:Observable<any>;
  source2$:Observable<any>;
  constructor() { }

  ngOnInit(): void {
    this.source2$=defer(()=>{
      return of(new Date())
    });

    this.source2$.subscribe(data=>{
      console.log(data);
    });
    setTimeout(() => {
      this.source2$.subscribe(data=>{
        console.log(data);
      });
    }, 4000);
  }

}
