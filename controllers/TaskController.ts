import { Task } from "@/models/TaskModel";

export class TaskController {
  tasks: Task[] = [
    { id: 1, title: "Belajar React Native", completed: false },
    { id: 2, title: "Implementasi MVC", completed: false },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title,
      completed: false,
    };
    this.tasks.push(newTask);
  }

  toggleTask(id: number) {
    console.log("toggleTask", id);
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }
}
