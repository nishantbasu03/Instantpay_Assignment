import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";

@Injectable()
export class UserService {

    constructor() {}

    public addItem: any = {};
    public addItemObservable = new BehaviorSubject(this.addItem);
  
    setItem(){
      this.addItemObservable.next(this.addItem);
    }
}