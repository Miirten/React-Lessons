'use client'
import Profile from './Profile.js';
import Link from 'next/link';

export default function App() {
  return (
    <main>
      <Link href="/">← Back to projects</Link>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
  
    </main>
  )
}
