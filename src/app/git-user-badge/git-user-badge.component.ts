import { GithubService } from './../github.service';
import { Component, OnInit, Input } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { GitUser } from './GitUser.model';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'git-user-badge',
  templateUrl: './git-user-badge.component.html',
  styleUrls: ['./git-user-badge.component.css']
})
export class GitUserBadgeComponent implements OnInit {



  // tslint:disable-next-line: no-input-rename
  @Input('user') gitUser: GitUser;
  counter: number  =1;

  // private variable turns into member automatically
  constructor(private githubService: GithubService) {
    this.gitUser = {
    'id':1,
    'login':'nambiuri',
    'avatarUrl':'asdfasdfasd',
    "bio":"Hello"
    }

  }

  // lifecycle method
  ngOnInit(): void {

    // console.log('Git User Badge Component...');
    // console.log(this);
    // this.gitUser = this.githubService.getGitUserById(1);
    // console.log('gitUser',gitUser);
  }

  onNext = () => {
    let resp  = this.githubService.getGitUserById(this.counter++);
    resp.subscribe((resp)=> {
      let response = resp[0];
      this.gitUser = new GitUser();
      this.gitUser .id = response.id;
      this.gitUser .bio = response.bio;
      this.gitUser .avatarUrl = response.avatar_url;
      this.gitUser .login = response.login;
      this.gitUser.bio = response.bio;

    });

  }

  onPrevious = () => {
    let resp  = this.githubService.getGitUserById(this.counter--);
    resp.subscribe((resp)=> {
      let response = resp[0];
      this.gitUser = new GitUser();
      this.gitUser .id = response.id;
      this.gitUser .bio = response.bio;
      this.gitUser .avatarUrl = response.avatar_url;
      this.gitUser .login = response.login;
      this.gitUser.bio = response.bio;
    });
  }
}
