import blogService from '../services/blogs'

const byLikes = (a, b) => b.likes - a.likes

const reducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_BLOGS':
    return action.data.sort(byLikes)

  case 'NEW_BLOG':
    return  [ ...state, action.data ]

  case 'VOTE_BLOG':
    return state
      .filter(a => a.id !== action.data.id)
      .concat(action.data)
      .sort(byLikes)

  case 'DELETE_BLOG':
    return state
      .filter(b => b.id !== action.data.id)
      .sort(byLikes)

  case 'COMMENT_BLOG':
    return state
      .filter(a => a.id !== action.data.id)
      .concat(action.data)
      .sort(byLikes)

  default: return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs,
    })
  }
}

export const createBlog = blog =>  {
  return async dispatch => {
    const returnedBlog = await blogService.create(blog)

    dispatch({
      type: 'NEW_BLOG',
      data: { ...returnedBlog,
        user: {
          ...blog.user,
          id: returnedBlog.user,
        }
      },
    })
  }
}

export const voteBlog = (blog) => {
  return async dispatch => {
    const blogToUpdate = {
      ...blog,
      user: blog.user.id,
      likes: blog.likes + 1
    }
    const updatedBlog = await blogService.update(blogToUpdate)
    dispatch({
      type: 'VOTE_BLOG',
      data: updatedBlog,
    })
  }
}

export const deleteBlog = (blog) => {
  return async dispatch => {
    await blogService.remove(blog)
    dispatch({
      type: 'DELETE_BLOG',
      data: blog,
    })
  }
}

export const commentBlog = (blog, comment) =>  {
  return async dispatch => {
    const updatedBlog = await blogService.comment(blog, { comment })

    dispatch({
      type: 'COMMENT_BLOG',
      data: updatedBlog,
    })
  }
}

export default reducer