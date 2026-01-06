import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import React from "react";

const person: Person = {
  firstName: "Sameer",
  lastName: "Saifi",
  name: "Sameer Saifi",
  role: "Senior Graphic Designer",
  avatar: "/images/avatar.jpg",
  email: "sameer1x9@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and design</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /samx/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/md-sameer-saifi/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/samx99designs/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@samx99designs",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Sameer Saifi</strong> <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-samx-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Sameer, a Senior Graphic Designer
      {/* <Text as="span" size="xl" weight="strong">
        SamX
      </Text> */}
      , where I craft intuitive <br /> designs. After hours, I build my own projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sameer is a Senior Graphic Designer with a passion for transforming complex challenges into simple, elegant
        design solutions. His work spans digital interfaces, interactive experiences, and the convergence of design and
        technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Nutcracker Communications",
        timeframe: "July 2023 - Present",
        role: "Senior Graphic Designer",
        achievements: [
          <React.Fragment key="achievement-1">
            Redesigned the UI/UX for the Nutcracker Communications website, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </React.Fragment>,
        ],
        images: [],
      },
      {
        company: "Xebia",
        timeframe: "November 2021 - February 2023",
        role: "Graphic Designer",
        achievements: [
          <React.Fragment key="achievement-2">
            Designed and developed the UI/UX for the Xebia website, resulting in a 20% increase in user engagement and
            30% faster load times.
          </React.Fragment>,
        ],
        images: [],
      },
      {
        company: "MaxInfo.tech",
        timeframe: "November 2020 - September 2021",
        role: "Graphic Designer",
        achievements: [
          <React.Fragment key="achievement-2">
            Designed and developed the UI/UX for the MaxInfo.tech website, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </React.Fragment>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Delhi",
        description: <>Studied Bachelor of Arts and Design</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with SamX with unnatural speed.</>,
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Adobe Photoshop",
        description: <>Able to edit images and create designs in Photoshop with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Adobe Illustrator",
        description: <>Able to create vector designs in Illustrator with unnatural speed.</>,
        tags: [
          {
            name: "Adobe Illustrator",
            icon: "illustrator",
          },
        ],
        images: [],
      },
      {
        title: "Adobe InDesign",
        description: <>Able to create layouts in InDesign with unnatural speed.</>,
        tags: [
          {
            name: "Adobe InDesign",
            icon: "indesign",
          },
        ],
      },
      {
        title: "Adobe After Effects",
        description: <>Able to create animations in After Effects with unnatural speed.</>,
        tags: [
          {
            name: "Adobe After Effects",
            icon: "after-effects",
          },
        ],
        images: [],
      },
      {
        title: "Adobe Premiere Pro",
        description: <>Able to edit videos in Premiere Pro with unnatural speed.</>,
        tags: [
          {
            name: "Adobe Premiere Pro",
            icon: "premiere-pro",
          },
        ],
        images: [],
      },
      {
        title: "Adobe Lightroom",
        description: <>Able to edit images in Lightroom with unnatural speed.</>,
        tags: [
          {
            name: "Adobe Lightroom",
            icon: "lightroom",
          },
        ],
        images: [],
      },
      {
        title: "Adobe XD",
        description: <>Able to create prototypes in XD with unnatural speed.</>,
        tags: [
          {
            name: "Adobe XD",
            icon: "xd",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };
