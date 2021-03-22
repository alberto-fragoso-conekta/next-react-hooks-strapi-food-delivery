import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { gql } from 'apollo-boost'
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Row } from 'reactstrap'

const GET_RESTAURANTS_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`

const Resturants = () => {
  const router = useRouter()
  const { data, error, loading } = useQuery(GET_RESTAURANTS_DISHES, {
    variables: { id: router.query.id }
  })
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

  if (error) return 'Error loading dishes'

  if (loading) return <h1>Loading...</h1>

  if (data.restaurant) {
    const { restaurant: { dishes, name: RESTAURANT_NAME }} = data

    return (
      <>
        <h1>{RESTAURANT_NAME}</h1>
        <Row>
          {dishes.map(({ description, id, image, name: DISH_NAME }) => (
            <Col xs='12' sm='4' style={{ padding: 0 }} key={id}>
              <Card style={{ margin: '0 10px' }}>
                <CardImg 
                  top
                  style={{ height: 250 }}
                  src={`${API_URL}${image.url}`}
                />
                <CardBody style={{ height: 350 }}>
                  <CardTitle>{DISH_NAME}</CardTitle>
                  <CardText>{description}</CardText>
                </CardBody>
                <div className='card-footer'>
                  <Button outline color='primary'>
                    + Add to cart
                  </Button>
                  <style jsx>
                    {
                      `
                        a { color: white }
                        a:link { text-decoration: none; color: white }
                        .container-fluid { margin-bottom: 30px }
                        .btn-outline-primary { color: #007bff !important }
                        a:hover { color: white !important }
                      `
                    }
                  </style>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )
  }
  return <h1>Add Dishes</h1>
}

export default Resturants
