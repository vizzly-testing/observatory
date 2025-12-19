export function PropsTable({ props }) {
  return (
    <table className="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.name}>
            <td>
              <code>{prop.name}</code>
            </td>
            <td>
              <code>{prop.type}</code>
            </td>
            <td>{prop.default ? <code>{prop.default}</code> : '—'}</td>
            <td className="text-slate-300">{prop.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
