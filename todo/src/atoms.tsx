import {atom, selector} from "recoil";

export interface ICategories {
    name:string    
}

export interface IToDo {
    text:string;
    id:number;
    category:string;
}

export const categoryState = atom<string>({
    key:"nowCategory",
    default: "TO_DO"
})

export const categoriesState = atom<ICategories[]>({
    key:"categories",
    default:[{name:"TO_DO"}, {name:"DOING"}, {name:"DONE"}]
})

export const toDoState = atom<IToDo[]>({
    key:"toDo",
    default:[]
})

export const toDoSelector = selector({
    key: "toDoSelector",
    get:({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category)
    }
});