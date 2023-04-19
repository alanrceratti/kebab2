"use client";

import config from "../[[...index]]/";
import { NextStudio } from "next-sanity/studio";

export default function AdminPage() {
	return <NextStudio config={config} />;
}
