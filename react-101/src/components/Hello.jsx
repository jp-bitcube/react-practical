function Hello({ people }) {
  console.log({people})
  return (
    <div className="Hello"> 
      <h3>Greetings</h3>
      <ul>
        { 
          people.map((person, index) => { 
            return <li key={index}> {person.message} <b>{person.name}</b> </li>
          })
        }
      </ul>
    </div>
  );
}

export default Hello