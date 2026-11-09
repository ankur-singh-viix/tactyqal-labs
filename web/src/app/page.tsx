import { ThemeToggle } from "@/components/theme/theme-toggle";

// Phase 1 placeholder: confirms layout, fonts and theming work.
// The real homepage is built in a later phase.
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <ThemeToggle />
      <h1 className="text-3xl font-bold tracking-tight">Tactyqal Labs</h1>
      <p className="text-muted-foreground">Project setup complete.</p>
    </main>
  );
}
