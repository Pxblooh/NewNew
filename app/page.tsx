import { SocialButtons } from "@/components/SocialButton"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#333333] relative">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex flex-col">
        <h1 className="text-5xl font-bold mb-8 text-white font-burbank animate-fade-in-up">Pablo Estévez</h1>
        <div className="grid gap-4 w-full max-w-md">
          <SocialButtons />
        </div>
      </div>
      <footer className="absolute bottom-4 right-4 text-white text-sm font-inter opacity-70">
        Desarrollado por Pablo Estévez
      </footer>
    </main>
  )
}

