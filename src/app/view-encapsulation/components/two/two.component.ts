import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
