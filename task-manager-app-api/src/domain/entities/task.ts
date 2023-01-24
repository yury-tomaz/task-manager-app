import { v4 as uuid_v4 } from "uuid";

export class Task {
    public readonly id: string;
    public title: string;
    public description: string;
    public date: Date;
    public user_id: string;

    constructor(props: Omit<Task, "id">, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid_v4();
        }
    }
}