class AsyncParallelHook {
    constructor(args = []) {
        this.tasks = [];
        this.argLength = args.length;
    }

    tapAsync(arg, callback) {
        this.tasks.push(callback);
    }

    callAsync(...args) {
        const newArgs = [...args];
        const doneCallBack = newArgs.pop(); // newArgs 删除最后一个函数
        let callbackCount = 0; // 回调函数执行次数
        const callback = () => { // 回调函数
            if (++callbackCount === this.tasks.length) {
                doneCallBack();
            }
        };
        this.tasks.map(task => task(...newArgs, callback));
    }

    tapPromise(arg, callback) {
        this.tasks.push(callback);
    }

    promise(...args) {
        const taskPromise = this.tasks.map(task => task(...args));
        return Promise.all(taskPromise);
    }
}

module.exports = AsyncParallelHook;