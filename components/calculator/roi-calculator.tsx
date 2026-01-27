"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge-2";
import { ChartConfig, ChartContainer, ChartTooltip } from "@/components/ui/line-charts-6";
import { Line, LineChart, XAxis, YAxis } from "recharts";
import { ArrowDown, ArrowUp, TrendingUp, Target, Users, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { CalculatorSidebar } from "./calculator-sidebar";
import { SiteNavbar } from "@/components/block/site-navbar";

// Configuration du graphique
const chartConfig = {
  budget: {
    label: "Budget dépensé",
    color: "var(--color-chart-1)",
  },
  clicks: {
    label: "Nombre de clicks",
    color: "var(--color-chart-3)",
  },
  conversions: {
    label: "Conversions",
    color: "var(--color-chart-4)",
  },
  profit: {
    label: "Profit net",
    color: "var(--color-chart-2)",
  },
} satisfies ChartConfig;

// Tooltip personnalisé
interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey: string;
    value: number;
    color: string;
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-popover p-3 shadow-sm shadow-black/5 min-w-[140px]">
        <div className="flex flex-col gap-2">
          {payload.map((entry, index) => {
            const isNumberOnly = entry.dataKey === "conversions" || entry.dataKey === "clicks";

            return (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="size-1.5 rounded-full shrink-0" style={{ backgroundColor: entry.color }}></div>
                <span className="text-muted-foreground">
                  {chartConfig[entry.dataKey as keyof typeof chartConfig]?.label}:
                </span>
                <span className="font-semibold text-popover-foreground ml-auto">
                  {isNumberOnly
                    ? (entry.dataKey === "conversions" ? entry.value.toFixed(1) : Math.round(entry.value))
                    : `${Math.round(entry.value)}€`
                  }
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
};

export function RoiCalculator() {
  // États du formulaire
  const [prixVente, setPrixVente] = useState(100);
  const [marge, setMarge] = useState(30);
  const [budgetMensuel, setBudgetMensuel] = useState(1000);
  const [cpc, setCpc] = useState(2);
  const [tauxConversion, setTauxConversion] = useState(3);
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>(["budget"]);

  // Toggle métrique (permet de sélectionner/désélectionner)
  const toggleMetric = (metric: string) => {
    setSelectedMetrics((prev) => {
      if (prev.includes(metric)) {
        // Ne pas permettre de tout désélectionner
        if (prev.length === 1) return prev;
        return prev.filter((m) => m !== metric);
      }
      return [...prev, metric];
    });
  };

  // Calculs des métriques
  const metrics = useMemo(() => {
    const clicsMensuels = budgetMensuel / cpc;
    const conversions = (clicsMensuels * tauxConversion) / 100;
    const chiffreAffaires = conversions * prixVente;
    const margeBrute = (chiffreAffaires * marge) / 100;
    const profitNet = margeBrute - budgetMensuel;
    const roi = ((profitNet / budgetMensuel) * 100);

    return {
      budget: budgetMensuel,
      clicks: Math.round(clicsMensuels),
      conversions: Math.round(conversions * 10) / 10,
      profit: Math.round(profitNet),
      roi: Math.round(roi * 10) / 10,
    };
  }, [prixVente, marge, budgetMensuel, cpc, tauxConversion]);

  // Fonction de pondération pour simuler une distribution réaliste du budget
  const getBudgetWeight = (dayIndex: number): number => {
    const weights = [
      0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.08, 0.07,
      0.06, 0.07, 0.08, 0.09, 0.07, 0.06, 0.05, 0.04
    ];
    return weights[dayIndex] || 0.06;
  };

  // Génération des données du graphique (30 jours, 1 point tous les 2 jours)
  const chartData = useMemo(() => {
    const data = [];
    const numPoints = 16;

    for (let i = 0; i < numPoints; i++) {
      const date = new Date();
      date.setDate(date.getDate() - ((numPoints - 1 - i) * 2));

      const budgetWeight = getBudgetWeight(i);
      const budgetQuotidien = budgetMensuel * budgetWeight;

      const clicsQuotidiens = budgetQuotidien / cpc;
      const conversionsQuotidiennes = (clicsQuotidiens * tauxConversion) / 100;
      const caQuotidien = conversionsQuotidiennes * prixVente;
      const margeBruteQuotidienne = (caQuotidien * marge) / 100;
      const profitQuotidien = margeBruteQuotidienne - budgetQuotidien;

      data.push({
        date: date.toISOString().split('T')[0],
        budget: Math.round(budgetQuotidien),
        clicks: Math.round(clicsQuotidiens),
        conversions: Math.round(conversionsQuotidiennes * 10) / 10,
        profit: Math.round(profitQuotidien),
      });
    }
    return data;
  }, [budgetMensuel, cpc, tauxConversion, prixVente, marge]);

  // Configuration des métriques affichables
  const metricsConfig = [
    {
      key: "budget",
      label: "Budget dépensé",
      value: metrics.budget,
      previousValue: Math.round(metrics.budget * 0.90),
      format: (val: number) => `${val.toLocaleString('fr-FR')}€`,
      icon: Target,
    },
    {
      key: "clicks",
      label: "Nombre de clicks",
      value: metrics.clicks,
      previousValue: Math.round(metrics.clicks * 0.85),
      format: (val: number) => val.toLocaleString('fr-FR'),
      icon: BarChart3,
    },
    {
      key: "conversions",
      label: "Conversions",
      value: metrics.conversions,
      previousValue: Math.round(metrics.conversions * 0.85 * 10) / 10,
      format: (val: number) => val.toLocaleString('fr-FR'),
      icon: Users,
    },
    {
      key: "profit",
      label: "Profit Net",
      value: metrics.profit,
      previousValue: Math.round(metrics.profit * 0.85),
      format: (val: number) => `${val.toLocaleString('fr-FR')}€`,
      icon: TrendingUp,
    },
  ];

  return (
    <SidebarProvider className="h-screen">
      <div className="flex h-full w-full">
        <CalculatorSidebar
          prixVente={prixVente}
          setPrixVente={setPrixVente}
          marge={marge}
          setMarge={setMarge}
          budgetMensuel={budgetMensuel}
          setBudgetMensuel={setBudgetMensuel}
          cpc={cpc}
          setCpc={setCpc}
          tauxConversion={tauxConversion}
          setTauxConversion={setTauxConversion}
        />
        <SidebarInset className="flex-1 h-full overflow-auto">
          {/* Navbar sticky en haut */}
          <div className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SiteNavbar />
          </div>

          <div className="w-full h-full flex flex-col">
            {/* Titre et description */}
            <div className="px-6 pt-20 pb-8 flex-shrink-0 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <SidebarTrigger className="absolute left-6" />
                <h1 className="text-3xl font-bold">Calculateur ROI Google Ads</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Estimez la rentabilité de vos campagnes publicitaires en temps réel
              </p>
            </div>

            <Card className="@container w-full flex-1 flex flex-col min-h-0 py-0 pb-6 rounded-none">
              <CardHeader className="p-0 flex-shrink-0">
              {/* Métriques cliquables */}
              <div className="grid @2xl:grid-cols-2 @3xl:grid-cols-4 grow border-b border-border">
                {metricsConfig.map((metric) => {
                  const change = ((metric.value - metric.previousValue) / metric.previousValue) * 100;
                  const isPositive = metric.key === "budget" ? change < 0 : change > 0;
                  const Icon = metric.icon;

                  const isSelected = selectedMetrics.includes(metric.key);
                  const metricColor = chartConfig[metric.key as keyof typeof chartConfig]?.color;

                  return (
                    <button
                      key={metric.key}
                      onClick={() => toggleMetric(metric.key)}
                      className={cn(
                        "cursor-pointer flex-1 text-start p-4 last:border-b-0 border-b @2xl:border-b @2xl:even:border-e @3xl:border-b-0 @3xl:border-e @3xl:last:border-e-0 transition-all relative overflow-hidden",
                      )}
                      style={{
                        backgroundColor: isSelected ? `color-mix(in srgb, ${metricColor} 10%, transparent)` : undefined,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon className="w-4 h-4" />
                          <span>{metric.label}</span>
                        </div>
                        <Badge variant={isPositive ? "success" : "destructive"} appearance="outline" size="sm">
                          {isPositive ? <ArrowUp className="size-3" /> : <ArrowDown className="size-3" />}
                          {Math.abs(change).toFixed(1)}%
                        </Badge>
                      </div>
                      <div className="text-2xl font-bold">{metric.format(metric.value)}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        depuis {metric.format(metric.previousValue)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardHeader>

            <CardContent className="p-6 flex-1 flex items-center min-h-0">
              <ChartContainer
                config={chartConfig}
                className="h-full w-full max-h-full overflow-visible [&_.recharts-curve.recharts-tooltip-cursor]:stroke-initial"
              >
                <LineChart
                  data={chartData}
                  margin={{
                    top: 20,
                    right: 20,
                    left: 5,
                    bottom: 20,
                  }}
                  style={{ overflow: "visible" }}
                >
                  <defs>
                    <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1" fill="var(--input)" fillOpacity="1" />
                    </pattern>
                    {selectedMetrics.map((metric) => (
                      <filter key={`shadow-${metric}`} id={`lineShadow-${metric}`} x="-100%" y="-100%" width="300%" height="300%">
                        <feDropShadow
                          dx="4"
                          dy="6"
                          stdDeviation="25"
                          floodColor={`${chartConfig[metric as keyof typeof chartConfig]?.color}60`}
                        />
                      </filter>
                    ))}
                    <filter id="dotShadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.5)" />
                    </filter>
                  </defs>

                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                    tickMargin={10}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return date.toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "short",
                      });
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                    tickMargin={10}
                    tickCount={6}
                    tickFormatter={(value) => {
                      if (selectedMetrics.length === 1 &&
                          (selectedMetrics[0] === "conversions" || selectedMetrics[0] === "clicks")) {
                        return value.toString();
                      }
                      const hasMoneyMetric = selectedMetrics.some(m => m === "budget" || m === "profit");
                      if (hasMoneyMetric) {
                        return `${Math.round(value)}€`;
                      }
                      return value.toString();
                    }}
                  />

                  <ChartTooltip content={<CustomTooltip />} cursor={{ strokeDasharray: "3 3", stroke: "#9ca3af" }} />

                  <rect
                    x="60px"
                    y="-20px"
                    width="calc(100% - 75px)"
                    height="calc(100% - 10px)"
                    fill="url(#dotGrid)"
                    style={{ pointerEvents: "none" }}
                  />

                  {selectedMetrics.map((metric) => (
                    <Line
                      key={metric}
                      type="monotone"
                      dataKey={metric}
                      stroke={chartConfig[metric as keyof typeof chartConfig]?.color}
                      strokeWidth={2}
                      filter={`url(#lineShadow-${metric})`}
                      dot={false}
                      activeDot={{
                        r: 6,
                        fill: chartConfig[metric as keyof typeof chartConfig]?.color,
                        stroke: "white",
                        strokeWidth: 2,
                        filter: "url(#dotShadow)",
                      }}
                    />
                  ))}
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
