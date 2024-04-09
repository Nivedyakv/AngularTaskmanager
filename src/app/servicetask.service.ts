import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicetaskService {
  private taskDetails: { title: string, description: string }[] = [];
  private taskSubject: BehaviorSubject<{ title: string, description: string }[]> = new BehaviorSubject<{ title: string, description: string }[]>([]);

  constructor() { }

  getTasks(): Observable<{ title: string, description: string }[]> {
   
    this.taskSubject.next(this.taskDetails);
    return this.taskSubject.asObservable();
  }

  addTask(newTask: { title: string, description: string }) {
    this.taskDetails.push(newTask);
    this.taskSubject.next(this.taskDetails);
  }

  
  deleteTask(index: number) {
    this.taskDetails.splice(index, 1);
    this.taskSubject.next(this.taskDetails);
  }
  updateTask(index: number, updatedTask: { title: string, description: string }) {
    if (index >= 0 && index < this.taskDetails.length) {
      this.taskDetails[index] = updatedTask;
      this.taskSubject.next(this.taskDetails);
    }
  }
}