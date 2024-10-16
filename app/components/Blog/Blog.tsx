import React from "react";
import Image from "next/image";
import { BlogData } from "@/app/utils/sidebarData";

const Blog = () => {
  return (
    <div className="flex flex-col gap-y-10 mt-8">
      <h3 className="text-xl font-semibold mt-6">Safety resources</h3>
      {BlogData.map((item, idx) => {
        return (
          <div key={idx * 2}>
            <Image
              src={item.icon}
              width={722}
              height={400}
              alt="police image"
              className="w-full"
              //   placeholder="blur"
              //   blurDataURL={item.icon}
            />
            <div className="mt-2">
              <h3 className="font-semibold text-lg mb-4">{item.title}</h3>

              <div className="mt-2 text-textLight font-thin text-xs flex justify-between items-center">
                <p>{item.date}</p>
                <p>{item.time}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blog;
