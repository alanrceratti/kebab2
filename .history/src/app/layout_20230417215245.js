import Header from "@/components/Header/Header";
import "./globals.css";
import { Aclonica, Inter } from "next/font/google";

export const metadata = {
	title: "Greek Bite",
	description: "Generated by create next app",
};

const aclonica = Aclonica({
	variable: "--aclonica-font",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

const inter = Inter({
	variable: "--inter-font",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${aclonica.variable} ${inter.variable} `}>
			<body className="bg-darkGray max-w-screen-lg ml-auto ">
				<Header />
				{children}
			</body>
		</html>
	);
}
