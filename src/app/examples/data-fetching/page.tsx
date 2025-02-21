import { Suspense } from 'react';
import { PostList } from './post-list';
import { UserProfile } from './user-profile';
import { Skeleton } from '@/components/ui/skeleton';

export const revalidate = 3600; // Revalidate every hour

async function getPageData() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  return res.json();
}

export default async function DataFetchingExample() {
  const posts = await getPageData();

  return (
    <div className="max-w-6xl mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Data Fetching Examples
        </h1>
        <p className="text-muted-foreground">
          Explore different data fetching patterns in Next.js App Router.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Static Data Fetching</h2>
            <p className="text-sm text-muted-foreground">
              This example shows static data fetching with revalidation every
              hour. The posts are fetched at build time and cached.
            </p>
          </div>
          <PostList posts={posts} />
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">
              Dynamic Data Fetching
            </h2>
            <p className="text-sm text-muted-foreground">
              This component uses dynamic data fetching with Suspense for
              loading states. Data is fetched on every request.
            </p>
          </div>
          <Suspense fallback={<UserProfileSkeleton />}>
            <UserProfile />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function UserProfileSkeleton() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[160px]" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-[140px]" />
          <Skeleton className="h-4 w-[120px]" />
        </div>
      </div>
    </div>
  );
}
