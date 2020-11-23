import { Route } from '@angular/compiler/src/core';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

// components
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';
import { ArtworkComponent } from './artwork/artwork.component';


const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'artwork',
                component: ArtworkComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewRoutringModule {}
