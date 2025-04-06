
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { EmergencyContact } from "../types";
import { Trash } from "lucide-react";

interface ContactFormProps {
  contacts: EmergencyContact[];
  onChange: (contacts: EmergencyContact[]) => void;
}

const ContactForm = ({ contacts, onChange }: ContactFormProps) => {
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
    <div className="space-y-6">
      {contacts.length === 0 ? (
        <div className="text-center py-4 text-muted-foreground">
          No emergency contacts added
        </div>
      ) : (
        contacts.map(contact => (
          <div key={contact.id} className="p-4 rounded-lg border border-resq-100 bg-white">
            <div className="flex justify-between items-start">
              <h4 className="font-medium text-sm text-resq-600 mb-2">Contact Information</h4>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                onClick={() => removeContact(contact.id)}
              >
                <Trash className="h-4 w-4" />
                <span className="sr-only">Remove contact</span>
              </Button>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor={`name_${contact.id}`}>Full Name</Label>
                <Input
                  id={`name_${contact.id}`}
                  value={contact.name}
                  onChange={(e) => updateContact(contact.id, "name", e.target.value)}
                  className="resq-input mt-1"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <Label htmlFor={`relationship_${contact.id}`}>Relationship</Label>
                <Input
                  id={`relationship_${contact.id}`}
                  value={contact.relationship}
                  onChange={(e) => updateContact(contact.id, "relationship", e.target.value)}
                  className="resq-input mt-1"
                  placeholder="Spouse, Parent, Friend, etc."
                />
              </div>
              
              <div>
                <Label htmlFor={`phone_${contact.id}`}>Phone Number</Label>
                <Input
                  id={`phone_${contact.id}`}
                  value={contact.phone}
                  onChange={(e) => updateContact(contact.id, "phone", e.target.value)}
                  className="resq-input mt-1"
                  placeholder="(555) 123-4567"
                  type="tel"
                />
              </div>
            </div>
          </div>
        ))
      )}

      <Button 
        type="button" 
        variant="outline" 
        className="w-full border-dashed border-resq-200 text-resq-600 hover:text-resq-700 hover:bg-resq-50"
        onClick={addContact}
      >
        + Add Emergency Contact
      </Button>
    </div>
  );
};

export default ContactForm;
