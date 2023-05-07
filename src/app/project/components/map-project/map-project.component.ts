import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-map-project',
  templateUrl: './map-project.component.html',
})
export class MapProjectComponent implements OnInit {
  projects: Project[] = [];
  markers: google.maps.LatLngLiteral[] = [];
  constructor(private _project: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this._project.findAll().subscribe((response) => {
      this.projects = response;
      this.getMarks();
    });
  }

  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng) this.markers.push(event.latLng.toJSON());
  }

  getMarks(): void {
    const EMPTY = 0;
    if (this.projects.length !== EMPTY)
      this.markers = this.projects.map((project) => {
        return {
          lat: +project.latitude,
          lng: +project.longitude,
        };
      });
  }

  getDescription(marker: google.maps.LatLngLiteral): string {
    const description = this.projects.find(
      (project) =>
        +project.latitude === marker.lat && +project.longitude === marker.lng
    )?.description;
    return description ?? '';
  }
}
