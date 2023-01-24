import { User } from "../../domain/entities/user";

export interface IUserRepository{
    findById(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}