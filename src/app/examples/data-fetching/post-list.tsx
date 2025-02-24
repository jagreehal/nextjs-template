import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps): React.ReactElement {
  return (
    <Card className="py-8 px-4">
      <CardHeader className="pt-0">
        <CardTitle>Recent Posts</CardTitle>
        <CardDescription>
          Static data that revalidates every hour
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="rounded-lg border bg-card p-4">
                <h3 className="font-semibold leading-none tracking-tight mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.body}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
