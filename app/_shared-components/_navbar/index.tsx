import Link from 'next/link';
import NavLinks from './nav-links';
// import AcmeLogo from '@/app/ui/acme-logo';
import { useSession, signIn, signOut } from "next-auth/react"


const LoginComponent = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}

type Props = {}

const Navbar = (props: Props) => {
  const { data: session, status } = useSession()

  // if (status === "authenticated") {
  //   return <p>Signed in as {session.user.email}</p>
  // }

  // return <a href="/api/auth/signin">Sign in</a>
  return (
    <div>
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        {/* <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div> */}
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            {/* <PowerIcon className="w-6" /> */}
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Navbar