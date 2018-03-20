import { Component, OnInit } from '@angular/core';
import { TaskService } from './app.service';
import { Task } from './app.models';

@Component({
    selector: 'task-list',
    template: `
        <h4>Task List</h4>
        <ul>
            <li *ngFor="let task of taskService.tasks">
                <span [class.completed]="task.completed">{{ task.title }} - {{ task.completed }}</span>
                <button (click)="completeTask(task)">Click to Complete</button>
            </li>
        </ul>
    `,
    styles: ['.completed { color: red; }']
})
export class TaskListComponent implements OnInit {
    constructor(public taskService: TaskService) {

    }

    ngOnInit() {

    }

    completeTask(task: Task) {
        task.completed = true;
    }
}

@Component({
    selector: 'task-new',
    template: `
        <h4>Create New</h4>
        <form (submit)="onSubmit()">
            Title: <input [(ngModel)]="task.title" name="title">
            <button type="submit">Submit</button>
            {{ task | json}}
        </form>
    `
})
export class TaskNewComponent implements OnInit {
    task: Task;
    test: string = '';

    constructor(public taskService: TaskService) {
        this.task = this.createDefaultTask();
    }

    ngOnInit() {}

    onSubmit() {
        this.taskService.addTask(this.task);
        this.task = this.createDefaultTask();
    }

    createDefaultTask() {
        return {
            title: '',
            completed: false
        };
    }
}

@Component({
    selector: 'tasks',
    template: `
        <h1>Task List Application</h1>
        <task-new></task-new>
        <task-list></task-list>
    `
})
export class TasksComponent implements OnInit {
    constructor() {

    }

    ngOnInit() {

    }
}

@Component({
    selector: 'my-app',
    template: `
        <tasks></tasks>
    `,
    providers: [TaskService]
})
export class AppComponent {

}
