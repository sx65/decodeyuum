import Head from "next/head";
import Image from "next/image";

import { useState, useEffect } from "react";

import { MoonIcon, SunIcon } from "@heroicons/react/solid";

import { motion } from "framer-motion";

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		document.documentElement.classList.add("dark");
	}, []);

	return (
		<div className={"w-full h-[100vh] dark:bg-[#36393F] bg-[#FFFFFF]"}>
			<Head>
				<title>sx65 - </title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<motion.div className="absolute top-[20px] right-[20px]">
				<motion.button
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					whileHover={{
						scale: 1.05,
						transition: { duration: 0.1 },
					}}
					whileTap={{ scale: 0.95 }}
					onClick={(e) => {
						if (darkMode == false) {
							document.documentElement.classList.add("dark");
							setDarkMode(true);
						} else {
							document.documentElement.classList.remove("dark");
							setDarkMode(false);
						}
					}}
					className={`p-2 ${
						darkMode ? "bg-[#FFFFFF]" : "bg-[#2F3136]"
					} rounded-full shadow-sm hover:shadow-md transition-all duration-100`}
				>
					{darkMode ? (
						<SunIcon className="w-7 h-7 text-[#2F3136]" />
					) : (
						<MoonIcon className="w-7 h-7 text-[#FFFFFF]" />
					)}
				</motion.button>
			</motion.div>
			<div className="flex justify-center items-center w-full h-full">
				<motion.div
					className="relative rounded-md truncate shadow-md w-[20rem]"
					initial={{ y: 30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
				>
					<div className="bg-[#E7D4BA] w-full h-[4rem]" />

					<div className="top-[20px] left-[20px] flex absolute rounded-full border-[7px] border-[#FFFFFF] dark:border-[#18191C] w-[100px] h-[100px] justify-center items-center truncate">
						<Image
							src="/images/profile.png"
							alt="profile"
							quality={100}
							layout="fill"
						/>
					</div>

					<div className="top-[78px] right-[20px] flex flex-row gap-[5px] absolute justify-center items-center truncate">
						<Image
							src="/badges/nitro.svg"
							alt="profile"
							width={22}
							height={22}
							quality={100}
							layout="intrinsic"
						/>
					</div>

					<div className="bg-[#FFF] dark:bg-[#18191C] w-full h-full p-5 pt-[4.5rem] text-[#060607] dark:text-white">
						<div className="pb-3">
							<motion.span className="font-bold text-[20px] antialiased ">
								sx65
							</motion.span>
							<span className="font-bold text-[20px] antialiased text-[#B9BBBE]">
								#1996
							</span>
						</div>

						<Image
							src="/images/status.png"
							alt="profile"
							width={50}
							height={50}
							quality={100}
							layout="intrinsic"
						/>

						<div className="h-[1px] w-full bg-[#262729] mt-1 mb-3" />

						<h1 className="text-[#4F5660] dark:text-[#B9BBBE] font-extrabold tracking-tighter text-[13px] mb-2">
							ABOUT ME
						</h1>
						<p className="whitespace-normal text-[#060607] dark:text-[#C0C1C2] text-[13px] leading-5">
							- Full Stack Developer for tekgoz's Obfuscater, valorant chairs 
 							applications.<br></br>- Advanced Lua C++ C# Js Developer.<br></br>-
							Experienced in Node.js.
						</p>

						<h1 className="text-[#4F5660] dark:text-[#B9BBBE] font-extrabold tracking-tighter text-[13px] my-2">
							PLAYING A GAME
						</h1>

						<div className="flex flex-row gap-3">
							<div className="relative">
								<Image
									src="/images/javascript.png"
									alt="profile"
									width={70}
									height={70}
									quality={100}
									layout="intrinsic"
									className="rounded-lg"
								/>
								<div className="absolute top-[55px] left-[55px] w-[22px] h-[22px]">
									<Image
										src="/images/vscode.png"
										alt="profile"
										width={1000}
										height={1000}
										quality={100}
										layout="intrinsic"
										className="rounded-full"
									/>
								</div>
							</div>
							<div className="">
								<h1 className="text-[#060607] dark:text-[#D8D9DA] font-bold text-[14px]">
									Visual Studio Code
								</h1>
								<h1 className="text-[#060607] dark:text-[#C0C1C2] text-[13px]">
									Editing index.js
								</h1>
								<h1 className="text-[#060607] dark:text-[#C0C1C2] text-[13px]">
									Workspace: Dayifuscator
								</h1>
								<h1 className="text-[#060607] dark:text-[#C0C1C2] text-[13px]">
									[NULL] elapsed
								</h1>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
