import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private dataStorageService: DataStorageService,
    private authSR: AuthService
  ) {}
  private userSub: Subscription;
  isAuthenticated = false;
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  ngOnInit(): void {
    this.userSub = this.authSR.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
