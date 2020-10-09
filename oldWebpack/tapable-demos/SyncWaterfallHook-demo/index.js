const { SyncWaterfallHook } = require('tapable');

class People {
    constructor () {
        this.hooks = {
            learning: new SyncWaterfallHook(['name', 'age'])
        };
    }
}

const people = new People();

people.hooks.learning.tap('react', (name, age) => {
    console.log('学习react中...', name, age);
    return '准备学习vue';
});

people.hooks.learning.tap('vue', arg => {
    console.log(arg);
    console.log('学习vue中...');
    return {
        last: 'vue学的很不错...',
        next: '准备学习angular',
    };
});

people.hooks.learning.tap('react', arg => {
    console.log(arg.last, arg.next)
    console.log('学习angular中...');
});

people.hooks.learning.call('rogan', 18);