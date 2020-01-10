import React from 'react'
import { render,  waitForElement } from 'react-testing-library'
jest.mock('./services/blogs')
import App from './App'

describe('<App />', () => {
  it('renders login', async () => {
    const component = render( <App />)
    component.rerender(<App />)
    await waitForElement(
      () => component.container.querySelector('.login')
    )

    expect(
      component.container.querySelector('.login')
    ).toHaveTextContent('Log in to application')

    expect(
      component.container.querySelector('.blog')
    ).toBeNull()
  })

  it('renders all blogs it gets from backend', async () => {
    localStorage.setItem('loggedBlogAppUser',
      JSON.stringify({
        username: 'tester',
        token: '1231231214',
        name: 'Tester'
      })
    )

    const component = render(
      <App />
    )

    component.rerender(<App />)
    await waitForElement(
      () => component.container.querySelector('.blog')
    )

    const blogs = component.container.querySelectorAll('.blog')
    expect(blogs.length).toBe(3)

    expect(component.container).toHaveTextContent('Mock blog 1')
    expect(component.container).toHaveTextContent('Mock blog 2')
    expect(component.container).toHaveTextContent('Mock blog 3')
  })
})