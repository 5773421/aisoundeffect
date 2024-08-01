import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import IframeCom from "@/components/Iframe";
import {getTranslations} from 'next-intl/server';
import Tips from '@/components/Tips';

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
      <Tips />
      <IframeCom isShow />
    </div>
  );
};

export default PrivacyPolicy;
