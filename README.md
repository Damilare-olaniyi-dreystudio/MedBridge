# MedBridge 🇳🇬

**Describe how you feel. Get clarity instantly.**

MedBridge is an award-winning AI health triage assistant designed specifically for Nigerians. Built with modern African warmth and clinical trust.

---

## 🌍 The Problem It Solves

When people feel sick in Nigeria and across Africa, they often face a dilemma: seeing a doctor immediately can be expensive, time-consuming, or logistically difficult, leading many to panic after searching symptoms online or resorting to dangerous self-medication. MedBridge solves this by acting as a calm, accessible first point of contact. By allowing users to describe their symptoms naturally (in English, Pidgin, or Yoruba), it provides instant, understandable triage advice—bridging the gap between uncertainty and professional medical care.

## ✨ Features

- **Voice Input Triage**: Uses the Web Speech API so users can simply speak their symptoms.
- **Multilingual Understanding**: Powered by Google Gemini to understand Nigerian Pidgin and Yoruba fluently.
- **Structured Assessment**: Provides a clear Urgency Level, condition explanation, and home care checklist.
- **Hospital Finder**: Uses Geolocation to instantly find the nearest hospitals on Google Maps during emergencies.
- **Follow-Up Chat**: Allows users to ask up to 3 contextual follow-up questions, like texting a real doctor.
- **WhatsApp Integration**: Instantly format and share the medical report to family or doctors via WhatsApp.
- **Symptom History**: Automatically saves your last 3 symptom checks locally on your device for privacy.
- **Responsive & Accessible**: Mobile-first design that looks pristine across all devices.

## 🚀 Tech Stack

- **Frontend**: React.js (Vite), JavaScript
- **Styling**: Tailwind CSS v4
- **AI/LLM**: Google Gemini API (`gemini-1.5-flash`) via direct REST fetch.
- **Browser APIs**: Web Speech API (Voice), Geolocation API (Hospital mapping), LocalStorage (History)
- **Icons**: Lucide React

## 🔑 Free API Setup Instructions

To run this project, you need a free Gemini API key:

1. Go to [Google AI Studio](https://aistudio.google.com/).
2. Sign in with your Google account.
3. Click on **"Get API key"** in the sidebar.
4. Click **"Create API key in new project"** and copy the generated key.
5. In the root of this project, create a file named `.env`.
6. Add your key to the file like this:
   ```env
   VITE_GEMINI_API_KEY=your_copied_api_key_here
   ```

## 💻 How to Run Locally

1. Clone this repository.
2. Ensure you have Node.js installed.
3. Open a terminal in the project folder and run:
   ```bash
   npm install
   ```
4. Add your `.env` file as described in the API setup above.
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser to `http://localhost:5173`.

## 📸 Screenshots
*(Placeholder: Add your stunning UI screenshots here before submission)*
