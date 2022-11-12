import { Component, OnInit } from '@angular/core';
import { bufferWhen, interval, Observable, take } from 'rxjs';

@Component({
  selector: 'app-buffer-when',
  templateUrl: './buffer-when.component.html',
  styleUrls: ['./buffer-when.component.scss']
})
export class BufferWhenComponent implements OnInit {
  source$:Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.source$=interval(500).pipe(take(10),bufferWhen(()=>{
      return interval(2000);
    }))
  }

}
