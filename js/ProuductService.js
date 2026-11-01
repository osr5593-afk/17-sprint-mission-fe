import axios from "axios";
const BASE_URL = "https://panda-market-api-crud.vercel.app";

// 상품 목록 조회(GET)
export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await axios.get(`${BASE_URL}/products`, {
      params: {page, pageSize, keyword}
    });
    return response.data;
  }
 catch (error) {
  console.log("상품 목록 조회 실패:", error.message);
  throw error;
}
}
// 특정 상품 조회 (GET)
export async function getProduct(id) {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data
  } catch (error) {
    console.log(`상품 조회 실패:`, error.message);
    throw error;
  }
}

//상품 등록(POST)
export async function createProduct(name, description, price, tags, images) {
try {
  const response = await axios.post(`${BASE_URL}/products`, {
    images,
    tags,
    price,
    description,
    name
  });
  return response.data;
} catch (error) {
  console.log(`상품 등록 실패: `, error.message);
  throw error;
}
}

//상품 수정(PATCH)
export async function patchProduct(id, name, description, price, tags, images) {
  try {
    const response = await axios.patch(`${BASE_URL}/products/${id}`, {name, description, price, tags, images});
    return response.data;
  } catch (error) {
    console.log(`상품 수정 실패:`, error.message);
    throw error;
  }
}

// 상품 삭제(DELETE)
export async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/products/${id}`);
    return response.data
  } catch (error) {
    console.log(`상품 삭제 실패:`, error.message);
    throw error;
  }
}