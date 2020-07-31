import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { CategoryService } from '../../shared/services/category.service';
import { Fruit } from '../../shared/models/fruit.model'

@Component({
  selector: 'app-inp-fruit',
  templateUrl: './inp-fruit.component.html',
  styleUrls: ['./inp-fruit.component.css']
})
export class InpFruitComponent implements OnInit {

  date = (new Date()).toLocaleDateString();
  worker = '';
  category = 'fruit';
  plan: Fruit;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.worker = JSON.parse(window.localStorage.getItem('user')).name;
    this.categoryService.getResults(this.category)
    .subscribe(categories => {
      this.plan = categories.shift();
    });
  }

  form = this.fb.group({
    apple: ['', [Validators.required]],
    pear: ['', [Validators.required]],
    plum: ['', [Validators.required]],
  })

  get apple() { return this.form.get('apple'); }
  get pear() { return this.form.get('pear'); }
  get plum() { return this.form.get('plum');}


  onSubmit() {
    const formData = this.form.value;
    let fruit: Fruit = new Fruit(this.date, this.worker, formData.apple, formData.pear, formData.plum);
    this.categoryService.addFruit(fruit).subscribe(() => {
      this.router.navigate(
        ['/system', 'inputs', 'vegetable']
      );
    });
  }

}
