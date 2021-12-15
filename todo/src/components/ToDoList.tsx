import  {useRecoilState, useRecoilValue} from "recoil";
import styled from "styled-components";
import { categoryState, toDoSelector, categoriesState } from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

const Container = styled.div`
    max-width:480px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin: 25px auto;
    `;

const Title = styled.h1`
    font-size: 30px;
    border-bottom: ${(props) => props.theme.accentColor} solid 2px;
    padding : 20px 10px;
`;

const SubTitle = styled.h2`
    margin-bottom:20px;
`;

const CategoryWrapper = styled.div`
    padding: 20px 10px;
    padding-bottom: 40px;
    border-bottom: ${(props) => props.theme.accentColor} solid 2px;
`;

const CategoryList = styled.ul`
    max-width:400px;
    margin : 0 auto;
`;

const Category = styled.li`
    margin-bottom: 5px;
    button {
        color:${props => props.theme.textColor};
    }
    button:hover {
        color: ${(props) => props.theme.accentColor};
        cursor: pointer;
    }
`;

const ToDosWrapper = styled.div`
    padding:20px 10px;
    
`;

const ToDosList = styled.div`
    max-width:400px;
    margin : 0 auto;
    padding-left:5px;
`;

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const categories = useRecoilValue(categoriesState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        const {currentTarget:{name}} = event;
        setCategory(name as any);
    }
    return (
        <Container>
            <Title>To Dos</Title>
            <CategoryWrapper>
                <SubTitle>Category</SubTitle>
                <CreateCategory />
                <CategoryList>
                    {categories.map((category, index) => <Category><button name={category.name} onClick={onClick} >{category.name}</button ></Category>)}
                </CategoryList>
            </CategoryWrapper>
            <ToDosWrapper>
                <SubTitle>{category}</SubTitle>
                <CreateToDo />
                <ToDosList>
                    {toDos?.map(toDo =><ToDo key={toDo.id} {...toDo} />)}
                </ToDosList>
            </ToDosWrapper>
        </Container>
    );
}


export default ToDoList;