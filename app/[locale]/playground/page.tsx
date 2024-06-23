import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import IframeCom from "@/components/Iframe";
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params: {locale}}: any) {
  const t = await getTranslations({locale, namespace: 'Playground'});
 
  // return {
  //   title: t('title')
  // };
  return getSEOTags({
    title: t('seoTitle'),
    description: t('seoDesc'),
    canonicalUrlRelative: locale ? '/' + locale + "/playground" : '/playground',
  })
}


const PrivacyPolicy = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <div className="border-l-4 border-yellow-400 mt-20 bg-yellow-50 p-4 w-3/5">
      <div className="flex">
        <div className="flex-shrink-0">
        </div>
        <div className="ml-3">
          <p className="text-xl text-yellow-700">
            If you want higher quality sound effects, longer duration, and faster generation speed, please consider {' '}
            <Link href="/pricing" className="font-medium text-yellow-700 underline hover:text-yellow-600">
              buy credits
            </Link>.
            And use {' '}
            <Link href="/create" className="font-medium text-yellow-700 underline hover:text-yellow-600">
              Create
            </Link>.
          </p>
        </div>
      </div>
    </div>

      <IframeCom />
    </div>
  );
};

export default PrivacyPolicy;
