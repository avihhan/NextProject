import AcmeLogo from '@/app/ui/acme-logo';
import SignupForm from '@/app/ui/signup-form';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <SignupForm />
        <p className={`${lusitana.className} text-s mx-auto mb-3`}>
          Already have an account?{' '}
          <Link href="/login" className="text-blue-500 ">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
