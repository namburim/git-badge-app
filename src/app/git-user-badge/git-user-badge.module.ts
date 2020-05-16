import { GitUserBadgeComponent } from './git-user-badge.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [GitUserBadgeComponent],
  imports: [
    CommonModule
  ],
  exports: [
    GitUserBadgeComponent
  ]
})
export class GitUserBadgeModule { }
