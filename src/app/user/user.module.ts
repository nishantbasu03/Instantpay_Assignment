import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user-routing.module";
import { AddUserComponent } from "./add-user/addUser.component";
import { CommonPopupComponent } from "./common-popup/common-popup.component";
import { UserService } from "./user.service";
import { TaskListComponent } from "./task-list/task-list.component";

@NgModule({
    declarations: [
        UserComponent,
        AddUserComponent,
        CommonPopupComponent,
        TaskListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule
    ],
    providers: [UserService]
})

export class UserModule{}