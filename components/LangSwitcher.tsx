import { usePathname, useRouter } from "next/navigation";

import { locales, localeItems } from "../config";
import {useLocale} from 'next-intl';

const LangSwitcher: any = () => {
  const locale = useLocale();
  const lang: any = locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleSwitchLanguage = (value: string) => {
    console.log('value', lang, value)
    if (value === lang) {
      return;
    }
    if (value === 'en_US') {
      const newPathName = pathname.replace(('/' + lang), '');
      console.log('newPathName', newPathName);
      router.push(newPathName);
      return;
    }
    if (lang === 'en_US') {
      const newPathName = '/' + value + pathname;
      console.log('newPathName', newPathName);
      router.push(newPathName);
      return;
    }
    const newPathName = pathname.replace(lang, value);
    console.log('newPathName', newPathName);
    router.push(newPathName);
  };

  return (
    <div>
      🌐
      <select value={lang} onChange={(e) => handleSwitchLanguage(e.target.value)} className="h-8 m-2 p-1 rounded border-current">
        <option value={lang ? lang : 'en_US'} > {lang ? localeItems?.find(item => item.iso === lang)?.name : 'English'}</option>

        {localeItems.map(locale => {
          if (locale.iso === lang || (locale.iso === 'en_US' && !lang)) return null
          return (<option value={locale.iso} key={locale.iso}> {locale.name}</option>)
        })}

      </select>
    </div>
  );
}
export default LangSwitcher; 