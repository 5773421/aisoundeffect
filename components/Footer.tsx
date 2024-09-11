import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";
import {useTranslations} from 'next-intl';
import {localeItems, defaultLocale} from '../config';

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  const t = useTranslations('Basic');
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {t('seoDesc')}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {/* {config.mailgun.supportEmail && (
                  <a
                    href={`mailto:${config.mailgun.supportEmail}`}
                    target="_blank"
                    className="link link-hover"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                )} */}
                {/* <Link href="/#pricing" className="link link-hover">
                  Pricing
                </Link> */}
                <Link href="/blog" className="link link-hover">
                  Blog
                </Link>
                {/* <a href="/#" target="_blank" className="link link-hover">
                  Affiliates
                </a> */}
                <a href='https://fluxlora.net'>FLUX LoRA Online</a>
                <a href='https://www.sideprojectors.com/project/44078/ai-sound-effect'><img src='https://www.sideprojectors.com/img/badges/badge_show_black.png' alt='Check out Ai Sound Effect at @SideProjectors' /></a>
                <a href="https://www.aitoolnet.com/" target="_blank"><img src="http://www.aitoolnet.com/static/assets/images/logo.svg" alt="aitoolnet.com" style={{
                  width:150,
                  height:52,
                }} /></a>
                <a href="https://dang.ai/" target="_blank" ><img src="https://cdn.prod.website-files.com/63d8afd87da01fb58ea3fbcb/6487e2868c6c8f93b4828827_dang-badge.png" alt="Dang.ai" style={{
                  width: 150,
                  height: 54,
                }} width="150" height="54"/></a>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Privacy policy
                </Link>
              </div>
            </div>


            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LANGUAGE
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {localeItems.map(locale => {
                  if (locale.iso === defaultLocale) return(<Link className="link link-hover" href="/"  key={locale.iso}>{locale.name}</Link>)
                  const thehref="/"+locale.iso
                  return (<Link className="link link-hover" href={thehref} key={locale.iso}> {locale.name}</Link>)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
