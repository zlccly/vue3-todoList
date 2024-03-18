import { ref } from "vue";
import { generateId } from "../util/todoStorage";
export default function useNewTodo(todosRef) {
    const newTodoRef = ref("")

    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim()
        if (!value) {
            return
        }
        const todo = {
            id: generateId(),
            title: value,
            comoleted: false,
        }
        console.log("enter");
        todosRef.value.push(todo);
        console.log(todosRef, "代办事项列表");
        newTodoRef.value = ""
    }
    return {
        newTodoRef,
        addTodo
    }
}