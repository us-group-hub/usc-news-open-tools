/**
 * Open reference formula for the USC.NEWS 2026 LLM API vs. GPU TCO Calculator.
 * Live interactive UI: https://usc.news/llm-api-gpu-cost-calculator/
 */
export function compareInferenceMonthlyCost({
  monthlyInputTokensMillions = 350,
  monthlyOutputTokensMillions = 150,
  apiInputPricePer1M = 1.25,
  apiOutputPricePer1M = 5.0,
  gpuHourlyRateUsd = 2.6,
  gpuCount = 2,
  monthlyOpsOverheadUsd = 450,
}) {
  const apiCost =
    monthlyInputTokensMillions * apiInputPricePer1M +
    monthlyOutputTokensMillions * apiOutputPricePer1M;
  const gpuCost = gpuHourlyRateUsd * 730 * gpuCount + monthlyOpsOverheadUsd;
  return {
    apiMonthlyUsd: Number(apiCost.toFixed(2)),
    gpuMonthlyUsd: Number(gpuCost.toFixed(2)),
    monthlySavingsWithGpuUsd: Number((apiCost - gpuCost).toFixed(2)),
    recommendation: gpuCost < apiCost ? 'self-hosted-gpu' : 'managed-api',
  };
}
