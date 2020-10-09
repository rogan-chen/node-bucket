class AsyncSeriesWaterfallHook {
    constructor(arg = []) {
        this.tasks = [];
        this.argLegnth = arg.length;
    }

    tapAsync(arg, callback) {
        this.tasks.push(callback);
    }

    callAsync(...args) {
        let index = 0;

        const doneCallback = args.pop();

        let next = (...callbackArgs) => {
            let error = null;

            if (index !== 0) {
                error = callbackArgs.shift();
            }

            if(error !== null || index >= this.tasks.length) {
                return doneCallback();
            }
            const task = this.tasks[index++];
            task(...callbackArgs, next);
        };

        next(...args);
    }
}

module.exports = AsyncSeriesWaterfallHook;