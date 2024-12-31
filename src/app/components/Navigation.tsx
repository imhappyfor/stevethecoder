"use client";

import { motion } from "framer-motion";

interface NavigationProps {
	currentSection: string;
	setCurrentSection: (section: string) => void;
}

export default function Navigation({ currentSection, setCurrentSection }: NavigationProps) {
	const sections = ["hero", "about", "skills", "projects", "contact"];

	return (
		<nav className="bg-blue-500 w-full xl:w-auto xl:fixed xl:left-4 xl:top-1/2 xl:-translate-y-1/2 xl:z-30 rounded-lg">
			<div className="flex xl:flex-col items-center justify-around xl:justify-start space-x-2 xl:space-x-0 xl:space-y-2 p-4 rounded-lg border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
      md:flex-row flex-col">
				{sections.map((section) => (
					<motion.button
						key={section}
						onClick={() => setCurrentSection(section)}
						className={`text-white capitalize px-3 py-2 rounded ${currentSection === section ? "bg-yellow-400 text-black font-bold rounded-lg " : "hover:bg-blue-600 rounded-lg"}`}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						{section}
					</motion.button>
				))}
			</div>
		</nav>
	);
}
