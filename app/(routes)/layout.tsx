import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "../context/AuthProvider";
import Navbar from "../_shared-components/_navbar";
import Footer from "../_shared-components/_footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hamechina App",
	description: "This app is for members of a developers community",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="he" dir="rtl">
			<body
				className={`min-h-screen flex flex-col items-stretch m-0 darkmode-main ${inter.className}`}
			>
				<AuthProvider>
					{/* TODO: Add navbar */}
					<Navbar />
					<main className="flex flex-col flex-1 h-full pt-6  bg-lightBg text-darkText">
						{children}
					</main>
					<Footer />
				</AuthProvider>
			</body>
		</html>
	);
}
