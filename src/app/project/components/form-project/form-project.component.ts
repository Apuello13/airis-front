import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-project',
  templateUrl: './form-project.component.html',
})
export class FormProjectComponent {
  projectForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private _alert: AlertService,
    private _project: ProjectService
  ) {
    this.initForm();
  }

  initForm(): void {
    this.projectForm = this.fb.group({
      id: 0,
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      description: '',
    });
  }

  save(): void {
    this._project.save(this.projectForm.value).subscribe(
      () => {
        this._alert.success('Proyecto creado con éxito');
        this.goBack();
      },
      (badRequest) => {
        const message = badRequest.error?.message;
        this._alert.error(message);
      }
    );
  }

  goBack(): void {
    this.router.navigateByUrl('/projects');
  }
}
