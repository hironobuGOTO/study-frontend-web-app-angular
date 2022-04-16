import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TaskManagerService } from '../task-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss'],
})
export class TaskEditComponent implements OnInit, AfterViewInit {
  @ViewChild('addTaskNameInput') taskNameInputElem!: ElementRef;

  constructor(
    public taskManager: TaskManagerService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    // タスク名入力欄にフォーカスをあてる
    this.taskNameInputElem.nativeElement.focus();
    // Angular に強制的に変更検出させる
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {}

  addTask(taskName: string, dueDate?: string) {
    this.taskManager.addTask(taskName, dueDate);
    this.router.navigate(['']);
  }
}
