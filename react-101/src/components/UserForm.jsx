import { useState } from "react"

export default function UserForm() {
    const [ user, setUser ] = useState({ name: '', phoneNumber: '' });

    return (
        <div>
          <h3>User Form: </h3>
          <br/>
            <form>
              <input onChange={(e) => setUser({ ...user, name: e.target.value })} value={ user.name } placeholder="Name" />
              <br />
              <input onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })} value={ user.phoneNumber } placeholder="Phone number" />
            </form>
          <br/>
          <p>
            <b>Name typed: </b> { user.name }
            <br />
            <b>Phone number typed: </b> { user.phoneNumber }
          </p>
        </div>
    )
}