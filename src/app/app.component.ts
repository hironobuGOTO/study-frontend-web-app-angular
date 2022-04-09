import { Component } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks = [
    {
      name: 'ライブの申し込み',
      isCompleted: true,
    },
    {
      name: 'セトリの予想',
      isCompleted: false,
    },
  ];

  addTask(taskName: string) {
    this.tasks.push({
      name: taskName,
      isCompleted: false,
    });
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
