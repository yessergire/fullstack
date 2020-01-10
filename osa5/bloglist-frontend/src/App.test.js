import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, waitForElement } from '@testing-library/react'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  it('render login', async () => {
    const component = render(<App />)
    component.rerender(<App />)
    await waitForElement(
      () => component.container.querySelector('.loginForm')
    )

    expect(component.container.querySelector('.loginForm'))
      .toHaveTextContent('Log in')
    expect(component.container.querySelector('.blog')).toBeNull()
  })

  it('renders all blogs it gets from backend', async () => {
    localStorage.setItem('loggedBlogAppUser',
      JSON.stringify({
        username: 'TestingAccount',
        token: 'tmpToken',
        name: 'Tester Account'
      })
    )
    const component = render(<App />)
    component.rerender(<App />)
    await waitForElement(
      () => component.container.querySelector('.blog')
    )

    const blogs = component.container.querySelectorAll('.blog')
    expect(blogs.length).toBe(4)
    expect(component.container).toHaveTextContent('Go To Statement Considered Harmful')
    expect(component.container).toHaveTextContent('Canonical string reduction')
    expect(component.container).toHaveTextContent('First class tests')
    expect(component.container).toHaveTextContent('Type wars')
  })
})
