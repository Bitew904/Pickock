import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productlist: any;
  public searchTerm:string='';
  searchKey:string="";
  public filterCatagory: any 
  constructor(private api: ApiService, private cartService : CartService) { }
  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productlist = res;
        this.filterCatagory=res;
        this.productlist.forEach((a:any) => {
          if(a.catagory==="women's clothing"||a.catagory==="men's clothing"){
            a.catagory="fashion"
          }
          Object.assign(a,{quantity:1,total:a.price});
          
        });
      });
      this.cartService.search.subscribe((val:any)=>{
        this.searchKey=val;

      })
  }
  addtocart(item:any){
         this.cartService.addtoCart(item);
  }
  filter(catagory:any){

    this.filterCatagory=this.productlist
    .filter(()=>{

    })
  }
  search(event :any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }
}
