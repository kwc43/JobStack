import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
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