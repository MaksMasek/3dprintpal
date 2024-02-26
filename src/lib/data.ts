import React from "react";

import { PiComputerTowerLight } from "react-icons/pi";
import { BsSend } from "react-icons/bs";
import { VscGitPullRequestCreate } from "react-icons/vsc";
import { SiBlueprint } from "react-icons/si";
import { PiTestTube } from "react-icons/pi";
import { GrDeliver } from "react-icons/gr";

export const experiencesData = [
  {
    title: "Send Project / model",
    description:
      "First you send me a 3d model prefferably in .obj or .stl format, or just a project of what you want to print with maximal size of 20x20cm",
    icon: React.createElement(BsSend),
    date: "Step 1",
  },



  {
    title: "I create a model",
    description:
      "If the model isn't a ready-to-print i develop it for you in a 3d modelling software",
    icon: React.createElement(VscGitPullRequestCreate),
    date: "Step 2",
  },



  {
    title: "I use a 3D slicing program",
    description:
      "I use a 3d slicing software to convert the model into instructions for my 3d printer",
    icon: React.createElement(PiComputerTowerLight),
    date: "Step 3",
  },



  {
    title: "I print",
    description:
      "I set up the printer with plastic in a colour of your choice (basic is white) and oversee the printing process",
    icon: React.createElement(SiBlueprint),
    date: "Step 4",
  },


  {
    title: "I clean/glue the parts",
    description:
      "I remove the supports from the printed part. If needed I can glue the parts together with CA glue and/or add a clean and elegant base.",
    icon: React.createElement(PiTestTube),
    date: "Step 5",
  },



  {
    title: "Deliver",
    description:
      "I deliver your printed parts to an agreed location",
    icon: React.createElement(GrDeliver),
    date: "Final step",
  },

] as const;

export const skillsData = [
  "Rhinocreos",
  "AUTOCAD",
  "AUTODESK REVIT",
  "SketchUp",
  "AUTODESK MAYA",
  "AUTODESK 3DS MAX",
  "Blender",
  "CINEMA 4D",
] as const;

