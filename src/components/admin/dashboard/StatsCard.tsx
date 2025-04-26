
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/components/ThemeProvider";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  icon?: ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatsCard = ({
  title,
  value,
  icon,
  trend,
  className
}: StatsCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            
            {trend && (
              <div className="flex items-center mt-2">
                <span
                  className={cn(
                    "text-xs font-medium flex items-center",
                    trend.isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"
                  )}
                >
                  {trend.isPositive ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  {trend.value}%
                </span>
                <span className="text-xs text-muted-foreground ml-1.5">vs. last month</span>
              </div>
            )}
          </div>
          
          {icon && (
            <div className={cn(
              "p-2 rounded-lg",
              isDark ? "bg-gray-800" : "bg-gray-100"
            )}>
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
