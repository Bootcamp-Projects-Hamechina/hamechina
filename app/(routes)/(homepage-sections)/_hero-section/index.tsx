import React from "react";
import ButtonLink from "@/app/_shared-components/ButtonLink";

const HeroSection = () => {
	return (
		<div className="w-full px-5 md:px-40 pb-12 pt-6 md:pt-16 flex flex-col items-center md:items-start gap-6 bg-gray-700 text-lightText">
			<h1 className="font-normal text-4xl text-center md:text-5xl md:text-start leading-tight">
				המכינה למציאת עבודה
			</h1>
			<p className="font-normal text-2xl text-center md:text-start leading-tight md:w-3/5">
				לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום
				סילקוף, מרגשי ומרגשח. עמחליף גולר
			</p>
			<ButtonLink href="/" className="orange-btn">
				התחברות / הרשמה
			</ButtonLink>
		</div>
	);
};

export default HeroSection;
