import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  routes = [{
    label: 'View Encapsulation',
    link: '/view-encapsulation'
  },
  {
    label: 'Dynamic Components',
    link: '/dynamic-componenets'
  },
  {
    label: 'Custom Directives',
    link: '/custom-directives'
  },
  {
    label: 'Custom Pipes',
    link: '/custom-pipes'
  },
  {
    label: 'Reactive Forms',
    link: '/reactive-forms'
  },
  {
    label: 'Routing',
    link: '/routing'
  },
  {
    label: 'DI',
    link: '/dependency-injection'
  },
  {
    label: 'Rxjs',
    link: '/rxjs'
  },
  {
    label: 'Questions',
    link: '/questions'
  },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
export interface RouteType {
  label: string;
  link: string;
}
