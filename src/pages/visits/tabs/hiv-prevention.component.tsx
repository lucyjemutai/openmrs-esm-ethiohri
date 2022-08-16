import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { HIV_PREVENTION_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "clientSetsHIVPreventionPlan",
    header: "HIV prevention plan",
    getValue: (encounter) => {
      return getData(encounter, "a3758771-f534-495e-9a3c-290acc79dda0", false);
    },
  },
  {
    key: "disclosureForChildren",
    header: "Disclosure for Children",
    getValue: (encounter) => {
      return getData(encounter, "573f93e2-12f6-483e-aa6e-14e9b76b311a", false);
    },
  },
  {
    key: "enrolledToOTZ",
    header: "Enrolled to OTZ",
    getValue: (encounter) => {
      return getData(encounter, "bb251925-c706-420a-a1d1-58fa2b0e0a7e", false);
    },
  },
  {
    key: "enrollmentDate",
    header: "OTZ Enrollment Date",
    getValue: (encounter) => {
      return getData(encounter, "160555AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", true);
    },
  },
  {
    key: "actions",
    header: "Actions",
    getValue: (encounter) => [
      {
        form: { name: "hiv_prevention", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View HIV Prevention",
        mode: "view",
      },
      {
        form: { name: "hiv_prevention", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit HIV Prevention",
        mode: "edit",
      },
    ],
  },
];

const HIVPreventionEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={HIV_PREVENTION_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "hiv_prevention" }}
      columns={columns}
      description="HIV Prevention Encounter List"
      headerTitle="HIV Prevention"
      dropdownText="Add"
    />
  );
};

export default HIVPreventionEncounterList;
