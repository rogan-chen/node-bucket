// const { SyncHook } = require('tapable');
const SyncHook = require('./SyncHook');

class People {
    constructor () {
        this.hooks = {
            learning: new SyncHook(['name', 'age'])
        };
    }
}

const people = new People();

// 注册监听
people.hooks.learning.tap('react', (name, age) => console.log('学习react中...', name, age));
people.hooks.learning.tap('vue', (name, age) => console.log('学习vue中...', name, age));
people.hooks.learning.tap('angular', (name, age) => console.log('学习angular中...', name, age));

// 触发监听
people.hooks.learning.call('Rogan', 18);
