import React, { useState, useEffect } from 'react'
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
import Container from 'react-bootstrap/Container'
import CardSet from './components/CardSet'
import Button from 'react-bootstrap/Button'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [categories, setCategories] = useState([])

  const fetchData = () => {
    console.log('fetchData')
    fetch('http://10.0.0.253:4000')
    .then(response => response.json())
    .then(response => setCategories(response))
    .catch(error => console.log(error))
  }

  const setData = (category, item_name, checked) => {
    console.log(`Update: ${category}, ${item_name}, ${checked}`)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <div className='body'>
        <HeaderBar />
        <Button onClick={fetchData}>Reload</Button>
        <Container className='mainContainer pt-2'>
          <CardSet 
            categories={categories} 
            fetchData={fetchData}
            setData={setData}
          />
        </Container>
        <FooterBar />
      </div>
    </>
  )
}

export default App;
