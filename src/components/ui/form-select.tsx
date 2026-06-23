"use client";

import { forwardRef, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, id, error, className, options, ...props }, ref) => {
    return (
      <div className="relative group">
        <select
          ref={ref}
          id={id}
          {...props}
          defaultValue=""
          className={cn(
            "peer w-full bg-white dark:bg-slate-900/60 border-2 border-gray-200 dark:border-slate-700",
            "rounded-xl px-4 pt-6 pb-2 h-14 text-sm font-medium text-nri-navy dark:text-white",
            "outline-none transition-all duration-300 appearance-none cursor-pointer",
            "focus:border-nri-orange dark:focus:border-nri-orange focus:ring-0",
            "hover:border-gray-300 dark:hover:border-slate-600",
            error && "border-red-400 dark:border-red-500 focus:border-red-500",
            className
          )}
        >
          <option value="" disabled className="text-gray-400">
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {/* Floating Label */}
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 pointer-events-none",
            "text-nri-orange dark:text-nri-orange"
          )}
        >
          {label}
        </label>
        
        {/* Custom Dropdown Icon */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-nri-orange transition-colors">
          <ChevronDown className="w-5 h-5" />
        </div>

        {error && (
          <p className="mt-1 text-xs text-red-500 font-medium pl-1">{error}</p>
        )}
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";
