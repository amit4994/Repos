import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product : Observable<Product[]>;
  
  constructor(private productService: ProductService , private router : Router) { }

  ngOnInit(): void {
  this.productService.getProductList().subscribe(data=>this.product=data);
  }
  
  deleteProduct(id:number){
    this.productService.deleteProduct(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    },
    error=>console.log(error));
  }

  updateProduct(id:number){
    this.router.navigate(['update',id]);
  }

  detailProduct(id:number){
    this.router.navigate(['detail',id]);
  }
}
