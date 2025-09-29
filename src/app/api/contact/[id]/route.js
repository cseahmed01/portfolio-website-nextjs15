import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

// PATCH - Mark message as read
export async function PATCH(request, { params }) {
  try {
    const { id } = params
    const { isRead } = await request.json()

    const updatedMessage = await prisma.contactMessage.update({
      where: { id: parseInt(id) },
      data: { isRead },
    })

    return NextResponse.json({
      success: true,
      message: updatedMessage
    })
  } catch (error) {
    console.error('Error updating message:', error)
    return NextResponse.json(
      { error: 'Failed to update message' },
      { status: 500 }
    )
  }
}

// DELETE - Delete message
export async function DELETE(request, { params }) {
  try {
    const { id } = params

    await prisma.contactMessage.delete({
      where: { id: parseInt(id) },
    })

    return NextResponse.json({
      success: true,
      message: 'Message deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting message:', error)
    return NextResponse.json(
      { error: 'Failed to delete message' },
      { status: 500 }
    )
  }
}