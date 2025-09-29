import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  cookies().delete('auth-token')
  return NextResponse.redirect(new URL('/login', process.env.NEXTAUTH_URL || 'http://localhost:3000'))
}