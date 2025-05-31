import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl mb-4">Next.js Dark/Light Theme</h1>
      <ThemeToggle />
    </main>
  );
}
