import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import Client from '../../../models/Client';

export async function GET() {
  try {
    await connectToDatabase();
    const clients = await Client.find().sort({ createdAt: -1 });
    return NextResponse.json(clients);
  } catch (error) {
    console.error('Error fetching clients:', error);
    return NextResponse.json({ error: 'Error fetching clients', details: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, phone } = await request.json();
    await connectToDatabase();
    const client = new Client({ name, phone });
    await client.save();
    return NextResponse.json({ message: 'Client created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating client:', error);
    return NextResponse.json({ error: 'Error creating client' }, { status: 500 });
  }
}