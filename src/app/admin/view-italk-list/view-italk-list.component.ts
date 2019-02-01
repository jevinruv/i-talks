import { Component, OnInit, ViewChild } from '@angular/core';
import { ItalkService } from '../../services/italk.service';
import { NewTalkService } from '../../services/new-talk.service';
import { Talk } from '../../models/Talk';
import { DataTableResource, DataTable } from 'angular5-data-table';
import { NewResourcePersonnelService } from '../../services/new-resource-personnel.service';
import { RPersonnel } from '../../models/RPersonnel';

@Component({
  selector: 'view-italk-list',
  templateUrl: './view-italk-list.component.html',
  styleUrls: ['./view-italk-list.component.css']
})
export class ViewItalkListComponent implements OnInit {

  items: Talk[] = [];
  itemCount: number;
  tableResource: DataTableResource<Talk>;
  @ViewChild(DataTable) rPersonnelTable: DataTable;
  selectedTalkNameStr;
  selectedTalkResourcePersonnelStr;

  constructor(private iTalkService: ItalkService) { }

  ngOnInit() {
    this.iTalkService.getTalks()
      .subscribe(data => {
        console.log(data);
        this.items = data;
        this.initializeTable(data);
      });

  }

  initializeTable(talks: Talk[]) {

    this.tableResource = new DataTableResource(talks);
    this.tableResource.query({ offset: 0 }).then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) {
      return;
    }
    this.tableResource.query(params).then(items => this.items = items);
  }

  onDelete() {
    this.getSelectedPersons();
    // this.iTalkService.removeTalk(this.selectedPersonsStr)
    //    .subscribe(data => { console.log(data) });
    // console.log(this.selectedTalkNameStr);
    // console.log(this.selectedTalkResourcePersonnelStr);
    this.ngOnInit();
  }

  getSelectedPersons() {
    let selectedTalksName = [];
    let selectedTalksResourcePersonnel = [];

    this.rPersonnelTable.selectedRows.forEach(element => {
      selectedTalksName.push(element.item.Name);
      selectedTalksResourcePersonnel.push(element.item.Resource_Personnel);
    });

    this.selectedTalkNameStr = selectedTalksName.join();
    this.selectedTalkResourcePersonnelStr = selectedTalksResourcePersonnel.join();
  }
}
