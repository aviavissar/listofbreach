import React,{ useState, useEffect } from 'react';
import styled from "styled-components/macro";
import media from "styled-media-query";
import BreachesList from './view/BreachesList';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const App = () => {
  let [theme, setTheme] = useState('light');
  let [bool, setBool] = useState(true);
 
  useEffect(() => {
    document.body.classList.add(theme);
  
    return function cleanup() {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const handleChange = (event) => {
    if(bool){
      setTheme('dark')
    }
   else{
    setTheme('light')
   } 
   setBool(!bool) 
  };

   return (
    <Main className='App'>
    <Header>
   
   <label>Darken</label>
      <Switch
        checked={bool}
        onChange={handleChange}
        name="checkedB"
        color="primary"
      />
      <label>Lighter</label>
    </Header>
          <BreachesList></BreachesList>
    </Main>
  )
}

export default App;
const Main = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  margin:15px auto;
  width:1000px;
  border:none;  
  ${media.lessThan("small")`
    margin: 1px;
    padding: 0px;
    height: 18vh;
    width:100%;
  `}
`;

const Header = styled.div`
 height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
 
  ${media.lessThan("small")`
    padding:5px;
    min-width: 118px;
    margin:5px;
  `}
`;
