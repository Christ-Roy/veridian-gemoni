import * as React from "react"

// Simple toast hook compatible avec sonner
export const useToast = () => {
  const toast = React.useCallback((options: { title: string; description?: string }) => {
    // Simple console log for now
    console.log("Toast:", options);
    
    // You can integrate with sonner here if needed
    if (typeof window !== "undefined") {
      alert(`${options.title}\n${options.description || ""}`);
    }
  }, []);

  return { toast };
};
