import React from "react";
import { EncounterList } from "@ohri/openmrs-esm-ohri-commons-lib/src/index";
import { PREVENTIVE_THERAPIES_ENCOUNTER_TYPE } from "../../../constants";
import { getData } from "../../encounterUtils";

const columns = [
  {
    key: "cotrimoxazolePreventiveTherapyPlan",
    header: "Cotrimoxazole Preventive Therapy plan",
    getValue: (encounter) => {
      return getData(encounter, "1261AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "cotriStartDate",
    header: "Cotrimoxazole Start Date",
    getValue: (encounter) => {
      return getData(encounter, "164361AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", true);
    },
  },
  {
    key: "cotriAdherenceLevel",
    header: "Adherence Level",
    getValue: (encounter) => {
      return getData(encounter, "161652AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "cotrimoxazoleDispensedInDays",
    header: "Cotrimoxazole Dispensed in days",
    getValue: (encounter) => {
      return getData(encounter, "1f69ba7c-9cb3-4238-beec-d12affda2142", false);
    },
  },
  {
    key: "fluconazolePreventiveTherapyPlan",
    header: "Fluconazole Preventive Therapy plan",
    getValue: (encounter) => {
      return getData(encounter, "1277AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", false);
    },
  },
  {
    key: "fluconazoleStartDate",
    header: "Fluconazole Start Date",
    getValue: (encounter) => {
      return getData(encounter, "5ac4300a-5e19-45c8-8692-31a57d6d5b8c", true);
    },
  },
  {
    key: "fluconazoleDispensedInDays",
    header: "Fluconazole Dispensed in days",
    getValue: (encounter) => {
      return getData(encounter, "03dc76ef-75ab-4cdd-b24b-761c4fa3c92f", false);
    },
  },
  {
    key: "actions",
    header: "Actions",
    getValue: (encounter) => [
      {
        form: { name: "preventive_therapies", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "View Preventive Therapies",
        mode: "view",
      },
      {
        form: { name: "preventive_therapies", package: "eth-hiv" },
        encounterUuid: encounter.uuid,
        intent: "*",
        label: "Edit Preventive Therapies",
        mode: "edit",
      },
    ],
  },
];

const PreventiveTherapiesEncounterList: React.FC<{ patientUuid: string }> = ({
  patientUuid,
}) => {
  return (
    <EncounterList
      patientUuid={patientUuid}
      encounterUuid={PREVENTIVE_THERAPIES_ENCOUNTER_TYPE}
      form={{ package: "eth-hiv", name: "preventive_therapies" }}
      columns={columns}
      description="Preventive Therapies Encounter List"
      headerTitle="Preventive Therapies"
      dropdownText="Add"
    />
  );
};

export default PreventiveTherapiesEncounterList;
