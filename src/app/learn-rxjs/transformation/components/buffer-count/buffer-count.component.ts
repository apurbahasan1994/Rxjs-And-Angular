import { Component, OnInit } from '@angular/core';
import { buffer, bufferCount, interval, Observable, take } from 'rxjs';

@Component({
  selector: 'app-buffer-count',
  templateUrl: './buffer-count.component.html',
  styleUrls: ['./buffer-count.component.scss']
})
export class BufferCountComponent implements OnInit {
  source$:Observable<any>;
  constructor() { }

  ngOnInit(): void {
    this.source$=interval(100).pipe(take(50),bufferCount(10));
  }

}
