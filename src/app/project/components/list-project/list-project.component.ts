import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Actions } from 'src/app/utilities/actions';
import { Table } from 'src/app/shared/models/table';
import { Event } from 'src/app/shared/models/event';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
})
export class ListProjectComponent implements OnInit {
  projects: Project[] = [];
  actions: string[] = [Actions.DELETE];
  columns: Table[] = [
    { headerName: 'Latitud', field: 'latitude' },
    { headerName: 'Longitud', field: 'longitude' },
    { headerName: 'Acciones', field: 'id' },
  ];
  constructor(private _alert: AlertService, private _project: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this._project.findAll().subscribe((response) => (this.projects = response));
  }

  getEvent(action: Event): void {
    if (action.event === Actions.DELETE) this.deleteById(action.rowId);
  }

  deleteById(projectId: number): void {
    this._project.deleteById(projectId).subscribe(
      () => {
        this._alert.success('Proyecto eliminado con éxito');
        this.projects = this.projects.filter(
          (project) => project.id !== projectId
        );
      },
      (badRequest) => {
        const message = badRequest.error?.message;
        this._alert.error(message);
      }
    );
  }
}
