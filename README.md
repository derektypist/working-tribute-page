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

    - Name and Location of School
    - Boards (e.g. University of London School Examinations Board)
    - Grades

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

As a user, I want to see a timeline of milestones, which include computing, travel, education and other personal things (e.g. Attended First Horse Race in Epsom, Surrey).  They can go to additional information about the milestone without having to leave the tribute page.  The link is coloured green.  Hovering over the link, the colour changes to fuchsia and a screentip (View Details) is displayed.

As a user, I would like to see the img element responsively resize, relative to the width of the parent element, without exceeding its original size.  The max-width is set to 100%.

As a user, I would like to see the img element centered within its parent element.  Display is set to block and margin is set to auto.

[PDF Files](pdf) are provided.

    - AMBCS Certificate
    - Degree in Maths, Statistics and computing
    - Diploma in Software Development
    - Diploma in Web Design Specialist
    - Spring Conference 2002
    - O Levels in 1986
    - Joining Pinterest in 2012
    - Joining Career Karma in 2020

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

Went to Blackheath & Bromley Harriers AC Web Page (https://www.bandbhac.org.uk) for further information about myself.  Went to Gazetts and selected Sept 1993, which is at http://www.bandbhac.org.uk/cr131-091993.html

Institute of Qualified Private Secretaries (IQPS) for Details of Spring Conference in 2002.

The quote at the bottom of this page is taken from the Simen Daehlin - Mentor - Senior JavaScript Developer (August 2019).

