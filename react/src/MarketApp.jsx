import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";
import usePageSize from "./hooks/usePageSize.js";
import useProducts from "./hooks/useProducts.js";

export default function Market() {
  const [orderBy, setOrderBy] = useState("recent");
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);

  const bestPageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });
  const pageSize = usePageSize({ mobile: 4, tablet: 6, desktop: 10 });

  const best = useProducts({ pageSize: bestPageSize, orderBy: "favorite" });
  const { products, totalCount, loading, error } = useProducts({
    page,
    pageSize,
    orderBy,
    keyword,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(search);
    setPage(1);
  };

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
    setPage(1);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <main className="market-container">
      {/* 베스트 상품 */}
      <section className="market-section">
        <h3 className="market-title">베스트 상품</h3>
        <div className="best-grid">
          {best.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 판매 중인 상품 */}
      <section className="market-section">
        <div className="market-toolbar">
          <h3 className="market-title">판매 중인 상품</h3>

          <div className="market-controls">
            <form onSubmit={handleSearch}>
              <input
                placeholder="검색할 상품을 입력해 주세요"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
            <button className="primary">상품 등록하기</button>
            <select
              className="sort-select"
              value={orderBy}
              onChange={handleOrderChange}
            >
              <option value={"recent"}>최신순</option>
              <option value={"favorite"}>좋아요순</option>
            </select>
          </div>
        </div>
        {loading && <p>데이터 불러오는 중...</p>}
        {error && <p className="error">오류 발생 : {error}</p>}
        {!loading && !error && products.length === 0 && (
          <p>검색 결과가 없습니다.</p>
        )}
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Pagination page={page} totalPage={totalPages} onChange={setPage} />
      </section>
    </main>
  );
}
