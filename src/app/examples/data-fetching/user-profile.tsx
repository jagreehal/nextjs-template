import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface UserAddress {
  street: string;
  city: string;
  zipcode: string;
  suite: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

function isUser(value: unknown): value is User {
  if (
    typeof value !== 'object' ||
    value === null ||
    !('id' in value) ||
    !('name' in value) ||
    !('username' in value) ||
    !('email' in value) ||
    !('address' in value) ||
    !('phone' in value) ||
    !('website' in value) ||
    !('company' in value)
  ) {
    return false;
  }

  const user = value as Record<string, unknown>;

  return (
    typeof user.id === 'number' &&
    typeof user.name === 'string' &&
    typeof user.username === 'string' &&
    typeof user.email === 'string' &&
    typeof user.phone === 'string' &&
    typeof user.website === 'string' &&
    typeof user.address === 'object' &&
    user.address !== null &&
    typeof user.company === 'object' &&
    user.company !== null &&
    'name' in user.company &&
    typeof (user.company as Record<string, unknown>).name === 'string' &&
    'street' in user.address &&
    typeof (user.address as Record<string, unknown>).street === 'string' &&
    'city' in user.address &&
    typeof (user.address as Record<string, unknown>).city === 'string'
  );
}

async function getUser(): Promise<User> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1', {
    cache: 'no-store', // Dynamic data
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }

  const data: unknown = await res.json();

  if (!isUser(data)) {
    throw new Error('Invalid user data');
  }

  return data;
}

export async function UserProfile(): Promise<React.ReactElement> {
  const user = await getUser();

  return (
    <Card className="py-8 px-4">
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
