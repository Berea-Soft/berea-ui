import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type Revenue = {
  _id: string;
  month: string;
  revenue: number;
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}

export type Locales = "es-CL" | "es-MX" | "es-ES" | "en-US" | "en-GB" | "fr-FR" | "pt-BR";
export type Currencies = "CLP" | "MXN" | "EUR" | "USD" | "GBP" | "EUR" | "BRL" | "COP";

export const formatCurrency = (amount: number | string, locale?: Locales, currency?: Currencies) => {
  if (typeof amount !== "number") {
    amount = Number(amount);
    if (isNaN(amount)) {
      amount = 0;
    }
  }
  return (amount / 100).toLocaleString(locale ? locale : "en-US", {
    style: "currency",
    currency: currency ? currency : "USD"
  });
};

export const generateYAxis = (revenue: Revenue[]) => {
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map(month => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const formatDateToLocal = (dateStr: string, locale: string = "en-US") => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric"
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};