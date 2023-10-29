import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";

interface FaqsProps {
	faqs: {
		question: string;
		answer: JSX.Element | string;
	}[];
}

const Faqs = ({ faqs }: FaqsProps) => {
	return (
		<>
			<SectionTitle title="שאלות נפוצות" />

			<p className="w-full py-2 text-right text-base md:text-xl break-words">
				לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום
				סילקוף, מרגשי ומרגשח. עמחליף גולר
			</p>

			<div className="min-h-[60px]">
				<Accordion
					type="single"
					className="font-medium"
					defaultValue="item-1"
					collapsible
				>
					{faqs.map((faq, index) => (
						<AccordionItem
							key={index}
							value={`item-${index + 1}`}
							className="bg-slate-300 dark:bg-cyan-900 rounded-[10px] w-full py-1 px-7 my-4 md:px-12"
						>
							<AccordionTrigger className="text-lg md:text-xl font-bold text-right text-cyan-900">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-base font-inter pl-6 text-cyan-900">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</>
	);
};

export default Faqs;
