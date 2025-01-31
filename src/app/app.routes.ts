import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DetailsComponent } from './components/details/details.component';
import { OrderComponent } from './components/order/order.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { VisionComponent } from './components/vision/vision.component';
import { ValuesComponent } from './components/values/values.component';

export const routes: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: 'products', component : ProductsComponent},

    {path: 'about', component: AboutUsComponent,
    children: [
        // {path:'', component: VisionComponent}, // defualt visting in the not selected component
        {path: '' ,pathMatch:'full' , redirectTo: '/about/vision'}, // anthor visting in the not selected component
        {path: 'vision', component: VisionComponent},
        {path: 'values', component: ValuesComponent}
            ],
    },

    {path: 'details', component: DetailsComponent},
    {path: 'order', component: OrderComponent},

    
    {path: '**' , component: NotFoundComponent}
];
