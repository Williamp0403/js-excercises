import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import { FormLabel } from "@mui/material";

export function RadioButtonsGroup({ options, select, setSelect }) {

  return (
    <FormControl>
      <FormLabel sx={{ marginBottom: '10px' }} id="demo-radio-buttons-group-label">Seleccione la respuesta correcta</FormLabel>
      <RadioGroup sx={{ gap: 3 }} aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
        {options.map((option) => (
          <div
            key={option}
            className={`flex items-center gap-2 py-3 px-4 border-2 rounded-xl cursor-pointer transition ease-in-out duration-200 hover:bg-zinc-800 ${
              select === option ? "border-sky-600" : "border-zinc-500"
            }`}
            onClick={() => setSelect(option)}
          >
            <Radio value={option} sx={{ display: "none" }} /> {/* Oculta el círculo del radio */}
            <span className="font-medium text-base md:text-lg">{option}</span> {/* Texto dentro de la caja */}
          </div>
        ))}
      </RadioGroup>
    </FormControl>
  );
}
