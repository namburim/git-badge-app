import { GitUserBadgeComponent } from './git-user-badge/git-user-badge.component';
import { Injectable } from '@angular/core';
import { GitUser } from './git-user-badge/GitUser.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {




  constructor(private http: HttpClient) { }


  getGitUserById(id: number) {
    return  this.http.get('https://api.github.com/users?since=' + id + '&per_page=1');
  }

}
