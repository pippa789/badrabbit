import React from 'react';
import styled from 'styled-components'
import Modal from 'react-modal';
import FullCalendar from './Components/calendar'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import head from './images/head.jpg'


Modal.setAppElement('#root')

const Container = styled.div`
height: 100%;
`
const HeadImg = styled.div`
width: 100% no-repeat;
height: 350px;
background-image: url(${head});
`;




function App() {
  return (
    
    <Container>
    <Router>
       <NavBar />
        <Routes>
          <Route exact path = "/calendar" element = {<FullCalendar />} />
        </Routes>
        <HeadImg />
     </Router>
    
     </Container>
    
    
    
  )
}

export default App;
