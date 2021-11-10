export interface CRUD {
    register: (resource: any) => Promise<any>;
    getUser: (uid: string) => Promise<any>;
}