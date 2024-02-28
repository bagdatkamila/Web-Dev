import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = products;

  constructor(
    private route: ActivatedRoute,
    private router: Router
) {}

  ngOnInit() {
  /* 
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));

    this.products = products.filter(products => products.categoryId === categoryIdFromRoute);
   */
    this.route.paramMap.subscribe(params => {
      const categoryIdFromRoute = Number(params.get('categoryId'));
      // Фильтруем продукты по categoryId
      this.products = products.filter(product => product.categoryId === categoryIdFromRoute);
    });

  }

  like(product: Product) {
    product.likes++;
  }

  share(link: string) {
    const shareMessage = `Product:  ${link}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareMessage)}`;
    window.location.href = telegramLink;
  }

  share_whatsapp(link: string){
    window.location.href = "https://web.whatsapp.com/"
  }
}