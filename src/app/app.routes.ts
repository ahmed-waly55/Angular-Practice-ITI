import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DetailsComponent } from './components/details/details.component';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { AddProductComponent } from './components/add-product/add-product.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path: '' , redirectTo: 'home' , pathMatch:'full'},
    {path: 'home' , component: HomeComponent},
    {path:'login',component: LoginComponent},
    {path:'register',component: RegisterComponent},

    // lazy loading 
    {path: 'products', loadComponent:()=> import('./components/products/products.component')
        .then((obj)=>obj.ProductsComponent),
         canActivate:[authGuard]},

    {path:'add',component:AddProductComponent},

    {path: 'about', component: AboutUsComponent,
    children: [
        // {path:'', component: VisionComponent}, // defualt visting in the not selected component
        {path: '' ,pathMatch:'full' , redirectTo: '/about/vision'}, // anthor visting in the not selected component
        {path: 'vision', component: VisionComponent}, 
        {path: 'values', component: ValuesComponent}
            ],
    },

    {path: 'details/:id', component: DetailsComponent},
    {path: 'order', component: OrderComponent},

    
    {path: '**' , component: NotFoundComponent}
];
