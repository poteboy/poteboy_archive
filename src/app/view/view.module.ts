import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { ViewRoutringModule } from './view-routing.module';
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { ArtworkComponent } from './artwork/artwork.component';

@NgModule({
    imports: [
        ViewRoutringModule,
    ],
    providers: [],
    declarations: [BaseComponent, HomeComponent, ArtworkComponent]
})
export class ViewModule {}
