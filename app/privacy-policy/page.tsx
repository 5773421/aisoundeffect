import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: June 6, 2024

Welcome to AI Sound Effect Generator! This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website https://aisoundeffectgenerator.com. By using our website, you agree to the terms of this Privacy Policy.

1. Information We Collect

Personal Information: We collect your name, email address, and payment information when you make a purchase on our website.
Non-Personal Information: We collect non-personal data through the use of web cookies to improve your browsing experience.
2. Purpose of Data Collection

We use your personal information to process your orders and ensure you have a smooth transaction experience.

3. Data Sharing

We do not share your personal information with any other parties.

4. Children's Privacy

We do not knowingly collect any personal information from children under the age of 13. If we become aware that we have inadvertently received personal information from a child under the age of 13, we will delete such information from our records.

5. Updates to This Privacy Policy

We may update this Privacy Policy from time to time. If we make any changes, we will notify you by email. Your continued use of our website following the posting of changes will constitute your acceptance of those changes.

6. Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at mahuahuayayaya@gmail.com.

Thank you for visiting AI Sound Effect Generator!

AI Sound Effect Generator
https://aisoundeffectgenerator.com`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
