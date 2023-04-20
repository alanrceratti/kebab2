"use client";

import config from "/sanity.config";
import { NextStudio } from "next-sanity/studio";

const function AdminPage = () => {
	return <NextStudio config={config} />;
}
