"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Plus from "/public/our-special/plus.svg";
import { getOffers } from "../../../../sanity/sanity-utils";

export default async function OurSpecial() {
	const offers = await getOffers();
    return