import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [LayoutComponent]
})
export class SharedModule { }
