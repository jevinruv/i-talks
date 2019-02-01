import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableResource, DataTable } from 'angular5-data-table';
import { RPersonnel } from '../../models/RPersonnel';
import { NewResourcePersonnelService } from '../../services/new-resource-personnel.service';
import { ActiveResourcePersonnelService } from '../../services/active-resource-personnel.service';

@Component({
  selector: 'view-resource-personnels',
  templateUrl: './view-resource-personnel-list.component.html',
  styleUrls: ['./view-resource-personnel-list.component.css']
})
export class ViewResourcePersonnelListComponent implements OnInit {

  items: RPersonnel[] = [];
  itemCount: number;
  tableResource: DataTableResource<RPersonnel>;
  @ViewChild(DataTable) rPersonnelTable: DataTable;
  selectedPersonsStr;


  constructor(
    private newResourcePersonnelService: NewResourcePersonnelService,
    private activeResourcePersonnelService: ActiveResourcePersonnelService
  ) { }

  ngOnInit() {
    this.newResourcePersonnelService.getAllResourcePersonnel()
      .subscribe(data => {
        this.items = data;
        this.initializeTable(data);
      });
  }

  initializeTable(rPersonnels: RPersonnel[]) {

    this.tableResource = new DataTableResource(rPersonnels);
    this.tableResource.query({ offset: 0 }).then(items => this.items = items);
    this.tableResource.count().then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) {
      return;
    }
    this.tableResource.query(params).then(items => this.items = items);
  }

  onAccept() {

    this.getSelectedPersons();
    this.activeResourcePersonnelService.addResourcePersonnel(this.selectedPersonsStr)
      .subscribe(data => { console.log(data) });

    this.ngOnInit();
  }

  onReject() {
    this.getSelectedPersons();
    this.newResourcePersonnelService.removeResourcePersonnel(this.selectedPersonsStr)
      .subscribe(data => { console.log(data) });

    this.ngOnInit();
  }

  getSelectedPersons() {
    let selectedPersons = [];

    this.rPersonnelTable.selectedRows.forEach(element => {
      selectedPersons.push(element.item.Person_ID);
    });

    this.selectedPersonsStr = selectedPersons.join();
  }

}
