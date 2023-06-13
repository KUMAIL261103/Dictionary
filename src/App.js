
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import MainDisplay from './components/MainDisplay';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
function App() {
  const [word,setword]= useState('');
  const [data,setdata]=useState([]);
  const sendword =(data)=>{
      setword(data);
      fetchdata(word);
  }
  const [received,setreceived]=useState(false);
  async function fetchdata(word){
    try{
    const res= await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const Jsondata = await res.json();
    setdata( Jsondata);
    console.log(Jsondata);
    setreceived(true);
  }catch(e){
    setreceived(false);
    console.log(e);
  }
  }
  return (
    <div className="App">
      <div className="container">

        <Header/>
        <SearchBar sendword={sendword}/>
        <MainDisplay  data={received ? data[0].word : ''}
          sound={received ? data[0].phonetic : ''}
          audio={received ? data[0].phonetics[0].audio : ''} display={received}/>
        <MainContent display={received} data={data}/>
      </div>
      

    </div>
  );
}

export default App;
