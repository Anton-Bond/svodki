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

  date = (new Date()).toLocaleDateString();
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
        this.categories = categories.filter(c => c.date === this.date);
        if (this.categories.length === 0) {
          this.categories.push({date: this.date, worker: 'Иванов', pine: 0, oak: 0, birch: 0});
          this.categories.push({date: this.date, worker: 'Петров', pine: 0, oak: 0, birch: 0});
          this.categories.push({date: this.date, worker: 'Сидоров', pine: 0, oak: 0, birch: 0});
        }
        categories.forEach(category => {
          this.totalPine += category.pine;
          this.totalOak += category.oak;
          this.totalBirch += category.birch;
        });
      });
  }

}
