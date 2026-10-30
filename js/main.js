import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

// getArticleList(1, 10, "")
//   .then((data) => {
//     console.log("게시글 목록: ", data);
//   })
//   .catch((error) => {
//     console.log("main에서 확인한 오류:", error.message);
//   });

// getArticle(7268).then((data) => console.log(data));

createArticle("오성룡 새글", "내용입니다", "https://example.com/image.jpg")
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
