import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  product: Product;
  id: number;

  constructor(private route:ActivatedRoute,private productService:ProductService, private router:Router) { }

  ngOnInit() {
    this.product= new Product();
    this.id=this.route.snapshot.params['id'];

    this.productService.getProductById(this.id).subscribe(data=>{
      console.log(data)
      this.product=data;
    },
    error=>console.log(error));
  }
  
}
