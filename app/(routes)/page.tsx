import Image from "next/image";
import HeroSection from "./(homepage-sections)/_hero-section";
import HamechinaContentSection from "./(homepage-sections)/_hamechina-content";
import DiscordSection from "./(homepage-sections)/_discord-section";
import FAQSection from "./(homepage-sections)/_faq-section";

export default function Home() {
	return (
		<main className="overflow-hidden">
			<HeroSection />
			<DiscordSection />
			<HamechinaContentSection />
			<FAQSection />
		</main>
	);
}
