import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { CommonModule } from '@angular/common';
import { BrowserModule} from "@angular/platform-browser"
import { blogRoute } from './app-routing.module';
import { PhotosComponent } from './photos/photos.component'
import {BlogComponent} from './resume/blog.component'
import { HomeComponent } from './home/home.component'
import { IntroComponent } from './contact/intro.component'
import {ToastrModule} from 'ngx-toastr'
import {AppComponent} from './app.component'
import { requests } from './contact/services/service';
import { HttpClientModule } from '@angular/common/http';
import { MsgService } from './contact/services/msg.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [HomeComponent,IntroComponent,PhotosComponent,BlogComponent,AppComponent],
  imports: [
   FormsModule,blogRoute,BrowserModule,ToastrModule.forRoot(),HttpClientModule,BrowserAnimationsModule
  ],
  bootstrap:[AppComponent],
  providers:[requests,MsgService]
  
})
export class AppModule { }
