import { Button } from '@mono/web/components/ui/Button';
import Link from 'next/link';

export default function Variant1() {
  return (
    <section
      className="bg-background py-16 lg:py-24 min-h-fit flex items-center justify-center"
      aria-labelledby="error-title"
    >
      <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 mx-auto">
        <div className="flex flex-col gap-6 lg:gap-8 flex-1 max-w-xl items-center text-center m-auto">
          <div className="flex flex-col gap-4 lg:gap-5">
            <p
              className="text-muted-foreground text-sm lg:text-base font-semibold"
              aria-label="Error code"
            >
              404
            </p>
            <h1
              id="error-title"
              className="text-foreground text-3xl md:text-5xl font-bold"
            >
              Page not found
            </h1>
            <p className="text-muted-foreground text-base lg:text-lg">
              Sorry, we couldn't find the page you're looking for. Please check
              the URL or navigate back home.
            </p>
          </div>
          <Button asChild={true}>
            <Link href="/">Go to homepage</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
