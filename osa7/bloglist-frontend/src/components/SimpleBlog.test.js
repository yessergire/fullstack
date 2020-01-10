import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import SimpleBlog from './SimpleBlog'

const blog = {
  'title': 'This is a test blog',
  'author': 'tester',
  'likes': 3
}

test('renders content', () => {
  const component = render(
    <SimpleBlog blog={blog} />
  )

  expect(component.container.querySelector('.simple-blog-title'))
    .toHaveTextContent('This is a test blog tester')
  expect(component.container.querySelector('.simple-blog-likes'))
    .toHaveTextContent(`blog has ${blog.likes} likes`)
})


it('clicking the button twice calls event handler twice', async () => {
  const mockHandler = jest.fn()

  const component = render(
    <SimpleBlog blog={blog} onClick={mockHandler} />
  )

  const button = component.container.querySelector('.simple-blog-like-button')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})