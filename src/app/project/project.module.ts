import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ProjectService } from './services/project.service';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { FormProjectComponent } from './components/form-project/form-project.component';
import { MapProjectComponent } from './components/map-project/map-project.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    ListProjectComponent,
    FormProjectComponent,
    MapProjectComponent,
  ],
  imports: [
    SharedModule,
    MaterialModule,
    ProjectRoutingModule,
    GoogleMapsModule,
  ],
  providers: [ProjectService],
})
export class ProjectModule {}
