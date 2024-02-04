import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const {
      clCaseId,
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

    if (!clCaseId) {
      return new NextResponse(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
    const vitals = await prisma.vitals.create({
      data: {
        clCaseId,
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

    return new NextResponse(JSON.stringify(vitals), {
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
