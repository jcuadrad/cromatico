import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactCursorPosition from 'react-cursor-position'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReactCursorPosition>
                    <App />
                </ReactCursorPosition>, document.getElementById('root'));
registerServiceWorker();
