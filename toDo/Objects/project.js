class Project {
    #name;
    #todos;

    constructor(name) {
        this.#name = name;
        this.#todos = [];
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    get todos() {
        return this.#todos;
    }

    addToDo(item) {
        this.#todos.push(item);
    }
}

export {Project};