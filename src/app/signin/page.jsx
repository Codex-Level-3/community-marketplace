import GoogleSignIn from "../components/GoogleSignIn";
import SignIn from "../components/SignIn";

export default function Page() {
  return (
    <main className="flex h-full w-full">
      <div className="w-1/2 bg-sky-200 justify-center content-center">
        <h2 className="text-4xl text-center font-semibold text-blue-900 p-3">
          Sign In
        </h2>
        <h3 className="text-center font-semibold text-2xl text-sky-900 p-2">
          Welcome Back!
        </h3>
        <GoogleSignIn />
        <p className="p-4 text-lg text-blue-900 font-semibold text-center">
          Or sign-in with email
        </p>
        <SignIn />
      </div>
      <div className="h-screen w-1/2 bg-[url('https://images.unsplash.com/photo-1541976844346-f18aeac57b06?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
        <h1 className="text-5xl text-blue-600 font-bold text-center  leading-normal">
          Community Marketplace
        </h1>
      </div>
    </main>
  );
}
