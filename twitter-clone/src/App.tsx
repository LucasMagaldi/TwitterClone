import React from 'react';
import { CreateGlobalStyles } from './styles/GlobalStyles';
import Layout from './components/Layout';


function App() {
  return (
    <React.Fragment>
      <Layout />
      <CreateGlobalStyles />
    </React.Fragment>
  );
}

export default App;
