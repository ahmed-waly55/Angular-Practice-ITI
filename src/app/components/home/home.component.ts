import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit , OnDestroy{

  subscribtion!:Subscription;
  constructor(private _Notification:NotificationService){

  }

  ngOnInit():void {
    // this._Notification.getNotification().subscribe((notification)=>{
    //   console.log(notification);
      
    // },(error)=>{
    //   console.log(`----------${error}--------------------`);
      
    // })

    this.subscribtion = this._Notification.getNotification().pipe(
      filter((msg)=> msg.startsWith('Welcome'))
    ).subscribe({
      next: (notification)=>{console.log(notification);
      },
      error:(error)=>{console.log(`-----------${error}----------------`);
      },
      complete:()=>{
        console.log("notification complete");
        
      }
    })
  }


  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }


}
