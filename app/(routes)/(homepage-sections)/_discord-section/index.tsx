import Link from "next/link";
import React from "react";
import SectionTitle from "@/app/_shared-components/SectionTitle";

// type Props = {}

const featuredContent = [
	{
		title: "קבוצות למידה משותפות",
		description:
			"מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ",
	},
	{
		title: "פרויקטים בקהילה",
		description:
			"מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ",
	},
	{
		title: "שיתופים מראיונות עבודה",
		description:
			"מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ",
	},
	{
		title: "סימולציות לראיונות",
		description:
			"מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ",
	},
	{
		title: "מאגרי מידע",
		description:
			"מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ",
	},
	{
		title: "מפגשי קהילה",
		description:
			"מצאו פרויקטים קוד פתוח בתוך הקהילה להשתתף בהן. ידע איך להתחיל לתרום. פרטנריות לשת'פ",
	},
];

type DiscordContent = {
	title: string;
	description: string;
};

const Feature = (props: DiscordContent) => {
	return (
		<div className="bg-cyan-900 flex grow flex-col w-full px-3 py-3 md:px-5 md:py-5 mt-4 md:mt-0 rounded-lg max-md:max-w-full">
			<div className="flex w-[356px] max-w-full flex-col ">
				<div className="text-lightText text-right text-base font-bold whitespace-nowrap">
					{props.title}
				</div>
				<div className="text-lightText text-right text-normal text-sm md:text-base md:mt-2">
					{props.description}
				</div>
			</div>
		</div>
	);
};

const DiscordSection = () => {
	return (
		<div className="bg-orange-200 w-full pb-12 md:pb-24 px-5 md:px-40">
			<SectionTitle title="הדיסקורד" />
			<div className="flex flex-col md:flex-row gap-2 justify-between md:items-center md:pb-4">
				<p className="w-full md:w-4/5 py-2 text-right text-base md:text-xl break-words ">
					לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד
					אדנדום סילקוף, מרגשי ומרגשח. עמחליף גולר
				</p>
				<Link
					href="https://discord.gg/zxuKGU8P9R"
					className="bg-gray-700 text-lightText hover:bg-gray-800 text-xl text-center font-normal rounded-md px-4 py-2 whitespace-nowrap"
				>
					הצטרפו לדיסקורד
				</Link>
			</div>
			<div className="md:gap-5 grid grid-cols-1 md:grid-cols-2">
				{featuredContent.map((content) => (
					<Feature
						key={content.title}
						title={content.title}
						description={content.description}
					/>
				))}
			</div>
		</div>
	);
};

export default DiscordSection;
