import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { OI_AND_PAIN_MANAGEMENT_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "opportunisticInfectionPresent",
    header: "Opportunistic Infection Present",
    getValue: (encounter) => {
      return getData(encounter, "c52ecf45-bd6c-43ed-861b-9a2714878729", false);
    },
  },
  {
    key: "currentOpportunisticInfections",
    header: "Current Opportunistic Infections",
    getValue: (encounter) => {
      return getData(encounter, "6bdf2636-7da1-4691-afcc-5eede094138f", false);
    },
  },
  {
    key: "assessedForPain",
    header: "Assessed for pain",
    getValue: (encounter) => {
      return getData(encounter, "7c67f18a-d9ff-4e4c-8c55-35ea70b9c697", false);
    },
  },
  {
    key: "whoPainScale",
    header: "WHO pain scale",
    getValue: (encounter) => {
      return getData(encounter, "166000AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "actions",
    header: "Actions",
    getValue: (encounter) => [
      {
        form: { name: "oi_and_pain_management", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View OI & Pain Management",
        mode: "view",
      },
      {
        form: { name: "oi_and_pain_management", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit OI & Pain Management",
        mode: "edit",
      },
    ],
  },
];

const OIAndPainManagementEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={OI_AND_PAIN_MANAGEMENT_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "oi_and_pain_management" }}
      columns={columns}
      description="OI & Pain Management Encounter List"
      headerTitle="OI & Pain Management"
      dropdownText="Add"
    />
  );
};

export default OIAndPainManagementEncounterList;
