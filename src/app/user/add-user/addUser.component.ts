import { Component } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './addUser.component.html',
  styleUrls: ['./addUser.component.scss']
})
export class AddUserComponent {
    public isUserPopupEnable:boolean = false;
}