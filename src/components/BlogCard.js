// components/BlogCard.js
import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="col-4 custom-card u-text-left " key={post.id}>
      <div className="p-card--highlighted ">
        <header className="p-card__header ">
          <h5 className="p-muted-heading u-text-left">CLOUD AND SERVER</h5>
          <hr />
            
          <img src={post.featured_media} alt="" />
        </header>
        <div className="p-card__content">
          <h1 className="p-heading--4  u-text-color">
            <strong>
              <a
                className=" text-color u-text-bold"
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.title.rendered}
              </a>
            </strong>
          </h1>
          <p>
            By{" "}
            <strong className="u-text-italic">
              <a
                className="u-text-color"
                href={post._embedded.author[0].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post._embedded.author[0].name}
              </a>
            </strong>{" "}
            {/* <span className="text-italic">{post._embedded.author[0].name}</span>{" "} */}
            on {new Date(post.date).toLocaleDateString()}
          </p>
        </div>
        <hr />
        <div>Article</div>
      </div>
    </div>
  );
};

export default BlogCard;
