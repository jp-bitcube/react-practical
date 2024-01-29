import Hello from './components/Hello';
import Counter from './components/Counter';
import UserForm from './components/UserForm';

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
      <Counter />
      <UserForm />
    </div>
  )
}

export default App
