export default function Certifications() {
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

              <h4 className="font-medium text-primary text-lg md:text-2xl uppercase mb-8">
                Alvison Hunter
              </h4>

              <h1 className="font-normal text-accent text-2xl md:text-5xl leading-none mb-8">
                JavaScript & Python Developer
              </h1>

              <p className="text-base md:text-xl mb-16 text-slate-500">
                Passionate Software Developer Eager to Innovate: Time
                to Build Something Amazing Together!
              </p>

              <button className="btn btn-outline btn-primary px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                Get my CV
              </button>
            </div>
          </div>
        </section>
      </main>
    );
}
