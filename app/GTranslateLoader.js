"use client";

import { useEffect } from "react";

export default function GTranslateLoader() {
  useEffect(() => {
    // Create the inline script for gtranslateSettings
    const gtranslateSettingsScript = document.createElement("script");
    gtranslateSettingsScript.innerHTML = `
      window.gtranslateSettings = {
        default_language: "en",
        detect_browser_language: true,
        wrapper_selector: ".gtranslate_wrapper"
      };
    `;
    document.body.appendChild(gtranslateSettingsScript);

    // Load the Google Translate widget script
    const gtranslateLibraryScript = document.createElement("script");
    gtranslateLibraryScript.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    gtranslateLibraryScript.defer = true;
    document.body.appendChild(gtranslateLibraryScript);

    return () => {
      document.body.removeChild(gtranslateSettingsScript);
      document.body.removeChild(gtranslateLibraryScript);
    };
  }, []);

  return null;
}