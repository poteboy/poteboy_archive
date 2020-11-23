import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { ViewRoutringModule } from './view-routing.module';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        ViewRoutringModule,
    ],
    providers: [],
    declarations: [BaseComponent, HomeComponent, HeaderComponent]
})
export class ViewModule {}
