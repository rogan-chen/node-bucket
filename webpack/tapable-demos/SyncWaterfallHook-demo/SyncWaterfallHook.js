class SyncWaterfallHook {
    constructor(arg = []) {
        this.tasks = [];
        this.argLength = arg.length;
    }

    tap(arg, callback) {
        this.tasks.push(callback);
    }

    call(...args) {
        let result = args.slice(0, this.argLength);
        this.tasks.map((task, index) => {
            if (index === 0) {
                result = task(...result);
            } else {
                result = task(result);
            }
        });
    }
}