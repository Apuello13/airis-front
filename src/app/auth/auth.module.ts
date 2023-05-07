import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [SharedModule, MaterialModule],
  providers: [AuthService],
})
export class AuthModule {}
