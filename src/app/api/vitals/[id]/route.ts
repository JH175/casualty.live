'use server';

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const vitalsId = params.id;
    const {
      entryDateTime,
      gcsTotal,
      gcsE,
      gcsV,
      gcsM,
      rr,
      spo2,
      etco2,
      pr,
      sbp,
      dbp,
      map,
      temp,
      tempUnit,
      bgl,
      bglUnit,
      pain,
    } = await req.json();

    const existingVitals = await prisma.vitals.findUnique({
      where: { id: vitalsId },
    });

    if (!existingVitals) {
      return new NextResponse(JSON.stringify({ error: 'Vitals not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const updatedVitals = await prisma.vitals.update({
      where: { id: vitalsId },
      data: {
        entryDateTime,
        gcsTotal,
        gcsE,
        gcsV,
        gcsM,
        rr,
        spo2,
        etco2,
        pr,
        sbp,
        dbp,
        map,
        temp,
        tempUnit,
        bgl,
        bglUnit,
        pain,
      },
    });
    return new NextResponse(JSON.stringify(updatedVitals), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    let status = 500;
    let errorMessage = 'Error updating vitals';
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
    const vitalsId = params.id as string;
    const existingVitals = await prisma.vitals.findUnique({
      where: { id: vitalsId },
    });
    if (!existingVitals) {
      return new NextResponse(JSON.stringify({ error: 'Vitals not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    await prisma.vitals.delete({
      where: {
        id: vitalsId,
      },
    });

    return new NextResponse(JSON.stringify({}), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    let status = 500;
    let errorMessage = 'Error updating vitals';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
