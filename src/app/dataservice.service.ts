import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private rout:Router) { }



  AccountDetails=
[
    
  { uname: "kannappi", emaill: "1@2.com", pwd: "111"  },
  { uname: "luttappi", emaill: "1@3.com", pwd: "222"  },
  { uname: "kattappa", emaill: "1@4.com", pwd: "333"  },
  { uname: "kuttappi", emaill: "1@5.com", pwd: "444"  }

]



login(eml:any,pwd:any)
{
 
  let emailll= this.AccountDetails.find(o=>o.emaill==eml)
  let pswd=this.AccountDetails.find(o=>o.pwd==pwd)
  let nmme=this.AccountDetails.find(o=>o.uname)
  if(emailll&&pswd)
  {
    alert('1')
    this.rout.navigateByUrl('')
  }
  else
  {
    alert("0")
  }

}

}
