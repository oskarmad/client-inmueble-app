import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SpinnerModule } from '@app/shared/indicators';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,

    MatFormFieldModule,
    MatButtonModule,
    FormsModule,

    MatIconModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    SpinnerModule

  ]
})
export class RegistrationModule { }
