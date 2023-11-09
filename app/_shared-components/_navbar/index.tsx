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
  // TODO:
  // const { data: session, status } = useSession()

  // if (status === "authenticated") {
  //   return <p>Signed in as {session.user.email}</p>
  // }

  // return <a href="/api/auth/signin">Sign in</a>
  return (
    <nav className='flex h-full px-3 py-2 md:px-2 text-gray-900'>
      <div className="flex grow flex-row justify-between space-x-2 items-center">
        <h2>המכינה למציאת עבודה</h2>
        <NavLinks />
        <form
          action={async () => {
            'use server';
            // await signOut(); // TODO..
            redirect('/api/auth/signout')
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-[#164E63] md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar