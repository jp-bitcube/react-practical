import Hello from './components/Hello'

const peopleData = [
  {name: 'John', message: 'Howzit!!'},
  {name: 'Anna', message: 'Hello!'},
  {name: 'JP', message: 'Welcome to React!'}
]

function App() {
  return (
    <div className='App'>
      <h2>React 101</h2>
      <Hello people={peopleData}/>
    </div>
  )
}

export default App
