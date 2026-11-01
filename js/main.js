import {getArticleList, getArticle,createArticle,patchArticle,deleteArticle} from "./ArticleService.js";
import {getProductList, getProduct, createProduct, patchProduct, deleteProduct} from "./ProuductService.js";

createArticle("오성룡 새글2", "내용입니다2", "https://example.com/image.jpg")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

getArticleList(1, 10, "")
  .then((data) => {
    console.log("게시글 목록: ", data);
  })
  .catch((error) => {
    console.log("main에서 확인한 오류:", error.message);
  });

getArticle(7336).then((data) => console.log(data));

patchArticle(7336, "게시글 수정 테스트", "이 글은 수정되었습니다.", "https://example.com/image.jpg")
.then((data) => console.log(data))
.catch((error) => console.log(error.message));

deleteArticle(7337).then((data) => console.log(data)).catch((erroe) => console.log(erroe.message));

async function main() {
  try {
    // 상품 목록 조회
    const products = await getProductList(1, 10, "");
    console.log("상품 목록: ", products);

    //특정 삼품 조회
    const products = await getProduct(4566);
    console.log("상품 조회: ",products);

    //상품 등록
    const products = await createProduct("테스트빵", "테스트를 위해 만든 빵", 4500, ['디저트'], 'https://example.com/image.jpg');
    console.log("상품 등록: ",products);

    // 상품 수정
    const products = await patchProduct(4585,"수정된빵", "수정해보기 위해 만든 빵", 5000, ['빵', '디저트'], 'https://example.com/image.jpg');
    console.log("상품 수정: ",products);

    //상품 삭제
    const products = await getProduct(4585);
    console.log("상품 삭제: ",products);
  } catch (error) {
    console.error("테스트 실패: ", error.message);
  }
}

main();