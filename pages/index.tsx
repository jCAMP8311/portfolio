import Home from "../components/home-page/home";
import CareerJourney from "../components/career-journey/career";
import { companies, institutes } from "../data/data";
import PageLayout from "../components/layout/pageLayout";

const Index = () => {
  return (
    <PageLayout title="Josh Campbell - Software Engineer">
      <Home />
    </PageLayout>
  );
}

export default Index;

export function getStaticProps() {
  return {
    props: {
      companies, institutes
    },
  };
}