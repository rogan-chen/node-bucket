const { AsyncSeriesWaterfallHook } = require('tapable');
// const AsyncSeriesWaterfallHook = require('./AsyncSeriesWaterfallHook');

class People {
    constructor() {
        this.hooks = {
            learning: new AsyncSeriesWaterfallHook(['name']),
        };
    }
}

const learningFrame = () => {
    const people = new People();

    people.hooks.learning.tapAsync('react', (name, callback) => {
        setTimeout(() => {
            console.log('react', name);
            callback(null, 'allen');
        }, 800);
    });
    
    people.hooks.learning.tapAsync('vue', (name, callback) => {
        setTimeout(() => {
            console.log('vue', name);
            console.log('vue好难，学不下去了...')
            callback('error', 'jack');
        }, 1300);
    });
    
    people.hooks.learning.tapAsync('angular', (name, callback) => {
        setTimeout(() => {
            console.log('angular', name);
            callback();
        }, 300);
    });
    
    people.hooks.learning.callAsync('rogan', () => {
        console.log('框架学习结束');
    });
}

const learningLanguage = () => {
    const people = new People();

    people.hooks.learning.tapPromise('JavaScript', name => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('JavaScript', name);
                resolve('lily');
            }, 3000);
        });
    });
    
    people.hooks.learning.tapPromise('HTML', name => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('HTML', name);
                console.log('HTML好难，学不下去了');
                reject('error');
            }, 2000);
        });
    });
    
    people.hooks.learning.tapPromise('CSS', name => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('CSS', name);
                resolve();
            }, 1500);
        });
    });
    
    people.hooks.learning.promise('rogan').then(() => {
        console.log('编程语言学习完毕');
    }, () => {
        console.log('无法完成编程语言学习');
    });
};

learningFrame();

// learningLanguage();