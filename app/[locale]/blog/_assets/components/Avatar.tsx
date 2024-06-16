import Link from "next/link";
import { articleType } from "../content";

// This is the author avatar that appears in the article page and in <CardArticle /> component
const Avatar = ({ article }: { article: articleType }) => {
  return (
    <Link
      href={`/blog/author/${article.author.slug}`}
      title={`Posts by ${article.author.name}`}
      className="inline-flex items-center gap-2 group"
      rel="author"
    >
      <span itemProp="author">
      </span>
      <span className="group-hover:underline">{article.author.name}</span>
    </Link>
  );
};

export default Avatar;
