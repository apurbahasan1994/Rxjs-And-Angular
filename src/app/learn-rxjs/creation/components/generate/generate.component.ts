import { Component, OnInit } from '@angular/core';
import { generate, Observable, toArray } from 'rxjs';
import { GenerateOptions } from 'rxjs/internal/observable/generate';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {
  generateOptions: GenerateOptions<number, number> = {
    resultSelector: x => x,
    condition: x => x < 3,
    initialState: 0,
    iterate: x => x + 1
  }
  source$:Observable<number[]>;
  constructor() { }

  ngOnInit(): void {
   
  }
  generateValue() {
    this.source$ = generate(this.generateOptions).pipe(toArray());
  }

}
