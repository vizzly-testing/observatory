/**
 * Table Component
 * Observatory Design System
 *
 * Styled data table with sorting and row actions
 */

export function Table({
  columns = [],
  data = [],
  onRowClick,
  emptyMessage = 'No data available',
  className = ''
}) {
  if (!data.length) {
    return (
      <div className="text-center py-12">
        <p className="text-sm text-slate-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700/50">
            {columns.map((column, index) => (
              <th
                key={column.key || index}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500"
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/30">
          {data.map((row, rowIndex) => (
            <tr
              key={row.id || rowIndex}
              onClick={() => onRowClick?.(row)}
              className={`transition-colors ${onRowClick ? 'cursor-pointer hover:bg-white/[0.02]' : ''}`}
            >
              {columns.map((column, colIndex) => (
                <td key={column.key || colIndex} className="px-4 py-4 text-sm text-slate-300">
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
