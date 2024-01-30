import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { ptGender, ptAge, ptAgeUnit, note, complaint } = await req.json();
    if (!ptGender || !ptAge || !ptAgeUnit) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    const clCase = await prisma.case.create({
      data: {
        ptGender,
        ptAge,
        ptAgeUnit,
        note,
        complaint,
      },
    });

    return new NextResponse(JSON.stringify(clCase), {
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
