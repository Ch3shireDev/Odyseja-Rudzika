import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(private database: DatabaseService) { }

  ngOnInit() { }

  submitReset() {
    this.database.dropDatabase().then(
      () => this.database.createDatabase()
    )
  }

}
