import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import Create from "@/components/Create";
import {getTranslations} from 'next-intl/server';
import {useTranslations, NextIntlClientProvider, useMessages} from 'next-intl';

export async function generateMetadata({params: {locale}}: any) {
  const t = await getTranslations({locale, namespace: 'Create'});
 
  // return {
  //   title: t('title')
  // };
  return getSEOTags({
    title: t('seoTitle'),
    // description: t('seoDesc'),
    canonicalUrlRelative: locale ? '/' + locale + "/create" : '/create',
  })
}


const CreatePage = () => {
  const t = useTranslations('Create');
  const messages = useMessages();
  return (
    <div className='flex flex-col items-center w-full min-h-screen'>
      <NextIntlClientProvider 
        messages={{
          Create: messages.Create,
        }}
      >
        <Create/>
      </NextIntlClientProvider>
    </div>
  );
};

export default CreatePage;
