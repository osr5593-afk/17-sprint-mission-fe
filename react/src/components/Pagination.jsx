const GROUP_SIZE = 5;

export default function Pagination({ page, totalPage, onChange }) {
  const startPage = Math.floor((page - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
  const endPage = Math.min(startPage + GROUP_SIZE - 1, totalPage);
  const pageNumbers = Array.form(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => onChange(page - 1)}>
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={number === page ? "active" : ""}
          onClick={() => onChange(number)}
        >
          {number}
        </button>
      ))}
      <button disabled={page >= totalPage} onClick={() => onChange(page + 1)}>
        &gt;
      </button>
    </div>
  );
}
