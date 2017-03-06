import { Component } from '@angular/core';
import { ProjectService } from '../../services/projects.service';

@Component({
  moduleId: module.id,
  selector: 'projects',
  templateUrl: `projects.component.html`,
})
export class ProjectsComponent  {
  data: Array<Object>;

  constructor(private _projectService: ProjectService) {
    this._projectService.getProjects().subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }
}
