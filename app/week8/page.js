"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    await gitHubSignIn();
  }
  async function handleSignOut() {
    await firebaseSignOut();
  }
  return (
    <div>
      {user ? (
        <button
          onClick={handleSignOut}
          className="p-1 m-1 text-white bg-blue-500 rounded hover:bg-orange-400"
        >
          Sign Out
        </button>
      ) : (
        <button
          onClick={handleSignIn}
          className="p-1 m-1 text-white bg-blue-500 rounded hover:bg-orange-400"
        >
          Sign In
        </button>
      )}
      {user && (
        <p className="p-1">
          Welcome, {user.displayName} ({user.email})
          <br />
          <Link
            href="week8/shopping-list"
            className="p-1 text-white bg-blue-500 rounded hover:bg-orange-400"
          >
            Shopping List
          </Link>
        </p>
      )}
      <p className="mt-3 ml-1">
        <Link
          href="/"
          className="p-1 text-white bg-blue-500 rounded hover:bg-orange-400"
        >
          Home
        </Link>
      </p>
    </div>
  );
}
