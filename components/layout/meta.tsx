import Head from "next/head";
import { GA_TRACKING_ID } from '../../lib/gtag';

type Props = {
    title: string;
    description?: string;
    keywords?: string;
    image?: string;
  };

const isProduction = process.env.NODE_ENV === "production";

const Meta = ({ title, keywords, description, image } : Props): JSX.Element => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image ? image : "/logo512.png"} />
      <title>{title}</title>
      {isProduction && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
            }}
          />
        </>
      )}
    </Head>
  );
};

Meta.defaultProps = {
  title: "Josh Campbell - Front End Engineer",
  keywords: "web development, programming, web design",
  description: "Software Engineer. Web dev extraordinaire."
};

export default Meta;