import { ItalkService } from './services/italk.service';
import { NavbarService } from './services/navbar.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CountDown } from "../../node_modules/angular2-simple-countdown/countdown";
import { DataTableModule } from 'angular5-data-table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomeTalkListComponent } from './home-talk-list/home-talk-list.component';
import { HomeResourcePersonnelListComponent } from './home-resource-personnel-list/home-resource-personnel-list.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { RegisterPersonComponent } from './register-person/register-person.component';
import { FooterComponent } from './footer/footer.component';
import { ViewPastTalkComponent } from './view-past-talk/view-past-talk.component';
import { PastTalkService } from './services/past-talk.service';
import { NewResourcePersonnelService } from './services/new-resource-personnel.service';
import { ActiveResourcePersonnelService } from './services/active-resource-personnel.service';
import { UpcomingTalkFormComponent } from './upcoming-talk-form/upcoming-talk-form.component';
import { ResourcePersonnelCardComponent } from './resource-personnel-card/resource-personnel-card.component';
import { LoginComponent } from './login/login.component';
import { ViewResourcePersonnelListComponent } from './admin/view-resource-personnel-list/view-resource-personnel-list.component';
import { TalkFormComponent } from './admin/talk-form/talk-form.component';
import { NewTalkService } from './services/new-talk.service';
import { ViewParticipantListComponent } from './admin/view-participant-list/view-participant-list.component';
import { UpcomingTalkParticipantService } from './services/upcoming-talk-participant.service';
import { ViewItalkListComponent } from './admin/view-italk-list/view-italk-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    CountDown,
    NavbarComponent,
    HomeComponent,
    HomeTalkListComponent,
    HomeResourcePersonnelListComponent,
    HomeCarouselComponent,
    RegisterPersonComponent,
    FooterComponent,
    ViewResourcePersonnelListComponent,
    ViewPastTalkComponent,
    TalkFormComponent,
    UpcomingTalkFormComponent,
    ResourcePersonnelCardComponent,
    LoginComponent,
    ViewParticipantListComponent,
    ViewItalkListComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent },
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterPersonComponent },
        { path: 'view-past-talk/:id', component: ViewPastTalkComponent },
        { path: 'upcoming-talk', component: UpcomingTalkFormComponent },

        { path: 'admin/dashboard', component: DashboardComponent },
        { path: 'admin/talk-form', component: TalkFormComponent },
        { path: 'admin/view-resource-personnel-list', component: ViewResourcePersonnelListComponent },
        { path: 'admin/view-participant-list', component: ViewParticipantListComponent },
        { path: 'admin/view-italk-list', component: ViewItalkListComponent },
        // { path: 'admin/past-talk/new', component: TalkFormComponent },
        // { path: 'admin/past-talk/:id', component: TalkFormComponent },
      ]
    ),
    DataTableModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [
    ActiveResourcePersonnelService,
    NewResourcePersonnelService,
    PastTalkService,
    NewTalkService,
    AuthService,
    NavbarService,
    UpcomingTalkParticipantService,
    ItalkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
