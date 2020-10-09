// const { SyncBailHook } = require('tapable');
const SyncBailHook = require('./SyncBailHook');

class People {
    constructor() {
        this.hooks = {
            learning: new SyncBailHook(['name', 'age'])
        };
    }
}

const people = new People();

people.hooks.learning.tap('react', (name, age) => console.log('学习react中...', name, age));
people.hooks.learning.tap('vue', (name, age) => {
    console.log('学习vue中...', name, age);
    console.log('vue好难，学不下去了...');
    return null;
});
people.hooks.learning.tap('angular', (name, age) => console.log('学习angular中...', name, age));

people.hooks.learning.call('rogan', 18);