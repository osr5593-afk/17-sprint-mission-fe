export default function Market() {
  return (
    <>
      <h3>베스트 상품</h3>
      <div></div>
      <div>
        <h3>판매 중인 상품</h3>
        <form>
          <input placeholder="검색할 상품을 입력해 주세요" />
        </form>
        <button>상품 등록하기</button>
        <select>
          <option>최신순</option>
          <option>좋아요순</option>
        </select>
      </div>
    </>
  );
}
