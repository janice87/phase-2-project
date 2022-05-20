import React, {useState} from 'react'
import Header from './Header'
import NavBar from './NavBar';
import PageContainer from './PageContainer';

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div>
      <Header searchTerm={searchTerm} onSetSearchTerm={setSearchTerm}/>
      <NavBar />
      <PageContainer />
    </div>
  );
}

export default App;
