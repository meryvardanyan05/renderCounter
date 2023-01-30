import { memo, useCallback, useMemo, useRef } from "react";

interface IRowProps {
  // TODO
  label: string;
  value: number;
  index: number;
  onUpdate: (index: number) => void;
}

export const FRow = memo(
  ({ label, value, index, onUpdate }: IRowProps) => {
    const renderRef = useRef<number>(1);

    const idx = useMemo(() => {
      return index;
    }, [index]);

    const update = useCallback(() => {
      renderRef.current++;
      onUpdate(idx);
    }, [idx, onUpdate]);

    return (
      <div>
        <span className="label">{label}:</span>
        <span>{value}</span> <span>({renderRef.current})</span>{" "}
        <button className="button" onClick={update}>
          Update
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.value !== nextProps.value) return false;

    return true;
  }
);
