import { Component, Input, OnInit } from '@angular/core';

export interface ITask{
  name:string,
  status:boolean
}

export class Task implements ITask{
  public name: string;
  public status: boolean
  constructor(name: string, status: boolean) {
    this.name = name;
    this.status = false;
    }
}

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  
  @Input()tasks!: Task[];

  public isDone: boolean = true;
  public taskName!: string;
  public tastkStatus!: boolean;
  public editActive = false;
  public currentIndex!: number;
  public disabled = false;

  constructor() { }

  ngOnInit() {
  }
  changeStatus(taskIndex:number): void{
    this.tasks[taskIndex].status = !this.tasks[taskIndex].status;
  }

  editTask(taskIndex: number): void{
    this.currentIndex = taskIndex;
    this.taskName = this.tasks[taskIndex].name;
    this.editActive = true;
  }

  deleteTask(taskIndex: number): void{
    this.tasks.splice(taskIndex, 1);
  }

  saveTask(): void{
    this.tasks[this.currentIndex].name = this.taskName;
    this.taskName = '';
    this.editActive = !this.editActive;
    this.currentIndex = -1;

  }

  canDelete(taskIndex: number): boolean { 
      return taskIndex === this.currentIndex;
  }

}
