import { useSession, signIn, signOut } from "next-auth/react"

export const LoginComponent = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <p className="mx-2 text-blue-600">Hi <span className="">{session.user?.name} </span></p>
        <button className="rounded-md px-1.5 py-2 text-gray-500 hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4" onClick={() => signOut()}> Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className="rounded-md px-2 py-2 text-blue-600 hover:bg-gray-100 focus-visible:bg-gray-100" onClick={() => signIn()}>Sign in with Google</button>
    </>
  )
}