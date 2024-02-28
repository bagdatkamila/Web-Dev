import { Component } from '@angular/core';
import { categories } from '../category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.css'
})
export class ProductCategoryComponent {
  categories = categories;
}
