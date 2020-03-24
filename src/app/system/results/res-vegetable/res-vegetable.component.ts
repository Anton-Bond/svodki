import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../shared/services/category.service';
import { Vegetable } from '../../shared/models/vegetable.model';

@Component({
  selector: 'app-res-vegetable',
  templateUrl: './res-vegetable.component.html',
  styleUrls: ['./res-vegetable.component.css']
})
export class ResVegetableComponent implements OnInit {

  category = 'vegetable';

  categories: Vegetable[] = [];
  plan: Vegetable;

  totalCabbage = 0;
  totalCarrot = 0;
  totalOnion = 0;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getResults(this.category)
      .subscribe(categories => {
        this.plan = categories.shift();
        this.categories = categories;
        categories.forEach(category => {
          this.totalCabbage += category.cabbage;
          this.totalCarrot += category.carrot;
          this.totalOnion += category.onion;
        });
      });
  }

}
