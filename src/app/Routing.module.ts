import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RegisterComponent} from "./register/register.component";
import {HomeComponent} from "./home/home.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {AuthGuard} from "./guards/auth.guard";


const appRouting:Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'products', canActivate:[AuthGuard], component:ProductListComponent}
]

@NgModule({

  imports: [
    RouterModule.forRoot(appRouting)
  ],
  exports: [RouterModule]
})
export class RoutingModule{}
