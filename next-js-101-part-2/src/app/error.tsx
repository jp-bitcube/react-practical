"use client"

import React from 'react'
import { Button } from 'react-bootstrap'

interface ErrorPageProps {
    error: Error,
    reset: () => void
}

const Error = ({error, reset}: ErrorPageProps) => {
  return (
    <div>
        Error Occurred
        <Button onClick={reset}>Try Again!</Button>
    </div>
  )
}

export default Error