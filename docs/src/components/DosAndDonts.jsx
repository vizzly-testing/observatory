export function Do({ children }) {
  return (
    <div className="do-card">
      <div className="label">Do</div>
      <div className="text-slate-300">{children}</div>
    </div>
  );
}

export function Dont({ children }) {
  return (
    <div className="dont-card">
      <div className="label">Don't</div>
      <div className="text-slate-300">{children}</div>
    </div>
  );
}

export function DosAndDonts({ children }) {
  return <div className="dos-donts">{children}</div>;
}
