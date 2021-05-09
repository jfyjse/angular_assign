import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataser:DataserviceService) { }

  ngOnInit(): void {
  }


  login(eml:any,pwd:any)
  {
this.dataser.login(eml,pwd)
  }

}
