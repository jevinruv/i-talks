import { UpcomingTalkParticipantService } from './../../services/upcoming-talk-participant.service';
import { NewTalkService } from './../../services/new-talk.service';
import { Component, OnInit } from '@angular/core';
import { Talk } from '../../models/Talk';
import { UpcomingTalkParticipant } from '../../models/UpcomingTalkParticipant';
import { DataTable, DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'view-participant-list',
  templateUrl: './view-participant-list.component.html',
  styleUrls: ['./view-participant-list.component.css']
})
export class ViewParticipantListComponent implements OnInit {

  newTalkList: Talk[] = [];
  items: UpcomingTalkParticipant[] = [];
  itemCount: number;
  tableResource: DataTableResource<UpcomingTalkParticipant>;

  constructor(
    private newTalkService: NewTalkService,
    private upcomingTalkParticipantService: UpcomingTalkParticipantService
  ) { }

  ngOnInit() {
    this.newTalkService.getAllNewTalks()
      .subscribe(data => {
        this.newTalkList = data;
        //console.log(this.newTalkList);
      });
  }

  selectedTalk(e) {
    let selectedPersonId = e.target.value;
    //console.log(selectedPersonId);
    this.getParticipantList(selectedPersonId);
  }

  getParticipantList(id) {
    this.upcomingTalkParticipantService.getAllUpcomingTalkParticipantsFromId(id)
      .subscribe(data => {
        this.items = data;
        //console.log(data);
        this.initializeTable(data);
      });
  }

  initializeTable(upcomingTalkParticipants: UpcomingTalkParticipant[]) {

    this.tableResource = new DataTableResource(upcomingTalkParticipants);
    this.tableResource.query({ offset: 0 }).then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) {
      return;
    }
    this.tableResource.query(params).then(items => this.items = items);
  }

}
