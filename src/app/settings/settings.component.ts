import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RobinService } from '../robin.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {

  constructor(private robin: RobinService, private router: Router) { }

  ngOnInit() { }

  async submitReset() {
    await this.robin.restart();
    this.router.navigateByUrl('/panel');
  }

}
