"use client";

import config from "@/sam";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
	return <NextStudio config={config} />;
}
