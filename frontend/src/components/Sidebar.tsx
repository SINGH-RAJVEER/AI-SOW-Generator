import React, { useState} from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface SidebarProps {
  onAddObject: (type: string, options?: any) => void;
}

const testObjects = [
  { type: "rectangle", label: "Rectangle" },
  { type: "circle", label: "Circle" },
  { type: "triangle", label: "Triangle" },
  { type: "text", label: "Text Field"}
];

const lineStyles = [
  { value: "solid", label: "Solid Line" },
  { value: "dashed", label: "Dashed Line" },
  { value: "arrow", label: "Arrow Line" },
];

const Sidebar: React.FC<SidebarProps> = ({ onAddObject }) => {
  const [selectedLine, setSelectedLine] = useState("solid");

  return (
    <aside className="h-full w-64 bg-white border-r flex flex-col gap-4 p-4" style={{ minWidth: 220 }}>
      <h2 className="text-lg font-semibold mb-2">Test Objects</h2>
      {testObjects.map((obj) => (
        <Card key={obj.type} className="mb-2 p-3 flex items-center">
          <span className="flex-1">{obj.label}</span>
          <Button variant="outline" size="sm" onClick={() => onAddObject(obj.type)}>
            Add
          </Button>
        </Card>
      ))}

      {// Line Section}
      <Card className="mb-2 p-3 flex flex-col gap-2">
        <span className="font-medium mb-1">Line</span>
        <Select value={selectedLine} onValueChange={setSelectedLine}>
          <SelectTrigger>
            <SelectValue placeholder="Select style" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {lineStyles.map((style) => (
              <SelectItem key={style.value} value={style.value}>
                {style.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={() => onAddObject("line", { style: selectedLine })}
        >
          Add Line
        </Button>
      </Card>         }
    </aside>
  );
};

export default Sidebar;