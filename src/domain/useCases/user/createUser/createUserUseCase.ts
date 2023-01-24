import { IUserRepository } from "../../../../infrastructure/persistence/IUserRepository";
import { IHashProvider } from "../../../../infrastructure/providers/IHashProvider";
import { CreateUserDTO } from "../../../dtos/userDto";
import { User } from "../../../entities/user";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private hashProvider: IHashProvider
    ) { }

    async execute({ name, email, password }: CreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const hashedPassword = await this.hashProvider.generateHash(password);

        const user = new User({
            name,
            email,
            password: hashedPassword
        });

        await this.userRepository.save(user);
    }
}