'use client';

// TODO: After footer is implemented, uncomment the following line
// import Footer from '@mono/web/components/Footer';

const theme = 'light';

function ErrorPage() {
  return (
    <div className={theme}>
      <section
        className="bg-background py-16 lg:py-24 min-h-screen flex items-center justify-center"
        aria-labelledby="error-title"
      >
        <div className="container px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 mx-auto">
          <div className="flex flex-col flex-1 max-w-[400px] items-center text-center m-auto">
            <div className="flex flex-col">
              <h1 id="error-title" className="text-foreground h2">
                Looks like something went wrong!
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg">
                Go back to the log in page and try again, if the problem
                continues contact [firebird customer service email]
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* TODO: After footer is implemented, uncomment the following line */}
      {/* <Footer /> */}
    </div>
  );
}

export default ErrorPage;
