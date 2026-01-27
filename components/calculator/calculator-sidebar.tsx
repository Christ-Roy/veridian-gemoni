"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Target, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarFooter,
} from "@/components/ui/sidebar";

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
              <div className="space-y-2">
                <Label htmlFor="prix" className="text-xs">
                  Prix de vente unitaire (€)
                </Label>
                <Input
                  id="prix"
                  type="number"
                  value={prixVente}
                  onChange={(e) => setPrixVente(Number(e.target.value))}
                  min="0"
                  step="0.01"
                  className="h-9"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marge" className="text-xs">
                  Taux de marge (%)
                </Label>
                <Input
                  id="marge"
                  type="number"
                  value={marge}
                  onChange={(e) => setMarge(Number(e.target.value))}
                  min="0"
                  max="100"
                  className="h-9"
                />
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
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-xs">
                  Budget mensuel (€)
                </Label>
                <Input
                  id="budget"
                  type="number"
                  value={budgetMensuel}
                  onChange={(e) => setBudgetMensuel(Number(e.target.value))}
                  min="0"
                  step="100"
                  className="h-9"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cpc" className="text-xs">
                  Coût par clic (€)
                </Label>
                <Input
                  id="cpc"
                  type="number"
                  value={cpc}
                  onChange={(e) => setCpc(Number(e.target.value))}
                  min="0.01"
                  step="0.1"
                  className="h-9"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conversion" className="text-xs">
                  Taux de conversion (%)
                </Label>
                <Input
                  id="conversion"
                  type="number"
                  value={tauxConversion}
                  onChange={(e) => setTauxConversion(Number(e.target.value))}
                  min="0"
                  max="100"
                  step="0.1"
                  className="h-9"
                />
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 mt-auto">
        <Button size="sm" className="gap-2 w-full">
          <BarChart3 className="w-4 h-4" />
          Recevoir l'analyse
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
