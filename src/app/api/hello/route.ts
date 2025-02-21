import { NextResponse } from 'next/server';

export async function GET() {
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

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json(
    {
      message: 'Data received!',
      data: body,
      timestamp: new Date().toISOString(),
    },
    { status: 201 },
  );
}
