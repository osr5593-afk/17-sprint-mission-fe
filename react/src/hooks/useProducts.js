import { useEffect, useState } from "react";
import axios from "axios";
import api from "../api/api.js";

export default function useProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      setLoading(true);
      setError(null);
      try {
        const response = await api.get("/products", {
          params: { page, pageSize, orderBy, keyword },
          signal: controller.signal,
        });

        console.log("요청 주소:", response.config.baseURL);
        console.log("API 응답:", response.data);

        setProducts(response.data.list);
        setTotalCount(response.data.totalCount);
      } catch (e) {
        if (axios.isCancel(e)) return;
        setError(e.message);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    fetchProducts();

    return () => controller.abort();
  }, [page, pageSize, orderBy, keyword]);

  return { products, totalCount, loading, error };
}
