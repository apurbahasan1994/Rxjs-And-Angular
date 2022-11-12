import { Component, OnInit } from '@angular/core';
import { bufferTime, interval, Observable, take } from 'rxjs';

@Component({
  selector: 'app-buffer-time',
  templateUrl: './buffer-time.component.html',
  styleUrls: ['./buffer-time.component.scss']
})
export class BufferTimeComponent implements OnInit {
  source$:Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.source$=interval(300).pipe(take(50),bufferTime(1000,3000));
  }

}
