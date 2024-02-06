import { TableColumnConfig } from "@/types";
import { Fragment } from "react";
import { cn } from "@/utils/cn";
interface TableWrapperProps<T> {
  data: T[];
  renderRow: (item: T, index: number, config: TableColumnConfig[]) => JSX.Element;
	config: TableColumnConfig[]
}

function TableRows<T>({ data, renderRow, config }: TableWrapperProps<T>) {
  return (
		<div className="overflow-y-auto h-full max-h-[calc(100vh-20rem)]">
    <table className="min-w-full divide-y divide-gray-300">
			{/* Table header */}
			<thead className="bg-gray-50 sticky">
				<tr>
					  {config.map(({ header, style, hideAt }, index) => (
              <th 
                key={index}
                scope="col"
                className={cn(
									'py-3.5 sticky top-0 bg-gray-50',
									`${style}`,
									// `${hideAt !== undefined ? `hidden ${hideAt}:table-cell` : ''}`
								)}
								// ${hideAt ? `hidden ${hideAt}:table-cell` : ''}
              >
                {header}
              </th>
            ))}
				</tr>
				
			</thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {data.map((item, index) => (
          <Fragment key={index}>
            {renderRow(item, index, config)}
          </Fragment>
        ))}
      </tbody>
    </table>
		</div>
  );
}

export default TableRows;
