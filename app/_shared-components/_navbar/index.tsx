import NavLinks from './nav-links';
import { redirect } from 'next/navigation'
// import { signOut } from 'next-auth/react';

type Props = {}

const Navbar = (props: Props) => {
  

  //TODO:
  // const logOut = async () => {
  //   await signOut()
  // }

  return (
    <nav className='flex h-full px-3 py-2 md:px-2 text-gray-900'>
      <div className="flex grow flex-row justify-between space-x-2 items-center">
        <h2>המכינה למציאת עבודה</h2>
        <NavLinks />
        <form
          action={async () => {
            'use server';
            redirect('/api/auth/signout')
          }}
        >
          <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-[#164E63] md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
        <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-[#164E63] md:flex-none md:justify-start md:p-2 md:px-3">
          <div className="hidden md:block">Sign Out</div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar