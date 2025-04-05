import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to='/buho'>
        <button>Buho</button>
      </Link>
      <Link to='/gallo'>
        <button>Gallo</button>
      </Link>
    </div>
  )
}

