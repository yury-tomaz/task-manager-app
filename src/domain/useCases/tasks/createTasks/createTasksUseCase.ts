import { ITasksRepository } from "../../../../infrastructure/persistence/ITasksRepository";
import { IUserRepository } from "../../../../infrastructure/persistence/IUserRepository";
import { ICreateTaskDTO } from "../../../dtos/taskDto";
import { Task } from "../../../entities/task";


export class CreateTaskUseCase {
    constructor(
        private tasksRepository: ITasksRepository,
        private usersRepository: IUserRepository,
    ) { }

    async execute({ title, description, date, user_id }: ICreateTaskDTO): Promise<void> {
        const user = await this.usersRepository.findById(user_id);

        if (!user) {
            throw new Error("User does not exists");
        }

        const task = new Task({
            title,
            description,
            date,
            user_id
        });

        await this.tasksRepository.save(task);

    }
}