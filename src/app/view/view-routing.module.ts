import { Route } from '@angular/compiler/src/core';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

// components
import { BaseComponent } from './base/base.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewRoutringModule {}
