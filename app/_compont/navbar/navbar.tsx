import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
<nav className='bg-slate-400   '>
    <div className=' container flex justify-between gy-2 w-full md:w-[80%] mx-auto p-5'>
<div className='right'>
<ul className='flex gap-x-4 items-center'>
    <li>
        <Link href="/"><i className="fas fa-shopping-cart"></i> FreshCard</Link>
    </li>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/cart">Cart</Link></li>
    <li><Link href="/product">Products</Link></li>
    <li><Link href="/catgories">Categories</Link></li>
    <li><Link href="/brands">Brand</Link></li>

</ul>
</div>
<div className='left'>
 <ul className='flex gap-x-4 '>
    <li><i className="fa-brands fa-facebook"></i></li>
        <li><i className="fa-brands fa-instagram"></i></li>
    <li><i className="fa-brands fa-twitter"></i></li>
    <li><i className="fa-brands fa-youtube"></i></li>
<li><Link href="/register">Register</Link></li>
<li><Link href="/login">Login</Link></li>
</ul>

<>
<li><Link  href="/login">SigOut</Link></li>
<h1>Welcome</h1>
</>




</div>
    </div>
</nav>
)
}
