'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function login(prevState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')
  console.log(email + " " + password)

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return { error: 'Invalid email or password' }
    }

    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
      return { error: 'Invalid email or password' }
    }

    // Success, set auth cookie
    cookies().set('auth-token', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    // Redirect
    redirect('/dashboard')
  } catch (error) {
    if (error.digest?.startsWith('NEXT_REDIRECT')) {
      throw error
    }
    console.error('Login error:', error)
    return { error: 'An error occurred during login' }
  }
}

export async function logout() {
  cookies().delete('auth-token')
  redirect('/dashboard/login')
}