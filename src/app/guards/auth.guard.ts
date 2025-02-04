import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let _UserAuthService = inject(UserAuthService)
  let router = inject(Router)
  if(_UserAuthService.getUserLogged()){
    return true;
  }
  else{
    router.navigate(['/login'])
    return false;
  }
  // return true;
};
