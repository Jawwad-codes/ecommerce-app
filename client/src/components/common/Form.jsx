import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Form = ({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
}) => {
  const type = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
  };

  function renderBycomponentType(getcontrol) {
    let element = null;
    const value = formData[getcontrol.name] || "";

    switch (getcontrol.componentType) {
      case type.INPUT:
        element = (
          <Input
            name={getcontrol.name}
            placeholder={getcontrol.placeholder}
            id={getcontrol.name}
            type={getcontrol.type}
            value={value}
            onChange={(e) =>
              setFormData({ ...formData, [getcontrol.name]: e.target.value })
            }
          />
        );
        break;

      case type.SELECT:
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({ ...formData, [getcontrol.name]: value })
            }
            value={value}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder={getcontrol.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {getcontrol.options && getcontrol.options.length > 0
                ? getcontrol.options.map((optionitem) => (
                    <SelectItem key={optionitem.id} value={optionitem.id}>
                      {optionitem.label} {/* Display text for options */}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case type.TEXTAREA:
        element = (
          <Textarea
            name={getcontrol.name}
            placeholder={getcontrol.placeholder}
            id={getcontrol.name}
            value={value}
            onChange={(e) =>
              setFormData({ ...formData, [getcontrol.name]: e.target.value })
            }
          />
        );
        break;

      default:
        element = (
          <Input
            name={getcontrol.name}
            placeholder={getcontrol.placeholder}
            id={getcontrol.name}
            type={getcontrol.type}
            value={value}
            onChange={(e) =>
              setFormData({ ...formData, [getcontrol.name]: e.target.value })
            }
          />
        );
        break;
    }
    return element;
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-3">
        {formControls.map((controlitem) => (
          <div className="grid w-full gap-1.5" key={controlitem.name}>
            <Label className="mb-1">{controlitem.label}</Label>
            {renderBycomponentType(controlitem)}
          </div>
        ))}
      </div>
      <Button type="submit" className="mt-2 w-full">
        {buttonText || "Submit"}
      </Button>
    </form>
  );
};

export default Form;
