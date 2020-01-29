import { Injectable, Injector } from '@angular/core';
import { RestService } from 'angular4-hal';
import { Student } from '../../shared/hal-resources/student.resource';
import { UUID } from 'angular2-uuid';
import { Observable } from 'angular4-hal/node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends RestService<Student> {
  constructor(injector: Injector) {
    super(Student, '/userprofile/students', injector);
  }

  findByKeycloakId(id: UUID): Observable<Student[]> {
    const options: any = {
      params: [{ key: 'keycloakId', value: id }]
    };
    return this.search('findByKeycloakId', options);
  }
}
