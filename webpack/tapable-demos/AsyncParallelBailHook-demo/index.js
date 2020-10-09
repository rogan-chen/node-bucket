// const { AsyncParallelBailHook } = require('tapable');
const AsyncParallelBailHook = require('./AsyncParallelBailHook');

class People {
    constructor() {
        this.hooks = {
            learning: new AsyncParallelBailHook(['name', 'age']),
        };
    }
}

const learningLanguage = () => {
    const people = new People();

    people.hooks.learning.tapPromise('JavaScript', (name, age) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('JavaScript', name, age);
                console.log('JavaScript好难，学不下去了...')
                reject('error');
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

learningLanguage();