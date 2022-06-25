import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user-routing.module";
import { AddUserComponent } from "./add-user/addUser.component";
import { CommonPopupComponent } from "./common-popup/common-popup.component";
import { UserService } from "./user.service";
import { TaskListComponent } from "./task-list/task-list.component";
import { DragulaModule } from "ng2-dragula";
import { DeletePopupComponent } from "./delete-popup/delete-popup.component";

@NgModule({
    declarations: [
        UserComponent,
        AddUserComponent,
        CommonPopupComponent,
        TaskListComponent,
        DeletePopupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        UserRoutingModule,
        DragulaModule.forRoot()
    ],
    providers: [UserService]
})

export class UserModule{}