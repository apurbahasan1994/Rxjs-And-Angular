import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-dependency-detail',
  templateUrl: './dependency-detail.component.html',
  styleUrls: ['./dependency-detail.component.scss']
})
export class DependencyDetailComponent implements OnInit {

  constructor(private foodSerivce:FoodService) { }

  ngOnInit(): void {
  }

}
