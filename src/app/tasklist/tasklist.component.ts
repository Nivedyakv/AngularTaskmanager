import { Component,OnInit } from '@angular/core';
import { ServicetaskService } from '../servicetask.service';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent implements OnInit{
  newTask: { title: string, description: string } = { title: '', description: '' };
  taskDetails: { title: string, description: string }[] = [];
  showUpdateFormIndex: number = -1;

  constructor(private taskService: ServicetaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.taskDetails = tasks;
    });
  }

  onSubmit() {
    this.taskService.addTask(this.newTask);
    this.newTask = { title: '', description: '' }; 
  }

  

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
  updateTask(index: number, updatedTask: { title: string, description: string }) {
    this.taskService.updateTask(index, updatedTask);
    this.showUpdateFormIndex = -1; 
  }

 
  showUpdateForm(index: number) {
    this.showUpdateFormIndex = index;
  }
}