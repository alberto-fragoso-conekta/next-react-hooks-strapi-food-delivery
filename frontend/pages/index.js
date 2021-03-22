import React, { useState } from 'react'
import { Col, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap'
import RestaurantList from '../components/RestaurantList'

const Home = () => {
  const [query, setQuery] = useState('')

  const handleSearch = ({  target: { value: QUERY_SEARCH } }) => {
    setQuery(QUERY_SEARCH.toLowerCase())
  }

  return (
    <div className='container-fluid'>
      <Row>
        <Col>
          <div className='search'>
            <InputGroup>
              <InputGroupAddon addonType='append' >Search</InputGroupAddon>
              <Input onChange={handleSearch} value={query}/>
            </InputGroup>
          </div>
          <RestaurantList search={query} />
        </Col>
      </Row>
      <style jsx>
        {`.search { margin: 20px }`}
      </style>
    </div>
  )
}

export default Home