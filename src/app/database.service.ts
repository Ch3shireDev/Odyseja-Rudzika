import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite/ngx';
import { Decision } from './models/decision';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  database: SQLiteObject;
  config: SQLiteDatabaseConfig;

  constructor(private sqlite: SQLite) {
    this.config = {
      name: "database.db",
      location: "default",
    };

    // this.sqlite.create(this.config).then(db => {
    //   console.log('created');
    //   this.database = db;
    //   // this.createDb().then(() => {
    //   //   // console.log('sql executed');
    //   // }).catch(error => console.log(error))


    // })
  }

  // async createDb() {
  //   await this.database.executeSql('drop table if exists DATA', []).then(() => console.log('ok1'))
  //   await this.database.executeSql('create table if not exists DATA(id integer primary key autoincrement, name VARCHAR(32))', []).then(() => console.log('ok2'))
  //   await this.database.executeSql(`insert into DATA (name) VALUES (?)`, ['yyy']).then(() => console.log('ok4'))
  //   await this.database.executeSql(`insert into DATA (name) VALUES (?)`, ['zzz']).then(() => console.log('ok5'))
  //   await this.database.executeSql(`insert into DATA (name) VALUES (?)`, ['ttt']).then(() => console.log('ok6'))
  // }

  // onClick() {
  //   this.database.executeSql(`select id, name from DATA`, []).then(data => {

  //     for (let i = 0; i < data.rows.length; i++) {
  //       console.log(i)
  //       let item = data.rows.item(i);
  //       console.log(item);
  //       console.log(`${item.id} ${item.name}`);
  //     }
  //   }).catch(reason => { console.log(reason) });
  // }

  async getDecisions(): Promise<Decision[]> {
    let db = await this.sqlite.create(this.config);
    await db.executeSql(`drop table if exists DATA`, []);
    await db.executeSql(`create table if not exists DATA 
    (
      id integer primary key autoincrement, 
      name VARCHAR(32),
      date DATETIME
    )
      `, []);

    await db.executeSql(`insert into DATA (name,date) VALUES (?,?)`, ['yyy', Date.now().toString()])


    let data = await db.executeSql(`select id, name, date from DATA`, []);
    let decisions = [];
    for (let i = 0; i < data.rows.length; i++) {
      let item = data.rows.item(i);
      let decision = new Decision();
      decision.id = item.id;
      decision.name = item.name;
      decision.date = item.date;
      console.log(decision)
      decisions.push(decision)
    }
    return decisions;


  }


}

