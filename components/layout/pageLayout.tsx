import React, { Fragment, ReactNode } from "react";
import Meta from "./meta";

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
};

const PageLayout = ({
  children,
  title,
  description,
  keywords,
  image
}: Props): JSX.Element => (
  <Fragment>
    <Meta
      title={title}
      description={description}
      keywords={keywords}
      image={image}
    />
      {children}
  </Fragment>
);

export default PageLayout;