import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { CategoryService } from '../../shared/services/category.service';
import { Seedling } from '../../shared/models/seedling.model'

@Component({
  selector: 'app-inp-seedling',
  templateUrl: './inp-seedling.component.html',
  styleUrls: ['./inp-seedling.component.css']
})
export class InpSeedlingComponent implements OnInit {

  date = (new Date()).toLocaleDateString();
  worker = '';
  category = 'seedling';
  plan: Seedling;

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
    pine: ['', [Validators.required]],
    oak: ['', [Validators.required]],
    birch: ['', [Validators.required]],
  })

  get pine() { return this.form.get('pine'); }
  get oak() { return this.form.get('oak'); }
  get birch() { return this.form.get('birch');}


  onSubmit() {
    const formData = this.form.value;
    let seedling: Seedling = new Seedling(this.date, this.worker, formData.pine, formData.oak, formData.birch);
    this.categoryService.addSeedling(seedling).subscribe(() => {
      this.router.navigate(
        ['/system', 'inputs', 'endPage']
      );
    });
  }

}
