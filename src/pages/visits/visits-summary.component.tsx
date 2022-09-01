import { Tab, Tabs } from "carbon-components-react";
import React from "react";
import ARVDispensingEncounterList from "./tabs/arv-dispensing.component";
import CervicalCancerEncounterList from "./tabs/cervical-cancer.component";
import FollowupEncounterList from "./tabs/followup.component";
import GeneralInformationEncounterList from "./tabs/general-information.component";
import HIVPreventionEncounterList from "./tabs/hiv-prevention.component";
import LabResultsEncounterList from "./tabs/lab-results.component";
import OIAndPainManagementEncounterList from "./tabs/oi-and-pain-management.component";
import PreventiveTherapiesEncounterList from "./tabs/preventive-therapies.component";
import TuberculosisEncounterList from "./tabs/tuberculosis.component";

//TODO: Create new encounter types for each new tabs/forms and insert the proper uuids
//on each tab components and json files

const VisitsSummary: React.FC<{ patientUuid: string }> = ({ patientUuid }) => {
  return (
    <div>
      <Tabs type="container">
        <Tab label="Follow-Up">
          <FollowupEncounterList patientUuid={patientUuid} />
        </Tab>
        <Tab label="General Information">
          <GeneralInformationEncounterList patientUuid={patientUuid} />
        </Tab>
        <Tab label="Tuberculosis">
          <TuberculosisEncounterList patientUuid={patientUuid} />
        </Tab>
        <Tab label="Cervical Cancer">
          <CervicalCancerEncounterList patientUuid={patientUuid} />
        </Tab>
        <Tab label="OI & Pain Management">
          <OIAndPainManagementEncounterList patientUuid={patientUuid} />
        </Tab>
        <Tab label="Lab Results">
          <LabResultsEncounterList patientUuid={patientUuid} />
        </Tab>
        <Tab label="Preventive Therapies">
          <PreventiveTherapiesEncounterList patientUuid={patientUuid} />
        </Tab>
        <Tab label="ARV Dispensing">
          <ARVDispensingEncounterList patientUuid={patientUuid} />
        </Tab>
        <Tab label="HIV Prevention">
          <HIVPreventionEncounterList patientUuid={patientUuid} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default VisitsSummary;
