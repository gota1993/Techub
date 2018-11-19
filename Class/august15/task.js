let Task = function () {
    this.name = data.name
    this.flyweight = FlyweighFactory.get(data.project, data.priority, data.user, data.completed)

}

Task.prototype.getPriority = function () {
    this.flyweight.priority
}

function FlyWeigh(project, priority, user, completed) {
    this.priority = priority
    this.project = project
    this.user = user
    this.completed = completed
}

let FlyweighFactory = function () {
    let flyweights = {}
    let get = function (project, priority, user, completed) {
        let currentObjectKey = project + priority + user + completed
        if (!flyweights[currentObjectKey]) {
            flyweights[currentObjectKey] = new FlyWeigh(project, priority, user, completed)
        }
    }

    let getCount = function(){
        let count = 0
        for (let f in flyweights) {
            count++
        }
        return count
    }

    return {
        getCount,
        get
    }

}()