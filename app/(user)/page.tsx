import { groq } from "next-sanity";
import { client } from "../../lib/client";
import PreviewSuspense from "../../components/PreviewSuspense";
import BlogList from "../../components/BlogList";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function page() {
  const posts = await client.fetch(query);

  return (
    <div>
      <BlogList posts={posts} />

      {/* TODO:  Make this into a component */}
      {/* <hr className="border-[#F7AB0A] my-10" />
      <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-5">
        <div>
          <h1 className="text-7xl">Who we are</h1>
          <h2 className="mt-5 md:mt-0">
            <p className="max-w-lg">
              We're a community of{" "}
              <span className="underline decoration-4 decoration-[#F7AB0A] text-clip">
                passionate Steelers fans who live and breathe the team.
              </span>{" "}
              From the Terrible Towel to game day excitement, there's no better
              place to be than with us. Come experience Steelers football like
              never before!
            </p>
          </h2>
        </div>
      </div> */}
    </div>
  );
}
