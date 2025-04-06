
import { EmergencyProfile } from "../types";

const STORAGE_KEY = "resqme_profile";

export const saveProfile = (profile: EmergencyProfile): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
};

export const getProfile = (): EmergencyProfile | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;
  
  try {
    return JSON.parse(data) as EmergencyProfile;
  } catch (error) {
    console.error("Failed to parse profile data:", error);
    return null;
  }
};

export const clearProfile = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const createEmptyProfile = (): EmergencyProfile => {
  return {
    fullName: "",
    dateOfBirth: "",
    medicalInfo: {
      bloodType: "",
      allergies: "",
      conditions: "",
      medications: ""
    },
    contacts: [],
    notes: ""
  };
};
