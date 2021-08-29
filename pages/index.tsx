import Home from "../components/home-page/home";
import MyStory from "../components/Career Journey/career";
import { companies, institutes } from "../data/data";
import PageLayout from "../components/layout/pageLayout";

export default function Index({ companies, institutes }: any) {
  return (
    <PageLayout title="Josh Campbell - Software Engineer">
      <Home companies={companies} institutes={institutes} />
    </PageLayout>
  );
}

export function getStaticProps() {
  return {
    props: {
      companies, institutes
    },
  };
}