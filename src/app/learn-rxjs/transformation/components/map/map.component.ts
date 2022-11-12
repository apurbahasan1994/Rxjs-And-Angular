import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, take, toArray } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  source:Observable<any>

  constructor() { }

  ngOnInit(): void {
    this.source=interval(1).pipe(take(10),map((val)=>{return val*val}),toArray());
  }

}
