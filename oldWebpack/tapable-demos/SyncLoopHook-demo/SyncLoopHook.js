class SyncLoopHook {
    constructor(arg = []) {
        this.tasks = [];
        this.argLength = arg.length;
    }

    tap(arg, callback) {
        this.tasks.push(callback);
    }

    call(...args) {
        let index = 0;
        const newArgs = args.slice(0, this.argLength);

        while(index < this.tasks.length) {
            const result = this.tasks[index](...newArgs);
            if (result === undefined) {
                index++;
            }
        }
    }
}

module.exports = SyncLoopHook;