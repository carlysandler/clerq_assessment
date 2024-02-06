import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
	XMarkIcon,
	Bars3Icon,
	MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { cn } from "@/utils/cn";
import { TABS } from "@/constants/tabs";

export default function Root() {
	const [sidebarOpen, setSideBarOpen] = useState(false);
	return (
		<>
			{/* Off-canvas menu for mobile, show/hide based on off-canvas menu state.  */}
			{sidebarOpen && (
				<div
					className="relative z-50 md:hidden"
					role="dialog"
					aria-modal="true"
				>
					<div className="fixed inset-0 bg-gray-900/80">
						<div className="fixed inset-0 flex">
							<div className="relative mr-16 flex w-full max-w-xs flex-1">
								<div className="absolute left-full top-0 flex w-16 justify-center pt-5">
									<button
										type="button"
										className="-m-2.5 p-2.5"
										onClick={() => setSideBarOpen(false)}
									>
										<span className="sr-only">Close Sidebar</span>
										<XMarkIcon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</button>
								</div>
								{/* Sidebar component */}
								{sidebarOpen && (
									<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 pb-4 px-4">
										<div className="flex h-16 shrink-0 items-center">
											<h2
												className="h-8 w-auto text-left text-lg"
											>
											ACME Settlement Service
											</h2>
										</div>
										<nav className="flex flex-1 flex-col">
											<ul role="list" className="flex flex-1 flex-col gap-y-7">
												<li>
													<ul role="list" className="-mx-2 space-y-1">
														{TABS.map((tab) => (
															<li key={tab.name}>
																<Link
																	to={tab.route}
																	className="bg-indigo-700 text-white group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
																>
																	{tab.name}
																</Link>
															</li>
														))}
													</ul>
												</li>
											</ul>
										</nav>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Static Sidebar for desktop */}
			{sidebarOpen && (
				<div className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-72 md:flex-col">
					<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-theme pb-4 px-4">
						<div className="flex h-16 shrink-0 items-center">
								< h2
												className="h-8 w-auto text-left text-xl text-white font-bold"
											>
											ACME Settlement Service
											</h2>
						</div>
						<nav className="flex flex-1 flex-col">
							<ul role="list" className="flex flex-1 flex-col gap-y-7">
								<li>
									<ul role="list" className="-mx-2 space-y-1">
										{TABS.map((tab) => (
											<li key={tab.name} className="">
												<Link
													to={tab.route}
													className="active:bg-theme-foreground text-lg text-white group flex gap-x-3 rounded-md p-2 leading-6 font-semibold"
												>
													{tab.name}
												</Link>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			)}

			<div className={cn(sidebarOpen && "md:pl-72")}>
				<div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
					<button
						type="button"
						className="-m-2.5 p-2.5 text-grey-500"
						onClick={() => setSideBarOpen((prev) => !prev)}
					>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						<span className="sr-only">Open sidebar</span>
					</button>

					{/* Separator */}
					<div className="h-6 w-px bg-gray-900/10" aria-hidden="true"></div>

					<div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
						<form
							className="relative flex flex-1 bg-white"
							action="#"
							method="GET"
						>
							<label htmlFor="search-field" className="sr-only">
								Search
							</label>
							<MagnifyingGlassIcon
								className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
								aria-hidden="true"
							/>
							<input
								id="search-field"
								className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm bg-white"
								placeholder="Search..."
								type="search"
								name="search"
							/>
						</form>
					</div>
				</div>

				<div id="detail" className="bg-primary-foreground h-full">
					<Outlet />
				</div>
			</div>
		</>
	);
}
