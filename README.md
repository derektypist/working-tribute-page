# Derek Dhammaloka Tribute Page (Working Version)

Welcome to my tribute page.  The purpose of this project is to provide a tribute page of myself.  It is a working version of [Tribute Page](https://derektypist.github.io/tribute-page).

## UX

The tribute page provides my name, slogan, image (including caption) and information.

The tribute page consists of year, milestone (e.g. Passed driving test at Sidcup, Kent) and url (if any).  The year is an integer (e.g. 1994).  The milestone is a string (e.g. Passed driving test at Sidcup, Kent).  The url is a string, which can be a link to a pdf file or external website (e.g. LinkedIn) where more information of this milestone is achieved.  Organising principle is timeline.

An object array called timeline has the structure of the form:

    const timeline = [
        {...},
        {
            "year": 2008,
            "milestone": "Joined LinkedIn",
            "url": "https://www.linkedin.com/in/derekdhammaloka"
        },
        {...},
        {...}
    ];

As a user, I want to see a timeline of milestones, which include computing, travel, education and other personal things (e.g. Attended First Horse Race in Epsom, Surrey).  They can go to additional information about the milestone without having to leave the tribute page.  The link is coloured green.  Hovering over the link, the colour changes to fuchsia and a screentip (View Details) is displayed.

PDF Files are provided.

* [Diploma in Software Development](pdf/diploma-software-development.pdf)
* [Degree in Maths, Statistics and Computing](pdf/degree-maths-stats-comp.pdf)
* [Diploma in Web Design Specialist](pdf/diploma-web-design-specialist.pdf)
* [Associate Member of BCS](pdf/ambcs-certificate.pdf)

[Wireframes](wireframes/wireframe-tribute-page.png) are provided.
