type SectionTitleProps = {
	title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
	return <h4 className="h2 text-xl md:text-2xl font-bold">{title}</h4>;
};

export default SectionTitle;
