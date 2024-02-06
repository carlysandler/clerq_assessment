interface TableFooterProps {
	dataLength: number;
	total: number;

}

export const TableFooter = ({
	dataLength,
	total,
}: TableFooterProps) => {

	return (
		<nav
			className="flex justify-start items-center border-t border-border bg-white px-4 py-3 p-2 sm:px-6"
			aria-label="table footer"
		>
			{/* Range Info */}
			<div className="hidden sm:block">
				<p className="text-sm text-gray-700">
					Showing{" "}
					<span className="font-medium">{dataLength}</span> of{" "}
					<span className="font-medium">{total === -1 ? 0 : total}</span> results
				</p>
			</div>
		</nav>
	);
};
