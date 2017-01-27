import {Injectable} from '@angular/core';
import {Jsonp, Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProjectService {
  constructor(private _http:Http) {
    console.log('Project Service');
  }

  getProjects() {
    return this._http.get('json/project.json')
      .map(res => res.json());
  }
}
