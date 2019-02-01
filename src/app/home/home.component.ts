import { Talk } from './../models/Talk';
import { Component, OnInit } from '@angular/core';
import { NewTalkService } from '../services/new-talk.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  time: string
  imageUrl: string
  talk: Talk;

  format: any = {
    "Weeks": "Weeks",
    "Days": "Days",
    "Hours": "Hours",
    "Minutes": "Minutes",
    "Seconds": "Seconds"
  };

  constructor(private newTalkService: NewTalkService) { }

  ngOnInit() {

    this.newTalkService.getLatestTalk()
      .subscribe(data => {
        //console.log(data);
        this.talk = data;
        this.time = this.talk.Date;
      });


    // this.time = "July 22, 2020";
    //this.time = "'2020-12-17";
    //this.imageUrl = "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg";
  }
}
