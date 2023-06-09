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
    </div>
  );
}
