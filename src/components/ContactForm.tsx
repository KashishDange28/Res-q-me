import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { EmergencyContact } from "../types";
import { Trash } from "lucide-react";
import { useTranslation } from 'react-i18next';

interface ContactFormProps {
  contacts: EmergencyContact[];
  onChange: (contacts: EmergencyContact[]) => void;
}

const ContactForm = ({ contacts, onChange }: ContactFormProps) => {
  const { t } = useTranslation();

  const addContact = () => {
    const newContact: EmergencyContact = {
      id: `contact_${Date.now()}`,
      name: "",
      relationship: "",
      phone: ""
    };
    onChange([...contacts, newContact]);
  };

  const updateContact = (id: string, field: keyof EmergencyContact, value: string) => {
    const updatedContacts = contacts.map(contact => 
      contact.id === id ? { ...contact, [field]: value } : contact
    );
    onChange(updatedContacts);
  };

  const removeContact = (id: string) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    onChange(updatedContacts);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{t('contactForm.contactInfo')}</h3>
      {contacts.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t('contactForm.noContacts')}</p>
      ) : (
        contacts.map((contact, index) => (
          <div key={index} className="space-y-4 p-4 border rounded-lg">
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{contact.name}</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeContact(contact.id)}
              >
                {t('contactForm.removeContact')}
              </Button>
            </div>
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor={`name-${index}`}>{t('contactForm.fullName')}</Label>
                <Input
                  id={`name-${index}`}
                  value={contact.name}
                  onChange={(e) => updateContact(contact.id, "name", e.target.value)}
                  placeholder={t('contactForm.namePlaceholder')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`relationship-${index}`}>{t('contactForm.relationship')}</Label>
                <Input
                  id={`relationship-${index}`}
                  value={contact.relationship}
                  onChange={(e) => updateContact(contact.id, "relationship", e.target.value)}
                  placeholder={t('contactForm.relationshipPlaceholder')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`phone-${index}`}>{t('contactForm.phoneNumber')}</Label>
                <Input
                  id={`phone-${index}`}
                  type="tel"
                  value={contact.phone}
                  onChange={(e) => updateContact(contact.id, "phone", e.target.value)}
                  placeholder={t('contactForm.phonePlaceholder')}
                />
              </div>
            </div>
          </div>
        ))
      )}
      <Button onClick={addContact} className="w-full">
        {t('contactForm.addContact')}
      </Button>
    </div>
  );
};

export default ContactForm;
