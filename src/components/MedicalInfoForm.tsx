
import { useState } from "react";
import { MedicalInfo } from "../types";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

interface MedicalInfoFormProps {
  initialData: MedicalInfo;
  onChange: (data: MedicalInfo) => void;
}

const MedicalInfoForm = ({ initialData, onChange }: MedicalInfoFormProps) => {
  const [data, setData] = useState<MedicalInfo>(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedData = { ...data, [name]: value };
    setData(updatedData);
    onChange(updatedData);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="bloodType">Blood Type</Label>
        <div className="mt-1">
          <select
            id="bloodType"
            name="bloodType"
            value={data.bloodType}
            onChange={handleChange}
            className="resq-input h-10 px-3"
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div>
        <Label htmlFor="allergies">
          Allergies
          <span className="text-xs text-muted-foreground ml-1">(medications, food, etc.)</span>
        </Label>
        <div className="mt-1">
          <Textarea
            id="allergies"
            name="allergies"
            placeholder="Example: Penicillin, peanuts, latex"
            value={data.allergies}
            onChange={handleChange}
            className="resq-input resize-none h-24"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="conditions">
          Medical Conditions
          <span className="text-xs text-muted-foreground ml-1">(diabetes, asthma, etc.)</span>
        </Label>
        <div className="mt-1">
          <Textarea
            id="conditions"
            name="conditions"
            placeholder="Example: Asthma, hypertension, diabetes"
            value={data.conditions}
            onChange={handleChange}
            className="resq-input resize-none h-24"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="medications">
          Current Medications
          <span className="text-xs text-muted-foreground ml-1">(include dosage if known)</span>
        </Label>
        <div className="mt-1">
          <Textarea
            id="medications"
            name="medications"
            placeholder="Example: Lisinopril 10mg daily, Albuterol inhaler as needed"
            value={data.medications}
            onChange={handleChange}
            className="resq-input resize-none h-24"
          />
        </div>
      </div>
    </div>
  );
};

export default MedicalInfoForm;
