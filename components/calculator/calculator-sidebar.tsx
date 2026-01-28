"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface CalculatorSidebarProps {
  prixVente: number;
  setPrixVente: (value: number) => void;
  marge: number;
  setMarge: (value: number) => void;
  budgetMensuel: number;
  setBudgetMensuel: (value: number) => void;
  cpc: number;
  setCpc: (value: number) => void;
  tauxConversion: number;
  setTauxConversion: (value: number) => void;
}

export function CalculatorSidebar({
  prixVente,
  setPrixVente,
  marge,
  setMarge,
  budgetMensuel,
  setBudgetMensuel,
  cpc,
  setCpc,
  tauxConversion,
  setTauxConversion,
}: CalculatorSidebarProps) {
  // Déterminer les modes initiaux en fonction des props
  const getInitialMode = (value: number, options: number[]) => {
    return options.includes(value) ? String(value) : "custom";
  };

  // États pour gérer les modes personnalisés
  const [prixVenteMode, setPrixVenteMode] = useState<string>(() =>
    getInitialMode(prixVente, [100, 500, 2000])
  );
  const [margeMode, setMargeMode] = useState<string>(() =>
    getInitialMode(marge, [15, 50, 90])
  );
  const [budgetMode, setBudgetMode] = useState<string>(() =>
    getInitialMode(budgetMensuel, [300, 500, 1000])
  );
  const [cpcMode, setCpcMode] = useState<string>(() =>
    getInitialMode(cpc, [0.5, 2.5, 10])
  );
  const [conversionMode, setConversionMode] = useState<string>(() =>
    getInitialMode(tauxConversion, [9, 6, 2])
  );

  // Gestion du changement de prix de vente
  const handlePrixVenteChange = (value: string) => {
    setPrixVenteMode(value);
    if (value !== "custom") {
      setPrixVente(Number(value));
    }
  };

  // Gestion du changement de marge
  const handleMargeChange = (value: string) => {
    setMargeMode(value);
    if (value !== "custom") {
      setMarge(Number(value));
    }
  };

  // Gestion du changement de budget
  const handleBudgetChange = (value: string) => {
    setBudgetMode(value);
    if (value !== "custom") {
      setBudgetMensuel(Number(value));
    }
  };

  // Gestion du changement de CPC
  const handleCpcChange = (value: string) => {
    setCpcMode(value);
    if (value !== "custom") {
      setCpc(Number(value));
    }
  };

  // Gestion du changement de taux de conversion
  const handleConversionChange = (value: string) => {
    setConversionMode(value);
    if (value !== "custom") {
      setTauxConversion(Number(value));
    }
  };

  // Calcul du ROI (Return On Investment) avec marge - en facteur
  const roi = useMemo(() => {
    const clicsMensuels = budgetMensuel / cpc;
    const conversions = (clicsMensuels * tauxConversion) / 100;
    const chiffreAffaires = conversions * prixVente;
    const margeBrute = (chiffreAffaires * marge) / 100;
    return budgetMensuel > 0 ? margeBrute / budgetMensuel : 0;
  }, [prixVente, marge, budgetMensuel, cpc, tauxConversion]);

  // Déterminer la couleur et le message selon le ROI
  const getRoiColor = () => {
    if (roi < 1) return "bg-destructive";
    if (roi < 2) return "bg-[oklch(0.7686_0.1647_70.0804)]"; // Jaune/Orange
    return "bg-primary";
  };

  const getRoiTextColor = () => {
    if (roi < 1) return "text-destructive-foreground";
    if (roi < 2) return "text-foreground";
    return "text-primary-foreground";
  };

  const getRoiMessage = () => {
    const roasFormatted = roi.toFixed(2);
    return `1€ investi rapporte ${roasFormatted}€`;
  };

  return (
    <Sidebar variant="sidebar" className="h-full">
      <SidebarContent className="h-full flex flex-col justify-center py-8">
        {/* Section Produit */}
        <SidebarGroup className="mb-4">
          <SidebarGroupLabel className="flex items-center gap-2 text-base">
            <TrendingUp className="w-4 h-4" />
            Informations Produit
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-4 px-2">
              {/* Prix de vente */}
              <div className="space-y-2">
                <Label htmlFor="prix" className="text-xs">
                  Prix de vente unitaire (€)
                </Label>
                <select
                  id="prix"
                  value={prixVenteMode}
                  onChange={(e) => handlePrixVenteChange(e.target.value)}
                  className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                >
                  <option value="100">100€</option>
                  <option value="500">500€</option>
                  <option value="2000">2000€</option>
                  <option value="custom">Personnalisé</option>
                </select>
                {prixVenteMode === "custom" && (
                  <Input
                    type="number"
                    value={prixVente}
                    onChange={(e) => setPrixVente(Number(e.target.value))}
                    min="0"
                    step="0.01"
                    className="h-9 mt-2"
                    placeholder="Entrez un montant..."
                  />
                )}
              </div>

              {/* Marge */}
              <div className="space-y-2">
                <Label htmlFor="marge" className="text-xs">
                  Taux de marge
                </Label>
                <select
                  id="marge"
                  value={margeMode}
                  onChange={(e) => handleMargeChange(e.target.value)}
                  className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                >
                  <option value="15">Industrie (15%)</option>
                  <option value="50">E-commerce (50%)</option>
                  <option value="90">Service (90%)</option>
                  <option value="custom">Personnalisé</option>
                </select>
                {margeMode === "custom" && (
                  <Input
                    type="number"
                    value={marge}
                    onChange={(e) => setMarge(Number(e.target.value))}
                    min="0"
                    max="100"
                    step="1"
                    className="h-9 mt-2"
                    placeholder="Entrez un pourcentage..."
                  />
                )}
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-4" />

        {/* Section Google Ads */}
        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="flex items-center gap-2 text-base">
            <Target className="w-4 h-4" />
            Métriques Google Ads
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-4 px-2">
              {/* Budget mensuel */}
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-xs">
                  Budget mensuel (€)
                </Label>
                <select
                  id="budget"
                  value={budgetMode}
                  onChange={(e) => handleBudgetChange(e.target.value)}
                  className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                >
                  <option value="300">300€</option>
                  <option value="500">500€</option>
                  <option value="1000">1000€</option>
                  <option value="custom">Personnalisé</option>
                </select>
                {budgetMode === "custom" && (
                  <Input
                    type="number"
                    value={budgetMensuel}
                    onChange={(e) => setBudgetMensuel(Number(e.target.value))}
                    min="0"
                    step="100"
                    className="h-9 mt-2"
                    placeholder="Entrez un budget..."
                  />
                )}
              </div>

              {/* Coût par clic */}
              <div className="space-y-2">
                <Label htmlFor="cpc" className="text-xs">
                  Coût par clic
                </Label>
                <select
                  id="cpc"
                  value={cpcMode}
                  onChange={(e) => handleCpcChange(e.target.value)}
                  className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                >
                  <option value="0.5">Faible concurrence (0,50€)</option>
                  <option value="2.5">Concurrence moyenne (2,50€)</option>
                  <option value="10">Forte concurrence (10€)</option>
                  <option value="custom">Personnalisé</option>
                </select>
                {cpcMode === "custom" && (
                  <Input
                    type="number"
                    value={cpc}
                    onChange={(e) => setCpc(Number(e.target.value))}
                    min="0.01"
                    step="0.1"
                    className="h-9 mt-2"
                    placeholder="Entrez un coût..."
                  />
                )}
              </div>

              {/* Taux de conversion */}
              <div className="space-y-2">
                <Label htmlFor="conversion" className="text-xs">
                  Taux de conversion
                </Label>
                <select
                  id="conversion"
                  value={conversionMode}
                  onChange={(e) => handleConversionChange(e.target.value)}
                  className={cn(
                    "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                    "disabled:cursor-not-allowed disabled:opacity-50"
                  )}
                >
                  <option value="9">Site moderne (9%)</option>
                  <option value="6">Site fonctionnel (6%)</option>
                  <option value="2">Site dépassé (2%)</option>
                  <option value="custom">Personnalisé</option>
                </select>
                {conversionMode === "custom" && (
                  <Input
                    type="number"
                    value={tauxConversion}
                    onChange={(e) => setTauxConversion(Number(e.target.value))}
                    min="0"
                    max="100"
                    step="0.1"
                    className="h-9 mt-2"
                    placeholder="Entrez un pourcentage..."
                  />
                )}
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Card ROI */}
      <div className="px-4 pb-4">
        <Card className={cn(
          "p-4 transition-colors",
          getRoiColor()
        )}>
          <div className="space-y-2">
            <div className={cn("flex items-center justify-between", getRoiTextColor())}>
              <span className="text-sm font-medium">ROI</span>
              <span className="text-2xl font-bold">{roi < 0 ? '-' : ''}{Math.abs(roi).toFixed(2)}</span>
            </div>
            <p className={cn("text-xs", getRoiTextColor())}>
              {getRoiMessage()}
            </p>
          </div>
        </Card>
      </div>

      <SidebarFooter className="p-4 pt-0 mt-auto">
        <Button size="sm" className="gap-2 w-full">
          <BarChart3 className="w-4 h-4" />
          Recevoir l'analyse
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
