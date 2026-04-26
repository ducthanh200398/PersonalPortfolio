"use client";

import { useState, useEffect } from "react";
import {
  PortfolioProfile,
  fetchPortfolio,
} from "@/lib/portfolio-api";

export function usePortfolio() {
  const [data, setData] = useState<PortfolioProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const portfolio = await fetchPortfolio();
        setData(portfolio);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load portfolio");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return { data, loading, error };
}
