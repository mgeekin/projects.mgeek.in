//header
load("./style.scss")

var headerslist='Projects,Author,Resume,Contact'.split(",")

append(app,gen(header,"header",gen(nav,"nav",gen(ul,"navlist"),"nav"),"header"))
append(app,gen(main,'main'))
append(app,gen(footer,'footer'))

headerslist.forEach(h=>{
    
    append(navlist,gen(li,"",gen(a,"",h,"",`#${h}`)))
    var sec = h;
    append(main,gen(section,sec,gen(h1,"",sec),"section container"))
})








    

// //var pnglist








//highlights

var highlights=[

  {
    "Title": "SevnJS | Formely known as Generator JS",
    "NameURL": "https://sevnjs.mgeek.in",
    "Description": "Seven function Javascript library for Website frontend design with less typing, less switching to\nHTML CSS. Formely known as Generator JS, it is renamed to SevnJS to avoid confusion with the word 'generator' used in JavaScript and Python."
  },
  {
    "Title": "Sevn Server | python web templating library",
    "NameURL": "https://sevn-server.mgeek.in",
    "Description": "Three function python web templating library comming soon..."
  },
  {
    "Title": "VLSI Conference 2018",
    "NameURL": "http://mnnit.ac.in/vcas2018/",
    "Description": "International Conference on VLSI, Communication and Signal Processing\n\n                Organised by ECED MNNIT Allahabad"
  },
  {
    "Title": "FWH",
    "NameURL": "https://fwh.mgeek.in/",
    "Description": "Wifi hotspot creator on windows xp (year 2013-14) written in python and GUI designed using python/Tkinter"
  },
  {
    "Title": "FormHelper",
    "NameURL": "https://formhelper.mgeek.in/",
    "Description": "A software to fill web forms from data saved in excel sheets. Written in python and GUI designed\n                using\n                KIVY"
  },
  {
    "Title": "Research Projects | Old mGeek.in",
    "NameURL": "http://old.mgeek.in/",
    "Description": "Static Websited written jekyll and jekyll theme compiled with ruby gems. It hosted Matlab Research Projects"
  },
  {
    "Title": "EasyList",
    "NameURL": "https://easylist.mgeek.in/",
    "Description": "Shopping and ordering website for URC Tughlakabad to facilitate ordering during COVID-19 pandamic."
  },
  {
    "Title": "MAC 2023 | Conference Information Website",
    "NameURL": "https://mac2023.github.io",
    "Description": "INTERNATIONAL CONFERENCE ON MICROWAVE, ANTENNA, AND COMMUNICATION\n\n                Organised by ECED MNNIT Allahabad"
  },
]


append(Projects, gen(div, `ProjectContainer`, "", `grid-container`))

for (i = 0; i < highlights.length; i++) {
  var url = highlights[i].NameURL
  var text = highlights[i].Description

  var detailVar = "d" + i

  append(ProjectContainer, gen(div, `Project${i}`, "", `project`))
  append(`#Project${i}`, gen(h2, "", highlights[i].Title, "project-title"))
  append(`#Project${i}`, gen(p, "", gen(span, "", gen(a, "", url.split("//")[1].toUpperCase(), "", { href: url, title: url, target: "_blank" }))))
  append(`#Project${i}`, gen(p, "", gen(span, "", text, "project-description")))

}

// //youtube 
// var ytembed=`<p id="ytp" width="100%"><iframe id="ytVideo" width="560" height="315" src="https://www.youtube.com/embed/nIwndbfBDFU" title="" frameBorder="0"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  allowFullScreen><br>Powered by <a href="https://youtubeembedcode.com">embed youtube video</a> and <a href="http://eucasinos.se/">eu casino</a></iframe></p>`


append(main,gen(section,"misc",gen(h1,"","Forward Resume"),"container section"))



















//
















introArray = [`
Hi! I am <b>Dr. Prateek Raj Gautam</b>.`,

`I earned my <b>Ph.D.</b> in 2021 from <b>Motilal Nehru National Institute of Technology (MNNIT) Allahabad</b>, Prayagraj, India, under the supervision of <b>Dr. Arvind Kumar</b>. My doctoral research was titled "<b><i>Energy-Efficient 2D and 3D Localization in Wireless Sensor Networks using a Single Anchor Node</i></b>".`,

`I have over <b>seven years of teaching experience</b> as an <b>Assistant Professor</b>, including more than <b>four years in Computer Science domains</b> such as Machine Learning, IoT, and Data Science. I received my <b>M.Tech.</b> degree in Electronics and Communication Engineering from <b>Harcourt Butler Technological Institute (HBTI), Kanpur</b>, India, in 2011.`,

`My research and teaching interests include <b>Machine Learning, Reinforcement Learning, Internet of Things (IoT), Wireless Sensor Networks (WSN), Computer Vision, and intelligent systems</b>. I have hands-on experience in designing and delivering <b>IoT-based modules and labs</b>, including sensor integration, microcontroller programming (Arduino/ESP), data acquisition, and cloud-based IoT applications.`,

`I have strong programming skills in <b>Python and JavaScript</b>, and experience in developing web and desktop applications using <b>HTML, CSS, Django, Kivy, Eel, and WordPress</b>. I bring practical expertise in <b>modern DevOps and software engineering practices</b>, including <b>Docker, Kubernetes, CI/CD pipelines, Git workflows, and Linux-based development environments</b>, which I actively integrate into teaching and student projects.`,

`I am proficient with technical and simulation tools such as <b>MATLAB, CST Studio Suite, LTspice, Arduino IDE, PlatformIO</b>, along with documentation and visualization tools like <b>LaTeX/TikZ, Inkscape, GIMP, and Blender</b>. I am keen to contribute to interdisciplinary research at the intersection of <b>AI, IoT, and scalable systems</b>. <i>Currently, I am exploring optimization techniques and machine learning approaches for intelligent and distributed systems.</i>`,

`Please find my attached resume for your consideration.`,

`Thank you for your time and consideration. <b>Have a nice day.</b>`
];


introArray.forEach(row=>{
    append(Author,gen(p,"",row,"p1 selectEnable"))
})




var pdfurl="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2026_V01.pdf"
var pdfurl2="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2026_V01_schooling.pdf"
var pdfurlrelative="./V01/Dr.PrateekRajGautam_Resume_2026_V01.pdf"
// var pdfurlrelative=pdfurl;
var phdpdfurl="https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/MainPPTNoVideo.pdf"
// var phdpdfurlrelative="./MainPPTNoVideo.pdf"


append(Resume,gen(div,"",gen(object,"pdfObject","","pdfObject",{data:`${pdfurlrelative}#page=1`,type:"application/pdf"}),"pdfrelated"))
append(pdfObject,gen(div,"pdffallback","","pdffallback"))
getfile("./V01/imagelist.txt",f=>{f.split("\n").filter(Boolean).map(f=>{
  
    var imgurl="./V01/"+f;  
    append(pdffallback,gen(a,"",gen(img,"","","",imgurl),"",{href:pdfurl,target:"_blank"}))
});
append(pdffallback,gen(p,"","This browser does not support PDF!"))
})




function showOpenPDF(e=""){
  if (e==""|| e.key=="d"){
    append(Research,gen(div,"",gen(object,"phdpdfObject","","pdfObject",{data:`${phdpdfurlrelative}#page=1`,type:"application/pdf"}),"pdfrelated"))
    append(phdpdfObject,gen(div,"pdffallback","","pdffallback"))
    append(pdffallback,gen(a,"",'download presentation',"",{href:phdpdfurlrelative,target:"_blank"}))

    append(misc,
      gen(button,'',
        gen(a,
          "",
          "Download PPT",
          "selectDisable",
          {href:phdpdfurl,target:"_blank"}
        ),
        "button"
      )
    )

document.removeEventListener("keydown",showOpenPDF)
}
}



// showOpenPDF()
// append(Research, ytembed) 


//contacts

var ContactLinks = {
  Research: {
    Researchgate: "https://www.researchgate.net/profile/Prateek-Raj-Gautam",
    "Google scholar":
      "https://scholar.google.co.in/citations?user=slZHj6cAAAAJ&hl=en",
    ORCID: "https://orcid.org/0000-0002-2889-4275",
    "Publons/ResearchID":
      "https://publons.com/researcher/2100291/prateek-raj-gautam",
    Scopus: "https://www.scopus.com/authid/detail.uri?authorId=57194277572",
  },

  Social: {
    Telegram: "https://t.me/prateekrajgautam",
    Linkedin: "https://www.linkedin.com/in/prateekrajgautam/",
    Github: "https://github.com/prateekrajgautam",
    Gmail:
      "mailto:prateekrajgautam@gmail.com?subject=from personal website&body=Hello, Dear Dr. Prateek Raj Gautam",
    Whatsapp: "https://wa.me/+919151404899?text=From%20personal%20website",
  },
};

Object.entries(ContactLinks).forEach(entry=>{
    const [key,val]=entry;
    append(Contact,gen(div,key+"section",gen(h3,"",key)))
    var sectionName="#"+key+"section"
    append(sectionName,gen(ul,key+"links","","contact-links"))
    var linkroot="#"+key+"links"

    Object.entries(val).forEach(contacturl=>{
        var [Name,Url]=contacturl
        // log(Name,Url)
        append(linkroot,gen(li,"",gen(a,"",Name,"",{href:Url,target:"_blank"})))
    })

})





append(misc,
  gen(button,'',
    gen(a,
      "",
      "Download Detailed Resume",
      "selectDisable",
      {href:pdfurl2,target:"_blank"}
    ),
    "button"
  )
)

 

setTimeout(() => {
  var emailimages = grab("#pdffallback")[0].innerHTML
  
var forwardasemail=`mailto:edit?cc=prateekrajgautam@gmail.com&subject=Application for the post of Assistant Professor&body=Dear Sir/Madam

        Please consider attached resume for the post of Assistant Professor in ECE, Electrical, and CS of your Institute.
        ${emailimages}
        Download Resume: https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2025_V01_schooling.pdf    
      
        -- 
        Dr. Prateek Raj Gautam  
        9151 404 899  
        https://prateekrajgautam.github.io   
      &attachment=https://raw.githubusercontent.com/prateekrajgautam/prateekrajgautam.github.io/master/V01/Dr.PrateekRajGautam_Resume_2025_V01_schooling.pdf`


      
append(misc,
  gen(button,'',
    gen(a,
      "",
      "Forward as email",
      "selectDisable",
      {href:forwardasemail,target:"_blank"}
    ),
    "button"
  )
)

}, 2000);


$$.init()


document.addEventListener("keydown",showOpenPDF)
console.info(`showOpenPDF()`)