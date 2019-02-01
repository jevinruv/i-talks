import { Talk } from './../models/Talk';
import { Component, OnInit } from '@angular/core';
import { PastTalkService } from '../services/past-talk.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'view-past-talk',
  templateUrl: './view-past-talk.component.html',
  styleUrls: ['./view-past-talk.component.css']
})
export class ViewPastTalkComponent implements OnInit {

  constructor(private route: ActivatedRoute, private aboutTalkService: PastTalkService) { }
  talk: Talk;
  id;

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.aboutTalkService.getTalkDetails(this.id)
      .subscribe(data => {
        this.talk = data;
        console.log(data);
      });
  }
}
