import { Component, OnInit } from '@angular/core';
import { from, mergeMap, Observable, toArray } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
  source$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.source$ = from([["hello",100], ["world",200], ["How",50], ["are",1000], ["you",60]]).pipe(mergeMap(([str,time]) => this.api1(str,time)),toArray());
  }
  async api1(str:any,time:any) {
    const prom = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(str);
      }, time);

    });
    return prom;
  }
  


}
