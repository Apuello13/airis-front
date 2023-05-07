import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Project } from '../models/project';

@Injectable()
export class ProjectService {
  projectUrl: string = `${environment.apiUrl}/project`;
  constructor(private http: HttpClient) {}

  save(project: Project) {
    return this.http.post<Project>(this.projectUrl, project);
  }

  findAll() {
    return this.http.get<Project[]>(this.projectUrl);
  }

  deleteById(projectId: number) {
    return this.http.delete(`${this.projectUrl}/${projectId}`);
  }
}
