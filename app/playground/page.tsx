import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import IframeCom from "@/components/Iframe";

export const metadata = getSEOTags({
  title: `Playground | ${config.appName}`,
  canonicalUrlRelative: "/playground",
});


const PrivacyPolicy = () => {
  return (
    <IframeCom />
  );
};

export default PrivacyPolicy;
