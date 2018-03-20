import { Injectable } from '@angular/core';
import { Task } from './app.models';

@Injectable()
export class TaskService {
    tasks: { title: string; completed: boolean; }[];
    constructor() {
        this.tasks = [
            { title: 'First Task', completed: false },
            { title: 'Second Task', completed: false },
            { title: 'Third Task', completed: false },
            { title: 'Fourth Task', completed: false }
        ];
    }

    addTask(task: Task) {
        this.tasks.push(task);
    }
}
