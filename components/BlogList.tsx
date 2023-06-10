import Image from "next/image";
import urlFor from "../lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

interface Props {
  posts: Post[];
}

export default function BlogList({ posts }: Props) {
  const mostRecentPost = posts.reduce((prevPost, currentPost) =>
    prevPost._createdAt > currentPost._createdAt ? prevPost : currentPost
  );
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <div className="px-10 py-5 mb-5">
        <h2 className="text-5xl font-bold">Most Recent Post</h2>
        <h3 className="mt-5 md:mt-0 text-sm">
          All posts regarding the south texas steelers fan club will be here!
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer">
              <div
                className={`relative w-full ${
                  post === mostRecentPost ? "h-[500px]" : ""
                } h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out`}
              >
                <Image
                  className="object-cover object-left lg:object-center"
                  src={urlFor(post.mainImage).url()}
                  alt="image"
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold text-lg">{post.title}</p>
                    <p className="text-sm">
                      Day of event:{" "}
                      {new Date(post.date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-xs">
                      Posted on{" "}
                      {new Date(post._createdAt).toLocaleDateString("en-Us", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center ">
                    <div className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {post.categories[0].title}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="line-clamp-2 text-gray-500 ">
                  {post.description}
                </p>
              </div>
              <p className="mt-5 font-bold flex items-center group-hover:underline">
                Get more info
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
