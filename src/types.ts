
export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
}

export interface MedicalInfo {
  bloodType: string;
  allergies: string;
  conditions: string;
  medications: string;
}

export interface EmergencyProfile {
  fullName: string;
  dateOfBirth: string;
  medicalInfo: MedicalInfo;
  contacts: EmergencyContact[];
  notes: string;
}
