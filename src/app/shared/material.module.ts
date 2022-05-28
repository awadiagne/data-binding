import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


import { NgModule } from '@angular/core';

const MODULES = [
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule
]

@NgModule({
    imports : MODULES,
    exports : MODULES
})

export class MaterialModule{}