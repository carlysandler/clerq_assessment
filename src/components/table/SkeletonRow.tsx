
interface SkeletonRowProps {
	columnsCount: number;
}

export const SkeletonRow = ({ columnsCount }: SkeletonRowProps) => {
	return (
	<tr>
		{Array.from({ length: columnsCount }, (_, index) => (
			<td key={index} className="relative overflow-hidden bg-gray-300">
				<div className="absolute inset-0"
				style={{
					background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
					animation: 'loading 1.5s infinite'
				}}
				>

				</div>
			</td>
		))}
	</tr>
	);
};