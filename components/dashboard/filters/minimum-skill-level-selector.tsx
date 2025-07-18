import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { COMPETENCY_LEVELS } from "@/constants/competency-level";
import { SkillLevel } from "@/types/employees";

interface MinimumSkillLevelSelectorProps {
  value: SkillLevel | null;
  onChange: (level: SkillLevel | null) => void;
}

export function MinimumSkillLevelSelector({
  value,
  onChange,
}: Readonly<MinimumSkillLevelSelectorProps>) {
  return (
    <div className="grid gap-2">
      <Label className="text-gray-700">Minimum Skill Level</Label>
      <div className="flex gap-2">
        {COMPETENCY_LEVELS.filter((item) => item.grade !== 0).map((item) => (
          <Button
            key={item.grade}
            variant="default"
            onClick={() => onChange(value === item.grade ? null : item.grade)}
            className={cn(
              "w-10 h-10 rounded-lg",
              `${item.bgColor} ${item.textColor} border-2 ${
                value === item.grade
                  ? "ring-2 ring-blue-300"
                  : "border-gray-200"
              } shadow-sm`
            )}
          >
            {item.grade}
          </Button>
        ))}
      </div>
    </div>
  );
}
