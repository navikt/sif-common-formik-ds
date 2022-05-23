import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import App from './dev/DevApp';

Modal.setAppElement('#root');
ReactDOM.render(<App />, document.getElementById('root'));
