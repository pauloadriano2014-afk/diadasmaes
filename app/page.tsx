import Hero from '../components/Hero';
import RealitySection from '../components/RealitySection';
import MethodSection from '../components/MethodSection';
import AuthoritySection from '../components/AuthoritySection';
import FeedbackSection from '../components/FeedbackSection';
import CampaignSection from '../components/CampaignSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-rose-500 selection:text-white pb-10">
      <Hero />
      <RealitySection />
      <MethodSection />
      <AuthoritySection />
      <FeedbackSection />
      <CampaignSection />
    </main>
  );
}