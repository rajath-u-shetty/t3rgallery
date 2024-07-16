import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export function TopNav() {
  return (
    <nav className="flex items-center justify-between w-full border-b p-4 text-xl text-semibold">
      <div>gallery</div>

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
