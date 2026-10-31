import { SignIn } from "@clerk/nextjs";

export default function PageSignIn() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn />
    </div>
  );
}
