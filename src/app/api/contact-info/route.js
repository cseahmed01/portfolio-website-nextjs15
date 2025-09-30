import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const contact = await prisma.contact.findFirst()

    if (!contact) {
      // Return default contact info if none exists
      return NextResponse.json({
        email: 'contact@example.com',
        phone: '+1 (555) 123-4567',
        address: 'Your Location'
      })
    }

    return NextResponse.json({
      email: contact.email,
      phone: contact.phone || '+1 (555) 123-4567',
      address: contact.address || 'Your Location'
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    })
  } catch (error) {
    console.error('Error fetching contact info:', error)
    return NextResponse.json(
      {
        email: 'contact@example.com',
        phone: '+1 (555) 123-4567',
        address: 'Your Location'
      },
      { status: 500 }
    )
  }
}

export async function PUT(request) {
  try {
    const { email, phone, address } = await request.json()

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const updatedContact = await prisma.contact.upsert({
      where: { id: 1 }, // Assuming we only have one contact record
      update: {
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        address: address?.trim() || null,
      },
      create: {
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        address: address?.trim() || null,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Contact information updated successfully',
      data: {
        email: updatedContact.email,
        phone: updatedContact.phone,
        address: updatedContact.address
      }
    })
  } catch (error) {
    console.error('Error updating contact info:', error)
    return NextResponse.json(
      { error: 'Failed to update contact information' },
      { status: 500 }
    )
  }
}