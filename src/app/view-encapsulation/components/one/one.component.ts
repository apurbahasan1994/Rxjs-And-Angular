import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  encapsulation:ViewEncapsulation.Emulated
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
