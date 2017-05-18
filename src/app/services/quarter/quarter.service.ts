import { Observable } from 'rxjs/Rx';
import { Quarter } from '../../models/Quarter';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable,  } from '@angular/core';

@Injectable()
export class QuarterService {

  constructor(private db: AngularFireDatabase) { }

  get(quarterID?: string): Observable<Quarter[]> {
    let result;
    if (quarterID) {
      result = this.db.list(`quarters/${quarterID}`);
    } else {
      result = this.db.list('quarters');
    }

    return result;
  }
}
