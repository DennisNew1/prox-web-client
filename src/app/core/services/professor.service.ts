import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal';
import { Professor } from '../../shared/hal-resources/professor.resource';
import { UUID } from 'angular2-uuid';
import { Observable } from 'angular4-hal/node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProfessorService extends RestService<Professor> {
  constructor(injector: Injector) {
    super(Professor, 'userprofile/professors', injector);
  }

  findByKeycloakId(id: UUID): Observable<Professor[]> {
    const options: any = {
      params: [{ key: 'keycloakId', value: id }]
    };
    return this.search('findByKeycloakId', options);
  }
}