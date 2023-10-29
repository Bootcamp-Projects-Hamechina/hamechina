import React from "react";
import Link from "next/link";

interface ButtonLinkProps {
	href: string;
	external?: boolean;
	className?: string;
	children: React.ReactNode;
}

const ButtonLink = ({
	href,
	external,
	children,
	className,
}: ButtonLinkProps) => {
	if (external) {
		return (
			<a
				href={href}
				className={`custom-btn ${className}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		);
	}

	return (
		<Link href={href} className={`custom-btn ${className}`}>
			{children}
		</Link>
	);
};

export default ButtonLink;
