import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../shared/services/category.service';
import { Fruit } from '../../shared/models/fruit.model';

@Component({
  selector: 'app-res-fruit',
  templateUrl: './res-fruit.component.html',
  styleUrls: ['./res-fruit.component.css']
})

export class ResFruitComponent implements OnInit {

  category = 'fruit';

  categories: Fruit[] = [];
  plan: Fruit;

  totalApple = 0;
  totalPear = 0;
  totalPlum = 0;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getResults(this.category)
      .subscribe(categories => {
        this.plan = categories.shift();
        this.categories = categories;
        categories.forEach(category => {
          this.totalApple += category.apple;
          this.totalPear += category.pear;
          this.totalPlum += category.plum;
        });
      });
  }

}
