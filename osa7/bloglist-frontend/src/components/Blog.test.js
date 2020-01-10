import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import Blog from './Blog'

const blog = {
  'title': 'This is a test blog',
  'author': 'tester',
  'likes': 7,
  'user': { 'name': 'root' }
}

test('renders contents of .blog-header', () => {
  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container.querySelector('.blog-header'))
    .not.toBeNull()
  expect(component.container.querySelector('.blog-body'))
    .toBeNull()
})

it('clicking the button renders contents of .blog-body', async () => {
  const component = render(
    <Blog blog={blog} />
  )

  const button = component.container.querySelector('.blog-header')
  fireEvent.click(button)

  expect(component.container.querySelector('.blog-header'))
    .toBeNull()
  expect(component.container.querySelector('.blog-body'))
    .not.toBeNull()
})
