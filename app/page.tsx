import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/Skills';

export default function Home() {
  return (
      <div className='bg-linear-to-t from-[#0c0d0f] via-[#0b0c0e] to-[#0c0c0e]'>
        <Hero />
        <SkillsSection/>
        <ProjectsSection/>
      </div>
  );
}