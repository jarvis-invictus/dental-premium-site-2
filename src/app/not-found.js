import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center font-sans">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 text-center">
            <div
              className="h-[250px] sm:h-[350px] md:h-[400px] bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage:
                  "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
              }}
              aria-hidden="true"
            >
              <h1 className="text-center text-black text-6xl sm:text-7xl md:text-8xl pt-6 sm:pt-8 font-bold">
                404
              </h1>
            </div>

            <div className="-mt-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                Looks like you&apos;re lost
              </h3>
              <p className="mb-6 text-gray-600">
                The page you are looking for is not available.
              </p>
              <Link
                href="/"
                className="inline-block my-5 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
