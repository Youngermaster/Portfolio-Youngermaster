import Head from "next/head";
import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Juan Manuel Young Hoyos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Juan Manuel Young Hoyos"
          key="title"
        />
        <meta
          name="description"
          content="This is Juan Manuel Young Hoyo's portfolio, aka Youngermaster. Here you will find
          projects, interests and information about him."
        />
        <meta
          name="keywords"
          content="Youngermaster, Juan Manuel Young Hoyos, Next.js, React.js, CSS, JavaScript, 
          Youngermaster"
        />
        <meta name="author" content="Juan Manuel Young Hoyos (Youngermaster)" />
      </Head>
      <Layout>
        <Section grid>
          <Hero />
          <BgAnimation />
        </Section>
        <Projects />
        <Technologies />
        <Timeline />
        <Acomplishments />
      </Layout>
    </div>
  );
};

export default Home;
