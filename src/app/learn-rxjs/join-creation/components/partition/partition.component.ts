import { Component, OnInit } from '@angular/core';
import { Observable, of, partition, toArray } from 'rxjs';

@Component({
  selector: 'app-partition',
  templateUrl: './partition.component.html',
  styleUrls: ['./partition.component.scss']
})
export class PartitionComponent implements OnInit {


  source1$:Observable<any>;
  source2$:Observable<any>;

  constructor() { }

  ngOnInit(): void {
   const part= partition(of(1,2,3,4,5,6,7,8,9,10),(x)=>x>4);
   this.source1$=part[0].pipe(toArray());
   this.source2$=part[1].pipe(toArray());
  }

}
