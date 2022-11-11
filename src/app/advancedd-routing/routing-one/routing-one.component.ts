import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-routing-one',
  templateUrl: './routing-one.component.html',
  styleUrls: ['./routing-one.component.scss']
})
export class RoutingOneComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  data: Observable<any> = this.route.data;
  ngOnInit(): void {

    this.router.events.subscribe(event => {
      // when navihation successfull
      if (event instanceof NavigationEnd) {
        console.log(event);
      }
    })
  }

}
