// ============================================================
// Google Sheets Configuration
// ============================================================
//
// HOW TO SET UP:
//
// 1. Create a Google Sheet with these EXACT column headers (Row 1):
//
//    | id | name | nameEn | price | image | color | colorHex | sizes | description | material | isBestseller |
//
// 2. Fill in your product data from Row 2 onwards
//
// 3. Make the sheet public:
//    → File → Share → Publish to web
//    → Select "Entire Document" or specific sheet
//    → Format: CSV
//    → Click "Publish"
//
// 4. Get your Sheet ID from the URL:
//    https://docs.google.com/spreadsheets/d/SHEET_ID_IS_HERE/edit
//
// 5. Paste your SHEET_ID below:
// ============================================================

export const GOOGLE_SHEET_ID = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSNAWEYnMNzfamIxhm2cypjqmOuML2dviD8AX-Gp0inUqDQ0ZYZYTNofSJ0R8UaOekSDekVYgM3u3va/pub?output=csv";

// ============================================================
// Column mapping (must match Row 1 headers exactly)
// ============================================================
export const CSV_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv`;

// ============================================================
// EXAMPLE DATA FORMAT (what your Google Sheet should look like):
//
// | id | name               | nameEn         | price | image           | color    | colorHex | sizes              | description                                    | material                  | isBestseller |
// |----|--------------------|----------------|-------|-----------------|----------|----------|--------------------|-----------------------------------------------|---------------------------|-------------|
// | 1  | Классическая белая | Classic White  | 200   | /images/product1.jpg | Белый    | #FFFFFF  | XS,S,M,L,XL,XXL  | Базовая белая футболка из органического хлопка | 100% органический хлопок, 180 г/м² | TRUE        |
// | 2  | Классическая чёрная| Classic Black  | 200   | /images/product2.jpg | Чёрный   | #1a1a1a  | XS,S,M,L,XL,XXL  | Глубокий чёрный цвет, не выцветает             | 100% органический хлопок, 180 г/м² | TRUE        |
// | 3  | Классическая красная| Classic Red   | 200   | /images/product5.jpg | Красный  | #dc2626  | XS,S,M,L,XL,XXL  | Яркий красный цвет для смелых образов           | 100% органический хлопок, 180 г/м² | TRUE        |
//
// ============================================================
