export interface TeamMember {
  id: number;
  name: string;
  title: string;
  photo: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Tawhidul Islam Al Kibria",
    title: "Founder & CEO",
    photo: "/images/team/member1.png",
    linkedin:
      "https://www.linkedin.com/in/tawhidul-islam-al-kibria-a71ba0364?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/tawhid224784?igsh=N3M0bXlob2M3dHdx",
    facebook: "https://www.facebook.com/share/1CwoZ4LS1n/",
  },
  {
    id: 2,
    name: "Mobassirul Islam",
    title: "Co-Founder",
    photo: "/images/team/member2.png",
    facebook: "https://www.facebook.com/share/1EkQnT18jA/",
    // LinkedIn ও Instagram পরে যোগ করা হবে
  },
  {
    id: 3,
    name: "Mostak Ahmad Sifat",
    title: "Chief Operating & Systems Officer (COSO)",
    photo: "/images/team/member3.png",
    linkedin:
      "https://www.linkedin.com/in/sifat-mostak-361809296?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    instagram: "https://www.instagram.com/sifatmostak24?igsh=c3FoNXJ1ZmEwcGEz",
    facebook: "https://www.facebook.com/share/1et2UJGZXg/",
  },
];
