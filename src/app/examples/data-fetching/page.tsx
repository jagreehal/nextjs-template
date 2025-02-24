import { Suspense } from 'react';
import { PostList } from './post-list';
import { UserProfile } from './user-profile';
import { Skeleton } from '@/components/ui/skeleton';

export const revalidate = 3600; // Revalidate every hour

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function isPost(value: unknown): value is Post {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'title' in value &&
    'body' in value &&
    'userId' in value &&
    typeof (value as Record<string, unknown>).id === 'number' &&
    typeof (value as Record<string, unknown>).title === 'string' &&
    typeof (value as Record<string, unknown>).body === 'string' &&
    typeof (value as Record<string, unknown>).userId === 'number'
  );
}

async function getPageData(): Promise<Post[]> {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }

  const data: unknown = await res.json();

  if (!Array.isArray(data)) {
    throw new TypeError('Expected array of posts');
  }

  const posts = data.map((item) => {
    if (!isPost(item)) {
      throw new Error('Invalid post data');
    }
    return item;
  });

  return posts;
}

export default async function DataFetchingExample(): Promise<React.ReactElement> {
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

function UserProfileSkeleton(): React.ReactElement {
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
