import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

async function getUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store', // Dynamic data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }

  return res.json();
}

export async function UserProfile() {
  const user = await getUser();

  return (
    <Card className="p-8">
      <CardHeader className="pt-0">
        <CardTitle>User Profile</CardTitle>
        <CardDescription>Dynamic data fetched on every request</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={`https://avatar.vercel.sh/${user.username}`} />
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-medium leading-none">{user.name}</h3>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="grid gap-1">
            <h4 className="text-sm font-medium">Company</h4>
            <p className="text-sm text-muted-foreground">{user.company.name}</p>
          </div>
          <div className="grid gap-1">
            <h4 className="text-sm font-medium">Location</h4>
            <p className="text-sm text-muted-foreground">
              {user.address.city}, {user.address.street}
            </p>
          </div>
          <div className="grid gap-1">
            <h4 className="text-sm font-medium">Website</h4>
            <p className="text-sm text-muted-foreground">{user.website}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
