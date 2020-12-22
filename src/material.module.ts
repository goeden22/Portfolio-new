import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'

const MaterialComponents = [
  MatCardModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule
  
]

@NgModule({
  imports: [
    MaterialComponents,
    
  ],
  exports: [
    MaterialComponents,
   
  ]
})
export class MaterialModule { }
