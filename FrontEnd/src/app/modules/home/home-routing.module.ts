import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const houmeRoutes : Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(houmeRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule {}