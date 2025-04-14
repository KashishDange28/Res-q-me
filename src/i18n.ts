import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Header
          "header.title": "ResQMe",
          "header.login": "Login",
          "header.logout": "Logout",
          "header.profile": "Profile",
          "header.language": "Language",
          
          // Common
          "common.language": "Language",
          "common.english": "English",
          "common.marathi": "Marathi",
          "common.hindi": "Hindi",
          "common.submit": "Submit",
          "common.cancel": "Cancel",
          "common.save": "Save",
          "common.edit": "Edit",
          "common.delete": "Delete",
          "common.search": "Search",
          "common.loading": "Loading...",
          
          // Medical Form
          "medical.bloodType": "Blood Type",
          "medical.selectBloodType": "Select Blood Type",
          "medical.unknown": "Unknown",
          "medical.allergies": "Allergies",
          "medical.allergiesHint": "medications, food, etc.",
          "medical.allergiesPlaceholder": "Example: Penicillin, peanuts, latex",
          "medical.conditions": "Medical Conditions",
          "medical.conditionsHint": "diabetes, asthma, etc.",
          "medical.conditionsPlaceholder": "Example: Asthma, hypertension, diabetes",
          "medical.medications": "Current Medications",
          "medical.medicationsHint": "include dosage if known",
          "medical.medicationsPlaceholder": "Example: Lisinopril 10mg daily, Albuterol inhaler as needed",
          
          // Auth
          "auth.login": "Log In",
          "auth.register": "Register",
          "auth.email": "Email",
          "auth.password": "Password",
          "auth.confirmPassword": "Confirm Password",
          "auth.forgotPassword": "Forgot Password?",
          "auth.rememberMe": "Remember Me",
          "auth.welcomeBack": "Welcome Back",
          "auth.createAccount": "Create Account",
          "auth.loginDescription": "Log in to access your emergency profile",
          "auth.registerDescription": "Register to create your emergency profile",
          "auth.fullName": "Full Name",
          "auth.fullNamePlaceholder": "Your full name",
          "auth.emailPlaceholder": "your@email.com",
          "auth.passwordPlaceholder": "••••••••",
          "auth.signUp": "Sign Up",
          "auth.noAccount": "Don't have an account?",
          "auth.haveAccount": "Already have an account?",
          "auth.loginSuccess": "Login successful!",
          "auth.registerSuccess": "Registration successful!",
          "auth.loginFailed": "Login failed",
          "auth.registerFailed": "Registration failed",
          
          // Dashboard
          "dashboard.welcome": "Welcome",
          "dashboard.overview": "Overview",
          "dashboard.recentActivity": "Recent Activity",
          "dashboard.statistics": "Statistics",
          
          // Profile
          "profile.title": "Emergency Profile",
          "profile.editProfile": "Edit",
          "profile.sections.personalInfo": "Personal Information",
          "profile.sections.medicalInfo": "Medical Information",
          "profile.sections.emergencyContacts": "Emergency Contacts",
          "profile.sections.additionalNotes": "Additional Notes",
          "profile.personal.fullName": "Full Name",
          "profile.personal.dateOfBirth": "Date of Birth",
          "profile.medical.bloodType": "Blood Type",
          "profile.medical.allergies": "Allergies",
          "profile.medical.conditions": "Medical Conditions",
          "profile.medical.medications": "Medications",
          "profile.noContacts": "No emergency contacts added",
          
          // Settings
          "settings.title": "Settings",
          "settings.notifications": "Notifications",
          "settings.privacy": "Privacy",
          "settings.security": "Security",
          "settings.theme": "Theme",
          
          // Errors
          "error.required": "This field is required",
          "error.invalidEmail": "Please enter a valid email",
          "error.passwordMismatch": "Passwords do not match",
          "error.generic": "Something went wrong. Please try again.",
          
          // QR Code
          "qrCode.scanPrompt": "Scan this QR code to access emergency information",
          "qrCode.download": "Download",
          "qrCode.share": "Share",
          "qrCode.openDirectLink": "Open Direct Link",
          "qrCode.shareTitle": "ResQMe Emergency Profile",
          "qrCode.shareText": "Scan this QR code to access my emergency information.",
          "qrCode.shareFallbackText": "Access my emergency information:",
          "qrCode.shareError": "Web Share API is not supported in your browser.",
          
          // Contact Form
          "contactForm.noContacts": "No emergency contacts added",
          "contactForm.contactInfo": "Contact Information",
          "contactForm.removeContact": "Remove contact",
          "contactForm.fullName": "Full Name",
          "contactForm.namePlaceholder": "John Doe",
          "contactForm.relationship": "Relationship",
          "contactForm.relationshipPlaceholder": "Spouse, Parent, Friend, etc.",
          "contactForm.phoneNumber": "Phone Number",
          "contactForm.phonePlaceholder": "(555) 123-4567",
          "contactForm.addContact": "+ Add Emergency Contact",
          
          // Welcome Page
          "welcome.title": "Welcome to ResQMe",
          "welcome.description": "Let's make sure someone can help you if you ever need it.",
          "welcome.greeting": "Hello, {{name}}! Ready for your emergency profile?",
          "welcome.viewProfile": "View Your Profile",
          "welcome.editProfile": "Edit Your Profile",
          "welcome.createProfile": "Create Your Emergency Profile",
          "welcome.loginRegister": "Login / Register",
          "welcome.continueWithoutAccount": "Continue Without Account",
          "welcome.features.quickAccess.title": "Quick Access",
          "welcome.features.quickAccess.description": "One tap to your critical medical info and emergency contacts",
          "welcome.features.offline.title": "Works Offline",
          "welcome.features.offline.description": "Your information is stored locally, ready when needed",
          "welcome.features.easySetup.title": "Easy Setup",
          "welcome.features.easySetup.description": "Simple forms to add your medical information and contacts",
          "welcome.features.shareable.title": "Shareable",
          "welcome.features.shareable.description": "Create a QR code to share with family or emergency responders",
          
          // Setup Page
          "setup.title": "Emergency Profile Setup",
          "setup.tabs.personal": "Personal",
          "setup.tabs.medical": "Medical",
          "setup.tabs.contacts": "Contacts",
          "setup.personal.fullName": "Full Name",
          "setup.personal.fullNamePlaceholder": "Your full name",
          "setup.personal.dateOfBirth": "Date of Birth",
          "setup.personal.notes": "Additional Notes",
          "setup.personal.notesPlaceholder": "Any additional information that might be helpful in an emergency",
          "setup.error.nameRequired": "Please enter your name before saving",
          "setup.success.saved": "Profile saved successfully!",
          "setup.saveButton": "Save Profile",
          
          // Emergency
          "emergency.title": "Emergency Information",
          "emergency.header": "EMERGENCY INFORMATION",
          "emergency.noProfile": "No emergency profile found.",
          "emergency.born": "Born",
          "emergency.medicalInfo": "Medical Information",
          "emergency.medical.bloodType": "Blood Type",
          "emergency.medical.allergies": "Allergies",
          "emergency.medical.conditions": "Medical Conditions",
          "emergency.medical.medications": "Medications",
          "emergency.contacts": "Emergency Contacts",
          "emergency.notes": "Additional Notes",
          "emergency.footer.description": "This is emergency medical information for first responders",
          "emergency.footer.poweredBy": "Powered by ResQMe",
          "notFound": {
            message: "Oops! Page not found",
            returnHome: "Return to Home"
          },
          chat: {
            placeholder: "Type your message..."
          }
        }
      },
      mr: {
        translation: {
          // Header
          "header.title": "रेस्क्यूमी",
          "header.login": "लॉगिन",
          "header.logout": "लॉगआउट",
          "header.profile": "प्रोफाइल",
          "header.language": "भाषा",
          
          // Common
          "common.language": "भाषा",
          "common.english": "इंग्रजी",
          "common.marathi": "मराठी",
          "common.hindi": "हिंदी",
          "common.submit": "सबमिट करा",
          "common.cancel": "रद्द करा",
          "common.save": "जतन करा",
          "common.edit": "सुधारा",
          "common.delete": "हटवा",
          "common.search": "शोधा",
          "common.loading": "लोड होत आहे...",
          
          // Medical Form
          "medical.bloodType": "रक्त गट",
          "medical.selectBloodType": "रक्त गट निवडा",
          "medical.unknown": "अज्ञात",
          "medical.allergies": "ऍलर्जी",
          "medical.allergiesHint": "औषधे, अन्न, इ.",
          "medical.allergiesPlaceholder": "उदाहरण: पेनिसिलिन, शेंगदाणे, लॅटेक्स",
          "medical.conditions": "वैद्यकीय स्थिती",
          "medical.conditionsHint": "मधुमेह, दमा, इ.",
          "medical.conditionsPlaceholder": "उदाहरण: दमा, उच्च रक्तदाब, मधुमेह",
          "medical.medications": "सध्याची औषधे",
          "medical.medicationsHint": "डोस माहित असल्यास समाविष्ट करा",
          "medical.medicationsPlaceholder": "उदाहरण: लिसिनोप्रिल 10mg दररोज, अल्बुटेरॉल इनहेलर आवश्यकतेनुसार",
          
          // Auth
          "auth.login": "लॉग इन करा",
          "auth.register": "नोंदणी करा",
          "auth.email": "ईमेल",
          "auth.password": "पासवर्ड",
          "auth.confirmPassword": "पासवर्ड पुष्टी करा",
          "auth.forgotPassword": "पासवर्ड विसरलात?",
          "auth.rememberMe": "मला लक्षात ठेवा",
          "auth.welcomeBack": "पुन्हा स्वागत आहे",
          "auth.createAccount": "खाते तयार करा",
          "auth.loginDescription": "आपल्या आपत्कालीन प्रोफाइलमध्ये प्रवेश करण्यासाठी लॉग इन करा",
          "auth.registerDescription": "आपले आपत्कालीन प्रोफाइल तयार करण्यासाठी नोंदणी करा",
          "auth.fullName": "पूर्ण नाव",
          "auth.fullNamePlaceholder": "आपले पूर्ण नाव",
          "auth.emailPlaceholder": "your@email.com",
          "auth.passwordPlaceholder": "••••••••",
          "auth.signUp": "साइन अप करा",
          "auth.noAccount": "खाते नाही?",
          "auth.haveAccount": "आधीपासून खाते आहे?",
          "auth.loginSuccess": "लॉगिन यशस्वी!",
          "auth.registerSuccess": "नोंदणी यशस्वी!",
          "auth.loginFailed": "लॉगिन अयशस्वी",
          "auth.registerFailed": "नोंदणी अयशस्वी",
          
          // Dashboard
          "dashboard.welcome": "स्वागत आहे",
          "dashboard.overview": "ओव्हरव्ह्यू",
          "dashboard.recentActivity": "अलीकडील क्रियाकलाप",
          "dashboard.statistics": "सांख्यिकी",
          
          // Profile
          "profile.title": "आपत्कालीन प्रोफाइल",
          "profile.editProfile": "सुधारा",
          "profile.sections.personalInfo": "वैयक्तिक माहिती",
          "profile.sections.medicalInfo": "वैद्यकीय माहिती",
          "profile.sections.emergencyContacts": "आपत्कालीन संपर्क",
          "profile.sections.additionalNotes": "अतिरिक्त नोट्स",
          "profile.personal.fullName": "पूर्ण नाव",
          "profile.personal.dateOfBirth": "जन्मतारीख",
          "profile.medical.bloodType": "रक्त गट",
          "profile.medical.allergies": "ऍलर्जी",
          "profile.medical.conditions": "वैद्यकीय स्थिती",
          "profile.medical.medications": "औषधे",
          "profile.noContacts": "कोणतेही आपत्कालीन संपर्क जोडलेले नाहीत",
          
          // Settings
          "settings.title": "सेटिंग्ज",
          "settings.notifications": "सूचना",
          "settings.privacy": "गोपनीयता",
          "settings.security": "सुरक्षा",
          "settings.theme": "थीम",
          
          // Errors
          "error.required": "हे फील्ड आवश्यक आहे",
          "error.invalidEmail": "कृपया वैध ईमेल प्रविष्ट करा",
          "error.passwordMismatch": "पासवर्ड जुळत नाहीत",
          "error.generic": "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.",
          
          // QR Code
          "qrCode.scanPrompt": "आपत्कालीन माहिती मिळविण्यासाठी हा QR कोड स्कॅन करा",
          "qrCode.download": "डाउनलोड करा",
          "qrCode.share": "शेअर करा",
          "qrCode.openDirectLink": "थेट लिंक उघडा",
          "qrCode.shareTitle": "रेस्क्यूमी आपत्कालीन प्रोफाइल",
          "qrCode.shareText": "माझी आपत्कालीन माहिती मिळविण्यासाठी हा QR कोड स्कॅन करा.",
          "qrCode.shareFallbackText": "माझी आपत्कालीन माहिती मिळवा:",
          "qrCode.shareError": "आपल्या ब्राउझरमध्ये वेब शेअर API समर्थित नाही.",
          
          // Contact Form
          "contactForm.noContacts": "कोणतेही आपत्कालीन संपर्क जोडलेले नाहीत",
          "contactForm.contactInfo": "संपर्क माहिती",
          "contactForm.removeContact": "संपर्क काढा",
          "contactForm.fullName": "पूर्ण नाव",
          "contactForm.namePlaceholder": "जॉन डो",
          "contactForm.relationship": "नाते",
          "contactForm.relationshipPlaceholder": "पती/पत्नी, पालक, मित्र, इ.",
          "contactForm.phoneNumber": "फोन नंबर",
          "contactForm.phonePlaceholder": "(५५५) १२३-४५६७",
          "contactForm.addContact": "+ आपत्कालीन संपर्क जोडा",
          
          // Welcome Page
          "welcome.title": "रेस्क्यूमीमध्ये आपले स्वागत आहे",
          "welcome.description": "आपल्याला कधीही मदतीची गरज असल्यास कोणीतरी मदत करू शकेल याची खात्री करूया.",
          "welcome.greeting": "नमस्कार, {{name}}! आपल्या आपत्कालीन प्रोफाइलसाठी तयार आहात?",
          "welcome.viewProfile": "आपला प्रोफाइल पहा",
          "welcome.editProfile": "प्रोफाइल संपादित करा",
          "welcome.createProfile": "आपले आपत्कालीन प्रोफाइल तयार करा",
          "welcome.loginRegister": "लॉगिन / नोंदणी करा",
          "welcome.continueWithoutAccount": "खात्याशिवाय पुढे जा",
          "welcome.features.quickAccess.title": "त्वरित प्रवेश",
          "welcome.features.quickAccess.description": "आपल्या महत्त्वाच्या वैद्यकीय माहिती आणि आपत्कालीन संपर्कांवर एक टॅप",
          "welcome.features.offline.title": "ऑफलाइन कार्य करते",
          "welcome.features.offline.description": "आपली माहिती स्थानिकरित्या संग्रहित केली जाते, आवश्यकतेनुसार तयार",
          "welcome.features.easySetup.title": "सोपी सेटअप",
          "welcome.features.easySetup.description": "आपली वैद्यकीय माहिती आणि संपर्क जोडण्यासाठी सोपी फॉर्म",
          "welcome.features.shareable.title": "शेअर करता येते",
          "welcome.features.shareable.description": "कुटुंब किंवा आपत्कालीन प्रतिसादकर्त्यांसह शेअर करण्यासाठी QR कोड तयार करा",
          
          // Setup Page
          "setup.title": "आपत्कालीन प्रोफाइल सेटअप",
          "setup.tabs.personal": "वैयक्तिक",
          "setup.tabs.medical": "वैद्यकीय",
          "setup.tabs.contacts": "संपर्क",
          "setup.personal.fullName": "पूर्ण नाव",
          "setup.personal.fullNamePlaceholder": "आपले पूर्ण नाव",
          "setup.personal.dateOfBirth": "जन्मतारीख",
          "setup.personal.notes": "अतिरिक्त नोट्स",
          "setup.personal.notesPlaceholder": "आपत्कालीन परिस्थितीत उपयुक्त ठरू शकणारी कोणतीही अतिरिक्त माहिती",
          "setup.error.nameRequired": "जतन करण्यापूर्वी कृपया आपले नाव प्रविष्ट करा",
          "setup.success.saved": "प्रोफाइल यशस्वीरित्या जतन केले!",
          "setup.saveButton": "प्रोफाइल जतन करा",
          
          // Emergency
          "emergency.title": "आपत्कालीन माहिती",
          "emergency.header": "आपत्कालीन माहिती",
          "emergency.noProfile": "आपत्कालीन प्रोफाइल सापडले नाही.",
          "emergency.born": "जन्म",
          "emergency.medicalInfo": "वैद्यकीय माहिती",
          "emergency.medical.bloodType": "रक्त गट",
          "emergency.medical.allergies": "ऍलर्जी",
          "emergency.medical.conditions": "वैद्यकीय स्थिती",
          "emergency.medical.medications": "औषधे",
          "emergency.contacts": "आपत्कालीन संपर्क",
          "emergency.notes": "अतिरिक्त नोट्स",
          "emergency.footer.description": "ही प्रथम प्रतिसादकर्त्यांसाठी आपत्कालीन वैद्यकीय माहिती आहे",
          "emergency.footer.poweredBy": "रेस्क्यूमीद्वारे संचालित",
          "notFound": {
            message: "अरेरे! पृष्ठ सापडले नाही",
            returnHome: "मुख्य पृष्ठावर परत जा"
          },
          chat: {
            placeholder: "तुमचा संदेश टाइप करा..."
          }
        }
      },
      hi: {
        translation: {
          // Header
          "header.title": "रेस्क्यूमी",
          "header.login": "लॉगिन",
          "header.logout": "लॉगआउट",
          "header.profile": "प्रोफ़ाइल",
          "header.language": "भाषा",
          
          // Common
          "common.language": "भाषा",
          "common.english": "अंग्रे़ी",
          "common.marathi": "मराठी",
          "common.hindi": "हिंदी",
          "common.submit": "जमा करें",
          "common.cancel": "रद्द करें",
          "common.save": "सहेजें",
          "common.edit": "संपादित करें",
          "common.delete": "हटाएं",
          "common.search": "खोजें",
          "common.loading": "लोड हो रहा है...",
          
          // Medical Form
          "medical.bloodType": "रक्त समूह",
          "medical.selectBloodType": "रक्त समूह चुनें",
          "medical.unknown": "अज्ञात",
          "medical.allergies": "एलर्जी",
          "medical.allergiesHint": "दवाएं, भोजन, आदि",
          "medical.allergiesPlaceholder": "उदाहरण: पेनिसिलिन, मूंगफली, लेटेक्स",
          "medical.conditions": "चिकित्सा स्थितियां",
          "medical.conditionsHint": "मधुमेह, अस्थमा, आदि",
          "medical.conditionsPlaceholder": "उदाहरण: अस्थमा, उच्च रक्तचाप, मधुमेह",
          "medical.medications": "वर्तमान दवाएं",
          "medical.medicationsHint": "खुराक ज्ञात हो तो शामिल करें",
          "medical.medicationsPlaceholder": "उदाहरण: लिसिनोप्रिल 10mg दैनिक, अल्बुटेरोल इनहेलर आवश्यकतानुसार",
          
          // Auth
          "auth.login": "लॉग इन करें",
          "auth.register": "पंजीकरण करें",
          "auth.email": "ईमेल",
          "auth.password": "पासवर्ड",
          "auth.confirmPassword": "पासवर्ड की पुष्टि करें",
          "auth.forgotPassword": "पासवर्ड भूल गए?",
          "auth.rememberMe": "मुझे याद रखें",
          "auth.welcomeBack": "वापस स्वागत है",
          "auth.createAccount": "खाता बनाएं",
          "auth.loginDescription": "अपने आपातकालीन प्रोफ़ाइल तक पहुंचने के लिए लॉग इन करें",
          "auth.registerDescription": "अपना आपातकालीन प्रोफ़ाइल बनाने के लिए पंजीकरण करें",
          "auth.fullName": "पूरा नाम",
          "auth.fullNamePlaceholder": "आपका पूरा नाम",
          "auth.emailPlaceholder": "your@email.com",
          "auth.passwordPlaceholder": "••••••••",
          "auth.signUp": "साइन अप करें",
          "auth.noAccount": "खाता नहीं है?",
          "auth.haveAccount": "पहले से खाता है?",
          "auth.loginSuccess": "लॉगिन सफल!",
          "auth.registerSuccess": "पंजीकरण सफल!",
          "auth.loginFailed": "लॉगिन विफल",
          "auth.registerFailed": "पंजीकरण विफल",
          
          // Dashboard
          "dashboard.welcome": "स्वागत है",
          "dashboard.overview": "अवलोकन",
          "dashboard.recentActivity": "हाल की गतिविधियाँ",
          "dashboard.statistics": "आंकड़े",
          
          // Profile
          "profile.title": "आपातकालीन प्रोफ़ाइल",
          "profile.editProfile": "संपादित करें",
          "profile.sections.personalInfo": "व्यक्तिगत जानकारी",
          "profile.sections.medicalInfo": "चिकित्सा जानकारी",
          "profile.sections.emergencyContacts": "आपातकालीन संपर्क",
          "profile.sections.additionalNotes": "अतिरिक्त नोट्स",
          "profile.personal.fullName": "पूरा नाम",
          "profile.personal.dateOfBirth": "जन्म तिथि",
          "profile.medical.bloodType": "रक्त समूह",
          "profile.medical.allergies": "एलर्जी",
          "profile.medical.conditions": "चिकित्सा स्थितियां",
          "profile.medical.medications": "दवाएं",
          "profile.noContacts": "कोई आपातकालीन संपर्क नहीं जोड़ा गया",
          
          // Settings
          "settings.title": "सेटिंग्स",
          "settings.notifications": "सूचनाएं",
          "settings.privacy": "गोपनीयता",
          "settings.security": "सुरक्षा",
          "settings.theme": "थीम",
          
          // Errors
          "error.required": "यह फ़ील्ड आवश्यक है",
          "error.invalidEmail": "कृपया एक वैध ईमेल दर्ज करें",
          "error.passwordMismatch": "पासवर्ड मेल नहीं खाते",
          "error.generic": "कुछ गलत हो गया। कृपया पुनः प्रयास करें।",
          
          // QR Code
          "qrCode.scanPrompt": "आपातकालीन जानकारी तक पहुंचने के लिए इस QR कोड को स्कैन करें",
          "qrCode.download": "डाउनलोड करें",
          "qrCode.share": "शेयर करें",
          "qrCode.openDirectLink": "सीधा लिंक खोलें",
          "qrCode.shareTitle": "रेस्क्यूमी आपातकालीन प्रोफाइल",
          "qrCode.shareText": "मेरी आपातकालीन जानकारी तक पहुंचने के लिए इस QR कोड को स्कैन करें.",
          "qrCode.shareFallbackText": "मेरी आपातकालीन जानकारी तक पहुंचें:",
          "qrCode.shareError": "आपके ब्राउज़र में वेब शेयर API समर्थित नहीं है.",
          
          // Contact Form
          "contactForm.noContacts": "कोई आपातकालीन संपर्क नहीं जोड़ा गया",
          "contactForm.contactInfo": "संपर्क जानकारी",
          "contactForm.removeContact": "संपर्क हटाएं",
          "contactForm.fullName": "पूरा नाम",
          "contactForm.namePlaceholder": "जॉन डो",
          "contactForm.relationship": "रिश्ता",
          "contactForm.relationshipPlaceholder": "पति/पत्नी, माता-पिता, मित्र, आदि",
          "contactForm.phoneNumber": "फोन नंबर",
          "contactForm.phonePlaceholder": "(५५५) १२३-४५६७",
          "contactForm.addContact": "+ आपातकालीन संपर्क जोड़ें",
          
          // Welcome Page
          "welcome.title": "रेस्क्यूमी में आपका स्वागत है",
          "welcome.description": "आइए सुनिश्चित करें कि यदि आपको कभी मदद की आवश्यकता हो तो कोई आपकी मदद कर सके।",
          "welcome.greeting": "नमस्ते, {{name}}! क्या आप अपने आपातकालीन प्रोफ़ाइल के लिए तैयार हैं?",
          "welcome.viewProfile": "अपना प्रोफ़ाइल देखें",
          "welcome.editProfile": "प्रोफ़ाइल संपादित करें",
          "welcome.createProfile": "अपना आपातकालीन प्रोफ़ाइल बनाएं",
          "welcome.loginRegister": "लॉगिन / पंजीकरण करें",
          "welcome.continueWithoutAccount": "बिना खाते के जारी रखें",
          "welcome.features.quickAccess.title": "त्वरित पहुंच",
          "welcome.features.quickAccess.description": "आपकी महत्वपूर्ण चिकित्सा जानकारी और आपातकालीन संपर्कों तक एक टैप",
          "welcome.features.offline.title": "ऑफलाइन काम करता है",
          "welcome.features.offline.description": "आपकी जानकारी स्थानीय रूप से संग्रहीत है, आवश्यकता पड़ने पर तैयार",
          "welcome.features.easySetup.title": "आसान सेटअप",
          "welcome.features.easySetup.description": "अपनी चिकित्सा जानकारी और संपर्क जोड़ने के लिए सरल फॉर्म",
          "welcome.features.shareable.title": "साझा करने योग्य",
          "welcome.features.shareable.description": "परिवार या आपातकालीन प्रतिक्रियाकर्ताओं के साथ साझा करने के लिए QR कोड बनाएं",
          
          // Setup Page
          "setup.title": "आपातकालीन प्रोफ़ाइल सेटअप",
          "setup.tabs.personal": "व्यक्तिगत",
          "setup.tabs.medical": "चिकित्सा",
          "setup.tabs.contacts": "संपर्क",
          "setup.personal.fullName": "पूरा नाम",
          "setup.personal.fullNamePlaceholder": "आपका पूरा नाम",
          "setup.personal.dateOfBirth": "जन्म तिथि",
          "setup.personal.notes": "अतिरिक्त नोट्स",
          "setup.personal.notesPlaceholder": "आपातकालीन स्थिति में मददगार हो सकने वाली कोई अतिरिक्त जानकारी",
          "setup.error.nameRequired": "सहेजने से पहले कृपया अपना नाम दर्ज करें",
          "setup.success.saved": "प्रोफ़ाइल सफलतापूर्वक सहेजा गया!",
          "setup.saveButton": "प्रोफ़ाइल सहेजें",
          
          // Emergency
          "emergency.title": "आपातकालीन जानकारी",
          "emergency.header": "आपातकालीन जानकारी",
          "emergency.noProfile": "कोई आपातकालीन प्रोफ़ाइल नहीं मिली।",
          "emergency.born": "जन्म",
          "emergency.medicalInfo": "चिकित्सा जानकारी",
          "emergency.medical.bloodType": "रक्त समूह",
          "emergency.medical.allergies": "एलर्जी",
          "emergency.medical.conditions": "चिकित्सा स्थितियां",
          "emergency.medical.medications": "दवाएं",
          "emergency.contacts": "आपातकालीन संपर्क",
          "emergency.notes": "अतिरिक्त नोट्स",
          "emergency.footer.description": "यह प्रथम प्रतिक्रियाकर्ताओं के लिए आपातकालीन चिकित्सा जानकारी है",
          "emergency.footer.poweredBy": "रेस्क्यूमी द्वारा संचालित",
          "notFound": {
            message: "ओह! पृष्ठ नहीं मिला",
            returnHome: "मुख्य पृष्ठ पर वापस जाएं"
          },
          chat: {
            placeholder: "अपना संदेश टाइप करें..."
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 