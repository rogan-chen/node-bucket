import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.PureComponent {
    render() {
        return <div>Hello DLLPlugin</div>
    }
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root'),
)