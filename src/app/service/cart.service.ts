import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
          public cartItemlist: any=[]
          public productList= new BehaviorSubject<any>([]); 
          public search= new BehaviorSubject<string>("");
  product: any;
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  } 
  setProducts(product:any){
    this.cartItemlist.push(...product);
    this.productList.next(this.product);
  }
  addtoCart(product: any){
    this.cartItemlist.push(product);
    this.productList.next(this.cartItemlist)
    this.getTotalPrice();
    console.log(this.cartItemlist)

}
getTotalPrice() :number{
  let grandTotal=0;
  this.cartItemlist.map((a : any) =>{
    grandTotal += a.total;
  })
   return grandTotal;
}
removeCartItem(product: any){
      this.cartItemlist.map((a:any,index:any)=>{
                if(product.id===a.id){
                  this.cartItemlist.splice(index,1);
                }
      })
      this.productList.next(this.cartItemlist);
}
removeAllcart(){
  this.cartItemlist = []
  this.productList.next(this.cartItemlist);
}
 
}