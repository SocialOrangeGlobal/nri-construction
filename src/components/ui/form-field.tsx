"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, id, error, className, ...props }, ref) => {
    return (
      <div className="relative group">
        <input
          ref={ref}
          id={id}
          {...props}
          placeholder={label}
          className={cn(
            "peer w-full bg-white dark:bg-slate-900/60 border-2 border-gray-200 dark:border-slate-700",
            "rounded-xl px-4 pt-6 pb-2 h-14 text-sm font-medium text-nri-navy dark:text-white",
            "placeholder-transparent outline-none transition-all duration-300",
            "focus:border-nri-orange dark:focus:border-nri-orange focus:ring-0",
            "hover:border-gray-300 dark:hover:border-slate-600",
            error && "border-red-400 dark:border-red-500 focus:border-red-500",
            className
          )}
        />
        <label
          htmlFor={id}
          className={cn(
            "absolute left-4 top-2 text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300",
            "text-nri-orange dark:text-nri-orange",
            "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2",
            "peer-placeholder-shown:text-xs peer-placeholder-shown:font-semibold",
            "peer-placeholder-shown:text-gray-400 dark:peer-placeholder-shown:text-gray-500",
            "peer-placeholder-shown:tracking-normal",
            "peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[10px]",
            "peer-focus:font-bold peer-focus:tracking-[0.15em]",
            "peer-focus:text-nri-orange dark:peer-focus:text-nri-orange"
          )}
        >
          {label}
        </label>
        {error && (
          <p className="mt-1 text-xs text-red-500 font-medium pl-1">{error}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";
