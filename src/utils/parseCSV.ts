import type { Product } from "../data/products";

function parseCSVRow(row: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < row.length; i++) {
    const char = row[i];
    if (char === '"') {
      if (inQuotes && row[i + 1] === '"') {
        current += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

export function parseCSVToProducts(csvText: string): Product[] {
  const lines = csvText.split("\n").filter((line) => line.trim() !== "");
  if (lines.length < 2) return [];

  // Parse header
  const headers = parseCSVRow(lines[0]).map((h) => h.toLowerCase().trim());

  const products: Product[] = [];

  for (let i = 1; i < lines.length; i++) {
    const values = parseCSVRow(lines[i]);
    if (values.length < 2) continue;

    const row: Record<string, string> = {};
    headers.forEach((header, index) => {
      row[header] = values[index] || "";
    });

    try {
      const product: Product = {
        id: parseInt(row.id) || i,
        name: row.name || "",
        nameEn: row.nameen || row.name_en || "",
        price: parseInt(row.price) || 0,
        image: row.image || "",
        color: row.color || "",
        colorHex: row.colorhex || row.color_hex || "#000000",
        sizes: (row.sizes || "").split(",").map((s) => s.trim()).filter(Boolean),
        description: row.description || "",
        material: row.material || "",
        isBestseller: row.isbestseller?.toLowerCase() === "true",
      };

      // Only add if it has at least a name and price
      if (product.name && product.price > 0) {
        products.push(product);
      }
    } catch {
      console.warn(`Skipping invalid row ${i + 1}`);
    }
  }

  return products;
}
