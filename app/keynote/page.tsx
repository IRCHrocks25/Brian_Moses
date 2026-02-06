"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KeynoteHeroSection from "@/components/keynote/KeynoteHeroSection";
import KeynoteInspirationSection from "@/components/keynote/KeynoteInspirationSection";
import KeynoteTransformationSection from "@/components/keynote/KeynoteTransformationSection";
import KeynoteKeynotesWorkshopsSection from "@/components/keynote/KeynoteKeynotesWorkshopsSection";
import KeynoteEventPlannersSection from "@/components/keynote/KeynoteEventPlannersSection";
import KeynoteTrustSection from "@/components/keynote/KeynoteTrustSection";
import KeynoteWhatSetsApartSection from "@/components/keynote/KeynoteWhatSetsApartSection";
import KeynoteAudienceExperienceSection from "@/components/keynote/KeynoteAudienceExperienceSection";
import KeynoteCredentialsSection from "@/components/keynote/KeynoteCredentialsSection";
import KeynoteTestimonialsSection from "@/components/keynote/KeynoteTestimonialsSection";
import KeynoteBookSection from "@/components/keynote/KeynoteBookSection";

export default function KeynotePage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <KeynoteHeroSection />

      {/* Inspiration Section */}
      <KeynoteInspirationSection />

      {/* A Story of Radical Transformation Section */}
      <KeynoteTransformationSection />

      {/* Signature Keynotes & Workshops Section */}
      <KeynoteKeynotesWorkshopsSection />

      {/* Why Event Planners Choose Brian Moses Section */}
      <KeynoteEventPlannersSection />

      {/* Trust Section */}
      <KeynoteTrustSection />

      {/* What People Are Saying Section */}
      <KeynoteTestimonialsSection />

      {/* What Sets Brian Apart Section */}
      <KeynoteWhatSetsApartSection />

      {/* What Your Audience Will Experience Section */}
      <KeynoteAudienceExperienceSection />

      {/* Credentials & Recognition Section */}
      <KeynoteCredentialsSection />

      {/* Book Brian Moses Section */}
      <KeynoteBookSection />

      {/* Footer */}
      <Footer />
    </>
  );
}
