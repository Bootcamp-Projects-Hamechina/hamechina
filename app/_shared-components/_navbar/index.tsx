import Link from 'next/link';
import NavLinks, {signOut} from './nav-links';
import { redirect } from 'next/navigation'


// const LoginComponent = () => {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user?.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
//       <button onClick={() => signIn()}>Sign in</button>
//     </>
//   )
// }

type Props = {}

const Navbar = (props: Props) => {
  // const { data: session, status } = useSession()

  // if (status === "authenticated") {
  //   return <p>Signed in as {session.user.email}</p>
  // }

  // return <a href="/api/auth/signin">Sign in</a>
  return (
    <nav className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
        {/* <form
          action={async () => {
            'use server';
            // await signOut();
            redirect('/api/auth/signout')
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
          </button>
        </form> */}
      </div>
    </nav>
  )
}

export default Navbar