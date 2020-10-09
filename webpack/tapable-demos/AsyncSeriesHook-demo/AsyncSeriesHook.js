class AsyncSeriesHook {
    constructor(args = []) {
        this.tasks = [];
        this.argLength = args.length;
    }

    tapAsync(arg, callback) {
        this.tasks.push(callback);
    }

    callAsync(...args) {
        const newArgs = [...args];
        const doneCallback = newArgs.pop();
        let index = 0;
        let next = () => {
            if(index === this.tasks.length) {
                return doneCallback();
            }
            const task = this.tasks[index++];
            task(...newArgs, next);
        };
        next();
    }

    tapPromise(arg, callback) {
        this.tasks.push(callback);
    }

    promise(...args) {
        // let index = 0;
        // let next = () => {
        //     if(index >= this.tasks.length) {
        //         return new Promise(resolve => resolve());
        //     }
            
        //     const task = this.tasks[index];
        //     return task(...args).then(() => {
        //         index++;
        //         next(...args);
        //     });
        // };
        // return next();

        const [first, ...others] = this.tasks;
        return others.reduce((accumulator, currentValue) => {
            return accumulator.then(() => currentValue(...args));
        }, first(...args));
    }
}

module.exports = AsyncSeriesHook;