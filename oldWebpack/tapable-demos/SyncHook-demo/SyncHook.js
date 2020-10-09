class SyncHook {
    constructor(args = []) {
        // 任务
        this.tasks = [];

        // 参数长度
        this.argLength = args.length;
    }

    tap(arg, callback) {
        this.tasks.push(callback);
    }

    call(...args) {
        this.tasks.map(task => task(...(args.slice(0, this.argLength))))
    }
}

module.exports = SyncHook;