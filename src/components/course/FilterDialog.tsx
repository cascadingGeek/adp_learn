"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export interface FilterState {
  skillLevel: string[];
  skillArea: string[];
  contentPreference: string[];
  learningStyle: string[];
  peerReview: string[];
}

interface FilterDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  trigger?: React.ReactNode;
}

const filterOptions = {
  skillLevel: ["Beginner", "Intermediate", "Advanced"],
  skillArea: [
    "Tech",
    "Design",
    "Business",
    "Languages",
    "Creative Arts",
    "Others",
  ],
  contentPreference: ["Video", "Audio", "Text-Based", "Interactive Activities"],
  learningStyle: [
    "Self-paced Modules",
    "Live Classes/Webinars",
    "Collaborative Learning",
  ],
  peerReview: ["Activate", "Deactivate", "Anonymously Activate"],
};

export default function FilterDialog({
  isOpen,
  onOpenChange,
  filters,
  onFiltersChange,
  trigger,
}: FilterDialogProps) {
  const [localFilters, setLocalFilters] = useState<FilterState>(filters);

  const handleFilterChange = (
    category: keyof FilterState,
    value: string,
    checked: boolean
  ) => {
    setLocalFilters((prev) => ({
      ...prev,
      [category]: checked
        ? [...prev[category], value]
        : prev[category].filter((item) => item !== value),
    }));
  };

  const handleReset = () => {
    const resetFilters: FilterState = {
      skillLevel: [],
      skillArea: [],
      contentPreference: [],
      learningStyle: [],
      peerReview: [],
    };
    setLocalFilters(resetFilters);
  };

  const handleApply = () => {
    onFiltersChange(localFilters);
    onOpenChange(false);
  };

  const FilterSection = ({
    title,
    category,
    options,
  }: {
    title: string;
    category: keyof FilterState;
    options: string[];
  }) => (
    <div className="space-y-3">
      <h3 className="text-sm font-light text-[#696969]">{title}</h3>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <Checkbox
              id={`${category}-${option}`}
              checked={localFilters[category].includes(option)}
              onCheckedChange={(checked) =>
                handleFilterChange(category, option, checked as boolean)
              }
              className="data-[state=checked]:bg-[#7058E8] data-[state=checked]:border-[#7058E8] rounded-full cursor-pointer p-2 data-[state=checked]:p-2 data-[state=checked]:text-white"
            />
            <label
              htmlFor={`${category}-${option}`}
              className="text-sm text-[#001928] font-light cursor-pointer"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}

      <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-y-auto p-0 bg-white">
        {/* Header */}
        <DialogHeader className="flex flex-row items-center justify-between p-6 pb-4">
          <DialogTitle className="text-base font-medium text-[#434343]">
            Filter Items
          </DialogTitle>
        </DialogHeader>

        {/* Filter Content */}
        <div className="px-6 py-4 space-y-6">
          <FilterSection
            title="Skill Level"
            category="skillLevel"
            options={filterOptions.skillLevel}
          />

          <FilterSection
            title="Skill Area"
            category="skillArea"
            options={filterOptions.skillArea}
          />

          <FilterSection
            title="Content Preference"
            category="contentPreference"
            options={filterOptions.contentPreference}
          />

          <FilterSection
            title="Learning Style"
            category="learningStyle"
            options={filterOptions.learningStyle}
          />

          <FilterSection
            title="Peer Review"
            category="peerReview"
            options={filterOptions.peerReview}
          />
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 pt-4 w-full gap-3">
          <Button
            variant="outline"
            onClick={handleReset}
            className="px-0 py-2 text-[#54656F] border-[#54656F] hover:bg-[#54656F] rounded-full w-1/2 cursor-pointer hover:text-white"
          >
            Reset
          </Button>
          <Button
            onClick={handleApply}
            className="px-0 py-2 bg-[#7058E8] hover:bg-transparent hover:border hover:border-[#7058E8] text-white hover:text-[#7058E8] rounded-full w-1/2 cursor-pointer"
          >
            Apply Filter
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
