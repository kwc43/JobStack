import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./materials/material.module";
import { HeaderComponent} from "./header/header.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, MaterialModule, FlexLayoutModule, RouterModule],
    declarations: [HeaderComponent],
    exports: [HeaderComponent, MaterialModule, FlexLayoutModule],

})

export class SharedModule{}