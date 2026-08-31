import dynamic from 'next/dynamic';
import Hero from './components/Hero';

const About = dynamic(() => import('./components/About'), { ssr: true, loading: () => <div className="w-full min-h-[50vh]" /> });
const SkillsSection = dynamic(() => import('./components/Skills'), { ssr: true, loading: () => <div className="w-full min-h-screen" /> });
const ProjectsSection = dynamic(() => import('./components/ProjectsSection'), { ssr: true, loading: () => <div className="w-full min-h-screen" /> });

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