import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import QRCodeDisplay from "../components/QRCodeDisplay";
import { EmergencyProfile } from "../types";
import { getProfile } from "../utils/storage";
import { Edit3 } from "lucide-react";
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();
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
    return <div className="resq-container">{t('common.loading')}</div>;
  }

  // Get the base URL for QR code creation
  const baseUrl = window.location.origin;

  return (
    <>
      <Header />
      <div className="resq-container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-resq-800">{t('profile.title')}</h1>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate("/setup")}
            className="flex items-center gap-1 text-resq-600 hover:text-resq-700"
          >
            <Edit3 className="h-4 w-4" />
            {t('profile.editProfile')}
          </Button>
        </div>
        
        <div className="mb-8 flex flex-col items-center">
          <QRCodeDisplay profile={profile} baseUrl={baseUrl} />
        </div>
        
        <div className="space-y-6">
          <div className="resq-card">
            <h2 className="text-lg font-semibold text-resq-700 mb-3">{t('profile.sections.personalInfo')}</h2>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-muted-foreground">{t('profile.personal.fullName')}</p>
                <p className="font-medium">{profile.fullName}</p>
              </div>
              
              {profile.dateOfBirth && (
                <div>
                  <p className="text-sm text-muted-foreground">{t('profile.personal.dateOfBirth')}</p>
                  <p className="font-medium">{new Date(profile.dateOfBirth).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </div>
          
          {profile.medicalInfo.bloodType && (
            <div className="resq-card">
              <h2 className="text-lg font-semibold text-resq-700 mb-3">{t('profile.sections.medicalInfo')}</h2>
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-muted-foreground">{t('profile.medical.bloodType')}</p>
                  <p className="font-medium">{profile.medicalInfo.bloodType}</p>
                </div>
                
                {profile.medicalInfo.allergies && (
                  <div>
                    <p className="text-sm text-muted-foreground">{t('profile.medical.allergies')}</p>
                    <p className="font-medium">{profile.medicalInfo.allergies}</p>
                  </div>
                )}
                
                {profile.medicalInfo.conditions && (
                  <div>
                    <p className="text-sm text-muted-foreground">{t('profile.medical.conditions')}</p>
                    <p className="font-medium">{profile.medicalInfo.conditions}</p>
                  </div>
                )}
                
                {profile.medicalInfo.medications && (
                  <div>
                    <p className="text-sm text-muted-foreground">{t('profile.medical.medications')}</p>
                    <p className="font-medium">{profile.medicalInfo.medications}</p>
                  </div>
                )}
              </div>
            </div>
          )}
          
          <div className="resq-card">
            <h2 className="text-lg font-semibold text-resq-700 mb-3">{t('profile.sections.emergencyContacts')}</h2>
            
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
              <p className="text-muted-foreground text-sm italic">{t('profile.noContacts')}</p>
            )}
          </div>
          
          {profile.notes && (
            <div className="resq-card">
              <h2 className="text-lg font-semibold text-resq-700 mb-3">{t('profile.sections.additionalNotes')}</h2>
              <p className="whitespace-pre-line">{profile.notes}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
