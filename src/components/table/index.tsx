import { useCallback, useEffect, useRef, useState } from "react";
import { useThrottle } from 'react-use';
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
	fetchMoreDataThunk,
} from "@/store/features/dataSlice";
import TableRows from "./TableRows";
import type { IPossibleDataType, ListRequestParams, MetaData, TableColumnConfig } from "@/types";
import { resetData } from "@/store/features/dataSlice";
import { SkeletonRow } from "./SkeletonRow";
import { renderRow } from "./renderRow";
import { TableFooter } from "./TableFooter";


type TableProps = {
	fetch: (params: ListRequestParams) => Promise<{ data: IPossibleDataType[]; meta: MetaData }>;
	params: ListRequestParams;
	config: TableColumnConfig[];
}
export const Table = ({
	fetch,
	params,
	config
}: TableProps) => {
		const dispatch = useAppDispatch();
	const { data, meta, loading, error } = useAppSelector(
		(state) => state.tableData
	);
	const [isLoadingData, setIsLoadingData] = useState(true);
	const observer = useRef<IntersectionObserver>();
	

		const lastElementRef = useCallback(
		(node: HTMLTableRowElement) => {
			if (loading || data.length >= meta.total || error || meta.total === -1 || !meta.next) return;
			if (observer.current) observer.current.disconnect();
			const url = new URL(meta.next);
			let page = Number(url.searchParams.get('page'));
			observer.current = new IntersectionObserver(
				(entries) => {
					if (entries[0].isIntersecting && meta.next) {
						useThrottle(dispatch(
							fetchMoreDataThunk({
								params: {
									...params,
									page
								},
								fetch

							},
							)
						), 100)
						
					}
				},
				{ threshold: 0.8 }
			);
			if (node) observer.current.observe(node);
		},
		[dispatch, error, loading, data.length, meta.total, meta.next, meta.previous]
	);

		useEffect(() => {
			dispatch(resetData());
			if (meta.total === -1 || error) {
				dispatch(fetchMoreDataThunk({ params, fetch: () => fetch(params) }));
				setTimeout(() => setIsLoadingData(false), 400);
			}
	}, [fetch, params, error]);

		return (
		<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
			{error && <p>Error: {error}</p>}
			<TableRows
				data={data}
				config={config}
				renderRow={(item: IPossibleDataType, index) => {
					if (isLoadingData)
						return (
							<SkeletonRow
								columnsCount={Object.keys?.(config).length}
								key={`skeleton-row-${index}`}
							/>
						);
					else if (index !== undefined && meta.next) {
						return (
							<>
								{renderRow<IPossibleDataType>({
									item,
									index,
									config,
									ref: lastElementRef,
								})}
								{loading &&
									Array.from({ length: 2 }).map((_, skIndex) => (
										<SkeletonRow
											columnsCount={Object.keys?.(config).length}
											key={`skeleton-row-${skIndex}`}
										/>
									))}
							</>
						);
					} else {
						return (
							<>
								{renderRow<IPossibleDataType>({
									item,
									index,
									config,
								})}
							</>
						);
					}
				}}
			/>
			<TableFooter
				dataLength={data.length}
				total={meta.total}
			/>
		</div>
	);

}