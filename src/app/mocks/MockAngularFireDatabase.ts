import { Observable } from 'rxjs/Rx';
const databaseSeed = require('../../assets/seed');

export class MockAngularFireDatabase {
  list(id: string) {
    let key;
    const ids = id.split('/');
    if (ids.length === 1) {
      key = databaseSeed[ids[0]];
    } else {
      key = databaseSeed[ids[0]][ids[1]];
    }
    return Observable.create((observer) => {
      observer.next(key);
      observer.complete();
    });
  }
}
