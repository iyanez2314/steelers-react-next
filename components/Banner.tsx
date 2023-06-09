export default function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-5">
      <div>
        <h1 className="text-7xl">South Texas Steelers Fan Club</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Every Steeler Fans
          </span>{" "}
          favorite website!
        </h2>
      </div>

      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Updates for every event | Any important steelers news
      </p>
    </div>
  );
}
