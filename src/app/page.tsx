import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Next.js Template
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          A template with examples of common Next.js App Router features
        </p>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/examples/server-action"
              className="block p-6 bg-card rounded-lg border hover:border-foreground/50 transition-colors"
            >
              <h2 className="text-lg font-semibold">Server Actions</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Form handling with server actions and optimistic updates
              </p>
            </Link>
            <Link
              href="/api/hello"
              className="block p-6 bg-card rounded-lg border hover:border-foreground/50 transition-colors"
            >
              <h2 className="text-lg font-semibold">API Routes</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Example API endpoints with TypeScript and error handling
              </p>
            </Link>
            <Link
              href="/examples/data-fetching"
              className="block p-6 bg-card rounded-lg border hover:border-foreground/50 transition-colors"
            >
              <h2 className="text-lg font-semibold">Data Fetching</h2>
              <p className="text-sm text-muted-foreground mt-2">
                Static and dynamic data fetching patterns with caching
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
