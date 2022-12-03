import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (

<div className='bg-purple-300  justify-center font-serif text-white flex gap-5'>
    <a href="./about"><i class="fas fa-female"></i> About </a>
    <a href="./cv"><i class="fas fa-book-reader"></i> Cv </a>
    <Link to={'/project'}><i class="fas fa-tasks-alt"></i> Project</Link>
</div>

  )
}

export default Navbar