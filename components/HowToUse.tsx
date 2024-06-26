import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import fea from "@/app/fea.png";
import {useTranslations} from 'next-intl';


export default function Example() {
  const t = useTranslations('HowToUse');
  const features = [
    {
      name: t('feaTitle1'),
      description: t('feaDesc1'),
      icon: CloudArrowUpIcon,
    },
    {
      name: t('feaTitle2'),
      description: t('feaDesc2'),
      icon: LockClosedIcon,
    },
    {
      name: t('feaTitle3'),
      description: t('feaDesc3'),
      icon: ArrowPathIcon,
    },
  ]
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{t('h2')}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('title')}</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('subTitle')}
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src='https://img.aestheticwallpaperai.com/wallpapers%2FWechatIMG350.png'
            alt="App screenshot"
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                {/* <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" /> */}
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
