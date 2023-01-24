import { Task } from "../../domain/entities/task";

export interface ITasksRepository {
    create(data: Task): Promise<Task>;
    list(user_id: string): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    save(task: Task): Promise<void>;
    delete(id: string): Promise<void>;
}