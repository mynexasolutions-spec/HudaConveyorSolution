import fs from "node:fs";
import path from "node:path";
import {
  PRODUCT_CATEGORIES,
  type DetailPageData,
  type ProductCategoryKey,
} from "./product-category-data";
import {
  SOLUTION_PAGES,
  type SolutionPageKey,
} from "./solution-page-data";

export type PageTemplateFile =
  | "_body.html"
  | "_about.html"
  | "_blog.html"
  | "_gallery.html"
  | "_contact.html";

const CUSTOMERS_SECTION_PATTERN: RegExp =
  /<section class="clients-section">[\s\S]*?(?:<!-- End Clients Section -->|(?=\s*<!-- Main Footer -->))/;
const SCRIPT_TAG_PATTERN: RegExp = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
const PAGE_TITLE_PATTERN: RegExp =
  /<!--Page Title-->[\s\S]*?<!--End Page Title-->/;
const CONTENT_SIDE_PATTERN: RegExp =
  /<!--Content Side-->[\s\S]*?<\/div><!-- Service Detail -->/;

const CATEGORY_NAVIGATION_LINKS: Readonly<Record<string, string>> = {
  "OVERHEAD CONVEYORS": "/overhead-conveyors",
  "BELT CONVEYOR": "/belt-conveyor",
  "ROLLER CONVEYORS": "/roller-conveyors",
  "CHAIN CONVEYORS": "/chain-conveyors",
  "OTHER CONVEYORS": "/other-conveyors",
  "TURN KEY SOLUTIONS": "/turn-key-solutions",
};

function replaceCategoryNavigationLinks(html: string): string {
  return Object.entries(CATEGORY_NAVIGATION_LINKS).reduce(
    (updatedHtml: string, [label, href]: [string, string]) => {
      const linkPattern: RegExp = new RegExp(
        `(<a\\b[^>]*\\bhref=)(["'])#\\.?\\2([^>]*>\\s*${label}\\s*<\\/a>)`,
        "gi",
      );
      return updatedHtml.replace(linkPattern, `$1"${href}"$3`);
    },
    html,
  );
}

function readAppFile(fileName: string): string {
  const html: string = fs
    .readFileSync(path.join(process.cwd(), "src", "app", fileName), "utf8")
    .replace(/\r\n/g, "\n")
    .replace(SCRIPT_TAG_PATTERN, "");
  return replaceCategoryNavigationLinks(html);
}

function replaceCustomersSection(templateHtml: string, templateFile: string): string {
  const customersHtml: string = readAppFile("_customers.html").trim();

  if (!CUSTOMERS_SECTION_PATTERN.test(templateHtml)) {
    throw new Error(`Customer section was not found in page template: ${templateFile}`);
  }

  return templateHtml.replace(CUSTOMERS_SECTION_PATTERN, customersHtml);
}

function renderList(items: readonly string[]): string {
  return items.map((item: string) => `<li>${item}</li>`).join("\n");
}

function renderCategoryTitle(category: DetailPageData): string {
  return `<!--Page Title-->
   <section class="page-title product-category-title" style="background-image:url(/images/${category.image})">
      <div class="auto-container">
         <h1>${category.title}</h1>
         <ul class="page-breadcrumb">
            <li><a href="/">Home</a></li>
            <li>${category.breadcrumb}</li>
         </ul>
      </div>
   </section>
   <!--End Page Title-->`;
}

function renderCategoryContent(category: DetailPageData): string {
  const paragraphs: string = category.paragraphs
    .map((paragraph: string) => `<p>${paragraph}</p>`)
    .join("\n");

  return `<!--Content Side-->
            <div class="content-side col-lg-8 col-md-12 col-sm-12 order-2">
               <div class="service-detail product-category-detail">
                  <div class="image-box">
                     <div class="image wow fadeIn">
                        <a href="/images/${category.image}" class="lightbox-image" data-fancybox="gallery"><img src="/images/${category.image}" alt="${category.imageAlt}"></a>
                     </div>
                  </div>
                  <div class="content-box">
                     <h2>${category.heading}</h2>
                     ${paragraphs}
                     <div class="shop-single">
                        <div class="product-details">
                           <div class="product-info-tabs">
                              <div class="prod-tabs tabs-box">
                                 <ul class="tab-btns tab-buttons clearfix">
                                    <li data-tab="#category-types" class="tab-btn active-btn">VARIOUS TYPES</li>
                                    <li data-tab="#category-features" class="tab-btn">FEATURES</li>
                                    <li data-tab="#category-applications" class="tab-btn">APPLICATIONS</li>
                                 </ul>
                                 <div class="tabs-content">
                                    <div class="tab active-tab" id="category-types"><div class="content"><ul class="list-style-two clearfix">${renderList(category.types)}</ul></div></div>
                                    <div class="tab" id="category-features"><div class="content"><ul class="list-style-two clearfix">${renderList(category.features)}</ul></div></div>
                                    <div class="tab" id="category-applications"><div class="content"><ul class="list-style-two clearfix">${renderList(category.applications)}</ul></div></div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div><!-- Service Detail -->`;
}

export function readPageHtml(templateFile: PageTemplateFile): string {
  const templateHtml: string = readAppFile(templateFile);
  return replaceCustomersSection(templateHtml, templateFile);
}

export function readProductCategoryHtml(categoryKey: ProductCategoryKey): string {
  return readDetailPageHtml(PRODUCT_CATEGORIES[categoryKey]);
}

function readDetailPageHtml(detailPage: DetailPageData): string {
  const templateFile: string = "_product_template.html";
  const templateHtml: string = readAppFile(templateFile)
    .replace('<span class="header-span"></span>', '<span class="header-span product-header-span"></span>')
    .replace(PAGE_TITLE_PATTERN, renderCategoryTitle(detailPage))
    .replace(CONTENT_SIDE_PATTERN, renderCategoryContent(detailPage));

  return replaceCustomersSection(templateHtml, templateFile);
}

export function readSolutionPageHtml(solutionKey: SolutionPageKey): string {
  return readDetailPageHtml(SOLUTION_PAGES[solutionKey]);
}
