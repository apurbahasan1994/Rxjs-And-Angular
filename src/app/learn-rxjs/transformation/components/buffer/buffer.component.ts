import { Component, OnInit } from '@angular/core';
import { buffer, interval, Observable, take } from 'rxjs';

@Component({
  selector: 'app-buffer',
  templateUrl: './buffer.component.html',
  styleUrls: ['./buffer.component.scss']
})
export class BufferComponent implements OnInit {
  source$:Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.source$=interval(100).pipe(take(50),buffer(interval(500)));
   
    
  }

}
