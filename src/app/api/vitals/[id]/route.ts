'use server';

import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET({ params }: { params: { id: string } }) {
  try {
    const vitalsId = params.id;
    const vitalsSet = await prisma.vitals.findUnique({
      where: { id: vitalsId },
    });
    if (!vitalsSet) {
      return new NextResponse(
        JSON.stringify({ error: 'Vitals set not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    return new NextResponse(JSON.stringify(vitalsSet), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    let status = 500;
    let errorMessage = 'Error fetching vitals set';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

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

    const existingVitalsSet = await prisma.vitals.findUnique({
      where: { id: vitalsId },
    });

    if (!existingVitalsSet) {
      return new NextResponse(
        JSON.stringify({ error: 'Vitals set not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const updatedVitalsSet = await prisma.vitals.update({
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
    return new NextResponse(JSON.stringify(updatedVitalsSet), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    let status = 500;
    let errorMessage = 'Error updating vitals set';
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
    const vitalsId = params.id;
    const existingVitalsSet = await prisma.clCase.findUnique({
      where: { id: vitalsId },
    });
    if (!existingVitalsSet) {
      return new NextResponse(
        JSON.stringify({ error: 'Vitals set not found' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    await prisma.vitals.delete({
      where: { id: vitalsId },
    });

    return new NextResponse(
      JSON.stringify({ message: 'Vitals set deleted successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error: unknown) {
    let status = 500;
    let errorMessage = 'Error deleting vitals set';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new NextResponse(JSON.stringify({ error: errorMessage }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
