import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite/ngx';
import { DecisionData } from './models/decision';
import { RobinData } from './models/robin';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  updateDate(id: number, date: Date): Promise<void> {
    return this.getDatabase().then((db) => {
      console.log(date);
      console.log(id);
      db.executeSql('update ROBIN_DATA set currentDate = ? where id = ?', [date, id])
    });
  }

  _database: SQLiteObject;
  config: SQLiteDatabaseConfig;

  constructor(private sqlite: SQLite) {
    this.config = {
      name: "database.db",
      location: "default",
    };
  }

  getDatabase(): Promise<SQLiteObject> {
    if (this._database) {
      return new Promise((a, b) => a(this._database));
    }
    return this.sqlite.create(this.config)
      .then(db => {
        this._database = db;
        return db;
      })
  }

  getCurrentDate(): Promise<Date> {
    return this.getDatabase().then(db => {
      return db.executeSql(`select currentDate from ROBIN_DATA`, []).then(data => {
        return data.rows.item(0).currentDate;
      })
    });
  }

  async createRobinTable(db: SQLiteObject): Promise<void> {
    // await db.executeSql(`drop table if exists ROBIN_DATA`, []);
    await db.executeSql(`create table if not exists ROBIN_DATA
  (
    id integer primary key autoincrement,
    name varchar(64),
    condition varchar(32),
    feeding varchar(64),
    weather varchar(64),
    currentLocation varchar(64),
    decision varchar(64),
    currentDate DATETIME
  )`, []);
    await db.executeSql(`insert into ROBIN_DATA (
      name,
      condition, 
      feeding, 
      weather, 
      currentLocation, 
      decision, 
      currentDate
    ) values (?,?,?,?,?,?,?)`, [
      'Remus',
      'a', 'b', 'c', 'd', 'e', Date.now()
    ]);
  }

  async getRobinData(): Promise<RobinData> {

    let db = await this.getDatabase();
    await this.createRobinTable(db);

    let data = await db.executeSql(`select * from ROBIN_DATA`, []);

    let dataRow = data.rows.item(0);
    let robinData = new RobinData();

    robinData.id = dataRow.id;
    robinData.name = dataRow.name;
    robinData.condition = dataRow.condition;
    robinData.feeding = dataRow.feeding;
    robinData.weather = dataRow.weather;
    robinData.currentLocation = dataRow.currentLocation;
    robinData.decision = dataRow.decision;
    robinData.currentDate = new Date(dataRow.currentDate);

    return robinData;
  }

  async getDecisions(): Promise<DecisionData[]> {
    let db = await this.getDatabase();
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
      let decision = new DecisionData();
      decision.id = item.id;
      decision.name = item.name;
      decision.date = item.date;
      console.log(decision)
      decisions.push(decision)
    }
    return decisions;


  }


}

