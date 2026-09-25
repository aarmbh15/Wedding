import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const allImages = import.meta.glob(
  "../assets/**/*.{webp,WEBP,jpg,JPG,jpeg,JPEG,png,PNG}",
  {
    eager: true,
    import: "default",
  }
);

const img = (path) => {
  const imagePath = `../assets/${path}`;
  const image = allImages[imagePath];

  if (!image) {
    console.warn(`Image not found: ${imagePath}`);
    return null;
  }

  return image;
};

// weddingData... (kept same as your provided code)
const weddingData = {
  "amruta-amey": {
    couple: "Amruta & Amey",
    location: "Marigold Banquets 'N' Conventions, Pune",
    caption: [
      "Amruta & Amey’s wedding was a heartfelt Maharashtrian celebration, rooted in tradition and quiet elegance. The day unfolded with a gentle rhythm where every ritual felt meaningful, unhurried and deeply personal.",
"From soft, intimate moments to bursts of laughter shared with loved ones, their wedding carried a warmth that stayed constant throughout. Nothing felt rushed, nothing felt staged, just real emotions, honest connections and a love that spoke for itself."
    ],
  images: [
  img("portfolio/Amruta_Amey.webp"),
  img("Amruta_Amey/ADM04940.webp"),
img("Amruta_Amey/ADM04945.webp"),
img("Amruta_Amey/ADM04954.webp"),
img("Amruta_Amey/ADM04965.webp"),
img("Amruta_Amey/ADM04969.webp"),
img("Amruta_Amey/ADM04984.webp"),
img("Amruta_Amey/ADM04995.webp"),
img("Amruta_Amey/ADM05012.webp"),
img("Amruta_Amey/ADM05023.webp"),
img("Amruta_Amey/ADM05283.webp"),
img("Amruta_Amey/ADM05337.webp"),
img("Amruta_Amey/ADM05375.webp"),
img("Amruta_Amey/ADM05390.webp"),
img("Amruta_Amey/ADM05511.webp"),
img("Amruta_Amey/ADM05523.webp"),
img("Amruta_Amey/ADM05535.webp"),
img("Amruta_Amey/ADM05549.webp"),
img("Amruta_Amey/ADM05551.webp"),
img("Amruta_Amey/ADM05559.webp"),
img("Amruta_Amey/ADM05600.webp"),
img("Amruta_Amey/ADM05604.webp"),
img("Amruta_Amey/ADM05620.webp"),
img("Amruta_Amey/ADM05654.webp"),
img("Amruta_Amey/ADM05658.webp"),
img("Amruta_Amey/ADM05684.webp"),
img("Amruta_Amey/ADM05730.webp"),
img("Amruta_Amey/ADM05743.webp"),
img("Amruta_Amey/ADM05763.webp"),
img("Amruta_Amey/ADM05775.webp"),
img("Amruta_Amey/ADM05781.webp"),
img("Amruta_Amey/ADM05847.webp"),
img("Amruta_Amey/ADM05895.webp"),
img("Amruta_Amey/ADM05913.webp"),
img("Amruta_Amey/ADM05918.webp"),
img("Amruta_Amey/ADM05980.webp"),
img("Amruta_Amey/ADM06052.webp"),
img("Amruta_Amey/ADM06224.webp"),
img("Amruta_Amey/ADM06364.webp"),
img("Amruta_Amey/ADM06440.webp"),
img("Amruta_Amey/ADM06466.webp"),
img("Amruta_Amey/ADM06481.webp"),
img("Amruta_Amey/ADM06502.webp"),
img("Amruta_Amey/ADM06513.webp"),
img("Amruta_Amey/ADM06539.webp"),
img("Amruta_Amey/ADM06671.webp"),
img("Amruta_Amey/ADM06709.webp"),
img("Amruta_Amey/ADM06767.webp"),
img("Amruta_Amey/ADM06773.webp"),
img("Amruta_Amey/ADM06784.webp"),
img("Amruta_Amey/ADM06802.webp"),
img("Amruta_Amey/ADM06816.webp"),
img("Amruta_Amey/ADM06820.webp"),
img("Amruta_Amey/ADM06825.webp"),
img("Amruta_Amey/ADM06856.webp"),
img("Amruta_Amey/ADM06906.webp"),
img("Amruta_Amey/ADM06939.webp"),
]
  },
  "abhimanyu-manisha": {
    couple: "Abhimanyu & Manisha",
    location: "Marigold Banquets 'N' Conventions, Pune",
    caption: [
      "Abhimanyu and Manisha’s wedding felt full of life from the very beginning. The haldi was filled with laughter and colour where everyone was completely in the moment and enjoying every second. As the celebrations moved ahead the baraat brought in a different kind of energy that pulled everyone together and turned it into a full celebration.",
      "When the ceremony began everything slowed down and felt calm and meaningful. In between it all they stayed present sharing real moments with their people. Nothing felt forced or planned it just flowed naturally. It was warm honest and truly a reflection of them."
    ],
    images: [
      img("portfolio/Abhimanyu_Manisha.webp"),
      img("Abhimanyu_Manisha/img613.webp"),
      img("Abhimanyu_Manisha/img600.webp"),
      img("Abhimanyu_Manisha/img601.webp"),
      img("Abhimanyu_Manisha/img602.webp"),
      img("Abhimanyu_Manisha/img603.webp"),
      img("Abhimanyu_Manisha/img604.webp"),
      img("Abhimanyu_Manisha/img605.webp"),
      img("Abhimanyu_Manisha/img606.webp"),
      img("Abhimanyu_Manisha/img607.webp"),
      img("Abhimanyu_Manisha/img608.webp"),
      img("Abhimanyu_Manisha/img609.webp"),
      img("Abhimanyu_Manisha/img610.webp"),
      img("Abhimanyu_Manisha/img611.webp"),
      img("Abhimanyu_Manisha/img612.webp"),
      img("Abhimanyu_Manisha/img614.webp"),
      img("Abhimanyu_Manisha/img615.webp"),
      img("Abhimanyu_Manisha/img616.webp"),
      img("Abhimanyu_Manisha/img617.webp"),
      img("Abhimanyu_Manisha/img618.webp"),
      img("Abhimanyu_Manisha/img624.webp"),
      img("Abhimanyu_Manisha/img620.webp"),
      img("Abhimanyu_Manisha/img621.webp"),
      img("Abhimanyu_Manisha/img622.webp"),
      img("Abhimanyu_Manisha/img623.webp"),
    ]
  },
  "bhakti-sourabh": {
    couple: "Bhakti & Sourabh",
    location: "Pratap Niwas Palace, Jodhpur, Rajasthan",
    caption: [
      "Bhakti and Sourabh’s wedding carried a royal charm that felt both grand and personal at the same time. Set against the heritage beauty of Jodhpur the celebrations moved effortlessly from intimate rituals to lively evenings filled with music and dance.",
      "There was a natural ease between them that showed in every moment whether it was quiet glances or carefree laughter with their people. Nothing felt overdone yet everything felt complete. It was a celebration full of warmth energy and connection that stayed consistent from start to finish."
    ],
    images: [
  img("portfolio/Bhakti_Saurabh.webp"),
  img("Bhakti_Sourabh/img356.webp"),
  img("Bhakti_Sourabh/img301.webp"),
  img("Bhakti_Sourabh/img303.webp"),
  img("Bhakti_Sourabh/img304.webp"),
  img("Bhakti_Sourabh/img307.webp"),
  img("Bhakti_Sourabh/img308.webp"),
  img("Bhakti_Sourabh/img309.webp"),
  img("Bhakti_Sourabh/img310.webp"),
  img("Bhakti_Sourabh/img311.webp"),
  img("Bhakti_Sourabh/img312.webp"),
  img("Bhakti_Sourabh/img313.webp"),
  img("Bhakti_Sourabh/img314.webp"),
  img("Bhakti_Sourabh/img315.webp"),
  img("Bhakti_Sourabh/img316.webp"),
  img("Bhakti_Sourabh/img317.webp"),
  img("Bhakti_Sourabh/img318.webp"),
  img("Bhakti_Sourabh/img319.webp"),
  img("Bhakti_Sourabh/img320.webp"),
  img("Bhakti_Sourabh/img321.webp"),
  img("Bhakti_Sourabh/img322.webp"),
  img("Bhakti_Sourabh/img323.webp"),
  img("Bhakti_Sourabh/img324.webp"),
  img("Bhakti_Sourabh/img326.webp"),
  img("Bhakti_Sourabh/img327.webp"),
  img("Bhakti_Sourabh/img328.webp"),
  img("Bhakti_Sourabh/img329.webp"),
  img("Bhakti_Sourabh/img330.webp"),
  img("Bhakti_Sourabh/img331.webp"),
  img("Bhakti_Sourabh/img332.webp"),
  img("Bhakti_Sourabh/img333.webp"),
  img("Bhakti_Sourabh/img334.webp"),
  img("Bhakti_Sourabh/img335.webp"),
  img("Bhakti_Sourabh/img336.webp"),
  img("Bhakti_Sourabh/img337.webp"),
  img("Bhakti_Sourabh/img338.webp"),
  img("Bhakti_Sourabh/img339.webp"),
  img("Bhakti_Sourabh/img340.webp"),
  img("Bhakti_Sourabh/img341.webp"),
  img("Bhakti_Sourabh/img342.webp"),
  img("Bhakti_Sourabh/img343.webp"),
  img("Bhakti_Sourabh/img344.webp"),
  img("Bhakti_Sourabh/img345.webp"),
  img("Bhakti_Sourabh/img346.webp"),
  img("Bhakti_Sourabh/img347.webp"),
  img("Bhakti_Sourabh/img348.webp"),
  img("Bhakti_Sourabh/img349.webp"),
  img("Bhakti_Sourabh/img350.webp"),
  img("Bhakti_Sourabh/img351.webp"),
  img("Bhakti_Sourabh/img352.webp"),
  img("Bhakti_Sourabh/img353.webp"),
  img("Bhakti_Sourabh/img354.webp"),
  img("Bhakti_Sourabh/img355.webp"),
  img("Bhakti_Sourabh/img357.webp"),
  img("Bhakti_Sourabh/img358.webp"),
  img("Bhakti_Sourabh/img359.webp"),
]
  },
  "Rohan-preksha": {
  couple: "Rohan & Preksha",

  location: "Pushkar, Rajasthan",

  caption: [
    "Rohan and Preksha’s wedding felt like one long celebration where no one held back. The days were filled with colour, music, and constant movement with something happening in every corner. From playful haldi moments to laughter that carried through the mehendi, everything felt alive.",

    "What made it special was how easily they blended into it all. Dancing with their friends, sharing jokes, and just enjoying the chaos around them. Even during the ceremony, there was a lightness that stayed. It felt fun, spontaneous and completely true to who they are."
  ],

  images: [
    img("portfolio/Rohan_Preksha.webp"),

    img("Rohan_Preksha/COUPLE_3.webp"),
    img("Rohan_Preksha/COUPLE_8.webp"),
    img("Rohan_Preksha/COUPLE_13.webp"),
    img("Rohan_Preksha/COUPLE_18.webp"),
    img("Rohan_Preksha/COUPLE_24.webp"),
    img("Rohan_Preksha/COUPLE_38.webp"),
    img("Rohan_Preksha/COUPLE_45.webp"),
    img("Rohan_Preksha/COUPLE_48.webp"),
    img("Rohan_Preksha/COUPLE_50.webp"),
    img("Rohan_Preksha/COUPLE_54.webp"),
    img("Rohan_Preksha/COUPLE_57.webp"),
    img("Rohan_Preksha/COUPLE_58.webp"),
    img("Rohan_Preksha/COUPLE_61.webp"),
    img("Rohan_Preksha/COUPLE_63.webp"),
    img("Rohan_Preksha/COUPLE_66.webp"),
    img("Rohan_Preksha/COUPLE_68.webp"),
    img("Rohan_Preksha/COUPLE_72.webp"),
    img("Rohan_Preksha/COUPLE_74.webp"),
    img("Rohan_Preksha/COUPLE_93.webp"),
    img("Rohan_Preksha/COUPLE_110.webp"),
    img("Rohan_Preksha/COUPLE_113.webp"),
    img("Rohan_Preksha/COUPLE_136.webp"),
    img("Rohan_Preksha/COUPLE_139.webp"),
    img("Rohan_Preksha/COUPLE_141.webp"),
    img("Rohan_Preksha/COUPLE_147.webp"),
    img("Rohan_Preksha/COUPLE_154.webp"),
    img("Rohan_Preksha/COUPLE_159.webp"),
    img("Rohan_Preksha/COUPLE_162.webp"),
    img("Rohan_Preksha/COUPLE_171.webp"),
    img("Rohan_Preksha/COUPLE_219.webp"),
    img("Rohan_Preksha/COUPLE_234.webp"),
    img("Rohan_Preksha/COUPLE_236.webp"),
    img("Rohan_Preksha/COUPLE_246.webp"),

    img("Rohan_Preksha/HALDI_1278.webp"),
    img("Rohan_Preksha/HALDI_1289.webp"),
    img("Rohan_Preksha/HALDI_1294.webp"),
    img("Rohan_Preksha/HALDI_1314.webp"),
    img("Rohan_Preksha/HALDI_1366.webp"),
    img("Rohan_Preksha/HALDI_1416.webp"),
    img("Rohan_Preksha/HALDI_1486.webp"),
    img("Rohan_Preksha/HALDI_1496.webp"),
    img("Rohan_Preksha/HALDI_1619.webp"),
    img("Rohan_Preksha/HALDI_1698.webp"),
    img("Rohan_Preksha/HALDI_1718.webp"),
    img("Rohan_Preksha/HALDI_1824.webp"),
    img("Rohan_Preksha/HALDI_1833.webp"),
    img("Rohan_Preksha/HALDI_1845.webp"),
    img("Rohan_Preksha/HALDI_1855.webp"),
    img("Rohan_Preksha/HALDI_1863.webp"),
    img("Rohan_Preksha/HALDI_1866.webp"),

    img("Rohan_Preksha/RICEPTION_2686.webp"),
    img("Rohan_Preksha/RICEPTION_2776.webp"),
    img("Rohan_Preksha/RICEPTION_2826.webp"),
    img("Rohan_Preksha/RICEPTION_2829.webp"),
    img("Rohan_Preksha/RICEPTION_2964.webp"),
    img("Rohan_Preksha/RICEPTION_3037.webp"),

    img("Rohan_Preksha/SANGEET_630.webp"),
    img("Rohan_Preksha/SANGEET_648.webp"),
    img("Rohan_Preksha/SANGEET_705.webp"),
    img("Rohan_Preksha/SANGEET_711.webp"),
    img("Rohan_Preksha/SANGEET_726.webp"),
    img("Rohan_Preksha/SANGEET_737.webp"),
    img("Rohan_Preksha/SANGEET_742.webp"),
    img("Rohan_Preksha/SANGEET_774.webp"),
    img("Rohan_Preksha/SANGEET_793.webp"),
    img("Rohan_Preksha/SANGEET_794.webp"),
    img("Rohan_Preksha/SANGEET_797.webp"),
    img("Rohan_Preksha/SANGEET_799.webp"),
    img("Rohan_Preksha/SANGEET_800.webp"),
    img("Rohan_Preksha/SANGEET_806.webp"),
    img("Rohan_Preksha/SANGEET_860.webp"),
    img("Rohan_Preksha/SANGEET_977.webp"),
    img("Rohan_Preksha/SANGEET_1056.webp"),
    img("Rohan_Preksha/SANGEET_1063.webp"),

    img("Rohan_Preksha/WEDDING_1946.webp"),
    img("Rohan_Preksha/WEDDING_1947.webp"),
    img("Rohan_Preksha/WEDDING_1971.webp"),
    img("Rohan_Preksha/WEDDING_1975.webp"),
    img("Rohan_Preksha/WEDDING_1976.webp"),
    img("Rohan_Preksha/WEDDING_1979.webp"),
    img("Rohan_Preksha/WEDDING_1981.webp"),
    img("Rohan_Preksha/WEDDING_1996.webp"),
    img("Rohan_Preksha/WEDDING_2006.webp"),
    img("Rohan_Preksha/WEDDING_2084.webp"),
    img("Rohan_Preksha/WEDDING_2106.webp"),
    img("Rohan_Preksha/WEDDING_2114.webp"),
    img("Rohan_Preksha/WEDDING_2116.webp"),
    img("Rohan_Preksha/WEDDING_2118.webp"),
    img("Rohan_Preksha/WEDDING_2119.webp"),
    img("Rohan_Preksha/WEDDING_2201.webp"),
    img("Rohan_Preksha/WEDDING_2346.webp"),
    img("Rohan_Preksha/WEDDING_2348.webp"),
    img("Rohan_Preksha/WEDDING_2544.webp"),
    img("Rohan_Preksha/WEDDING_2566.webp"),
    img("Rohan_Preksha/WEDDING_2571.webp")
  ],
},
  "Chaitrali_Shubham": {
    couple: "Chaitrali & Shubham",
    location: "Marigold Banquets 'N' Conventions, Pune",
    caption: [
      "Chaitrali and Shubham’s wedding had a rhythm of its own, steady, joyful, and full of heart. The celebrations felt close knit, with every ritual bringing people together in the most genuine way. There was laughter in the louder moments and a quiet kind of emotion that stayed in the background throughout.",
      "What stood out was how effortlessly everything came together. Nothing felt rushed or overdone. Just two people surrounded by their families, celebrating in a way that felt familiar, comforting, and truly their own."
    ],
    images: [
      img("portfolio/Chaitraly_Shubham.webp"),
      img("Chaitrali_Shubham/DSC06429.webp"),
img("Chaitrali_Shubham/DSC06485.webp"),
img("Chaitrali_Shubham/DSC06516.webp"),
img("Chaitrali_Shubham/DSC06551.webp"),
img("Chaitrali_Shubham/DSC06619.webp"),
img("Chaitrali_Shubham/DSC06845.webp"),
img("Chaitrali_Shubham/DSC06893.webp"),
img("Chaitrali_Shubham/DSC06899.webp"),
img("Chaitrali_Shubham/DSC07060.webp"),
img("Chaitrali_Shubham/DSC07099.webp"),
img("Chaitrali_Shubham/DSC07160.webp"),
img("Chaitrali_Shubham/DSC07172.webp"),
img("Chaitrali_Shubham/DSC07197.webp"),
img("Chaitrali_Shubham/DSC07202.webp"),
img("Chaitrali_Shubham/DSC07246.webp"),
img("Chaitrali_Shubham/DSC07577.webp"),
img("Chaitrali_Shubham/DSC07608.webp"),
img("Chaitrali_Shubham/DSC07633.webp"),
img("Chaitrali_Shubham/DSC07655.webp"),
img("Chaitrali_Shubham/DSC07657.webp"),
img("Chaitrali_Shubham/DSC07666.webp"),
img("Chaitrali_Shubham/DSC07672.webp"),
img("Chaitrali_Shubham/DSC07686.webp"),
img("Chaitrali_Shubham/DSC07690.webp"),
img("Chaitrali_Shubham/DSC07702.webp"),
img("Chaitrali_Shubham/DSC07767.webp"),
img("Chaitrali_Shubham/DSC07792.webp"),
img("Chaitrali_Shubham/DSC07834.webp"),
img("Chaitrali_Shubham/DSC07883.webp"),
img("Chaitrali_Shubham/DSC07917.webp"),
img("Chaitrali_Shubham/DSC07934.webp"),
img("Chaitrali_Shubham/DSC07954.webp"),
img("Chaitrali_Shubham/DSC07982.webp"),
img("Chaitrali_Shubham/DSC08040.webp"),
img("Chaitrali_Shubham/DSC08044.webp"),
img("Chaitrali_Shubham/DSC08050.webp"),
img("Chaitrali_Shubham/DSC08102.webp"),
img("Chaitrali_Shubham/DSC08127.webp"),
img("Chaitrali_Shubham/DSC08210.webp"),
img("Chaitrali_Shubham/DSC08240.webp"),
img("Chaitrali_Shubham/DSC08285.webp"),
img("Chaitrali_Shubham/DSC08310.webp"),
img("Chaitrali_Shubham/DSC08344.webp"),
img("Chaitrali_Shubham/DSC08354.webp"),
img("Chaitrali_Shubham/DSC08368.webp"),
img("Chaitrali_Shubham/DSC08442.webp"),
img("Chaitrali_Shubham/DSC08470.webp"),
img("Chaitrali_Shubham/DSC08508.webp"),
img("Chaitrali_Shubham/DSC08633.webp"),
img("Chaitrali_Shubham/DSC08640.webp"),
img("Chaitrali_Shubham/DSC08707.webp"),
img("Chaitrali_Shubham/DSC08721.webp"),
img("Chaitrali_Shubham/MSJ_445.webp"),
img("Chaitrali_Shubham/MSJ_4951.webp"),
img("Chaitrali_Shubham/MSJ_5191.webp"),
img("Chaitrali_Shubham/MSJ_7104.webp"),
img("Chaitrali_Shubham/MSJ_7135.webp"),
img("Chaitrali_Shubham/MSJ_7242.webp"),
img("Chaitrali_Shubham/MSJ_7671.webp"),
img("Chaitrali_Shubham/SHA0004.webp"),
img("Chaitrali_Shubham/SHA0011.webp"),
img("Chaitrali_Shubham/SHA09951.webp"),
    ]
  },
  "Aishwarya_Sanmay": {
    couple: "Aishwarya & Sanmay",
    location: "Sorina Hills Resort, Khadakwasla, Pune",
    caption: [
      "Aishwarya and Sanmay’s wedding had a charm that felt easy and unforced. The early moments were playful and full of colour, with friends and family bringing in a kind of energy that stayed throughout. There was always something happening, yet it never felt overwhelming.",
      "What stood out was how naturally they moved through it all. Whether it was laughter during the smaller moments or the quiet pauses they shared, everything felt real. It wasn’t about the scale or the setup, but about how present they were with each other and everyone around them."
    ],
    images: [
  img("portfolio/Sanmay_Aishwarya.webp"),
  img("Aishwarya_Sanmay/Couple2.webp"),
img("Aishwarya_Sanmay/Couple18.webp"),
img("Aishwarya_Sanmay/Couple29.webp"),
img("Aishwarya_Sanmay/Couple37.webp"),
img("Aishwarya_Sanmay/Couple47.webp"),
img("Aishwarya_Sanmay/Couple68.webp"),
img("Aishwarya_Sanmay/Couple77.webp"),
img("Aishwarya_Sanmay/Couple89.webp"),
img("Aishwarya_Sanmay/Couple107.webp"),
img("Aishwarya_Sanmay/Couple115.webp"),
img("Aishwarya_Sanmay/Couple124.webp"),
img("Aishwarya_Sanmay/Couple150.webp"),
img("Aishwarya_Sanmay/Haldi547.webp"),
img("Aishwarya_Sanmay/Haldi561.webp"),
img("Aishwarya_Sanmay/Haldi568.webp"),
img("Aishwarya_Sanmay/Sangeet189.webp"),
img("Aishwarya_Sanmay/Sangeet214.webp"),
img("Aishwarya_Sanmay/Sangeet226.webp"),
img("Aishwarya_Sanmay/Sangeet236.webp"),
img("Aishwarya_Sanmay/Sangeet255.webp"),
img("Aishwarya_Sanmay/Sangeet307.webp"),
img("Aishwarya_Sanmay/Saptadhi1233.webp"),
img("Aishwarya_Sanmay/Saptadhi1251.webp"),
img("Aishwarya_Sanmay/Saptadhi1255.webp"),
img("Aishwarya_Sanmay/Saptadhi1270.webp"),
img("Aishwarya_Sanmay/Saptadhi1280.webp"),
img("Aishwarya_Sanmay/Wedding959.webp"),
img("Aishwarya_Sanmay/Wedding1050.webp"),
img("Aishwarya_Sanmay/Couple5.webp"),
img("Aishwarya_Sanmay/Couple22.webp"),
img("Aishwarya_Sanmay/Couple30.webp"),
img("Aishwarya_Sanmay/Couple38.webp"),
img("Aishwarya_Sanmay/Couple58.webp"),
img("Aishwarya_Sanmay/Couple72.webp"),
img("Aishwarya_Sanmay/Couple82.webp"),
img("Aishwarya_Sanmay/Couple95.webp"),
img("Aishwarya_Sanmay/Couple112.webp"),
img("Aishwarya_Sanmay/Couple121.webp"),
img("Aishwarya_Sanmay/Couple128.webp"),
img("Aishwarya_Sanmay/Haldi494.webp"),
img("Aishwarya_Sanmay/Haldi553.webp"),
img("Aishwarya_Sanmay/Haldi565.webp"),
img("Aishwarya_Sanmay/Haldi750.webp"),
img("Aishwarya_Sanmay/Sangeet201.webp"),
img("Aishwarya_Sanmay/Sangeet216.webp"),
img("Aishwarya_Sanmay/Sangeet232.webp"),
img("Aishwarya_Sanmay/Sangeet350.webp"),
img("Aishwarya_Sanmay/Sangeet306.webp"),
img("Aishwarya_Sanmay/Saptadhi1231.webp"),
img("Aishwarya_Sanmay/Saptadhi1243.webp"),
img("Aishwarya_Sanmay/Saptadhi1254.webp"),
img("Aishwarya_Sanmay/Saptadhi1266.webp"),
img("Aishwarya_Sanmay/Saptadhi1274.webp"),
img("Aishwarya_Sanmay/Saptadhi1289.webp"),
img("Aishwarya_Sanmay/Wedding1023.webp"),
]
  },
   "Atish_Shweta": {
    couple: "Atish & Shweta",
    location: "Marigold Banquets 'N' Conventions, Pune",
    caption: [
      "Atish and Shweta's wedding was filled with moments that kept everyone involved. One ritual led to another, family members stepped in with advice, laughter followed almost every tradition and there was always a reaction worth watching.",
      "Between all the ceremonies and celebrations, they found time to exchange glances that said more than the words around them."
    ],
  images: [
    img("portfolio/Atish_Shweta.webp"),
  img("Atish_Shweta/img4001.webp"),
  img("Atish_Shweta/img4002.webp"),
  img("Atish_Shweta/img4003.webp"),
  img("Atish_Shweta/img4004.webp"),
  img("Atish_Shweta/img4005.webp"),
  img("Atish_Shweta/img4006.webp"),
  img("Atish_Shweta/img4007.webp"),
  img("Atish_Shweta/img4008.webp"),
  img("Atish_Shweta/img4009.webp"),
  img("Atish_Shweta/img4010.webp"),
  img("Atish_Shweta/img4011.webp"),
  img("Atish_Shweta/img4012.webp"),
  img("Atish_Shweta/img4013.webp"),
  img("Atish_Shweta/img4014.webp"),
  img("Atish_Shweta/img4015.webp"),
  img("Atish_Shweta/img4016.webp"),
  img("Atish_Shweta/img4017.webp"),
  img("Atish_Shweta/img4018.webp"),
  img("Atish_Shweta/img4019.webp"),
  img("Atish_Shweta/img4020.webp"),
  img("Atish_Shweta/img4021.webp"),
  img("Atish_Shweta/img4032.webp"),
  img("Atish_Shweta/img4023.webp"),
  img("Atish_Shweta/img4024.webp"),
  img("Atish_Shweta/img4025.webp"),
  img("Atish_Shweta/img4026.webp"),
  img("Atish_Shweta/img4027.webp"),
  img("Atish_Shweta/img4028.webp"),
  img("Atish_Shweta/img4029.webp"),
  img("Atish_Shweta/img4030.webp"),
  img("Atish_Shweta/img4031.webp"),
  img("Atish_Shweta/img4033.webp"),
  img("Atish_Shweta/img4034.webp"),
  img("Atish_Shweta/img4035.webp"),
  img("Atish_Shweta/img4036.webp"),
  img("Atish_Shweta/img4037.webp"),
  img("Atish_Shweta/img4038.webp"),
  img("Atish_Shweta/img4039.webp"),
  img("Atish_Shweta/img4040.webp"),
  img("Atish_Shweta/img4041.webp"),
  img("Atish_Shweta/img4042.webp"),
  img("Atish_Shweta/img4022.webp"),
  ]   
},

  "Gaurav_Chinmaee": {
    couple: "Gaurav & Chinmaee",
    location: "Marigold Banquets 'N' Conventions, Pune",
    caption: [
      "Gaurav and Chinmaee's wedding in Pune was filled with warmth, laughter and moments shared with their closest people. From the bright haldi celebrations to the wedding ceremony, every part of the day felt joyful and relaxed.",
      "Surrounded by family and friends, they embraced each moment as it came, making the celebration feel genuine, memorable and truly their own."
    ],
  images: [
  img("portfolio/Gaurav_Chinmaee.webp"),
  img("Gaurav_Chinmaee/img901.webp"),
  img("Gaurav_Chinmaee/img902.webp"),
  img("Gaurav_Chinmaee/img903.webp"),
  img("Gaurav_Chinmaee/img904.webp"),
  img("Gaurav_Chinmaee/img905.webp"),
  img("Gaurav_Chinmaee/img906.webp"),
  img("Gaurav_Chinmaee/img907.webp"),
  img("Gaurav_Chinmaee/img908.webp"),
  img("Gaurav_Chinmaee/img910.webp"),
  img("Gaurav_Chinmaee/img911.webp"),
  img("Gaurav_Chinmaee/img912.webp"),
  img("Gaurav_Chinmaee/img913.webp"),
  img("Gaurav_Chinmaee/img914.webp"),
  img("Gaurav_Chinmaee/img915.webp"),
  img("Gaurav_Chinmaee/img916.webp"),
  img("Gaurav_Chinmaee/img917.webp"),
  img("Gaurav_Chinmaee/img918.webp"),
  img("Gaurav_Chinmaee/img919.webp"),
  img("Gaurav_Chinmaee/img920.webp"),
  img("Gaurav_Chinmaee/img921.webp"),
  img("Gaurav_Chinmaee/img922.webp"),
  img("Gaurav_Chinmaee/img923.webp"),
  img("Gaurav_Chinmaee/img924.webp"),
  img("Gaurav_Chinmaee/img925.webp"),
  img("Gaurav_Chinmaee/img926.webp"),
  img("Gaurav_Chinmaee/img927.webp"),
  img("Gaurav_Chinmaee/img928.webp"),
  img("Gaurav_Chinmaee/img929.webp"),
  img("Gaurav_Chinmaee/img930.webp"),
  img("Gaurav_Chinmaee/img931.webp"),
  img("Gaurav_Chinmaee/img932.webp"),
  img("Gaurav_Chinmaee/img933.webp"),
  img("Gaurav_Chinmaee/img934.webp"),
  img("Gaurav_Chinmaee/img935.webp"),
  img("Gaurav_Chinmaee/img936.webp"),
  img("Gaurav_Chinmaee/img937.webp"),
  img("Gaurav_Chinmaee/img938.webp"),
  ]
},

  "Raj_Suhasini": {
    couple: "Raj & Suhasini",
    location: "Marigold Banquets 'N' Conventions, Pune",
    caption: [
      "Raj and Suhasini's celebrations began with a cheerful haldi where family and friends filled the day with colour and laughter. The energy carried into the sangeet, with music, dancing and unforgettable performances.",
      "By the wedding day, the excitement had settled into meaningful moments, bringing everyone together for a celebration that felt complete from start to finish."
    ],
    images: [
  img("portfolio/Raj_Suhasini.webp"),
  img("Raj_Suhasini/img2001.webp"),
  img("Raj_Suhasini/img2002.webp"),
  img("Raj_Suhasini/img2003.webp"),
  img("Raj_Suhasini/img2004.webp"),
  img("Raj_Suhasini/img2005.webp"),
  img("Raj_Suhasini/img2006.webp"),
  img("Raj_Suhasini/img2007.webp"),
  img("Raj_Suhasini/img2008.webp"),
  img("Raj_Suhasini/img2009.webp"),
  img("Raj_Suhasini/img2010.webp"),
  img("Raj_Suhasini/img2011.webp"),
  img("Raj_Suhasini/img2012.webp"),
  img("Raj_Suhasini/img2013.webp"),
  img("Raj_Suhasini/img2014.webp"),
  img("Raj_Suhasini/img2015.webp"),
  img("Raj_Suhasini/img2016.webp"),
  img("Raj_Suhasini/img2017.webp"),
  img("Raj_Suhasini/img2018.webp"),
  img("Raj_Suhasini/img2019.webp"),
  img("Raj_Suhasini/img2020.webp"),
  img("Raj_Suhasini/img2021.webp"),
  img("Raj_Suhasini/img2022.webp"),
  img("Raj_Suhasini/img2023.webp"),
  img("Raj_Suhasini/img2024.webp"),
  img("Raj_Suhasini/img2025.webp"),
  img("Raj_Suhasini/img2026.webp"),
  img("Raj_Suhasini/img2027.webp"),
  img("Raj_Suhasini/img2028.webp"),
  img("Raj_Suhasini/img2029.webp"),
  img("Raj_Suhasini/img2030.webp"),
  img("Raj_Suhasini/img2031.webp"),
  img("Raj_Suhasini/img2032.webp"),
  img("Raj_Suhasini/img2033.webp"),
  img("Raj_Suhasini/img2034.webp"),
  img("Raj_Suhasini/img2035.webp"),
  img("Raj_Suhasini/img2036.webp"),
  img("Raj_Suhasini/img2037.webp"),
  img("Raj_Suhasini/img2038.webp"),
  img("Raj_Suhasini/img2039.webp"),
  img("Raj_Suhasini/img2040.webp"),
  img("Raj_Suhasini/img2041.webp"),
  img("Raj_Suhasini/img2042.webp"),
  img("Raj_Suhasini/img2043.webp"),
  img("Raj_Suhasini/img2044.webp"),
  img("Raj_Suhasini/img2045.webp"),
  img("Raj_Suhasini/img2046.webp"),
  img("Raj_Suhasini/img2047.webp"),
  ]
},

  "Shruti_Harjot": {
    couple: "Shruti & Harjot",
    location: "The Orchid Hotel, Pune",
    caption: [
      "Harjot and Shruti's celebrations brought together three very different moods. The haldi was filled with cheerful moments and family traditions, while the sangeet gave everyone a reason to let loose and celebrate.",
      "By the wedding day, the pace had slowed, allowing them to take in each ritual, each glance and each moment shared with the people around them."
    ],
images: [
  img("Shruti_Harjot/img3051.webp"),
  img("Shruti_Harjot/img3001.webp"),
  img("Shruti_Harjot/img3002.webp"),
  img("Shruti_Harjot/img3003.webp"),
  img("Shruti_Harjot/img3004.webp"),
  img("Shruti_Harjot/img3005.webp"),
  img("Shruti_Harjot/img3006.webp"),
  img("Shruti_Harjot/img3007.webp"),
  img("Shruti_Harjot/img3008.webp"),
  img("Shruti_Harjot/img3009.webp"),
  img("Shruti_Harjot/img3010.webp"),
  img("Shruti_Harjot/img3011.webp"),
  img("Shruti_Harjot/img3012.webp"),
  img("Shruti_Harjot/img3013.webp"),
  img("Shruti_Harjot/img3014.webp"),
  img("Shruti_Harjot/img3015.webp"),
  img("Shruti_Harjot/img3016.webp"),
  img("Shruti_Harjot/img3017.webp"),
  img("Shruti_Harjot/img3018.webp"),
  img("Shruti_Harjot/img3019.webp"),
  img("Shruti_Harjot/img3020.webp"),
  img("Shruti_Harjot/img3021.webp"),
  img("Shruti_Harjot/img3022.webp"),
  img("Shruti_Harjot/img3023.webp"),
  img("Shruti_Harjot/img3024.webp"),
  img("Shruti_Harjot/img3025.webp"),
  img("Shruti_Harjot/img3026.webp"),
  img("Shruti_Harjot/img3027.webp"),
  img("Shruti_Harjot/img3028.webp"),
  img("Shruti_Harjot/img3029.webp"),
  img("Shruti_Harjot/img3030.webp"),
  img("Shruti_Harjot/img3031.webp"),
  img("Shruti_Harjot/img3032.webp"),
  img("Shruti_Harjot/img3033.webp"),
  img("Shruti_Harjot/img3034.webp"),
  img("Shruti_Harjot/img3035.webp"),
  img("Shruti_Harjot/img3036.webp"),
  img("Shruti_Harjot/img3037.webp"),
  img("Shruti_Harjot/img3038.webp"),
  img("Shruti_Harjot/img3039.webp"),
  img("Shruti_Harjot/img3040.webp"),
  img("Shruti_Harjot/img3041.webp"),
  img("Shruti_Harjot/img3042.webp"),
  img("Shruti_Harjot/img3043.webp"),
  img("Shruti_Harjot/img3044.webp"),
  img("Shruti_Harjot/img3045.webp"),
  img("Shruti_Harjot/img3046.webp"),
  img("Shruti_Harjot/img3047.webp"),
  img("Shruti_Harjot/img3048.webp"),
  img("Shruti_Harjot/img3049.webp"),
  img("Shruti_Harjot/img3050.webp"),
  img("Shruti_Harjot/img3057.webp"),
  img("Shruti_Harjot/img3052.webp"),
  img("Shruti_Harjot/img3053.webp"),
  img("Shruti_Harjot/img3054.webp"),
  img("Shruti_Harjot/img3055.webp"),
  img("Shruti_Harjot/img3056.webp"),
   img("portfolio/Shruti_Harjot.webp"),
  img("Shruti_Harjot/img3058.webp"),
  img("Shruti_Harjot/img3059.webp"),
  img("Shruti_Harjot/img3060.webp"),
  img("Shruti_Harjot/img3061.webp"),
  img("Shruti_Harjot/img3062.webp"),
  img("Shruti_Harjot/img3063.webp"),
 ]
  },  
  "Atharva_Haritha": {
    couple: "Atharva & Haritha",
    location: "Marigold Banquets 'N' Conventions, Pune",
    caption: [
      "Atharva and Haritha's wedding was a joyful celebration filled with laughter, family and meaningful moments. From the fun-filled haldi to the wedding ceremony, every part of the day felt warm and genuine.",
      "Surrounded by their loved ones, they enjoyed every moment together making it a beautiful wedding celebration in Pune that reflected who they are."
    ],
images: [
  img("portfolio/Atharva_Harita.webp"),
  img("Atharva_Haritha/img801.webp"),
  img("Atharva_Haritha/img802.webp"),
  img("Atharva_Haritha/img803.webp"),
  img("Atharva_Haritha/img804.webp"),
  img("Atharva_Haritha/img805.webp"),
  img("Atharva_Haritha/img806.webp"),
  img("Atharva_Haritha/img807.webp"),
  img("Atharva_Haritha/img808.webp"),
  img("Atharva_Haritha/img809.webp"),
  img("Atharva_Haritha/img810.webp"),
  img("Atharva_Haritha/img811.webp"),
  img("Atharva_Haritha/img812.webp"),
  img("Atharva_Haritha/img813.webp"),
  img("Atharva_Haritha/img814.webp"),
  img("Atharva_Haritha/img815.webp"),
  img("Atharva_Haritha/img816.webp"),
  img("Atharva_Haritha/img817.webp"),
  img("Atharva_Haritha/img818.webp"),
  img("Atharva_Haritha/img819.webp"),
  img("Atharva_Haritha/img820.webp"),
  img("Atharva_Haritha/img821.webp"),
  img("Atharva_Haritha/img822.webp"),
  img("Atharva_Haritha/img823.webp"),
  img("Atharva_Haritha/img824.webp"),
  img("Atharva_Haritha/img825.webp"),
  img("Atharva_Haritha/img826.webp"),
  img("Atharva_Haritha/img827.webp"),
  img("Atharva_Haritha/img828.webp"),
  img("Atharva_Haritha/img840.webp"),
  img("Atharva_Haritha/img829.webp"),
  img("Atharva_Haritha/img830.webp"),
  img("Atharva_Haritha/img831.webp"),
  img("Atharva_Haritha/img832.webp"),
  img("Atharva_Haritha/img833.webp"),
  img("Atharva_Haritha/img834.webp"),
  img("Atharva_Haritha/img835.webp"),
  img("Atharva_Haritha/img836.webp"),
  img("Atharva_Haritha/img837.webp"),
  img("Atharva_Haritha/img838.webp"),
  img("Atharva_Haritha/img839.webp"),
  
  img("Atharva_Haritha/img841.webp"),
  img("Atharva_Haritha/img842.webp"),
  img("Atharva_Haritha/img843.webp"),
  img("Atharva_Haritha/img844.webp"),
  img("Atharva_Haritha/img845.webp"),
  img("Atharva_Haritha/img846.webp"),
  img("Atharva_Haritha/img847.webp"),
  img("Atharva_Haritha/img848.webp"),
  img("Atharva_Haritha/img849.webp"),
  img("Atharva_Haritha/img850.webp"),
  img("Atharva_Haritha/img851.webp"),
  img("Atharva_Haritha/img852.webp"),
  img("Atharva_Haritha/img853.webp"),
   ]
},

  "Nina_Parth": {
    couple: "Nina & Parth",
    location: "Marigold Banquets 'N' Conventions, Pune",
    caption: [
      "Nina and Parth's wedding never had a quiet moment. The haldi was filled with fun, the wedding brought everyone together and the celebrations carried on well into the evening.",
      "Wherever you looked, there were people dancing, laughing and creating moments that made the entire wedding feel alive from start to finish."
    ],
images: [
  img("portfolio/Nina_Parth.webp"),
  img("Nina_Parth/img1001.webp"),
  img("Nina_Parth/img1002.webp"),
  img("Nina_Parth/img1003.webp"),
  img("Nina_Parth/img1004.webp"),
  img("Nina_Parth/img1005.webp"),
  img("Nina_Parth/img1006.webp"),
  img("Nina_Parth/img1007.webp"),
  img("Nina_Parth/img1008.webp"),
  img("Nina_Parth/img1009.webp"),
  img("Nina_Parth/img1010.webp"),
  img("Nina_Parth/img1011.webp"),
  img("Nina_Parth/img1012.webp"),
  img("Nina_Parth/img1013.webp"),
  img("Nina_Parth/img1014.webp"),
  img("Nina_Parth/img1015.webp"),
  img("Nina_Parth/img1016.webp"),
  img("Nina_Parth/img1017.webp"),
  img("Nina_Parth/img1036.webp"),
  img("Nina_Parth/img1018.webp"),
  img("Nina_Parth/img1019.webp"),
  img("Nina_Parth/img1020.webp"),
  img("Nina_Parth/img1021.webp"),
  img("Nina_Parth/img1022.webp"),
  img("Nina_Parth/img1023.webp"),
  img("Nina_Parth/img1024.webp"),
  img("Nina_Parth/img1025.webp"),
  img("Nina_Parth/img1026.webp"),
  img("Nina_Parth/img1027.webp"),
  img("Nina_Parth/img1028.webp"),
  img("Nina_Parth/img1029.webp"),
  img("Nina_Parth/img1030.webp"),
  img("Nina_Parth/img1031.webp"),
  img("Nina_Parth/img1032.webp"),
  img("Nina_Parth/img1033.webp"),
  img("Nina_Parth/img1034.webp"),
  img("Nina_Parth/img1035.webp"),
 ]
  },

  "Anuja_Shubhang": {
    couple: "Anuja & Shubhang",
    location: "Marigold Banquets 'N' Conventions, Pune",
    caption: [
      "Shubhang and Anuja's celebrations started with a haldi where family members took centre stage, filling every moment with laughter and playful traditions.",
      "The sangeet brought a different energy, with performances, dancing and a packed dance floor. By the wedding day, the focus shifted to meaningful rituals, bringing everyone together for a celebration rooted in tradition."
    ],
images: [
  img("Anuja_Shubhang/img709.webp"),
  img("Anuja_Shubhang/img701.webp"),
  img("Anuja_Shubhang/img702.webp"),
  img("Anuja_Shubhang/img703.webp"),
  img("Anuja_Shubhang/img704.webp"),
  img("Anuja_Shubhang/img705.webp"),
  img("Anuja_Shubhang/img706.webp"),
  img("Anuja_Shubhang/img707.webp"),
  img("Anuja_Shubhang/img708.webp"),
  img("portfolio/Anuja_Shubhang.webp"),
  img("Anuja_Shubhang/img710.webp"),
  img("Anuja_Shubhang/img711.webp"),
  img("Anuja_Shubhang/img712.webp"),
  img("Anuja_Shubhang/img713.webp"),
  img("Anuja_Shubhang/img714.webp"),
  img("Anuja_Shubhang/img715.webp"),
  img("Anuja_Shubhang/img716.webp"),
  img("Anuja_Shubhang/img717.webp"),
  img("Anuja_Shubhang/img718.webp"),
  img("Anuja_Shubhang/img719.webp"),
  img("Anuja_Shubhang/img720.webp"),
  img("Anuja_Shubhang/img721.webp"),
  img("Anuja_Shubhang/img722.webp"),
  img("Anuja_Shubhang/img723.webp"),
  img("Anuja_Shubhang/img724.webp"),
  img("Anuja_Shubhang/img725.webp"),
  img("Anuja_Shubhang/img726.webp"),
  img("Anuja_Shubhang/img727.webp"),
  img("Anuja_Shubhang/img728.webp"),
  img("Anuja_Shubhang/img729.webp"),
  img("Anuja_Shubhang/img730.webp"),
  img("Anuja_Shubhang/img731.webp"),
  img("Anuja_Shubhang/img733.webp"),
  img("Anuja_Shubhang/img734.webp"),
  img("Anuja_Shubhang/img735.webp"),
  img("Anuja_Shubhang/img736.webp"),
  img("Anuja_Shubhang/img737.webp"),
  img("Anuja_Shubhang/img738.webp"),
  img("Anuja_Shubhang/img739.webp"),
  img("Anuja_Shubhang/img740.webp"),
  img("Anuja_Shubhang/img741.webp"),
  img("Anuja_Shubhang/img742.webp"),
  img("Anuja_Shubhang/img743.webp"),
  img("Anuja_Shubhang/img744.webp"),
  img("Anuja_Shubhang/img745.webp"),
  img("Anuja_Shubhang/img746.webp"),
  img("Anuja_Shubhang/img747.webp"),
  img("Anuja_Shubhang/img748.webp"),
  img("Anuja_Shubhang/img749.webp"),
  img("Anuja_Shubhang/img750.webp"),
  img("Anuja_Shubhang/img751.webp"),
  img("Anuja_Shubhang/img752.webp"),
  img("Anuja_Shubhang/img753.webp"),
  img("Anuja_Shubhang/img754.webp"),
  img("Anuja_Shubhang/img755.webp"),
  img("Anuja_Shubhang/img756.webp"),
  img("Anuja_Shubhang/img757.webp"),
  img("Anuja_Shubhang/img758.webp"),
  img("Anuja_Shubhang/img759.webp"),
  img("Anuja_Shubhang/img760.webp"),
  img("Anuja_Shubhang/img761.webp"),
  img("Anuja_Shubhang/img762.webp"),
  img("Anuja_Shubhang/img763.webp"),
  img("Anuja_Shubhang/img764.webp"),
  img("Anuja_Shubhang/img765.webp"),
  img("Anuja_Shubhang/img732.webp"),
 ]
} 

};

/**
 * Cleanup pass:
 * - Removes any `null` entries (images that the glob failed to resolve —
 *   check the browser console for "Image not found: ..." warnings to see
 *   exactly which files are missing/misnamed in /src/assets, then rename
 *   or re-upload the real files to fix them for good).
 * - De-dupes any image that was accidentally listed twice.
 * This guarantees the gallery/lightbox never render a broken <img> icon.
 */
Object.keys(weddingData).forEach((key) => {
  weddingData[key].images = [...new Set(weddingData[key].images.filter(Boolean))];
});

export default function WeddingPage() {
  const { slug } = useParams();
  const wedding = weddingData[slug];
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Close lightbox on Escape key / arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll behind the lightbox (and restore on unmount too,
  // in case the component unmounts while the lightbox is open)
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleBack = () => {
    if (location.state?.from) navigate(location.state.from);
    else navigate("/");
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % wedding.images.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + wedding.images.length) % wedding.images.length);
  };

  if (!wedding) return null;

  const heroImage = wedding.images[0];

  return (
    <div className="bg-white min-h-screen selection:bg-[#bba98a]/20 overflow-x-hidden">
      <Helmet>
        <title>{wedding.couple} | TILT SHIFT Films</title>
      </Helmet>

      {/* Floating Navigation (Back Button) */}
      <button
        onClick={handleBack}
        className="fixed top-5 left-4 sm:top-24 sm:left-8 md:top-28 md:left-16 z-40 mix-blend-difference text-white font-sans text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase hover:opacity-60 transition-opacity"
      >
        ← Back
      </button>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[100svh] min-h-[420px] max-h-[900px] overflow-hidden">
        {/* Real <img> instead of a CSS background so the hero scales
            correctly (object-cover) on every device / orientation,
            including iOS Safari where 100vh + background-image can
            misbehave. */}
        {heroImage && (
          <img
            src={heroImage}
            alt={`${wedding.couple} wedding hero`}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        )}
        {/* <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
          <div className="text-center max-w-full">
            <p className="font-sans text-[9px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.5em] uppercase text-white/90 mb-3 sm:mb-4">
              Wedding Story
            </p>
            <h1 className="font-serif text-black text-[13vw] leading-[1.05] sm:text-6xl sm:leading-none md:text-8xl lg:text-9xl tracking-tight font-light break-words">
              {wedding.couple}
            </h1>
          </div>
        </div> */}
      </section>

      {/* 2. STORY DETAILS SECTION */}
    <section className="max-w-4xl mx-auto px-5 sm:px-6 pt-6 pb-16 sm:pt-8 sm:pb-20 md:pt-10 md:pb-24 text-center bg-white">
  <div className="absolute inset-0 bg-black/30" />
<div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
    <div className="text-center max-w-full">
            <p className="font-sans text-[9px] sm:text-[11px] tracking-[0.35em] sm:tracking-[0.5em] uppercase text-black/90 sm:mb-4">
        Wedding Story
      </p>
<h1 className="font-serif text-black text-[13vw] leading-[1.05] sm:text-4xl sm:leading-none md:text-8xl lg:text-7xl tracking-tight font-light">
        {wedding.couple}
      </h1>
    </div>
  </div>
        <span className="inline-block font-sans text-[9px] sm:text-[8px] tracking-[0.3em] sm:tracking-[0.4em] uppercase text-black/70 mt-4 sm:mt-4 font-medium">
          {wedding.location}
        </span>
        <div className="space-y-6 sm:space-y-8">
          {wedding.caption.map((para, i) => (
            <p
              key={i}
              className="font-serif text-base sm:text-xl md:text-2xl leading-relaxed text-neutral-700 font-light italic"
            >
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* 3. DYNAMIC MASONRY GALLERY */}
      <section className="max-w-full mx-auto px-1 pb-20 sm:pb-32 bg-[#F4F1EA]">
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-3 xl:columns-4 gap-1.5 sm:gap-2 space-y-1.5 sm:space-y-2">
          {wedding.images.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid w-full group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden transition-all duration-700 ease-in-out bg-neutral-100">
                <img
                  src={src}
                  alt={`${wedding.couple} moment ${index + 1}`}
                  className="w-full h-auto block object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Runtime safety net: if a resolved URL 404s on the
                    // live server, hide its card instead of showing a
                    // broken-image icon.
                    const card = e.currentTarget.closest(".break-inside-avoid");
                    if (card) card.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white stroke-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL-SCREEN LIGHTBOX POPUP */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button - Top Right */}
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-10 md:right-10 border rounded-full text-white/70 hover:text-white transition-all z-[10000] p-1.5 sm:p-2"
            onClick={closeLightbox}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-1 sm:left-4 md:left-8 text-white border rounded-full hover:text-white transition-all p-2 sm:p-4 z-[10000]"
            onClick={prevImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-1 sm:right-4 md:right-8 text-white border rounded-full hover:text-white transition-all p-2 sm:p-4 z-[10000]"
            onClick={nextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5 md:h-8 md:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-10 select-none">
            <img
              src={wedding.images[currentIndex]}
              className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-500"
              alt="Full screen view"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                // Skip forward automatically if the lightbox lands on a
                // broken image instead of showing a blank/broken frame.
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 sm:bottom-8 text-white/40 font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">
            {currentIndex + 1} / {wedding.images.length}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-14 sm:py-20 border-t border-neutral-100 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-sans text-[9px] tracking-[0.4em] uppercase text-neutral-400 hover:text-black transition-colors"
        >
          ↑ Back to top
        </button>
      </footer>
    </div>
  );
}