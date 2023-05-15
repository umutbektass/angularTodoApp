export class Model{
    items;
    constructor(){
        this.items=[
            new TodoList("Kitap oku",false),
            new TodoList("Angular öğren",false),
            new TodoList("React öğren",true),
        ]
    }
}

export class TodoList{
    description:string;
    action:boolean;
    constructor(description:string,action:boolean){
        this.description = description;
        this.action = action;
    }
}
