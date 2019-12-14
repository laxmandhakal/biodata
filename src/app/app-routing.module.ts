import {NgModule} from '@angular/core'
import{ Routes,RouterModule } from "@angular/router"
import { PhotosComponent } from './photos/photos.component'
import {BlogComponent} from './resume/blog.component'
import { HomeComponent } from './home/home.component'
import { IntroComponent } from './contact/intro.component'
const routeblog:Routes = [{
    path:"",
    redirectTo:'home',
    pathMatch:'full'
},
    {
    path:"photos",
    component:PhotosComponent},
{
    path:"blog",
    component:BlogComponent
},
{
    path:"home",
    component:HomeComponent
},
{
    path:"intro",
    component:IntroComponent
},
{
    path:"**",
    component:HomeComponent
}

]
@NgModule({
   imports:[RouterModule.forRoot(routeblog,{useHash:true})] ,
   exports:[RouterModule]
})
export class blogRoute{

}