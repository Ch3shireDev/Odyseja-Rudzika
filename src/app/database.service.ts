import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject, SQLiteDatabaseConfig } from '@ionic-native/sqlite/ngx';
import { RobinModel } from '../core/robin-model';
import { DecisionData } from './models/decision';
import { Platform } from '@ionic/angular';
import { Coordinates } from 'src/core/coordinates';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  _database: SQLiteObject;
  config: SQLiteDatabaseConfig;

  constructor(private sqlite: SQLite) {
    this.config = {
      name: "database.db",
      location: "default",
    };
  }

  getRobinFromStorage(id: number): RobinModel {
    const robinTxt = localStorage.getItem(`robin-${id}`);
    if (robinTxt === null) return new RobinModel();
    try {
      let dict = JSON.parse(robinTxt);
      let robinModel = <RobinModel>dict;
      robinModel.currentDate = new Date(Date.parse(dict.currentDate));
      robinModel.currentLocation = new Coordinates(robinModel.currentLocation.latitude, robinModel.currentLocation.longitude);
      robinModel.finalLocation = new Coordinates(robinModel.finalLocation.latitude, robinModel.finalLocation.longitude);
      return robinModel;
    }
    catch {
      return new RobinModel();
    }
  }

  setRobinToStorage(id: number, robin: RobinModel) {
    if (id === undefined) id = 1;
    localStorage.setItem(`robin-${id}`, JSON.stringify(robin));
  }

  async updateDate(id: number, date: Date): Promise<void> {
    const db = await this.getDatabase();
    if (db === null) {
      let robin = this.getRobinFromStorage(id);
      robin.currentDate = date;
      this.setRobinToStorage(id, robin);
      return;
    }
    db.executeSql('update ROBIN_DATA set currentDate = ? where id = ?', [date, id]);

  }

  async getDatabase(): Promise<SQLiteObject> {
    if (this.sqlite == undefined) return null;
    if (this._database) return this._database;
    let db = await this.sqlite.create(this.config);
    if (db == undefined) return null;
    this._database = db;
    return db;
  }
  async getRobin(id: number): Promise<RobinModel> {
    let db = await this.getDatabase();

    if (db === null) {
      return this.getRobinFromStorage(id);
    }

    await this.createRobinTable(db);

    let data = await db.executeSql(`select * from ROBIN_DATA where id=?`, [id]);

    let dataRow = data.rows.item(0);
    let robin = new RobinModel();

    robin.id = dataRow.id;
    robin.name = dataRow.name;
    robin.sex = dataRow.sex;
    robin.currentDate = new Date(dataRow.currentDate);
    robin.turn = dataRow.turn;
    robin.distance = dataRow.distance;
    robin.fatTissue = dataRow.fatTissue;
    robin.health = dataRow.health;
    robin.weather.temperature = dataRow.weatherTemperature;
    robin.weather.rainfall = dataRow.weatherRain;
    robin.weather.windType = dataRow.weatherWindType;
    robin.weather.windDirection = dataRow.weatherWindDirection;
    robin.feedingGround = dataRow.feedingGround;
    robin.directionType = dataRow.directionType;
    robin.currentLocation.latitude = dataRow.currentLocationLatitude;
    robin.currentLocation.longitude = dataRow.currentLocationLongitude;
    robin.finalLocation.latitude = dataRow.finalLocationLatitude;
    robin.finalLocation.longitude = dataRow.finalLocationLongitude;
    robin.sparrowHawkAttacksSurvived = dataRow.sparrowHawkAttacksSurvived;
    robin.glassSkyscraperCollisions = dataRow.glassSkyscraperCollisions;
    robin.weatherBreakdowns = dataRow.weatherBreakdowns;
    robin.lostInTheMist = dataRow.lostInTheMist;
    robin.overweightDay = dataRow.overweightDay;

    return robin;
  };
  createRobin(): Promise<RobinModel> {
    throw new Error('Method not implemented.');
  };

  async getCurrentDate(): Promise<Date> {
    const db = await this.getDatabase();
    if (db === null) {
      //TODO: Uzupełnić.
      return new Date();
    }
    const data = await db.executeSql(`select currentDate from ROBIN_DATA`, []);
    return data.rows.item(0).currentDate;
  }

  async createRobinTable(db: SQLiteObject): Promise<void> {
    if (db === null) return;
    const robin = new RobinModel();
    await db.executeSql(`create table if not exists ROBIN_DATA
  (
    id integer primary key autoincrement,
    name varchar(64),
    sex integer,
    currentDate DATETIME,
    turn integer,
    distance REAL,
    fatTissue REAL,
    health integer,
    weatherTemperature integer,
    weatherRain integer,
    weatherWindType integer,
    weatherWindDirection integer,
    feedingGround integer,
    directionType integer,
    currentLocationLatitude REAL,
    currentLocationLongitude REAL,
    finalLocationLatitude REAL,
    finalLocationLongitude REAL,
    sparrowHawkAttacksSurvived integer,
    glassSkyscraperCollisions integer,
    weatherBreakdowns integer,
    lostInTheMist integer,
    overweightDay int
  )`, []);
    await db.executeSql(`insert into ROBIN_DATA (
      name,
      sex,
      currentDate,
      turn,
      distance,
      fatTissue,
      health,
      weatherTemperature,
      weatherRain,
      weatherWindType,
      weatherWindDirection,
      feedingGround,
      directionType,
      currentLocationLatitude,
      currentLocationLongitude,
      finalLocationLatitude,
      finalLocationLongitude,
      sparrowHawkAttacksSurvived,
      glassSkyscraperCollisions,
      weatherBreakdowns,
      lostInTheMist,
      overweightDay
    ) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
      robin.name,
      robin.sex,
      robin.currentDate,
      robin.turn,
      robin.distance,
      robin.fatTissue,
      robin.health,
      robin.weather.temperature,
      robin.weather.rainfall,
      robin.weather.windType,
      robin.weather.windDirection,
      robin.feedingGround,
      robin.directionType,
      robin.currentLocation.latitude,
      robin.currentLocation.longitude,
      robin.finalLocation.latitude,
      robin.finalLocation.longitude,
      robin.sparrowHawkAttacksSurvived,
      robin.glassSkyscraperCollisions,
      robin.weatherBreakdowns,
      robin.lostInTheMist,
      robin.overweightDay
    ]);
  }

  async getDecisions(): Promise<DecisionData[]> {
    let db = await this.getDatabase();
    if (db === null) {
      //TODO: Uzupełnić.
      return [new DecisionData()];
    }
    await db.executeSql(`create table if not exists DATA 
    (
      id integer primary key autoincrement, 
      name VARCHAR(32),
      date DATETIME
    )
      `, []);

    await db.executeSql(`insert into DATA (name,date) VALUES (?,?)`, ['yyy', Date.now().toString()]);


    let data = await db.executeSql(`select id, name, date from DATA`, []);
    let decisions = [];
    for (let i = 0; i < data.rows.length; i++) {
      let item = data.rows.item(i);
      let decision = new DecisionData();
      decision.id = item.id;
      decision.name = item.name;
      decision.date = item.date;
      decisions.push(decision);
    }
    return decisions;


  }

  async dropDatabase() {
    let db = await this.getDatabase();
    if (db === null) {
      localStorage.clear();
      return;
    }
    return db.executeSql(`drop table if exists ROBIN_DATA`, []);
  }

  async createDatabase() {
    let db = await this.getDatabase();
    if (db === null) {
      let robin = new RobinModel();
      this.setRobinToStorage(1, robin);
      return;
    }
    return this.createRobinTable(db);
  }

  async updateRobin(id: number, robin: RobinModel): Promise<void> {
    let db = await this.getDatabase();

    if (db === null) {
      this.setRobinToStorage(id, robin);
      return;
    }

    return db.executeSql(`update ROBIN_DATA set
      currentDate = ?,
      turn = ?,
      distance = ?,
      fatTissue = ?,
      health = ?,
      weatherTemperature = ?,
      weatherRain = ?,
      weatherWindType = ?,
      weatherWindDirection = ?,
      feedingGround = ?,
      currentLocationLatitude = ?,
      currentLocationLongitude = ?,
      sparrowHawkAttacksSurvived = ?,
      glassSkyscraperCollisions = ?,
      weatherBreakdowns = ?,
      lostInTheMist = ?,
      overweightDay = ?
   where id = ?`, [
      robin.currentDate,
      robin.turn,
      robin.distance,
      robin.fatTissue,
      robin.health,
      robin.weather.temperature,
      robin.weather.rainfall,
      robin.weather.windType,
      robin.weather.windDirection,
      robin.feedingGround,
      robin.currentLocation.latitude,
      robin.currentLocation.longitude,
      robin.sparrowHawkAttacksSurvived,
      robin.glassSkyscraperCollisions,
      robin.weatherBreakdowns,
      robin.lostInTheMist,
      robin.overweightDay,
      id
    ]);
  }
}

