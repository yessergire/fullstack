import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './components/Menu'
import Anecdote from './components/Anecdote'
import Anecdotes from './components/Anecdotes'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'

const Footer = () => (
  <>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.
    See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the source code.
  </>
)

const About = () => (
  <>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>
    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is "a story with a point."</em>
    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </>
)


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      anecdotes: [
        {
          content: 'If it hurts, do it more often',
          author: 'Jez Humble',
          info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
          votes: 0,
          id: '1'
        },
        {
          content: 'Premature optimization is the root of all evil',
          author: 'Donald Knuth',
          info: 'http://wiki.c2.com/?PrematureOptimization',
          votes: 0,
          id: '2'
        }
      ],
      notification: ''
    }
  }

  setNotification = message => {
    this.setState({ notification: message })
    setTimeout(() => {
      this.setState({ notification: '' })
    }, 10000)
  }

  addNew = newAnecdote => {
    newAnecdote.id = (Math.random() * 1000000).toFixed(0)
    this.setState({ anecdotes: this.state.anecdotes.concat(newAnecdote) })
    this.setNotification(`a new anecdote ${newAnecdote.content} created!`)
  }

  anecdoteById = id => this.state.anecdotes.find(anecdote => id === anecdote.id)

  vote = id => {
    const anecdote = this.anecdoteById(id)
    const votedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const anecdotes = this.state.anecdotes.map(anecdote =>
      (id === anecdote.id) ? votedAnecdote : anecdote)
    this.setState({ anecdotes })
  }

  render() {
    return (
      <div>
        <h1> Software anecdotes </h1>
        <Router>
          <div>
            <Menu />
            <Notification message={this.state.notification} />
            <Route exact path="/" render={() =>
              <Anecdotes anecdotes={this.state.anecdotes} />
            } />
            <Route path="/create" render={() =>
              <AnecdoteForm addNew={this.addNew}/>
            } />
            <Route path="/about" render={() =>
              <About />}
              />
            <Route exact path="/anecdotes/:id" render={({ match }) =>
              <Anecdote anecdote={this.anecdoteById(match.params.id)} vote={(e) => this.vote(match.params.id)} />
            } />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
