class Item {
    _title;
    _priority;
    _details;
    _dueDate;
    
    constructor(title, dueDate, priority, details) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.details = details;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        this._title = newTitle;
    }

    get dueDate() {
        return this._dueDate;
      }
    
    set dueDate(newDueDate) {
        this._dueDate = newDueDate;
    }
    get priority() {
        return this._priority;
      }
    
    set priority(newPriority) {
        this._priority = newPriority;
    }

    get details() {
        return this._details;
    }

    set details(newDetails) {
        this._details = newDetails;
    }
}

export {Item as Todo};