import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="text-center">
            <div className="avatar my-12">
              <div className="ring-gray-500 ring-offset-base-100 w-48 rounded-full ring ring-offset-2">
                <img
                  src="/AlHunter2024.png"
                  alt="Alvison Hunter- Web Developer"
                />
              </div>
            </div>

            <h4 className="font-medium text-accent text-lg md:text-3xl uppercase mb-8">
              Alvison Hunter
            </h4>

            <h1 className="font-normal text-2xl md:text-5xl leading-none mb-8">
              JavaScript & Python Developer
            </h1>

            <p className="text-lg font-light text-primary mb-16">
              Visionary Software Creator Focused on User-Centric
              Solutions
            </p>

            <Link
              className="custom-btn-cv"
              href="/cv/mycv.pdf"
              download
            >
              Get my CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm5.845 17.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V12a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
                  clipRule="evenodd"
                />
                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
