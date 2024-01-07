import { Component } from '@angular/core';
import { AccountsService } from '../shared/services/accounts/accounts.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public userData: any = [];
  constructor(private accountService: AccountsService) {
    this.getUserData();
  }
  getUserData() {
    this.accountService.fetchAllProfiles().subscribe((res) => {
      this.userData = res;
      console.log(this.userData, 'USERDATA---->');
    });
  }
}
