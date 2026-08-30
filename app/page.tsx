import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/Skills';

export default function Home() {
  return (
      <div>
        <Hero />
        <SkillsSection/>
        <ProjectsSection/>
      </div>
  );
}