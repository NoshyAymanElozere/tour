import { BaseInput, Label } from "../../atoms";
import { IoIosSearch } from "react-icons/io";

type BaseInputSearch_TP = {
  name: string;
  label?: string;
  placeholder?: string;
  setWord: any;
};
function BaseInputSearch({
  name,
  label,
  placeholder,
  setWord,
}: BaseInputSearch_TP) {
  return (
    <div>
      {label && (
        <Label htmlFor="" className="mb-3">
          {label}
        </Label>
      )}
      <div className="relative">
        <BaseInput
          name={name}
          className="px-10"
          onChange={(e) => setWord(e.target.value)}
          placeholder={placeholder}
        />
        <div className="absolute top-[32%] left-[10px]">
          <IoIosSearch className="text-[18px] text-[#5f616a]" />
        </div>
      </div>
    </div>
  );
}

export default BaseInputSearch;
