import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

function AboutPage() {
  return <Card>
    <div className='about'>
        <h2>This is about this App</h2>
        <p>Feedback App</p>

        <Link to='/'>
            <FaHome size={30}/>
        </Link>
        </div>
</Card>
}

export default AboutPage