import Home from "../components/home-page/home";
import { projectsList } from "../data/projects-list";
import PageLayout from "../components/layout/pageLayout";

export default function Index({ projects }: any) {
  return (
    <PageLayout title="Josh Campbell - Software Engineer">
      <Home projects={projects} />
    </PageLayout>
  );
}

export function getStaticProps() {
  const projects = projectsList;
  return {
    props: {
      projects
    }
  };
}