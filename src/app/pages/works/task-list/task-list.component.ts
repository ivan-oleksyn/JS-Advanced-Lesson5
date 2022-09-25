import { Component, OnInit } from '@angular/core';

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
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public taskName!: string;
  public task!: ITask;
  public tasks: Task[] = [{ 'name': 'HTML5', 'status': true }, { 'name': 'CSS3', 'status': true },
    { 'name': 'SCSS', 'status': false }, { 'name': 'JavaScript', 'status': false }, { 'name': 'jQuery', 'status': false },
    { 'name': 'Angular', 'status': false}];

  constructor() { }

  ngOnInit() {
  }
  addTask(): void{
    this.task = {
      name: this.taskName,
      status: false
    }
    this.tasks.push(this.task);
    this.taskName = '';
  }

}
