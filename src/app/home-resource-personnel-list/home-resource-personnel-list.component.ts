import { RPersonnel } from './../models/RPersonnel';
import { Component, OnInit } from '@angular/core';
import { ActiveResourcePersonnelService } from '../services/active-resource-personnel.service';

@Component({
  selector: 'home-resource-personnel-list',
  templateUrl: './home-resource-personnel-list.component.html',
  styleUrls: ['./home-resource-personnel-list.component.css']
})
export class HomeResourcePersonnelListComponent implements OnInit {
  resourcePersonnelList: RPersonnel[] = []

  constructor(private activeResourcePersonnelService: ActiveResourcePersonnelService) { }

  ngOnInit() {
    this.activeResourcePersonnelService.getAllResourcePersonnel()
      .subscribe(data => {
        this.resourcePersonnelList = data;
        //console.log(data);
      });
  }

}
