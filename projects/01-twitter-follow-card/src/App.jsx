import './App.scss'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'ElenaRentero',
    name: 'Elena Clemente Rentero',
    isFollowing: true
  },
  {
    userName: 'AlvaroFaure',
    name: 'Álvaro Faure',
    isFollowing: true
  },
  {
    userName: 'Adalab',
    name: 'Adalab',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {users.map(({ userName, name, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  )
}
