'use server';

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const clCaseId = params.id;
    const { ptGender, ptAge, ptAgeUnit, complaint, note } = await req.json();

    const existingCase = await prisma.clCase.findUnique({
      where: { id: clCaseId },
    });

    if (!existingCase) {
      return new NextResponse(JSON.stringify({ error: 'Case not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const updatedCase = await prisma.clCase.update({
      where: { id: clCaseId },
      data: {
        ptGender,
        ptAge,
        ptAgeUnit,
        complaint,
        note,
      },
    });
    return new NextResponse(JSON.stringify(updatedCase), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    let status = 500;
    let errorMessage = 'Error updating case';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const clCaseId = params.id;
    const existingCase = await prisma.clCase.findUnique({
      where: { id: clCaseId },
    });
    if (!existingCase) {
      return new NextResponse(JSON.stringify({ error: 'Case not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    await prisma.clCase.delete({
      where: { id: clCaseId },
    });

    return new NextResponse(
      JSON.stringify({ message: 'Case deleted successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: unknown) {
    let status = 500;
    let errorMessage = 'Error deleting case';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
