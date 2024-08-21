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

    set todos(newList) {
        return this.#todos;
    }

    addToDo(item) {
        this.#todos.push(item);
    }

    removeToDo(title) {
        this.#todos = this.#todos.filter(function(entry) {
            return entry._title !== title;
          });
    }
}

export {Project};