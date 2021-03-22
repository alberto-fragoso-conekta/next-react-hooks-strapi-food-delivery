const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const hanlde = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/restaurants/:id', (req, res) => {
      const currentPage = '/restaurants'
      const queryParams = { id: req.params.id }
      console.dir('req.params.id = ' + JSON.stringify(req.params.id))
      app.render(req, res, currentPage, queryParams)
    })

    server.get('*', (req, res) => {
      return hanlde(req, res)
    })

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })