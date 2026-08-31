import dynamic from 'next/dynamic';
import Hero from './components/Hero';

const About = dynamic(() => import('./components/About'), { ssr: true });
const SkillsSection = dynamic(() => import('./components/Skills'), { ssr: true });
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'), { ssr: true });

export default function Home() {
  return (
      <main>
        <Hero />
        <About/>
        <SkillsSection/>
        <ProjectsSection/>
      </main>
  );
}