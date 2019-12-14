import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MsgService } from './services/msg.service'
import {requests} from './services/service'
import {observable} from 'rxjs'
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  user:any={}
submitting:boolean=false
constructor( public router:Router,
    public call:requests,
   public msgService:MsgService)  
{
  
}
    

  ngOnInit() {
    
  }
  submit()
  {
  
    this.call.send(this.user).subscribe((success)=>{
     
this.msgService.showSuccess("email sent successfully")
console.log('success')
 },
    (err)=>{
      
this.msgService.showError(err)
console.log('fail')

    })
  this.submitting=true
  }

}
