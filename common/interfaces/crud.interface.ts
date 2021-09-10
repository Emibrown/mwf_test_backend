export interface CRUD {
    addItem: (resource: any) => Promise<any>;
    sellItem: (name: string, resource: any) => Promise<any>;
    itemQuantity: (name: string, resource: any) => Promise<any>;
}