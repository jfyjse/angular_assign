import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dataasr:DataserviceService, private rout:Router ) { }

  ngOnInit(): void {
  }
  name2=this.dataasr.unme
  
  
  // name2=localStorage.getItem('name1')

  
  
  log_Status=this.dataasr.log_status
 logout(){
   alert('click works')
   window.localStorage.clear();
   this.rout.navigateByUrl("login")

  console.log(this.name2);
 }






}
