/** "Part. 0N" label with the section heading beside it (Parts 02 and 03). */
export function PartLabel({ n, part, title }: { n: string; part: string; title: string }) {
  return (
    <div className="part-label">
      <span className="part-word">{part}</span>
      <span className="part-num">{n}</span>
      <h2 className="part-title">{title}</h2>
    </div>
  );
}
