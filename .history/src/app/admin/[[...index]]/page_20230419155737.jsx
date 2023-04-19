"use client";

import config from "@sani";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
	return <NextStudio config={config} />;
}
