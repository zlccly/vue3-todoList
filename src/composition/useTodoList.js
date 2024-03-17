import { ref, watchEffect } from "vue";
import * as todoStotage from "../util/todoStorage";
export default function useTodoList() {
    const todosRef = ref(todoStotage.fetch());
    console.log(todosRef.value, "hhhhhhhhh");
    window.todosRef = todosRef;
    watchEffect(() => {
        // 这个函数中只要用到了响应式数据，这些响应式数据就会自动被作为依赖，这个函数依赖这个响应式数据
        // 这个响应式数据一旦发生变化会重新运行这个函数
        todoStotage.save(todosRef.value);
    });
    return {
        todosRef
    }
}