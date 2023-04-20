import "../globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${aclonica.variable} ${inter.variable} `}>
			<body>{children}</body>
		</html>
	);
}
