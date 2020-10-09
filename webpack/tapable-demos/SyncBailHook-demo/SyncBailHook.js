class SyncBailHook {
    constructor(args = []) {
        this.tasks = [];
        this.argsLength = args.length;
    }

    tap(arg, callback) {
        this.tasks.push(callback);
    }

    call(...args) {
        let index = 0;
        let result = undefined;
        while(result === undefined) {
            result = this.tasks[index](...(args.slice(0, this.argsLength)));
            index++;
        }
    }
}

module.exports = SyncBailHook;