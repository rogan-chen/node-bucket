class AsyncParallelBailHook {
    constructor(args = []) {
        this.tasks = [];
        this.argLength = args.length;
    }

    tapPromise(arg, callback) {
        this.tasks.push(callback);
    }

    promise(...args) {
        const taskPromise = this.tasks.map(task => task(...args));
        return Promise.all(taskPromise);
    }
}

module.exports = AsyncParallelBailHook;