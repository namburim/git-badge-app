import { GithubService } from './github.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GitUserBadgeModule } from './git-user-badge/git-user-badge.module';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GitUserBadgeModule,
    FormsModule,
    HttpClientModule
  ],
  // Providers are services. this service available to gituerBadge modules as well.
  providers: [ GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
