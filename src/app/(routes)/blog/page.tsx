"use client";

import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import SortAndFilter from "@/components/Blog/SortAndFilter";
import Pagination from "@/components/Pagination";
import MobileSortAndFilter from "@/components/Blog/MobileSortAndFilter";
import { Input } from "@/components/ui/input";
import { useSortAndFilterStore } from "@/store/sortAndFilterStore";

export default function Blog() {
  const { searchInput, setSearchInput } = useSortAndFilterStore();
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date!), new Date(b.date!))
  );

  const filteredPosts = !searchInput
    ? posts
    : posts.filter((post) => {
      console.log((post.title + post.description + post.body.raw)
      .toLowerCase());
      return (post.title + post.description + post.body.raw)
        .toLowerCase()
        .includes(searchInput.toLowerCase().replaceAll("%20", " "))
    }
      );

  return (
    <div className="flex flex-col items-center mt-24">
      <h1 className="md:text-5xl text-3xl font-semibold mb-16">BLOG</h1>
      <div className="flex mr-auto gap-x-12 w-full">
        <SortAndFilter />
        <div className="flex flex-col w-full gap-4">
          <div className="flex justify-between">
            <MobileSortAndFilter />
            <Input
              placeholder="Search on blog..."
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-fit lg:hidden"
              value={searchInput}
            />
          </div>

          <Pagination posts={filteredPosts} />
        </div>
      </div>
    </div>
  );
}
