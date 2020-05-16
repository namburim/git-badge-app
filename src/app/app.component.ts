import { GitUser } from './git-user-badge/GitUser.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  user: GitUser;
  constructor(){
   this.user   = new GitUser();
   this.user.avatarUrl = 'asdfasdf';
   this.user.login = 'namburi';
   this.user.id = 1;
  }
  title = 'My First Angular App';
}
