
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import QRCodeDisplay from "../components/QRCodeDisplay";
import { EmergencyProfile } from "../types";
import { getProfile } from "../utils/storage";
import { Edit3 } from "lucide-react";

const Profile = () => {
  const [profile, setProfile] = useState<EmergencyProfile | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = getProfile();
    if (savedProfile) {
      setProfile(savedProfile);
    } else {
      navigate("/setup");
    }
  }, [navigate]);

  if (!profile) {
    return <div className="resq-container">Loading profile...</div>;
  }

  // Get the base URL for QR code creation
  const baseUrl = window.location.origin;

  return (
    <>
      <Header />
      <div className="resq-container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-resq-800">Emergency Profile</h1>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/setup")}
            className="flex items-center gap-1 text-resq-600 hover:text-resq-700"
          >
            <Edit3 className="h-4 w-4" />
            Edit
          </Button>
        </div>
        
        <div className="mb-8 flex flex-col items-center">
          <QRCodeDisplay profile={profile} baseUrl={baseUrl} />
        </div>
        
        <div className="space-y-6">
          <div className="resq-card">
            <h2 className="text-lg font-semibold text-resq-700 mb-3">Personal Information</h2>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="font-medium">{profile.fullName}</p>
              </div>
              
              {profile.dateOfBirth && (
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">{new Date(profile.dateOfBirth).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="resq-card">
            <h2 className="text-lg font-semibold text-resq-700 mb-3">Medical Information</h2>
            
            {profile.medicalInfo.bloodType && (
              <div className="mb-3">
                <p className="text-sm text-muted-foreground">Blood Type</p>
                <p className="font-medium">{profile.medicalInfo.bloodType}</p>
              </div>
            )}
            
            {profile.medicalInfo.allergies && (
              <div className="mb-3">
                <p className="text-sm text-muted-foreground">Allergies</p>
                <p className="whitespace-pre-line">{profile.medicalInfo.allergies}</p>
              </div>
            )}
            
            {profile.medicalInfo.conditions && (
              <div className="mb-3">
                <p className="text-sm text-muted-foreground">Medical Conditions</p>
                <p className="whitespace-pre-line">{profile.medicalInfo.conditions}</p>
              </div>
            )}
            
            {profile.medicalInfo.medications && (
              <div>
                <p className="text-sm text-muted-foreground">Medications</p>
                <p className="whitespace-pre-line">{profile.medicalInfo.medications}</p>
              </div>
            )}
            
            {!profile.medicalInfo.bloodType && 
             !profile.medicalInfo.allergies && 
             !profile.medicalInfo.conditions && 
             !profile.medicalInfo.medications && (
              <p className="text-muted-foreground text-sm italic">No medical information added</p>
            )}
          </div>
          
          <div className="resq-card">
            <h2 className="text-lg font-semibold text-resq-700 mb-3">Emergency Contacts</h2>
            
            {profile.contacts.length > 0 ? (
              <div className="space-y-4">
                {profile.contacts.map((contact) => (
                  <div key={contact.id} className="p-3 rounded-md bg-resq-50 border border-resq-100">
                    <div className="font-medium">{contact.name}</div>
                    {contact.relationship && (
                      <div className="text-sm text-muted-foreground">{contact.relationship}</div>
                    )}
                    <a 
                      href={`tel:${contact.phone}`} 
                      className="mt-2 inline-block text-sm text-resq-600 underline"
                    >
                      {contact.phone}
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm italic">No emergency contacts added</p>
            )}
          </div>
          
          {profile.notes && (
            <div className="resq-card">
              <h2 className="text-lg font-semibold text-resq-700 mb-3">Additional Notes</h2>
              <p className="whitespace-pre-line">{profile.notes}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
