import { HttpEventType, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export function authInterceptor(req:HttpRequest<any>,next:HttpHandlerFn){

let modeifiesReq=req
    if(req.method=="POST"){
    modeifiesReq =req.clone({
        headers: req.headers.append("lang","ar")
    })
    }

return next(modeifiesReq).pipe(
    tap((event)=>{
        if(event.type == HttpEventType.Response){
            // console.log(event);
            if(event.status == 200){
                alert('Succus Request')
            }
            else if(event.status == 500){
                alert('try again')
            }
            
        }
    })
);
}