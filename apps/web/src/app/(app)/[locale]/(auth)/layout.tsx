import AccountDropdown from '@mono/web/components/AccountDropdown';
import Image from 'next/image';

export default function AuthLayout({
  children
}: { children: React.ReactNode }) {
  return (
    <div className="md:flex min-h-screen bg-background">
      {/* Left side: Sign-in form */}
      <div className="md:w-1/2 md:flex items-center justify-center px-6 py-24 relative">
        {/* Logo */}
        <div className="absolute top-4 left-4">
          <div className="w-8 h-8 bg-accent-foreground" />
        </div>

        {/* Account dropdown */}
        <div className="absolute top-4 right-4">
          <AccountDropdown />
        </div>

        {/* form content */}
        {children}
      </div>

      {/* Right side: Image */}
      <Image
        src="https://ui.shadcn.com/placeholder.svg"
        alt="Image"
        width="1800"
        height="1800"
        className="max-w-[50%] object-cover md:block hidden"
      />
    </div>
  );
}
