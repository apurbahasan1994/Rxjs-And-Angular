import { Component, OnInit } from '@angular/core';
import { bufferToggle, interval, Observable, of, take, tap } from 'rxjs';

@Component({
  selector: 'app-buffer-toogle',
  templateUrl: './buffer-toogle.component.html',
  styleUrls: ['./buffer-toogle.component.scss']
})
export class BufferToogleComponent implements OnInit {
  opening$: Observable<any>;
  closing:any;
  source$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.opening$ = interval(400).pipe(tap(() => { console.log('open') }),take(5));
    this.closing =()=> interval(3000).pipe(tap(() => { console.log('close') }),take(5));
    this.source$ = interval(1000).pipe(bufferToggle(this.opening$,this.closing));

  }

}
