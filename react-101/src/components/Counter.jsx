import { useState } from 'react'

export default function Counter() {
    const [ count, setCount ] = useState(0);
    const [ message, setMessage ] = useState(null);
    
    function provideConditionalMessage() {
        if (count >= 0 && count <= 101) {
            setMessage(null)
        }

        if (count === 0) {
            setMessage('Can not decrease below 0%')
        }

        if (count === 100) {
            setMessage('Can not increment past 100%')
        }
    }

    function increment() {
        if (count < 100) {
            setCount(count + 1);
        } 
        provideConditionalMessage()
    }

    function decrement() {
        if (count > 0) {
            setCount(count - 1);
        } 
        provideConditionalMessage()
    }

    return (
        <div className="Counter">
            <h3>How hot is today for you between 0 - 100 percent: { count } % </h3>

            <button onClick={increment}>Increase Percentage</button>
            <button onClick={decrement}>Decrease Percentage</button>

            { message ? <h5>{ message }</h5> : null }
        </div>
    )
} 