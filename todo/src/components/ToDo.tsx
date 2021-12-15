import React from "react";
import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";
import styled from "styled-components";

const List = styled.li`
    margin-bottom: 5px;
    display:flex;
    justify-content:space-between;
`;

const Remove = styled.button`
    color: ${(props) => props.theme.accentColor};
`;

function ToDo({text, category, id}:IToDo){
    const setToDos = useSetRecoilState(toDoState);
    // const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    //     const {currentTarget:{name}} = event;
    //     setToDos((oldToDos) => {
    //         const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
    //         const newToDo = {text, id, category:name as any}
    //         return [
    //             ...oldToDos.slice(0, targetIndex),
    //         newToDo,
    //     ...oldToDos.slice(targetIndex + 1)];
    //     })
    // }
    const onDelete = (event:React.MouseEvent<HTMLButtonElement>) => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id === id);
            return [
                ...oldToDos.slice(0, targetIndex),
                ...oldToDos.slice(targetIndex + 1)
            ];
        })
    }
    return (
    <List>
        <span>{text}</span>
        {/* {category !== "DOING" && <button name={"DOING"} onClick={onClick}>Doing</button>}
        {category !== "TO_DO" && <button name={"TO_DO"} onClick={onClick}>To Do</button>}
        {category !== "DONE" && <button name={"DONE"} onClick={onClick}>Done</button>} */}
        <Remove onClick={onDelete}>X</Remove>
    </List>
    );
}

export default ToDo;