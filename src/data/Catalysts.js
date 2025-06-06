const catalysts = [
  {
    id: 1,
    Image:"/products/Catalysts/(R,R)-Jacobsenssalen(Al)catalyst.png",
    product: "(R,R)-Jacobsen's salen(Al) catalyst",
    iupacName: "(1R,2R)-(-)-[1,2-Cyclohexanediamino-N,N'-bis-(3,5-di-t-butylsalicylidene)]aluminum(III) chloride",
    casNumber: "250611-13-3",
    molecularFormula: "C36H52N2O2AlCl",
    molecularWeight: 607.24,
    appearance: "Light yellow colored powder",
    purity: ">98%",
    specificRotation: "-1439",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 2,
     Image:"/products/Catalysts/(S,S)-Jacobsenssalen(Al)catalyst.png",
    product: "(S,S)-Jacobsen's salen(Al) catalyst",
    iupacName: "(1S,2S)-(+)-[1,2-Cyclohexanediamino-N,N'-bis-(3,5-di-t-butylsalicylidene)]aluminum(III) chloride",
    casNumber: "307926-51-8",
    molecularFormula: "C36H52N2O2AlCl",
    molecularWeight: 607.24,
    appearance: "Light yellow colored powder",
    purity: ">98%",
    specificRotation: "+1206",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 3,
    Image:"/products/Catalysts/(R,R)-Jacobsenssalen(Co)catalyst.png",
    product: "(R,R)-Jacobsen's salen(Co) catalyst",
    iupacName: "(1R,2R)-(-)-[1,2-Cyclohexanediamino-N,N'-bis-(3,5-di-t-butylsalicylidene)]cobalt(II)",
    casNumber: "176763-62-5",
    molecularFormula: "C36H52N2O2Co",
    molecularWeight: 603.74,
    appearance: "Light red brown colored powder",
    purity: ">98%",
    specificRotation: "-1348",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 4,
    Image:"/products/Catalysts/(S,S)-Jacobsenssalen(Co)catalyst.png",
    product: "(S,S)-Jacobsen's salen(Co) catalyst",
    iupacName: "(1S,2S)-(+)-[1,2-Cyclohexanediamino-N,N'-bis-(3,5-di-t-butylsalicylidene)]cobalt(II)",
    casNumber: "188264-84-8",
    molecularFormula: "C36H52N2O2Co",
    molecularWeight: 603.74,
    appearance: "Light red brown colored powder",
    purity: "97.76%",
    specificRotation: "+1238",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 5,
    Image:"/products/Catalysts/(R,R)-Jacobsenssalen(Mn)catalyst.png",
    product: "(R,R)-Jacobsen's salen(Mn) catalyst",
    iupacName: "(1R,2R)-(-)-[1,2-Cyclohexanediamino-N,N'-bis-(3,5-di-t-butylsalicylidene)] manganese(III)chloride",
    casNumber: "138124-32-0",
    molecularFormula: "C36H52N2O2MnCl",
    molecularWeight: 635.20,
    appearance: "Light brown colored powder",
    purity: "99.80%",
    specificRotation: "-1600",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 6,
    Image:"/products/Catalysts/(S,S)-Jacobsenssalen(Mn)catalyst.png",
    product: "(S,S)-Jacobsen's salen(Mn) catalyst",
    iupacName: "(1S,2S)-(+)-[1,2-Cyclohexanediamino-N,N'-bis-(3,5-di-t-butylsalicylidene)]manganese(III)chloride",
    casNumber: "135620-04-1",
    molecularFormula: "C36H52N2O2MnCl",
    molecularWeight: 635.20,
    appearance: "Light brown colored powder",
    purity: ">98%",
    specificRotation: "+1192",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 7,
    Image:"/products/Catalysts/[RuCl2(p-cymene)]2.png",
    product: "[RuCl2(p-cymene)]2",
    iupacName: "Dichloro(p-cymene)ruthenium(II)dimer",
    casNumber: "52462-29-0",
    molecularFormula: "C20H28Cl4Ru2",
    molecularWeight: 612.39,
    appearance: "Red color powder",
    purity: null,
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 8,
    Image:"/products/Catalysts/[RuCl2(mesitylene)]2.png",
    product: "[RuCl2(mesitylene)]2",
    iupacName: "Dichloro(mesitylene)ruthenium(II)dimer",
    casNumber: "52462-31-4",
    molecularFormula: "C18H24Cl4Ru2",
    molecularWeight: 584.34,
    appearance: "Red color powder",
    purity: null,
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 9,
    Image:"/products/Catalysts/[RuCl2(benzene)]2.png",
    product: "[RuCl2(benzene)]2",
    iupacName: "Dichloro(benzene)ruthenium(II)dimer",
    casNumber: "37366-09-9",
    molecularFormula: "C12H12Cl4Ru2",
    molecularWeight: 500.17,
    appearance: "Red brown powder",
    purity: null,
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 10,
    Image:"/products/Catalysts/[RuI2(p-cymene)]2.png",
    product: "[RuI2(p-cymene)]2",
    iupacName: "DiIodo(p-cymene)ruthenium(II)dimer",
    casNumber: "90614-07-6",
    molecularFormula: "C20H28I4Ru2",
    molecularWeight: 978.20,
    appearance: "Dark violet powder",
    purity: null,
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 11,
    Image:"/products/Catalysts/RuCl[(R,R)-TsDPEN](benzene).png",
    product: "RuCl[(R,R)-Ts DPEN](benzene)",
    iupacName: "Chloro(benzene)[(1R,2R)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: null,
    molecularFormula: "C27H27ClN2O2RuS",
    molecularWeight: 580.22,
    appearance: "Dark red color powder",
    purity: null,
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 12,
    Image:"/products/Catalysts/RuCl[(S,S)-TsDPEN](benzene).png",
    product: "RuCl[(S,S)-Ts DPEN](benzene)",
    iupacName: "Chloro(benzene)[(1S,2S)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: null,
    molecularFormula: "C31H35ClN2O2RuS",
    molecularWeight: 580.22,
    appearance: "Light red color powder",
    purity: null,
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 13,
    Image:"/products/Catalysts/RuCl[(R,R)-TsDPEN](p-cymene).png",
    product: "RuCl[(R,R)-Ts DPEN](p-cymene)",
    iupacName: "Chloro(p-cymene)[(1R,2R)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: "192139-92-7",
    molecularFormula: "C31H35ClN2O2RuS",
    molecularWeight: 636.22,
    appearance: "Orange red color powder",
    purity: ">98%",
    specificRotation: "-164.41 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 14,
    Image:"/products/Catalysts/RuCl[(S,S)-TsDPEN](p-cymene).png",
    product: "RuCl[(S,S)-Ts DPEN](p-cymene)",
    iupacName: "Chloro(p-cymene)[(1S,2S)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: "192139-90-5",
    molecularFormula: "C31H35ClN2O2RuS",
    molecularWeight: 636.22,
    appearance: "Dark orange red color powder",
    purity: ">98 %",
    specificRotation: "+179.47 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 15,
    Image:"/products/Catalysts/RuCl[(R,R)-TsDPEN](mesitylene).png",
    product: "RuCl[(R,R)-Ts DPEN](mesitylene)",
    iupacName: "Chloro(mesitylene)[(1R,2R)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: "174813-82-2",
    molecularFormula: "C30H33ClN2O2RuS",
    molecularWeight: 622.18,
    appearance: "Orange red color powder",
    purity: ">98 %",
    specificRotation: "-293.82 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 16,
    Image:"/products/Catalysts/RuCl[(S,S)-TsDPEN](mesitylene).png",
    product: "RuCl[(S,S)-Ts DPEN](mesitylene)",
    iupacName: "Chloro(mesitylene)[(1S,2S)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: "174813-81-1",
    molecularFormula: "C30H33ClN2O2RuS",
    molecularWeight: 622.18,
    appearance: "Orange red color powder",
    purity: ">98 %",
    specificRotation: "+303.47 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 17,
    Image:"/products/Catalysts/RuCl[(R,R)-MsDPEN](p-cymene).png",
    product: "RuCl[(R,R)-Ms DPEN](p-cymene)",
    iupacName: "Chloro(p-cymene)[(1R,2R)-N-(methanesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: "1097730-68-6",
    molecularFormula: "C25H31ClN2O2RuS",
    molecularWeight: 560.11,
    appearance: "Light red color powder",
    purity: ">98 %",
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 18,
    Image:"/products/Catalysts/RuCl[(S,S)-MsDPEN](p-cymene).png",
    product: "RuCl[(S,S)-Ms DPEN](p-cymene)",
    iupacName: "Chloro(p-cymene)[(1S,2S)-N-(methanesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: "329371-25-7",
    molecularFormula: "C25H31ClN2O2RuS",
    molecularWeight: 560.11,
    appearance: "Orange red color powder",
    purity: ">98 %",
    specificRotation: "+264.47 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 19,
    Image:"/products/Catalysts/RuCl[(R,R)-MsDPEN](mesitylene).png",
    product: "RuCl[(R,R)-Ms DPEN](mesitylene)",
    iupacName: "Chloro(mesitylene)[(1R,2R)-N-(methanesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: "1160707-20-9",
    molecularFormula: "C24H29ClN2O2RuS",
    molecularWeight: 546.10,
    appearance: "Orange red color powder",
    purity: "> 98 %",
    specificRotation: "-244.58 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 20,
    Image:"/products/Catalysts/RuCl[(S,S)-MsDPEN](mesitylene).png",
    product: "RuCl[(S,S)-Ms DPEN](mesitylene)",
    iupacName: "Chloro(mesitylene)[(1S,2S)-N-(methanesulfonyl)-1,2-diphenylethylenediamine]ruthenium (II)",
    casNumber: "865488-44-4",
    molecularFormula: "C24H29ClN2O2RuS",
    molecularWeight: 546.1,
    appearance: "Orange red color powder",
    purity: ">98 %",
    specificRotation: "+234.64 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 21,
    Image:"/products/Catalysts/RuCl[(R,R)-FsDPEN](p-cymene).png",
    product: "RuCl[(R,R)-Fs DPEN](p-cymene)",
    iupacName: "Chloro(p-cymene)[(1R,2R)-N-(pentafluorobenzenesulfonyl)-1,2-diphenyl ethylenediamine]ruthenium (II)",
    casNumber: "1026995-71-0",
    molecularFormula: "C30H28ClN2O2F5RuS",
    molecularWeight: 712.14,
    appearance: "Light orange red color powder",
    purity: ">98 %",
    specificRotation: "-34.60 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 22,
    Image:"/products/Catalysts/RuCl[(S,S)-FsDPEN](p-cymene).png",
    product: "RuCl[(S,S)-Fs DPEN](p-cymene)",
    iupacName: "Chloro(p-cymene)[(1S,2S)-N-(pentafluorobenzenesulfonyl)-1,2-diphenyl ethylenediamine]ruthenium (II)",
    casNumber: "1026995-72-1",
    molecularFormula: "C30H28ClN2O2F5RuS",
    molecularWeight: 712.14,
    appearance: "Light orange red color powder",
    purity: ">98 %",
    specificRotation: "+34.49 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 23,
    Image:"/products/Catalysts/RuCl[(R,R)-TsDACH](p-cymene).png",
    product: "RuCl[(R,R)-Ts DACH](p-cymene)",
    iupacName: "Chloro(p-cymene)[(1R,2R)-N-(p-toluenesulfonyl)-1,2-diaminocyclohexane]ruthenium (II)",
    casNumber: "213603-12-4",
    molecularFormula: "C23H33ClN2O2RuS",
    molecularWeight: 538.11,
    appearance: "Dark orange red color powder",
    purity: ">98 %",
    specificRotation: "-323.12 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 24,
    Image:"/products/Catalysts/RuCl[(S,S)-TsDACH](p-cymene).png",
    product: "RuCl[(S,S)-Ts DACH](p-cymene)",
    iupacName: "Chloro(p-cymene)[(1S,2S)-N-(p-toluenesulfonyl)-1,2-diaminocyclohexane]ruthenium (II)",
    casNumber: "192057-12-8",
    molecularFormula: "C23H33ClN2O2RuS",
    molecularWeight: 538.11,
    appearance: "Dark orange red color powder",
    purity: ">98 %",
    specificRotation: "+325.23 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 25,
    Image:"/products/Catalysts/RuCl[(R,R)-TsDACH](mesitylene).png",
    product: "RuCl[(R,R)-Ts DACH](mesitylene)",
    iupacName: "Chloro(mesitylene)[(1R,2R)-N-(p-toluenesulfonyl)-1,2-diaminocyclohexane]ruthenium (II)",
    casNumber: null,
    molecularFormula: "C22H31ClN2O2RuS",
    molecularWeight: 524.11,
    appearance: "Orange red color powder",
    purity: ">98 %",
    specificRotation: "-477.74 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 26,
    Image:null,
    product: "RuCl[(S,S)-Ts DACH](mesitylene)",
    iupacName: "Chloro(mesitylene)[(1S,2S)-N-(p-toluenesulfonyl)-1,2-diaminocyclohexane]ruthenium (II)",
    casNumber: null,
    molecularFormula: "C22H31ClN2O2RuS",
    molecularWeight: 524.11,
    appearance: "Orange red color powder",
    purity: ">98 %",
    specificRotation: "+460.15 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 27,
    Image:"/products/Catalysts/Ru[(R,R)-TsDPEN](p-cymene).png",
    product: "Ru [(R,R)-Ts DPEN](p-cymene)",
    iupacName: "[(1R,2R)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine](p-cymene) ruthenium (II)",
    casNumber: "1095282-32-8",
    molecularFormula: "C31H36N2O2RuS",
    molecularWeight: 600.76,
    appearance: "Dark brown color powder",
    purity: ">98 %",
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 28,
    Image:"/products/Catalysts/Ru[(S,S)-TsDPEN](p-cymene).png",
    product: "Ru [(S,S)-Ts DPEN](p-cymene)",
    iupacName: "[(1S,2S)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine](p-cymene) ruthenium (II)",
    casNumber: "192139-91-6",
    molecularFormula: "C31H36N2O2RuS",
    molecularWeight: 600.76,
    appearance: "Dark brown color powder",
    purity: ">98 %",
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 29,
    Image:"/products/Catalysts/Ru[(R,R)-MsDPEN](p-cymene).png",
    product: "Ru [(R,R)-Ms DPEN](p-cymene)",
    iupacName: "[(1R,2R)-N-(Methanesulfonyl)-1,2-diphenylethylenediamine](p-cymene) ruthenium (II)",
    casNumber: "1354725-73-7",
    molecularFormula: "C25H31N2O2RuS",
    molecularWeight: 524.65,
    appearance: "Dark brown color powder",
    purity: ">98 %",
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 30,
    Image:"/products/Catalysts/Ru[(S,S)-MsDPEN](p-cymene).png",
    product: "Ru [(S,S)-Ms DPEN](p-cymene)",
    iupacName: "[(1S,2S)-N-(Methanesulfonyl)-1,2-diphenylethylenediamine](p-cymene) ruthenium (II)",
    casNumber: "1354723-72-0",
    molecularFormula: "C25H31N2O2RuS",
    molecularWeight: 524.65,
    appearance: "Dark brown color powder",
    purity: ">98 %",
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 31,
    Image:"/products/Catalysts/Ru(OTf)[(R,R)-TsDPEN](p-cymene).png",
    product: "Ru(OTf) [(R,R)-Ts DPEN](p-cymene)",
    iupacName: "[(1R,2R)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine](p-cymene) ruthenium (II) triflate",
    casNumber: "1095282-31-7",
    molecularFormula: "C32H35F3N2O5RuS2",
    molecularWeight: 749.83,
    appearance: "Dark brown color powder",
    purity: ">98 %",
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 32,
    Image:"/products/Catalysts/Ru(OTf)-[(S,S)-TsDPEN](p-cymene).png",
    product: "Ru(OTf) [(S,S)-Ts DPEN](p-cymene)",
    iupacName: "[(1S,2S)-N-(p-toluenesulfonyl)-1,2-diphenylethylenediamine](p-cymene) ruthenium (II) triflate",
    casNumber: "905817-09-6",
    molecularFormula: "C32H35F3N2O5RuS2",
    molecularWeight: 749.83,
    appearance: "Light brown color powder",
    purity: ">98 %",
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 33,
    Image:"/products/Catalysts/Ru(OTf)[(R,R)-MsDPEN](p-cymene).png",
    product: "Ru(OTf) [(R,R)-Ms DPEN](p-cymene)",
    iupacName: "[(1R,2R)-N-(Methanesulfonyl)-1,2-diphenylethylenediamine](p-cymene) ruthenium (II) triflate",
    casNumber: null,
    molecularFormula: "C26H30N2O5F3RuS2",
    molecularWeight: 673.72,
    appearance: "Light red color powder",
    purity: ">98 %",
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 34,
    Image:"/products/Catalysts/Ru(OTf)-[(S,S)-MsDPEN](p-cymene).png",
    product: "Ru(OTf) [(S,S)-Ms DPEN](p-cymene)",
    iupacName: "[(1S,2S)-N-(Methanesulfonyl)-1,2-diphenylethylenediamine](p-cymene) ruthenium (II) triflate",
    casNumber: null,
    molecularFormula: "C26H30N2O5F3RuS2",
    molecularWeight: 673.72,
    appearance: "Light red color powder",
    purity: ">98 %",
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 35,
    Image:"/products/Catalysts/[RuCl(p-cymene)((R)-BINAP)]Cl.png",
    product: "[RuCl(p-cymene)((R)-BINAP)]Cl",
    iupacName: "Chloro[(R)-(+)-2,2'-bis(diphenylphosphino)-1,1'-binaphthyl](p-cymene)ruthenium(II)chloride",
    casNumber: "145926-28-9",
    molecularFormula: "C54H46Cl2P2Ru",
    molecularWeight: 928.87,
    appearance: "Brown color powder",
    purity: ">98 %",
    specificRotation: "+570.79 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 36,
    Image:"/products/Catalysts/[RuCl(p-cymene)((S)-BINAP)]Cl.png",
    product: "[RuCl(p-cymene)((S)-BINAP)]Cl",
    iupacName: "Chloro[(S)-(-)-2,2'-bis(diphenylphosphino)-1,1'-binaphthyl](p-cymene)ruthenium(II)chloride",
    casNumber: "130004-33-0",
    molecularFormula: "C54H46Cl2P2Ru",
    molecularWeight: 928.87,
    appearance: "Brown color powder",
    purity: ">98 %",
    specificRotation: "-600.43 o (C=0.5% in CHCl3)",
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 37,
    Image:"/products/Catalysts/[RuCl(benzene)((R)-BINAP)]Cl.png",
    product: "[RuCl(benzene)((R)-BINAP)]Cl",
    iupacName: "Chloro[(R)-(+)-2,2'-bis(diphenylphosphino)-1,1'-binaphthyl](benzene)ruthenium(II)chloride",
    casNumber: "124069-39-2",
    molecularFormula: "C50H38Cl2P2Ru",
    molecularWeight: 872.80,
    appearance: "Light green Powder",
    purity: null,
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  },
  {
    id: 38,
    Image:null,
    product: "[RuCl(benzene)((S)-BINAP)]Cl",
    iupacName: "Chloro[(S)-(-)-2,2'-bis(diphenylphosphino)-1,1'-binaphthyl](benzene)ruthenium(II)chloride",
    casNumber: "126251-92-1",
    molecularFormula: "C54H46Cl2P2Ru",
    molecularWeight: 928.87,
    appearance: "Light green Powder",
    purity: null,
    specificRotation: null,
    meltingPoint: null,
    inventoryStatus: "Available"
  }
];

export default catalysts;