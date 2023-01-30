import { useCallback, useMemo, useState } from "react";
import { FRow } from "./FRow";

interface IDataRecord {
  label: string; // uniq
  value: number;
}

interface IAppProps {
  size?: number;
}

const generateValue = (): number => {
  return Math.round(100 + Math.random() * 900);
};

export const FApp = ({ size = 200 }: IAppProps) => {
  const [data, setData] = useState(
    Array.from({ length: size ?? 200 }, (_el: IDataRecord, index) => ({
      label: `label ${index + 1}`,
      value: generateValue(),
    }))
  );

  const rowData = useMemo(() => {
    return data;
  }, [data]);

  const handleUpdate = useCallback((index: number) => {
    setData((prev) => {
      prev[index].value = generateValue();
      return [...prev];
    });
  }, []);

  return (
    <div>
      <h1>Test app</h1>
      <h2>Functional Component</h2>
      {rowData.map((item, index) => {
        return (
          <FRow
            key={index}
            value={item.value}
            label={item.label}
            index={index}
            onUpdate={() => handleUpdate(index)}
          />
        );
      })}
    </div>
  );
};
