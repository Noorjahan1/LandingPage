// app/components/FeaturedArticle.js
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedArticle({ article }) {
  return (
    <article className="mb-16 p-6 border border-gray-200 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-white overflow-hidden">
      <div className="relative w-full h-72 md:h-96 mb-6 rounded-lg overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
        <Link href={`/articles/${article.slug}`} legacyBehavior>
          <a className="hover:text-blue-700 transition-colors">{article.title}</a>
        </Link>
      </h2>
      <p className="text-gray-500 text-sm mb-4">
        Published on: {article.date} by {article.author}
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        {article.excerpt}
      </p>
      <Link href={`/articles/${article.slug}`} legacyBehavior>
        <a className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Read More &rarr;
        </a>
      </Link>
    </article>
  );
}
