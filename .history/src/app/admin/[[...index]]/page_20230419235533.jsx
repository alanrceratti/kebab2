"use client";

import { config } from "/../../";
import { NextStudio } from "next-sanity/studio";

const AdminPage = () => {
	return <NextStudio config={config} />;
};

export default AdminPage;
