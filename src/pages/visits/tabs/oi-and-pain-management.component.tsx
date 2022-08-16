import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { OI_AND_PAIN_MANAGEMENT_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "followUpDate",
    header: "Follow-Up Date",
    getValue: (encounter) => {
      return getData(encounter, "160753AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", true);
    },
  },
  {
    key: "artStatus",
    header: "ART Status",
    getValue: (encounter) => {
      return "---";
    },
  },
  {
    key: "artStartDate",
    header: "ART Start Date",
    getValue: (encounter) => {
      return getData(encounter, "159599AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", true);
    },
  },
  {
    key: "followupStatus",
    header: "Followup Status",
    getValue: (encounter) => {
      return "---";
    },
  },
  {
    key: "nextVisitDate",
    header: "Next visit date",
    getValue: (encounter) => {
      return getData(encounter, "5096AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", true);
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
