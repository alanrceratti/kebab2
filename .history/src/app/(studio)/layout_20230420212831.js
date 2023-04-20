import "../globals.css";

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${aclonica.variable} ${inter.variable} bg-green`}
		>
			<body>{children}</body>
		</html>
	);
}
