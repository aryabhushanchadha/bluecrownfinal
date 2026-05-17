import { useState, useEffect } from "react";
import { products as fallbackProducts } from "../data/products";
import { parseCSVToProducts } from "../utils/parseCSV";
import { GOOGLE_SHEET_ID } from "../utils/sheetsConfig";
import type { Product } from "../data/products";

interface UseProductsResult {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  source: "google-sheets" | "local";
}

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>(fallbackProducts);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<"google-sheets" | "local">("local");

  useEffect(() => {
    const fetchProducts = async () => {
      // If no Google Sheet ID configured, use local data
      if (
        !GOOGLE_SHEET_ID ||
        GOOGLE_SHEET_ID === "YOUR_GOOGLE_SHEET_ID_HERE"
      ) {
        setProducts(fallbackProducts);
        setSource("local");
        setIsLoading(false);
        return;
      }

      try {
        const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch Google Sheet");
        }

        const csvText = await response.text();
        const parsedProducts = parseCSVToProducts(csvText);

        if (parsedProducts.length > 0) {
          setProducts(parsedProducts);
          setSource("google-sheets");
          setError(null);
        } else {
          throw new Error("No valid products found in sheet");
        }
      } catch (err) {
        console.warn("Google Sheets fetch failed, using local data:", err);
        setProducts(fallbackProducts);
        setSource("local");
        setError(
          err instanceof Error
            ? err.message
            : "Failed to load from Google Sheets"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, error, source };
}
