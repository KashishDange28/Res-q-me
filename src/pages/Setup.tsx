import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import MedicalInfoForm from "../components/MedicalInfoForm";
import ContactForm from "../components/ContactForm";
import { EmergencyProfile } from "../types";
import { saveProfile, getProfile, createEmptyProfile } from "../utils/storage";
import { toast } from "sonner";
import { useTranslation } from 'react-i18next';

const Setup = () => {
  const { t } = useTranslation();
  const [profile, setProfile] = useState<EmergencyProfile>(createEmptyProfile());
  const [activeTab, setActiveTab] = useState<'personal' | 'medical' | 'contacts'>('personal');
  const navigate = useNavigate();

  useEffect(() => {
    const savedProfile = getProfile();
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const updateProfile = (field: keyof EmergencyProfile, value: any) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (!profile.fullName.trim()) {
      toast.error(t('setup.error.nameRequired'));
      return;
    }
    
    saveProfile(profile);
    toast.success(t('setup.success.saved'));
    navigate("/profile");
  };

  return (
    <div className="resq-container pb-20">
      <h1 className="text-2xl font-bold mb-6 text-resq-800">{t('setup.title')}</h1>
      
      <div className="flex border-b border-resq-100 mb-6">
        <button
          onClick={() => setActiveTab('personal')}
          className={`py-2 px-4 -mb-px text-sm font-medium ${
            activeTab === 'personal'
              ? 'border-b-2 border-resq-500 text-resq-700'
              : 'text-muted-foreground'
          }`}
        >
          {t('setup.tabs.personal')}
        </button>
        
        <button
          onClick={() => setActiveTab('medical')}
          className={`py-2 px-4 -mb-px text-sm font-medium ${
            activeTab === 'medical'
              ? 'border-b-2 border-resq-500 text-resq-700'
              : 'text-muted-foreground'
          }`}
        >
          {t('setup.tabs.medical')}
        </button>
        
        <button
          onClick={() => setActiveTab('contacts')}
          className={`py-2 px-4 -mb-px text-sm font-medium ${
            activeTab === 'contacts'
              ? 'border-b-2 border-resq-500 text-resq-700'
              : 'text-muted-foreground'
          }`}
        >
          {t('setup.tabs.contacts')}
        </button>
      </div>

      {activeTab === 'personal' && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="fullName">{t('setup.personal.fullName')}</Label>
            <Input
              id="fullName"
              value={profile.fullName}
              onChange={(e) => updateProfile('fullName', e.target.value)}
              className="resq-input mt-1"
              placeholder={t('setup.personal.fullNamePlaceholder')}
            />
          </div>
          
          <div>
            <Label htmlFor="dateOfBirth">{t('setup.personal.dateOfBirth')}</Label>
            <Input
              id="dateOfBirth"
              type="date"
              value={profile.dateOfBirth}
              onChange={(e) => updateProfile('dateOfBirth', e.target.value)}
              className="resq-input mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="notes">{t('setup.personal.notes')}</Label>
            <Textarea
              id="notes"
              value={profile.notes}
              onChange={(e) => updateProfile('notes', e.target.value)}
              className="resq-input mt-1 resize-none h-32"
              placeholder={t('setup.personal.notesPlaceholder')}
            />
          </div>
        </div>
      )}

      {activeTab === 'medical' && (
        <MedicalInfoForm
          initialData={profile.medicalInfo}
          onChange={(data) => updateProfile('medicalInfo', data)}
        />
      )}

      {activeTab === 'contacts' && (
        <ContactForm
          contacts={profile.contacts}
          onChange={(contacts) => updateProfile('contacts', contacts)}
        />
      )}

      <div className="mt-8">
        <Button 
          onClick={handleSave}
          className="w-full bg-resq-500 hover:bg-resq-600"
        >
          {t('setup.saveButton')}
        </Button>
      </div>
    </div>
  );
};

export default Setup;
