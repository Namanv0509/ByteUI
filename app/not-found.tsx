// app/not-found.tsx


import Link from 'next/link'
import { PageShell } from '@/components/page-shell'
import Button from '@/components/neo-brutalism/button'


export default function NotFound() {
  return (
    <PageShell>
        <h1 className="page-title text-center pt-50">404</h1>
        <h2 className='page-subtitle text-center'>Page Not Found</h2>
        <Link className='flex justify-center' href="/"> <Button variant="cta">Return Home</Button></Link>
      </PageShell>
  )
}
