import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'common-popup',
  templateUrl: './common-popup.component.html',
  styleUrls: ['./common-popup.component.scss']
})
export class CommonPopupComponent implements OnInit {
    @Input() isUserPopupEnable:boolean;
    @Input() selectedUserId:any;
    @Output() isClosePopup: EventEmitter<any> = new EventEmitter<any>();
    public itemName:string = '';
    public headerTitle:string;

    constructor(private userService:UserService){}

    ngOnInit(){
        this.headerTitle = this.isUserPopupEnable ? 'User' : 'Task';
    }

    onClosePopup(){
        this.isClosePopup.emit();
    }

    onAddItem(){
        if(this.itemName && this.itemName.trim()){
            this.userService.addItem = {
                type : this.isUserPopupEnable ? 'User' : 'Task',
                name : this.itemName,
                userId : this.selectedUserId ? this.selectedUserId : 0
            };
            this.userService.setItem();
        }
        this.onClosePopup();
    }
}