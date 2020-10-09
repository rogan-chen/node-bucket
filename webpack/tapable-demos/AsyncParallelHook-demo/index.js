// const { AsyncParallelHook } = require('tapable');
const AsyncParallelHook = require('./AsyncParallelHook');

class People {
    constructor() {
        this.hooks = {
            learning: new AsyncParallelHook(['name', 'age']),
        };
    }
}

const learningFrame = () => {
    const people = new People();

    people.hooks.learning.tapAsync('react', (name, age, callback) => {
        setTimeout(() => {
            console.log('react', name, age);
            callback();
        }, 800);
    });
    
    people.hooks.learning.tapAsync('vue', (name, age, callback) => {
        setTimeout(() => {
            console.log('vue', name, age);
            callback();
        }, 1300);
    });
    
    people.hooks.learning.tapAsync('angular', (name, age, callback) => {
        setTimeout(() => {
            console.log('angular', name, age);
            callback();
        }, 300);
    });
    
    people.hooks.learning.callAsync('rogan', 18, () => {
        console.log('框架学习结束');
    });
}

const learningLanguage = () => {
    const people = new People();

    people.hooks.learning.tapPromise('JavaScript', (name, age) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('JavaScript', name, age);
                resolve();
            }, 2000);
        });
    });
    
    people.hooks.learning.tapPromise('HTML', (name, age) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('HTML', name, age);
                resolve();
            }, 3000);
        });
    });
    
    people.hooks.learning.tapPromise('CSS', (name, age) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('CSS', name, age);
                resolve();
            }, 1500);
        });
    });
    
    people.hooks.learning.promise('rogan', 18).then(() => {
        console.log('编程语言学习完毕');
    }, () => {
        console.log('无法完成编程语言学习');
    });
};

learningFrame();

learningLanguage();