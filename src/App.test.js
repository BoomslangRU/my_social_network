import ReactDom from 'react-dom';
import MainApp from './App'


test('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDom.render(<MainApp />, div)
  ReactDom.unmountComponentAtNode(div)
});
