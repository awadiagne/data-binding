import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

const MODULES = [
    MatSliderModule,
    MatButtonModule
]

@NgModule({
    imports : MODULES,
    exports : MODULES
})

export class MaterialModule{}