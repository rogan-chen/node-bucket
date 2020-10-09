// const { SyncLoopHook } = require('tapable');
const SyncLoopHook = require('./SyncLoopHook');

class People {
    constructor () {
        this.reactCount = 3;
        this.vueCount = 1;
        this.hooks = {
            learning: new SyncLoopHook(['name', 'age'])
        };
    }
}

const people = new People();

people.hooks.learning.tap('react', (name, age) => {
    console.log('学习react中...', name, age);
    return --people.reactCount > 0 ? people.reactCount : undefined;
});

people.hooks.learning.tap('vue', (name, age) => {
    console.log('学习vue中...', name, age);
    return --people.vueCount > 0 ? people.vueCount : undefined;
});

people.hooks.learning.call('rogan', 18);