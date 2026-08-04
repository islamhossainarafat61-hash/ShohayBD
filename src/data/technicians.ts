export interface Technician {
  id: number;
  name: string;
  nameBn: string;
  expertEn: string;
  expertBn: string;
  photo: string;
  gender: "male" | "female";
}

export const technicians: Technician[] = [
  {
    id: 1,
    name: "Rakib Hasan",
    nameBn: "রাকিব হাসান",
    expertEn: "Electrician",
    expertBn: "ইলেকট্রিশিয়ান",
    photo: "/images/technicians/tech1.png",
    gender: "male",
  },
  {
    id: 2,
    name: "Samira Akter",
    nameBn: "সামিরা আক্তার",
    expertEn: "Beauty & Salon Specialist",
    expertBn: "বিউটি ও সেলুন স্পেশালিস্ট",
    photo: "/images/technicians/tech2.png",
    gender: "female",
  },
  {
    id: 3,
    name: "Mizanur Rahman",
    nameBn: "মিজানুর রহমান",
    expertEn: "Senior AC Technician",
    expertBn: "সিনিয়র এসি টেকনিশিয়ান",
    photo: "/images/technicians/tech3.png",
    gender: "male",
  },
  {
    id: 4,
    name: "Shirin Akter",
    nameBn: "শিরিন আক্তার",
    expertEn: "Home Cleaner & Dry Wash Expert",
    expertBn: "হোম ক্লিনার ও ড্রাই ওয়াশ এক্সপার্ট",
    photo: "/images/technicians/tech4.png",
    gender: "female",
  },
];
