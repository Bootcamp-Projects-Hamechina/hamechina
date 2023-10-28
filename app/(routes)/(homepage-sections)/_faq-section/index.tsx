import React from "react";
import Faqs from "@/app/_shared-components/Faqs";

const faqs = [
	{
		question: "1. מהי המכינה למציאת עבודה?",
		answer: <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית</p>,
	},
	{
		question: "2. למי התכנית מתאימה?",
		answer: <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית</p>,
	},
	{
		question: "3. מה התכנית כוללת?",
		answer: <p>לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית</p>,
	},
	{
		question: "4. מילאתי את הטופס ולא חזרו אליי, תוך כמה זמן אקבל תשובה?",
		answer: (
			<p>
				צוות המכינה עובדות קשה כדי לענות על כל הפניות, אם לא ענו לך אחרי שלושה
				שבועות, מוזמנת ליצור קשר בפרטי כדי שלא נתפספס!
			</p>
		),
	},
	{
		question: "5. האם זה רלוונטי למשרה חלקית / משרת סטודנט?",
		answer: <p>כן!</p>,
	},
	{
		question: "6. מתי אפשר להירשם?",
		answer: <p>תוכלי להירשם בכל עת כשתתחילי לחפש עבודה באופן אקטיבי.</p>,
	},
];

const FAQSection = () => {
	return (
		<div className="w-full pb-12 md:pb-24 px-5 md:px-40">
			<Faqs faqs={faqs} />
		</div>
	);
};

export default FAQSection;
