
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Heart, Phone } from "lucide-react";
import { EmergencyProfile } from "../types";
import { getProfile } from "../utils/storage";

const Emergency = () => {
  const [profile, setProfile] = useState<EmergencyProfile | null>(null);
  const { profileId } = useParams();

  useEffect(() => {
    const savedProfile = getProfile();
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, [profileId]);

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-6">
        <div className="text-center">
          <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">Emergency Information</h1>
          <p className="text-gray-600">No emergency profile found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-red-50">
      <div className="bg-red-500 text-white py-4 px-6 shadow-md">
        <div className="flex items-center justify-center">
          <Heart className="h-6 w-6 mr-2" />
          <h1 className="text-xl font-bold">EMERGENCY INFORMATION</h1>
        </div>
      </div>
      
      <div className="container max-w-md mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <h2 className="text-xl font-bold mb-2">{profile.fullName}</h2>
          {profile.dateOfBirth && (
            <p className="text-gray-600 text-sm mb-2">
              Born: {new Date(profile.dateOfBirth).toLocaleDateString()}
            </p>
          )}
        </div>
        
        {(profile.medicalInfo.bloodType || 
          profile.medicalInfo.allergies || 
          profile.medicalInfo.conditions || 
          profile.medicalInfo.medications) && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="font-bold uppercase text-red-600 text-sm mb-3">Medical Information</h3>
            
            {profile.medicalInfo.bloodType && (
              <div className="mb-3">
                <p className="text-sm font-semibold">Blood Type</p>
                <p className="text-lg">{profile.medicalInfo.bloodType}</p>
              </div>
            )}
            
            {profile.medicalInfo.allergies && (
              <div className="mb-3">
                <p className="text-sm font-semibold">Allergies</p>
                <p className="bg-red-50 p-2 rounded border border-red-100">{profile.medicalInfo.allergies}</p>
              </div>
            )}
            
            {profile.medicalInfo.conditions && (
              <div className="mb-3">
                <p className="text-sm font-semibold">Medical Conditions</p>
                <p>{profile.medicalInfo.conditions}</p>
              </div>
            )}
            
            {profile.medicalInfo.medications && (
              <div>
                <p className="text-sm font-semibold">Medications</p>
                <p>{profile.medicalInfo.medications}</p>
              </div>
            )}
          </div>
        )}

        {profile.contacts.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h3 className="font-bold uppercase text-red-600 text-sm mb-3">Emergency Contacts</h3>
            
            <div className="space-y-3">
              {profile.contacts.map((contact) => (
                <div key={contact.id} className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                  <p className="font-medium">{contact.name}</p>
                  {contact.relationship && (
                    <p className="text-sm text-gray-600">{contact.relationship}</p>
                  )}
                  <Button 
                    variant="outline" 
                    className="mt-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 flex gap-2 items-center"
                    onClick={() => window.location.href = `tel:${contact.phone}`}
                  >
                    <Phone className="h-4 w-4" />
                    {contact.phone}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {profile.notes && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-bold uppercase text-red-600 text-sm mb-3">Additional Notes</h3>
            <p className="whitespace-pre-line">{profile.notes}</p>
          </div>
        )}
      </div>
      
      <div className="py-8 text-center text-xs text-gray-500">
        <p>This is emergency medical information for first responders</p>
        <p className="mt-1">Powered by ResQMe</p>
      </div>
    </div>
  );
};

export default Emergency;
