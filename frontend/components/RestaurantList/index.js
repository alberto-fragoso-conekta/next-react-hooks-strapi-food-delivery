import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Link from 'next/link'
import { Card, CardBody, CardImg, CardTitle, CardText, Row, Col } from 'reactstrap'

const QUERY = gql`
  {
    restaurants {
      id
      name
      description
      image {
        url
      }
    }
  }
`

const RestaurantList = ({ search }) => {
  const { data, error, loading } = useQuery(QUERY)
  const API_URL = process.env_NEXT_PUBLIC_API_URL || 'http://localhost:1337'

  if (error) return 'Error loading restaurants'

  if (loading) return <h1>Fetching...</h1>

  if (data.restaurants && data.restaurants.length) {
    const SEARCH_QUERY = data.restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(search.toLowerCase()))

    if (SEARCH_QUERY.length === 0) return <h1>No Restaurants Found</h1>

    return (
      <Row>
        {SEARCH_QUERY.map(({ description, id, image, name }) => 
          (
            <Col xs='12' sm='4' key={id}>
              <Card style={{ margin: '0 0.5rem 20px 0.5rem' }}>
                <CardImg 
                  top
                  style={{ height: 250 }}
                  src={`${API_URL}${image.url}`}
                />
                <CardBody>
                  <CardTitle>{name}</CardTitle>
                  <CardText>{description}</CardText>
                </CardBody>
                <div className='card-footer'>
                  <Link href={`/restaurants?id=${id}`} as={`/restaurants/${id}`}>
                    <a className='btn btn-primary'>View</a>
                  </Link>
                </div>
              </Card>
            </Col>
          )
        )}
        
        <style jsx global>
          {`
            a { color: white }
            a:link { text-decoration: none; color: white }
            a:hover { color: white }
            .card { height: 500px }
            .card img { object-fit: cover; }
            .card-columns { column-count: 3 }
          `}
        </style>
      </Row>
    )
  }

  return <h5>Add Restaurants</h5>
}

export default RestaurantList
