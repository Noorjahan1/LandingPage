// app/components/ArticleCard.js
import Link from 'next/link';
import Image from 'next/image'; // Optional: if you want small thumbnails

export default function ArticleCard({ article }) {
  return (
    <article className="p-5 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      {/* Optional: Add a small thumbnail image here if desired */}
      {/* <div className="relative w-full h-32 mb-3 rounded overflow-hidden">
        <Image src={article.thumbnailUrl || "https://via.placeholder.com/300x150?text=Article"} alt={article.title} layout="fill" objectFit="cover" />
      </div> */}
      <h4 className="text-xl font-semibold text-gray-800 mb-2">
        <Link href={`/articles/${article.slug}`} legacyBehavior>
          <a className="hover:text-blue-600 transition-colors">{article.title}</a>
        </Link>
      </h4>
      <p className="text-gray-500 text-xs mb-3">Published on: {article.date}</p>
      <p className="text-gray-600 text-sm leading-relaxed">
        {article.summary}
      </p>
      <Link href={`/articles/${article.slug}`} legacyBehavior>
        <a className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-3 inline-block">
          Continue Reading...
        </a>
      </Link>
    </article>
  );
}
