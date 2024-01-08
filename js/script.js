// Set Up Variable
let txt = "";

// Set Up Object Array with Keys of year, milestone and url
const timeline = [{
    "year": 1969,
    "milestone": "Born in Bromley, Kent",
    "url": "#"
},

{
    "year": 1980,
    "milestone": "Attended First Horse Race Meeting in Epsom, Surrey",
    "url": "#"
},

{
    "year": 1982,
    "milestone": "First holiday abroad in Belgium",
    "url": "pdf/belgium-1982.pdf"
},

{
    "year": 1983,
    "milestone": "First plane ride to Spain",
    "url": "#"
},

{
    "year": 1986,
    "milestone": "Received 5 'O' Levels in Maths, Physics, Chemistry, Economics and Computer Studies",
    "url": "pdf/o-level-1986.pdf"
},

{
    "year": 1987,
    "milestone": "Obtained First Printer (Citizen LSP-10) for a computer (BBC Microcomputer)",
    "url": "#"
},

{
    "year": 1988,
    "milestone": "Attended Thames Polytechnic (now University of Greenwich), London",
    "url": "#"
},

{
    "year": 1991,
    "milestone": "Received a BSc in Maths, Statistics and Computing",
    "url": "pdf/degree-maths-stats-comp.pdf"
},

{
    "year": 1993,
    "milestone": "Ran the mile in under 5 minutes for the first time",
    "url": "http://www.bandbhac.org.uk/cr131-091993.html"
},

{
    "year": 1994,
    "milestone": "Passed Driving Test in Sidcup, Kent",
    "url": "#"
},

{
    "year": 1996,
    "milestone": "Obtained First Windows PC",
    "url": "#"
},

{
    "year": 1997,
    "milestone": "First use of the Internet and E-mail",
    "url": "pdf/first-internet-1997.pdf"
},

{
    "year": 1998,
    "milestone": "First use of Microsoft Excel",
    "url": "#"
},

{
    "year": 1999,
    "milestone": "Obtained First Colour Printer (Epson Stylus 440)",
    "url": "#"
},

{
    "year": 2001,
    "milestone": "Obtained First Multifunction Printer (Lexmark X73)",
    "url": "#"
},

{
    "year": 2002,
    "milestone": "Attended First Conference (Vision Without Boundaries) at Hammersmith, London",
    "url": "pdf/iqps-spring-conference-2002.pdf"
},

{
    "year": 2003,
    "milestone": "Made First Online Purchase of Products or Services",
    "url": "#"
},

{
    "year": 2004,
    "milestone": "Joined the British Computer Society (BCS) at Affiliate Level",
    "url": "pdf/bcs-join-2004.pdf"
},

{
    "year": 2006,
    "milestone": "First ride on Eurostar to Paris, France",
    "url": "#"
},

{
    "year": 2007,
    "milestone": "Attended First Black Tie Event in Coventry, England",
    "url": "#"
},

{
    "year": 2008,
    "milestone": "Joined LinkedIn",
    "url": "https://www.linkedin.com/in/derekdhammaloka"
},

{
    "year": 2009,
    "milestone": "Joined YouTube",
    "url": "https://www.youtube.com/user/derekthesec"
},

{
    "year": 2010,
    "milestone": "Joined Facebook",
    "url": "https://www.facebook.com/derek.dhammaloka"
},

{
    "year": 2011,
    "milestone": "Became Associate Member of the British Computer Society (BCS)",
    "url": "pdf/ambcs-certificate.pdf"
},

{
    "year": 2012,
    "milestone": "Joined Pinterest",
    "url": "pdf/pinterest-join.pdf"
},

{
    "year": 2013,
    "milestone": "Obtained First Tablet PC (Nexus 7)",
    "url": "#"
},

{
    "year": 2014,
    "milestone": "Attended Paradis Latin in Paris, France",
    "url": "#"
},

{
    "year": 2015,
    "milestone": "First Train Ride in Spain",
    "url": "#"
},

{
    "year": 2016,
    "milestone": "Received a Diploma in Web Design Specialist with Pitman Training Peterborough",
    "url": "pdf/diploma-web-design-specialist.pdf"
},

{
    "year": 2017,
    "milestone": "Went on Holiday in Prague, Czech Republic",
    "url": "#"
},

{
    "year": 2018,
    "milestone": "Joined GitHub",
    "url": "https://www.github.com/derektypist"
},

{
    "year": 2019,
    "milestone": "Received a Diploma in Software Development with Code Institute",
    "url": "pdf/diploma-software-development.pdf"
},

{
    "year": 2020,
    "milestone": "Joined Career Karma",
    "url": "pdf/career-karma-join.pdf"
},

{
    "year": 2021,
    "milestone": "Joined Code Signal",
    "url": "#"
},

{
    "year": 2022,
    "milestone": "Became a BCS Professional Member",
    "url": "pdf/mbcs-certificate.pdf"
}, 

{
    "year": 2023,
    "milestone": "Created first portfolio project with PHP",
    "url": "https://www.linkedin.com/feed/update/urn:li:activity:7105948846618275840/"
}];

// Apply For Loop
for (let i = 0; i < timeline.length; i++) {
    // Start the Unordered List
    txt += `<ul>`;

    /*  
    
        Make the year (e.g. 1994) bold
        List item in the form of year - milestone
        If the url is present, provide a link to the url

    */
    if (timeline[i]["url"] != "#") {
        txt += `<li><strong>${timeline[i]["year"]} </strong>- <a href=${timeline[i]["url"]} target="_blank" title="View Details">${timeline[i]["milestone"]}</a></li>`;
    } else {
        txt += `<li><strong>${timeline[i]["year"]} </strong>- ${timeline[i]["milestone"]}</li>`;
    }

    // End the Unordered List
    txt += `</ul>`;
}

// Display the Tribute Information in the Browser Window
document.getElementById("tribute-info").innerHTML = txt;