import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit{

    public isTaskPopupEnable:boolean = false;
    public isDeletePopupEnable:boolean = false;
    public selectedUserId:any;
    public userList:any = [
        {
            userName: 'Yasmin Leach',
            userId: 1,
            taskList : [
                {
                    taskName : 'Task 1',
                    taskId : 'u11' // include userId 
                },
                {
                    taskName : 'Task 2',
                    taskId : 'u12'
                }
            ],
        }
    ];
    private isUserTaskDataSubscription: Subscription;
    private selectedDeletUserIndex:number;

    constructor(private userService:UserService,
        private dragulaService: DragulaService){

            dragulaService.createGroup("task-list", {
                removeOnSpill: true
            });

            this.dragulaService.drop("task-list")
            .subscribe(({ name, el, target, source, sibling }) => {
                console.log(this.userList);
            })
        }

    ngOnInit(){
        this.getUserAndTaskDetail();
    }

    getUserAndTaskDetail(){
       this.isUserTaskDataSubscription = this.userService.addItemObservable.subscribe((item)=>{
            if(item && Object.keys(item).length > 0){
                // add new user
                if(item.type == 'User'){
                    let param = {
                        userName: item.name,
                        userId: this.userList.length + 1,
                        taskList : []
                    }
                    this.userList.push(param);
                }else{
                    // add new task
                    this.userList.map((user) => {
                        if(user.userId == item.userId){
                            let param = {
                                taskName : item.name,
                                taskId : `u${user.userId}${user.taskList.length + 1}`
                            }
                            user.taskList.push(param);
                        }
                    });
                }
            }
        });
    }

    onAddTask(data:any){
        this.isTaskPopupEnable = true;
        this.selectedUserId = data.userId;
    }

    openRemoveUser(user:any){
        this.selectedDeletUserIndex = this.userList.indexOf(user);
        this.isDeletePopupEnable = true;
    }

    deleteUser(event){
        this.isDeletePopupEnable = false;
        if(event.isDeleteUser){
            this.userList.splice(this.selectedDeletUserIndex, 1);
        }
    }

    onUserNameEdit(event,user){
        let index: number = this.userList.indexOf(user);
        if( this.userList[index].userName != event.target.innerText){
            this.userList[index].userName = event.target.innerText;
            console.log(this.userList);
        }
    }

    onTaskNameEdit(event,user,task){
        let index: number = this.userList.indexOf(user);
        let taskIndex:number = this.userList[index].taskList.indexOf(task);
        if(this.userList[index].taskList[taskIndex].taskName != event.target.innerText){
            this.userList[index].taskList[taskIndex].taskName = event.target.innerText;
            console.log(this.userList);
        }
    }

    ngOnDestroy(){
        if(this.isUserTaskDataSubscription){
            this.isUserTaskDataSubscription.unsubscribe();
        }
    }
}