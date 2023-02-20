import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  products: Product[] = [];
  constructor( private productService : ProduitService) { }

  ngOnInit(): void {
    this.listProducts();
  }
  listProducts() {
    this.productService.getProductList().subscribe(
      data => {this.products = data}
    )
  }

}
