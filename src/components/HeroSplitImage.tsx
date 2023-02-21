export function HeroSplitImage() {
    return (
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-48 lg:pb-56 xl:col-span-6">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <img
                className="h-28"
                src="https://res.cloudinary.com/drra3biar/image/upload/v1676998143/beautybykmarielogo_1_xxr7zf.svg"
                alt="Beauty By Kmarie"
              />
              {/* <div className="hidden sm:mt-32 sm:flex lg:mt-16">
                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Anim aute id magna aliqua ad ad non deserunt sunt.{' '}
                  <a href="#" className="whitespace-nowrap font-semibold text-indigo-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div> */}
              <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
                Be Who You Were Meant To Be
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Feeling beautiful on the outside always helps boost what you ALREADY HAVE on the inside! We just turn it up a notch when you step through our doors!
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://www.styleseat.com/m/v/1486876"
                  className="rounded-md bg-cyan-800 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book Appointment
                </a>
                <a href="https://www.instagram.com/beautybyk_marie/?hl=en" className="text-base font-semibold leading-7 text-gray-900">
                  Learn more On Instagram <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <img
              className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src="https://res.cloudinary.com/drra3biar/image/upload/v1676999096/katsewin1_fyjlov.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
  