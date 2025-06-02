import { NextResponse } from 'next/server';

interface HelloResponse {
  message: string;
  timestamp: string;
}

interface PostResponse extends HelloResponse {
  data: unknown;
}

export async function GET(): Promise<NextResponse<HelloResponse>> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(
    {
      message: 'Hello from the API!',
      timestamp: new Date().toISOString(),
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  );
}

export async function POST(
  request: Request,
): Promise<NextResponse<PostResponse>> {
  // Parse request body as unknown since we don't know its shape
  const body: unknown = await request.json();

  return NextResponse.json(
    {
      message: 'Data received!',
      data: body,
      timestamp: new Date().toISOString(),
    },
    { status: 201 },
  );
}
