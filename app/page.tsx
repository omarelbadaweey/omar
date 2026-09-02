import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/Skills';
import About from './components/About';

export default function Home() {
  return (
      <main className='bg-[#070A12]'>
        <Hero />
        <About/>
        <SkillsSection/>
        <ProjectsSection/>
      </main>
  );
}