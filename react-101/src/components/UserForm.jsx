import { useState } from "react"

export default function UserForm() {
    const [ userName, setUserName ] = useState();
    return (
        <div>
          <h3>User Form: </h3>
          <br />
            <form>
              <input onChange={(e) => setUserName(e.target.value)} value={ userName } placeholder="Name"></input>
            </form>
          <br />
          <p>
            <b>Name Inserted: </b> { userName }
          </p>
        </div>
    )
}