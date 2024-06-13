import {articles } from "./_assets/content";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import config from "@/config";
import { getSEOTags } from "@/libs/seo";
// import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

// export const metadata = getSEOTags({
//   title: `${config.appName} Blog`,
//   description:
//     "Create realistic and immersive AI sound effects with our advanced sound effect generator. Perfect for game developers, filmmakers, and content creators.",
//   canonicalUrlRelative: "/blog",
// });

export async function generateMetadata({params: {locale}}: any) {
  const t = await getTranslations({locale, namespace: 'Blog'});
  // return {
  //   title: t('title')
  // };
  return getSEOTags({
    title: t('seoTitle'),
    description: t('seoDesc'),
    canonicalUrlRelative: locale ? '/' + locale + "/blog" : "/blog",
  })
}

export default async function Blog() {
  const t = await getTranslations('Blog');
  const articlesToDisplay = articles
    .sort(
      (a, b) =>
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf()
    )
    .slice(0, 6);
  return (
    <>
      <section className="text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6">
          {t('h1')}
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          {t('desc')}
        </p>
      </section>

      <section className="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
        {articlesToDisplay.map((article, i) => (
          <CardArticle
            article={article}
            key={article.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>
    </>
  );
}
