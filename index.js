import { h, render } from 'preact';
import App from './components/App';

render(<App info="testme baby"/>, document.querySelector("#root"));