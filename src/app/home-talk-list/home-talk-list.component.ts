import { Talk } from './../models/Talk';
import { PastTalkService } from './../services/past-talk.service';
import { Component, OnInit } from '@angular/core';
import { RPersonnel } from '../models/RPersonnel';

@Component({
  selector: 'home-talk-list',
  templateUrl: './home-talk-list.component.html',
  styleUrls: ['./home-talk-list.component.css']
})
export class HomeTalkListComponent implements OnInit {

  pastTalkList: Talk[] = [];

  constructor(private pastTalkService: PastTalkService) { }

  ngOnInit() {
    this.pastTalkService.getAllPastTalks()
      .subscribe(data => {
        this.pastTalkList = data;
        //console.log(data);
      });
  }

}
