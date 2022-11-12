import { Component, OnInit } from '@angular/core';
import { interval, mapTo, take, toArray } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styleUrls: ['./map-to.component.scss']
})
export class MapToComponent implements OnInit {
  source: any;

  constructor() { }

  ngOnInit(): void {
    this.source=interval(1).pipe(take(10),mapTo(10),toArray());
  }

}
