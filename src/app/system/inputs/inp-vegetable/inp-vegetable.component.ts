import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { CategoryService } from '../../shared/services/category.service';
import { Vegetable } from '../../shared/models/vegetable.model'

@Component({
  selector: 'app-inp-vegetable',
  templateUrl: './inp-vegetable.component.html',
  styleUrls: ['./inp-vegetable.component.css']
})
export class InpVegetableComponent implements OnInit {

  date = (new Date()).toLocaleDateString();
  worker = '';
  category = 'vegetable';
  plan: Vegetable;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
    ) { }

  ngOnInit() {
    this.worker = JSON.parse(window.localStorage.getItem('user')).name;
    this.categoryService.getResults(this.category)
    .subscribe(categories => {
      this.plan = categories.shift();
    });
  }

  form = this.fb.group({
    cabbage: ['', [Validators.required]],
    carrot: ['', [Validators.required]],
    onion: ['', [Validators.required]],
  })

  get cabbage() { return this.form.get('cabbage'); }
  get carrot() { return this.form.get('carrot'); }
  get onion() { return this.form.get('onion');}

  onSubmit() {
    const formData = this.form.value;
    let vegetable: Vegetable = new Vegetable(this.date, this.worker, formData.cabbage, formData.carrot, formData.onion);
    this.categoryService.addVegetable(vegetable).subscribe(() => {
      this.router.navigate(
        ['/system', 'inputs', 'seedling']
      );
    });
  }

}
