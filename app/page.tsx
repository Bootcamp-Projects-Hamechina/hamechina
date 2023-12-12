import Image from "next/image";
import HeroSection from "./(routes)/(homepage-sections)/_hero-section";
import HamechinaContentSection from "./(routes)/(homepage-sections)/_hamechina-content";
import DiscordSection from "./(routes)/(homepage-sections)/_discord-section";
import FAQSection from "./(routes)/(homepage-sections)/_faq-section";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HeroSection />
			<HamechinaContentSection />
			<DiscordSection />
			<FAQSection />
		</main>
	);
}
