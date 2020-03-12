import Activity from "../Components/Course/GeneralMaterials/Activity";
import Content from "../Components/Course/GeneralMaterials/Content";
import Definitions from "../Components/Course/GeneralMaterials/Definitions";
import Summary from "../Components/Course/GeneralMaterials/Summary";
import Visual from "../Components/Course/GeneralMaterials/Visual";
import Overview from "../Components/Course/GeneralMaterials/Overview";
import ActivityVisual from "../Components/Course/LSMaterials/ActivityVisual";
import AcivityVerbal from "../Components/Course/LSMaterials/AcivityVerbal";
import ContentVerbalDetailed from "../Components/Course/LSMaterials/ContentVerbalOverview";
import ContentVerbalOverview from "../Components/Course/LSMaterials/ContentVerbalDetailed";
import ContentVisualDetailed from "../Components/Course/LSMaterials/ContentVisualDetailed";
import ContentVisualOverview from "../Components/Course/LSMaterials/ContentVisualOverview";
import DefinitionVerbalDetailed from "../Components/Course/LSMaterials/DefinitionVerbalDetailed";
import DefinitionVerbalOverview from "../Components/Course/LSMaterials/DefinitionVerbalOverview";
import DefinitionVisualOverview from "../Components/Course/LSMaterials/DefinitionVisualOverview";
import DefinitionVisualDetailed from "../Components/Course/LSMaterials/DefinitionVisualDetailed";
import OverviewVerbal from "../Components/Course/LSMaterials/OverviewVerbal";
import OverviewVisual from "../Components/Course/LSMaterials/OverviewVisual";
import SummaryVerbal from "../Components/Course/LSMaterials/SummaryVerbal";
import SummaryVisual from "../Components/Course/LSMaterials/SummaryVisual";

const categories = [
  {
    name: "Activity",
    component: Activity
  },
  {
    name: "Content",
    component: Content
  },
  {
    name: "Definitons",
    component: Definitions
  },
  {
    name: "Summary",
    component: Summary
  },
  {
    name: "Visual",
    component: Visual
  },
  {
    name: "Overview",
    component: Overview
  },
  {
    name: "Overview-Verbal",
    component: OverviewVerbal
  },
  {
    name: "Overview-Visual",
    component: OverviewVisual
  },
  {
    name: "Summary-Visual",
    component: SummaryVisual
  },
  {
    name: "Summary-Verbal",
    component: SummaryVerbal
  },
  {
    name: "Activity-Verbal",
    component: AcivityVerbal
  },
  {
    name: "Activity-Visual",
    component: ActivityVisual
  },
  {
    name: "Content-Verbal-Detailed",
    component: ContentVerbalDetailed
  },
  {
    name: "Content-Verbal-Overview",
    component: ContentVerbalOverview
  },
  {
    name: "Content-Visual-Detailed",
    component: ContentVisualDetailed
  },
  {
    name: "Content-Visual-Overview",
    component: ContentVisualOverview
  },
  {
    name: "Definition-Verbal-Detailed",
    component: DefinitionVerbalDetailed
  },
  {
    name: "Definition-Verbal-Overview",
    component: DefinitionVerbalOverview
  },
  {
    name: "Definition-Visual-Detailed",
    component: DefinitionVisualDetailed
  },
  {
    name: "Definition-Visual-Overview",
    component: DefinitionVisualOverview
  },
  {
    name: "Summary-Verbal",
    component: SummaryVerbal
  },
  {
    name: "Summary-Visual",
    component: SummaryVisual
  }
];

export default categories;
