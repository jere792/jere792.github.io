import { Hero } from '@/components/home/Hero';
import { TechStack } from '@/components/home/TechStack';
import { RecentProjects } from '@/components/home/RecentProjects';
import './home.scss';

export default function HomePage() {
  return (
    <div className="home-container">
      <Hero />
      <TechStack />
      <RecentProjects />
    </div>
  );
}
