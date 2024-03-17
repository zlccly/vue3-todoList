const LOCAN_KEY = "todomvc"


/**
 * 获取目前所有的任务
 */
export function fetch() {
    const result = localStorage.getItem(LOCAN_KEY)
    if (result) {
        return JSON.parse(result);
    }
    return [];
}

/**
 * 保存所有的任务
 * @param {*} todos 任务列表
 */
export function save(todos) {
    localStorage.setItem(LOCAN_KEY, JSON.stringify(todos))
}