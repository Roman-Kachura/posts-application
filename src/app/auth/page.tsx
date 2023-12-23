import { Auth } from '@/components/auth/Auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authorization',
  description: 'Authorization for Posts Application'
}

export default function AuthPage() {
  return (
    <Auth/>
  )
}