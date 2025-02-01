import Link from 'next/link'
import { ReactNode, Suspense } from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { getCurrentUser } from '@/services/clerk'
import { canAccessAdminPages } from '../permissions/general'

export default function ConsumerLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

function Navbar() {
  return (
    <header className='z-10 flex h-12 shadow'>
      <nav className='container flex items-center gap-4 mx-auto'>
        <Link
          className='px-2 mr-auto text-lg hover:underline'
          href='/'>
          Tytbook
        </Link>
        <Suspense>
          <SignedIn>
            <AdminLink />
            <Link
              className='px-2 hover:underline'
              href='/account'>
              Акаунт
            </Link>
            <div className='self-center size-8'>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: { width: '100%', height: '100%' },
                  },
                }}
              />
            </div>
          </SignedIn>
        </Suspense>
        <Suspense>
          <SignedOut>
            <Button
              className='self-center'
              asChild>
              <SignInButton>Sign In</SignInButton>
            </Button>
          </SignedOut>
        </Suspense>
      </nav>
    </header>
  )
}

async function AdminLink() {
  const user = await getCurrentUser({ allData: true })
  console.log(user.user?.name)
  if (!canAccessAdminPages(user)) return null

  return (
    <Link
      className='flex items-center px-2 hover:bg-accent/10'
      href='/admin'>
      Admin
    </Link>
  )
}
