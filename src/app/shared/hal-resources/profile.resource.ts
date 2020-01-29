import { CustomResource } from './custom-resource';
import { UUID } from 'angular2-uuid';

export class Profil extends CustomResource {
  name: string;
  adresse: string;
  strasse: string;
  plz: string;
  raum: string;
  phonenumber: number;
  mail: string;
  tags: string[];
  sprechzeiten: string;
  bildSrc: string;
  aboutMe: string;
  keyCloakId: UUID;
}
