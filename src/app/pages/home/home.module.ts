import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';




@NgModule({
  
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('home', {}),

  ],
  declarations:
   [
     HomePage,
    ],
 })
export class HomeModule { }
