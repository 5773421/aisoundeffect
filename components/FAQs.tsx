import {useTranslations} from 'next-intl';


export default function Example() {
  const t = useTranslations('FAQs');
  const faqs = [
    {
      id: 1,
      question: t('q1'),
      answer: t('a1'),
    },
    {
      id: 2,
      question: t('q2'),
      answer: t('a2'),
    },
    {
      id: 3,
      question: t('q3'),
      answer: t('a3'),
    },
    {
      id: 4,
      question: t('q4'),
      answer: t('a4'),
    },
    {
      id: 5,
      question: t('q5'),
      answer: t('a5'),
    },
    {
      id: 6,
      question: t('q6'),
      answer: t('a6'),
    },
    // More questions...
  ]
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
