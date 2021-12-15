import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoriesState,ICategories } from "../atoms";

interface IForm {
    category: string;
}

function CreateCategory(){
    const [categories, setCategories] = useRecoilState(categoriesState);
    const { register, setValue, handleSubmit } = useForm<IForm>();

    const handleValid = ({category}:IForm) => {
        setCategories(oldCategories => [...oldCategories, {name:category}])
        setValue("category", "");
    }
    
    useEffect(() => {
        const saved = localStorage.getItem("categories");
        if(saved !== null){
            const savedCategories:ICategories[] = JSON.parse(saved);
            setCategories(savedCategories);
            
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("categories", JSON.stringify(categories));
    }, [categories]);
    return(
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("category", {
                required:"Please write new Category"})} 
                placeholder="Add a category" />
            <button>Add</button>
        </form>
    )
}

export default CreateCategory;