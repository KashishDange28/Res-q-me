
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import MedicalInfoForm from "../components/MedicalInfoForm";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import { EmergencyProfile } from "../types";
import { saveProfile, getProfile, createEmptyProfile } from "../utils/storage";
import { toast } from "../components/ui/sonner";

const Setup = () => {
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
      toast.error("Please enter your name before saving");
      return;
    }
    
    saveProfile(profile);
    toast.success("Profile saved successfully!");
    navigate("/profile");
  };

  return (
    <>
      <Header />
      <div className="resq-container pb-20">
        <h1 className="text-2xl font-bold mb-6 text-resq-800">Emergency Profile Setup</h1>
        
        <div className="flex border-b border-resq-100 mb-6">
          <button
            onClick={() => setActiveTab('personal')}
            className={`py-2 px-4 -mb-px text-sm font-medium ${
              activeTab === 'personal'
                ? 'border-b-2 border-resq-500 text-resq-700'
                : 'text-muted-foreground'
            }`}
          >
            Personal
          </button>
          
          <button
            onClick={() => setActiveTab('medical')}
            className={`py-2 px-4 -mb-px text-sm font-medium ${
              activeTab === 'medical'
                ? 'border-b-2 border-resq-500 text-resq-700'
                : 'text-muted-foreground'
            }`}
          >
            Medical
          </button>
          
          <button
            onClick={() => setActiveTab('contacts')}
            className={`py-2 px-4 -mb-px text-sm font-medium ${
              activeTab === 'contacts'
                ? 'border-b-2 border-resq-500 text-resq-700'
                : 'text-muted-foreground'
            }`}
          >
            Contacts
          </button>
        </div>

        {activeTab === 'personal' && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={profile.fullName}
                onChange={(e) => updateProfile('fullName', e.target.value)}
                className="resq-input mt-1"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <Label htmlFor="dateOfBirth">Date of Birth</Label>
              <Input
                id="dateOfBirth"
                type="date"
                value={profile.dateOfBirth}
                onChange={(e) => updateProfile('dateOfBirth', e.target.value)}
                className="resq-input mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea
                id="notes"
                value={profile.notes}
                onChange={(e) => updateProfile('notes', e.target.value)}
                className="resq-input mt-1 resize-none h-32"
                placeholder="Any additional information that might be helpful in an emergency"
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

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-resq-100 p-4">
          <div className="container max-w-md mx-auto flex gap-3">
            {activeTab === 'personal' ? (
              <Button variant="outline" className="w-1/2" onClick={() => navigate('/')}>
                Cancel
              </Button>
            ) : (
              <Button 
                variant="outline" 
                className="w-1/2" 
                onClick={() => {
                  setActiveTab(activeTab === 'medical' ? 'personal' : 'medical');
                }}
              >
                Back
              </Button>
            )}
            
            {activeTab === 'contacts' ? (
              <Button 
                className="w-1/2 bg-resq-500 hover:bg-resq-600" 
                onClick={handleSave}
              >
                Save Profile
              </Button>
            ) : (
              <Button 
                className="w-1/2 bg-resq-500 hover:bg-resq-600" 
                onClick={() => {
                  setActiveTab(activeTab === 'personal' ? 'medical' : 'contacts');
                }}
              >
                Continue
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Setup;
