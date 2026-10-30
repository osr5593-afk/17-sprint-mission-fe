const BASE_URL = "https://panda-market-api-crud.vercel.app";

// 게시글 목록 조회(GET)
export function getArticleList(page, pageSize, keyword) {
  const params = new URLSearchParams({
    page: page,
    pageSize: pageSize,
    keyword: keyword,
  });
  return fetch(`${BASE_URL}/articles?${params}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.log(`게시글 목록 조회 실패: `, error.message);
      throw error;
    });
}

// 특정 게시글 조회(GET)
export function getArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP  에러: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.log("게시글 조회 실패:", error.message);
      throw error;
    });
}

// 게시글 생성 (POST)
export function createArticle(title, content, image) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    hearders: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.log("게시글 생성 실패: ", error.message);
      throw error;
    });
}

// 게시글 수정 (PATCH)
export function patchArticle(id, title, content, image) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      content,
      image,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      console.log(`게시글 수정 실패: `, error.message);
      throw error;
    });
}

// 게시글 삭제 (DELETE)
export function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러: ${response.status}`);
      }
      if (response.status === 204) {
        return null;
      }
      return response.json();
    })
    .catch((error) => {
      console.log(`게시물 삭제 실패: `, error.message);
      throw error;
    });
}
