import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { expiresOn, ptGender, ptAge, ptAgeUnit, note } = await req.json();
    if (!expiresOn || !ptGender || !ptAge || !ptAgeUnit) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    const notification = await prisma.case.create({
      data: {
        expiresOn,
        ptGender,
        ptAge,
        ptAgeUnit,
        note,
      },
    });
    return new NextResponse(JSON.stringify(notification), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: 'Error creating new case' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
