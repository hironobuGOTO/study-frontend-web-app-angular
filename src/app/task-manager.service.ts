import { Injectable } from '@angular/core';
import { TodoTask } from './todo-task';

@Injectable({
  providedIn: 'root',
})
export class TaskManagerService {
  private tasks: TodoTask[];

  constructor() {
    this.tasks = [];
    this.loadTasks();
  }

  addTask(taskName: string, dueDate?: string) {
    this.tasks.push({
      name: taskName,
      isCompleted: false,
      dueDate: dueDate ? new Date(dueDate) : undefined,
    });
    this.saveTask();
  }

  getTasks(): TodoTask[] {
    return this.tasks;
  }

  loadTasks() {
    let jsonString = window.localStorage.getItem('tasks');
    if (jsonString) {
      this.tasks = JSON.parse(jsonString);
    }
  }

  saveTask() {
    let jsonString = JSON.stringify(this.tasks);
    window.localStorage.setItem('tasks', jsonString);
  }

  getNumOfCompletedTasks() {
    let count = 0;
    for (let task of this.tasks) {
      if (task.isCompleted) {
        count++;
      }
    }
    return count;
  }
}
