import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

    @Output() isDelteUser: EventEmitter<any> = new EventEmitter<any>();

    constructor(){}
    ngOnInit(){}

    closePopup(){
        this.isDelteUser.emit({isDeleteUser : false});
    }

    onDelete(){
        this.isDelteUser.emit({isDeleteUser : true});
    }

}