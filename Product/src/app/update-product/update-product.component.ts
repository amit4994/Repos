import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  pid: number;
  product: Product;


  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(){
    this.product = new Product();
    this.pid = this.route.snapshot.params['id'];


    this.productService.getProductById(this.pid).subscribe(data=>{
      console.log(data)
      this.product=data;
    },error=>console.log(error));
  }

  updateProduct(){
    this.productService.updateProduct(this.pid,this.product).subscribe(data=>{
      console.log(data);
      this.product=new Product();
      this.gotoList();
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.updateProduct();
  }
  gotoList() {
    this.router.navigate(['/products']);
  }
}
