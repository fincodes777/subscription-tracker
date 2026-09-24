import dayjs from "dayjs";

export function formatCurrency(
  value: number | string,
  currency: string = "KSH",
) {
  const safeCurrency = (currency || "KSH").trim().toUpperCase();

  try {
    const numericValue =
      typeof value === "number"
        ? value
        : Number(String(value).replace(/[^0-9.-]/g, ""));

    if (!Number.isFinite(numericValue)) {
      throw new Error("Invalid numeric value");
    }

    const normalizedCurrency = ["KES", "KSH"].includes(safeCurrency)
      ? "KSH"
      : "KSH";

    const formattedValue = numericValue.toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return `Ksh ${formattedValue}`;
  } catch (error) {
    const fallbackValue = Number(value ?? 0);
    const safeFallback = Number.isFinite(fallbackValue) ? fallbackValue : 0;
    return `Ksh ${safeFallback.toFixed(2)}`;
  }
}

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not provided";
  const parsedDate = dayjs(value);
  return parsedDate.isValid()
    ? parsedDate.format("MM/DD/YYYY")
    : "Not provided";
};

export const formatStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
