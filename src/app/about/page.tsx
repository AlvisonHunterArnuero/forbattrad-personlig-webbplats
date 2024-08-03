/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className="">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <nav className="flex items-center justify-between mb-40">
                        <img
                            src="assets/image/navbar-logo.png"
                            alt="Alvison Hunter"
                        />
                        <button className="btn btn-outline btn-primary px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                            Get my CV
                        </button>
                    </nav>

                    <div className="text-center">
                        <div className="avatar mb-16">
                            <div className="ring-primary ring-offset-base-100 w-48 rounded-full ring ring-offset-2">
                                <img
                                    src="/AlHunter2024.png"
                                    alt="Alvison Hunter- Web Developer"
                                />
                            </div>
                        </div>

                        <h4 className="font-medium text-base-content dark:text-primary text-lg md:text-2xl uppercase mb-8">
                            Alvison Hunter
                        </h4>

                        <h1 className="font-normal text-base-content dark:text-primary text-2xl md:text-5xl leading-none mb-8">
                            JavaScript & Python Developer
                        </h1>

                        <p className="font-normal text-md md:text-xl mb-16 text-warning">
                            Passionate Software Developer Eager to Innovate: Time to
                            Build Something Amazing Together!
                        </p>

                        <a
                            href="#"
                            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                        >
                            Hire me
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
