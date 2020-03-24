import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../shared/services/category.service';
import { Seedling } from '../../shared/models/seedling.model';

@Component({
  selector: 'app-res-seedling',
  templateUrl: './res-seedling.component.html',
  styleUrls: ['./res-seedling.component.css']
})
export class ResSeedlingComponent implements OnInit {

  category = 'seedling';

  categories: Seedling[] = [];
  plan: Seedling;

  totalPine = 0;
  totalOak = 0;
  totalBirch = 0;

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.getResults(this.category)
      .subscribe(categories => {
        this.plan = categories.shift();
        this.categories = categories;
        categories.forEach(category => {
          this.totalPine += category.pine;
          this.totalOak += category.oak;
          this.totalBirch += category.birch;
        });
      });
  }

}
