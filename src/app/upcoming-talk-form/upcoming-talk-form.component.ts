import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-talk-form',
  templateUrl: './upcoming-talk-form.component.html',
  styleUrls: ['./upcoming-talk-form.component.css']
})
export class UpcomingTalkFormComponent implements OnInit {

  upcomingTalk = {};

  constructor() { }

  ngOnInit() {
  }

}
