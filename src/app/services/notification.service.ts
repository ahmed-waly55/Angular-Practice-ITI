import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification:string[];
  constructor() { 
    this.notification = [
      "Welcome to our e-commerce website!",
      "New product has been added to the store!",
      "Your order has been placed successfully!",
      "",
      "Your payment has been processed successfully!"
    ]
  }


  getNotification():Observable<string>{
    return new Observable<string>((observer)=>{
      // observer.next();

      let counter = 0;
     let notificationInterval = setInterval(()=>{
        if(counter == this.notification.length){
          observer.complete();
        }

        if(this.notification[counter] == ""){
          observer.error("this notification is empty");
        }


        observer.next(this.notification[counter])
        counter++;

      },2000);

      return {
        unsubscribe: ()=>{
          clearInterval(notificationInterval)
        }
      }

    })

  // return from(this.notification)

   }
}
