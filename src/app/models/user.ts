export class User {
    constructor(
        public username: string,
        public password: string,
        public grant_type: string,
        public client_id: string
    ) { }
}
