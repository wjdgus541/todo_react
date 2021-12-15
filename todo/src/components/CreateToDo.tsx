import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState, toDoState, IToDo, toDoSelector } from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo(){
    const [toDos ,setToDos] = useRecoilState(toDoState);
    const selectedToDos = useRecoilValue(toDoSelector);
    const nowCategory = useRecoilValue(categoryState);
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const handleValid = ({toDo}: IForm) => {
        setToDos(oldToDos => [{text:toDo, id:Date.now(), category:nowCategory}, ...oldToDos]);
        setValue("toDo", "");
    }
    useEffect(() => {
        const saved = localStorage.getItem(nowCategory);
        if(saved !== null){
            const savedToDos:IToDo[] = JSON.parse(saved);
            setToDos(savedToDos);
        }
        console.log(selectedToDos);
    }, [nowCategory]);
    useEffect(() => {

        localStorage.setItem(nowCategory, JSON.stringify(selectedToDos));
    }, [toDos]);
    
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo", {
                required: "Please write a To Do"})} 
                placeholder="Write a to do"
            />
            <button>Add</button>
        </form>
    );
}

export default CreateToDo;