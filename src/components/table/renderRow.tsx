import { TableColumnConfig } from "@/types";
import { formatCurrency, formatDate, formatPercentage } from "@/utils/formatters";

interface RenderRowProps<T> {
  item: T;
  index: number;
  config: TableColumnConfig[];
  ref?: (node: HTMLTableRowElement) => void;
}

export const renderRow = <T extends Record<string, any>>({ item, config, ref }: RenderRowProps<T>) => {
  return (
    <tr ref={ref}>
      {config.map(({ key, style, format, hideAt }) => (
				// ${!!hideAt ? `hidden ${hideAt}:table-cell` : ''}
        <td key={key} className={`py-3.5 ${style}`}>
          {formatData(item[key] as string | number | null, format!)}
        </td>
      ))}
    </tr>
  );
};

function formatData(value: string | number | null, formatType: "currency" | "percentage" | "string" | "number" | "date") {
	switch (formatType) {
    case 'currency':
      return formatCurrency(value);
    case 'percentage':
      return formatPercentage(value);
		case 'date': 
			return formatDate(value);
    default:
      return value;
  }
}
