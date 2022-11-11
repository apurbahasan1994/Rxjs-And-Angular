import { Component, Input, OnInit } from '@angular/core';
import { RouteType } from 'src/app/home/home.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() routes:RouteType[]=[];
  @Input() label:string;
  constructor() { }
  ngOnInit(): void {
  }

}
