import ReactDOM from 'react-dom/client';
import ApolloProvider from './ApolloProvider'; // This is your custom wrapper
import App from './App';

const container = document.getElementById('root');
if (!container) throw new Error('Root container missing in index.html');

const root = ReactDOM.createRoot(container);
root.render(
  <ApolloProvider>
    <App />
  </ApolloProvider>
);
