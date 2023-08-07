import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public products : any;
  public grandTotal : number=0;
  constructor(private cartServise:CartService){}
  ngOnInit(): void {

          this.cartServise.getProducts()
          .subscribe(res =>{
            this.products=res;
            this.grandTotal=this.cartServise.getTotalPrice();
          })
                
  }
  removeItem(item: any){
        this.cartServise.removeCartItem(item);
  }
  emptyCart(){
    this.cartServise.removeAllcart();
  }
}
