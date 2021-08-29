import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  database: SQLiteObject;
  constructor(private sqlite: SQLite) { }
  ngOnInit(): void {
    let config: SQLiteDatabaseConfig = {
      name: "database.db",
      location: "default",
    };

    this.sqlite.create(config).then(db => {
      this.database = db;
      this.createDb().then(() => {
        // console.log('sql executed');
      }).catch(error => console.log(error))


    })
  }

  async createDb() {
    // await this.database.executeSql('drop table if exists DATA', []).then(() => console.log('ok1'))
    // await this.database.executeSql('create table if not exists DATA(id integer primary key autoincrement, name VARCHAR(32))', []).then(() => console.log('ok2'))
    // await this.database.executeSql(`insert into DATA (name) VALUES (?)`, ['xxx']).then(() => console.log('ok3'))
    // await this.database.executeSql(`insert into DATA (name) VALUES (?)`, ['yyy']).then(() => console.log('ok4'))
    // await this.database.executeSql(`insert into DATA (name) VALUES (?)`, ['zzz']).then(() => console.log('ok5'))
    // await this.database.executeSql(`insert into DATA (name) VALUES (?)`, ['ttt']).then(() => console.log('ok6'))
  }

  onClick() {
    this.database.executeSql(`select id, name from DATA`, []).then(data => {

      for (let i = 0; i < data.rows.length; i++) {
        console.log(i)
        let item = data.rows.item(i);
        console.log(item);
        console.log(`${item.id} ${item.name}`);
      }
    }).catch(reason => { console.log(reason) });
  }

}
