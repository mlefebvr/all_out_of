import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

const CategoryCard = ({ category, fetchData, setData }) => {
    const handleCheckboxChange = (event) => {
        setData(category.name, event.target.name, event.target.checked)
    }
    return ( 
        <Card key={category._id} className="d-inline-block">
            <Card.Header className="text-uppercase">{category.name}</Card.Header>
            <Card.Body>
                { 
                    category.items.length ? category.items.map(item => <Form.Check key={item.name} name={item.name} label={item.name} onChange={handleCheckboxChange} />) : <span>Nothing here</span>
                }
            </Card.Body>
        </Card>
    )
}

const CardSet = ({ categories, fetchData, setData }) => {
    return (
        <>
            <CardColumns className='d-inline-block'>
                {
                    categories.map((category) => <CategoryCard key={category._id} category={category} setData={setData} />)
                }
            </CardColumns>
        </>
    )
}

export default CardSet