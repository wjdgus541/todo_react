import  {useRecoilState, useRecoilValue} from "recoil";
import { categoryState, toDoSelector, categoriesState } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {
    // const [value, modFn] = useRecoilState(toDoState);
    // const value = useRecoilValue(toDoState);
    // const modFn = useSetRecoilState(toDoState);
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const categories = useRecoilValue(categoriesState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name}} = event;
        setCategory(name as any);
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateCategory />
            <ul>
                {categories.map((category, index) => <li><button name={category.name} onClick={onClick} >{category.name}</button ></li>)}
            </ul>
            <hr />
            <CreateToDo />
            <hr />
            <span>{category}</span>
            {toDos?.map(toDo =><ToDo key={toDo.id} {...toDo} />)}
        </div>
    );
}


export default ToDoList;