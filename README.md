# Derek Dhammaloka Tribute Page (Working Version)

Welcome to my tribute page.  The purpose of this project is to provide a tribute page of myself.  It is a working version of [Tribute Page](https://derektypist.github.io/tribute-page).  It is done in the same way as Tribute Page, except that the **working version** can have multiple links.  For example, Links to GitHub and LinkedIn.

## UX

The tribute page provides my name, slogan, image (including caption) and information.

The tribute page consists of year, milestone (e.g. Passed driving test at Sidcup, Kent) and url (if any).  The year is an integer (e.g. 1994).  The milestone is a string (e.g. Passed driving test at Sidcup, Kent).  The url is a string, which can be a link to a pdf file or external website (e.g. LinkedIn) where more information of this milestone is achieved.  

In [IQPS Spring Conference 2002](pdf/iqps-spring-conference-2002.pdf), for example, there are documents in:

- Confirmation of Booking
- Programme
- Speakers
- Report in Career Secretary

In [O Levels](pdf/o-level-1986.pdf), for example, there is information in terms of:

- Name and Location of School (e.g. Kelsey Park School for Boys, Beckenham)
- Boards (e.g. University of London School Examinations Board)
- Month (e.g. June)
- Grades (e.g. B in Chemistry)

In [Belgium 1982](pdf/belgium-1982.pdf), for example, there is information in terms of:

- Invoice
- Information Sheet on De Haan Holiday Village

In [First Internet 1997](pdf/first-internet-1997.pdf), for example, there is information about provider (on headed paper).

Organising principle is timeline.

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

As a user, I want to see a timeline of milestones, which include computing, travel, education and other personal things (e.g. Attended First Horse Race in Epsom, Surrey).  

As a user, I want to go to additional information about the milestone without having to leave the tribute page.  The link is coloured green.  Hovering over the link, the colour changes to fuchsia and a screentip (View Details) is displayed.  When that link is clicked, the web page or pdf file is opened in a new window.

As a user, I would like to see the img element responsively resize, relative to the width of the parent element, without exceeding its original size.  The max-width is set to 100%.

As a user, I would like to see the img element centered within its parent element.  Display is set to block and margin is set to auto.

[PDF Files](pdf) are provided.

- [AMBCS Certificate](pdf/ambcs-certificate.pdf)
- [Belgium in 1982](pdf/belgium-1982.pdf)
- [Degree in Maths, Statistics and Computing](pdf/degree-maths-stats-comp.pdf)
- [Diploma in Software Development](pdf/diploma-software-development.pdf)
- [Diploma in Web Design Specialist](pdf/diploma-web-design-specialist.pdf)
- [IQPS Spring Conference 2002](pdf/iqps-spring-conference-2002.pdf)
- [O Levels in 1986](pdf/o-level-1986.pdf)
- [Joining BCS in 2004](pdf/bcs-join-2004.pdf)
- [Joining Pinterest in 2012](pdf/pinterest-join.pdf)
- [Joining Career Karma in 2020](pdf/career-karma-join.pdf)
- [First Use of Internet and E-mail in 1997](pdf/first-internet-1997.pdf)

[Wireframes](wireframes/wireframe-tribute-page.png) are provided.

## Features

Responsive Image, Links to External Websites or PDF Files and Timeline.  Further links will be added.

## Technologies

This project uses the technologies of HTML5, CSS3, JavaScript and Google Fonts.  JavaScript is used to manipulate the object array.

## Testing

Manually check the links to ensure that they are pointing to the correct destination.  Links to external web pages or PDF files should open in a new window.

## Deployment

This project is deployed on GitHub Pages at https://derektypist.github.io/working-tribute-page using the main branch.

Remote setup use the command

    git remote add origin https://github.com/derektypist/working-tribute-page

Any changes use the command

    git push

## Credits

### Content

The contents of this project was written by me.

### Media

The picture was taken by myself in Easter 2019.

### Acknowledgements

Went to Blackheath & Bromley Harriers AC Web Page (http://www.bandbhac.org.uk) for further information about myself.  Went to Gazettes and selected Sept 1993, which is at http://www.bandbhac.org.uk/cr131-091993.html

Institute of Qualified Private Secretaries (IQPS) for Details of Spring Conference in 2002.

The quote at the bottom of this page is taken from the Simen Daehlin - Mentor - Senior JavaScript Developer (August 2019).

