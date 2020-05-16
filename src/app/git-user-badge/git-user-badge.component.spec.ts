import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitUserBadgeComponent } from './git-user-badge.component';

describe('GitUserBadgeComponent', () => {
  let component: GitUserBadgeComponent;
  let fixture: ComponentFixture<GitUserBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitUserBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitUserBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
