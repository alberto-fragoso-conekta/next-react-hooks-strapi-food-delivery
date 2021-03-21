import React from 'react'
import Head from 'next/Head'
import Link from 'next/link'
import { Container, Nav, NavItem } from 'reactstrap'

const Layout = ({ children }) => {
  const TITLE = 'Welcome to Next.js!'

  return (
    <div>
      <Head>
        <title>{TITLE}</title>
        <meta charSet='utf-8' />
        <link 
          crossOrigin="anonymous"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          rel="stylesheet"
        />
        <script src='https://js.stripe.com/v3' />
      </Head>
      <header>
        <style jsx>
          { `a { color: white }` }
        </style>

        <Nav className='navbar navbar-dark bg-dark'>
          <NavItem>
            <Link href='/'>
              <a className='navbar-brand'>Home</a>
            </Link>
          </NavItem>

          <NavItem className='ml-auto'>
            <Link href='/login'>
              <a className='nav-link'>Sig In</a>
            </Link>
          </NavItem>

          <NavItem>
            <Link href='/register'>
              <a className='nav-link'>Sign up</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{children}</Container>
    </div>
  )
}

export default Layout