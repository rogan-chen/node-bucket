import React from 'react'
import ReactDom from 'react-dom';

class HelloWorld extends React.PureComponent {
    render() {
        return <div>Hellow Webpack!</div>;
    }
}

ReactDom.render(
    <HelloWorld />,
    document.getElementById('content'),
)

const SetGender = classname => console.log(classname)

@SetGender
class People {
    name = 'Allen';

    age = 18;

    sayHello = () => {
        console.log(`你好，我叫${this.name}，我今年${this.age}了`)
    }
}

const people = new People();
people.sayHello();

function * gen() {
    yield 1;
}

console.log(gen().next());

