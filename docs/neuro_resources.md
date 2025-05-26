---
layout: default
title: Home
nav_order: 1
description: "A curated collection of resources for neuroscience and experimental psychology"
permalink: /
---

# Useful learning resources for cognitive neuroscientists

Simultaneously taking inspiration from others' lists and wanting to have a decidicated space for my own without having to save dozens of tabs, I have decided to create my own (non-exhaustive) list of links and pages for neuroscientists covering conceptual subject knowledge, statistics, software, programming, good research practices and online repositories. The list is geared more towards <b>cognitive neuroscience and experimental psychology</b>, and in particular those using <b>fMRI</b> (as this is my own subject area), but regardless of your field within neuroscience/psychology and beyond there should be some useful resources 😊 

I aim to update it frequently, and will purposely leave out some resources covered by others which I have not used personally. I also will focus more on resources that are <b>'online-oriented'</b> i.e., not articles or textbooks, although I will include guides written in the style of an 'online book' as they are interactive and often are the best method of learning. <b>Feel free to star/fork this repo or to suggest your own resources for me to add!</b>

## Existing lists of resources
Here are some current 'meta-lists' which already cover a lot of resources, if you don't see a particularly obvious resource in my list, odds are that it is in one of these: 

- [Methods in Neuro](https://github.com/smweis/methods_in_neuro) Steven Weisberg's GitHub extensive list of resources covering the physics of MRI/fMRI, computational/programming, tools for the analysis of MRI/fMRI data, and online datasets, as part of his 'Methods in Neuroimaging' course at the University of Florida.

- [Hitchhacker's guide to the brain](https://learn-neuroimaging.github.io/hitchhackers_guide_brain/) A 'docs' style website with lists of resources for each stage of neuroimaging analysis including file organisation, planning. preregistration, data collection, pre-processing and analysis, and sharing data. By Remi Gau, McGill University and others.

- [On-line neuroimaging resources](https://github.com/Remi-Gau/online_neuroimaging_resources/blob/master/Main.md) A farily comprehensive list of 'softwares, databases, tutorials, blogs and other resources relevant to learn about neuroimaging or to help perform neuroimaging analysis'. Curated by Remi Gau, McGill University.

- [Awesome statistics](https://github.com/erikgahner/awesome-statistics) This list covers the different aspects of statistics, including probability, causality, hypothesis testing, statistical tests (correlation, regression, Bayesian, Meta-analysis, machine learning), data visulatization and software. In total there are 279 links in the GitHub repo, but the attached dataset in the repository has 1838!! Created by Erik Gahner Lahsen, who also created [Awesome ggplot2](https://github.com/erikgahner/awesome-ggplot2), a similar collection of links for learning about `ggplot2`.

- [Awesome Magnetic Resonance Imaging (MRI)](https://github.com/dangom/awesome-mri) 'A curated list of delightful Magnetic Resonance (MR) courses, books, lectures, papers, blogs and free resources.' Created by Daniel Gomez, Harvard/MIT.

- [Awesome Neuroscience](https://github.com/analyticalmonk/awesome-neuroscience) 'A curated list of awesome neuroscience libraries, software and any content related to the domain.'  Created by Akash Tandon.

- [Computational Psychiatry Starter Pack](https://airtable.com/appzTdqfg1F9FtqUs/shrQO3g80rQwJnarY/tblRhb3w0p96pNsAL/viwBP2ZBRqZhpgl4L?blocks=hide) A list of resources for ECRs interested in delving into computational psychiatry. Created by Aleya Marzuki (Tubingen) and Tsen Vei Lim (Cambridge), to accompany their paper: Bridging minds and policies: supporting early career researchers in translating computational psychiatry research, which can be found [here](https://www.nature.com/articles/s41386-024-01834-1).

- [Computational Modeling Resources](https://docs.google.com/document/d/1tDbPshnQsbWnuHWbCOj4OzY6yPrD4TZ4fI1W05JzUCw/edit) A Google Doc for resources in Computational Modeling by Caroline Charpentier (Maryland).

- [fMRI-Resources](https://github.com/jpyles/fMRI-Resources) A GitHub list not dissimilar to this one, providing information and resources on functional MRI. Created by John Pyles.

- [resouRces](https://www.resourcesdatabase.com/) An extensive list of R resources including: Docker, Eye-Tracking, GIT, Machine Learning, Meta-Analyses & Systematic Reviews, R for Neuro and Statistics. Created by Joscelin Rocha-Hidalgo, Penn State University.

- [Neuroscience Landscape](https://neuroscience-landscape.com/) A GUI-based collection of various groups, software, datasets and courses in neuroscience. It is not specific to neuroimaging, but there are plenty of neuroimaging resources included. By Nikolay Dubina.

## Neuroimaging

### Conceptual understanding
Struggling to grasp the fundamentals of MRI/fMRI? Want to quickly refresh your mind on the physiological basis of the BOLD signal? Well, these resources are for you!

- [Principles of fMRI](https://www.youtube.com/@principlesoffmri6920) The OG YouTube series for understanding the conceptual basis of MRI/fMRI. Created by Martin Lindquist and Tor Wager of Dartmouth College.

- [Neuroimaging Research Methods](https://www.youtube.com/@neuroimagingresearchmethods) Another YouTube channel for learning about MRI/fMRI including research methods. Created by Rasmus Birn, University of Wisconsin-Madison.

- [Introduction to Principles of MRI](https://larsonlab.github.io/MRI-education-resources/Introduction.html) A short book and associated simulation code for learning the principles of magnetic resonance imaging (MRI). Created by Peder Larson for students at UCSF.

- [Questions and Answers in MRI](https://mriquestions.com/index.html) Ever had a question about the basis of MRI/fMRI? Written from the perspective of a physicist, this website was specifically made to answer these questions. Created by Allen Elster, Washington University School of Medicine.

- [fMRI Bootcamp](https://cbmm.mit.edu/fmri-bootcamp) A lecture series on fMRI, both conceptual and methodological by Rebecca Saxe, MIT.

- [MIT 9.13 The Human Brain, Spring 2019](https://www.youtube.com/playlist?list=PLUl4u3cNGP60IKRN_pFptIBxeiMc0MCJP) A course which 'surveys the core perceptual and cognitive abilities of the human mind and explores how they are implemented in the brain'. Delivered by Nancy Kanwisher, MIT.

- [Designing and Analysing fMRI Experiments](https://www.youtube.com/playlist?list=PL20gKJcYxxBU3kXvu58vf-lL2XxtLHtRL) A YouTube playlist of short lectures on neuroimaging. They 'are intended to be relevant to anyone interested in learning to design their own fMRI experiments and analyse their data'. Created by Joseph Devlin, UCL for the MRes in Cognitive Neuroscience course.

### Practical application
Time to put that knowledge into action. These guides exclusively cover MRI/fMRI analysis as I don't use other imaging modalities such as EEG/MEG, fNIRS or TMS. I highly recommend reading through the official documentation released for the software (e.g., FSL, SPM) as well, which I have left out purposely. [This paper](https://applications.emro.who.int/imemrf/Basic_Clin_Neurosci/Basic_Clin_Neurosci_2012_3_5_71_83.pdf) provides a good overview of neuroimaging tools commonly used.

#### Analysis of fMRI data
- [Introduction to Working with MRI Data in Python](https://carpentries-incubator.github.io/SDC-BIDS-IntroMRI/index.html) A Software Carpentries course covering MRI file types, organisational formats (e.g., BIDS) and working with open datasets.

- [Andy's Brain Book](https://andysbrainbook.readthedocs.io/en/latest/) The OG of neuroimaging tutorials. I don't know many trainee neuroimagers who hasn't used Andy's amazing guides. Highly recommended to check out his [YouTube channel](https://www.youtube.com/@AndrewJahn) as well. Created by Andrew Jahn, University of Michigan.

- [NI-edu](https://lukas-snoek.com/NI-edu/index.html) A website covering two courses, “fMRI-introduction” (basic concepts and methodology of functional MRI (fMRI) research) and “fMRI-pattern-analysis” (machine-learning based ‘decoding’ and representational similarity analysis (RSA)), which are in a notebook format. Created by Lucas Snoek, University of Amsterdam.

- [U of A: Neuroimaging Core Documentation](https://neuroimaging-core-docs.readthedocs.io/en/latest/index.html) Docs covering a range of neuroimaging tutorials including BIDS, ANTS, FSL, ITK-SNAP and more. Created by Dianne Paterson, University of Arizona.

- [Functional Neuroimaging Analysis in Python](https://carpentries-incubator.github.io/SDC-BIDS-fMRI/) A Software Carpentries course covering pre-processing of fMRI data using fMRIPREP and using Python for image manipulation, plotting, cleaning and resting-state connectivity analysis.

- [Nilearn](https://nilearn.github.io/stable/index.html#) Official docs for nilearn, 'a package that makes it easy to use advanced machine learning techniques to analyze data acquired with MRI machines'.
- [MRI analysis in Python using Nipype, Nilearn and more](https://peerherholz.github.io/workshop_weizmann/index.html) A Jupyter book containing material for a workshop detailing how to use Python to conduct neuroimaging analyses. Created by Peer Herholz, McGill University for The Azrieli National Institute for Human Brain Imaging and Research, Weizmann Institute of Science.

- [NEURO Python and GLM](https://github.com/N-HEDGER/NEURO_Python) An interactive guide to using Python for fMRI data analysis, as well as a visual demonstration of concepts in neuroimaging such as proprcessing and the General Linear Model (GLM). The more basic overview of FSL/FEAT and GLM stuff is [here](https://github.com/N-HEDGER/training-fens/tree/main/UoReading). Materials by Nick Hedger, University of Reading.

- [Dartbrains](https://dartbrains.org/content/intro.html) A notebook style introduction to neuroimaging in Python. The materials cover how scanner generates data, how psychological states can be probed in the scanner, and how this data can be processed and analyzed. Created by Luke Chang, Dartmouth College.

- [BrainIAK](https://brainiak.org/tutorials/) Tutorials for more advanced fMRI analysis including machine learning and real-time fMRI.

- [Explorations of fMRI methods and theory](https://github.com/huffman-spatial-cognition-lab/exploration_of_fMRI_methods_and_theory) A course containing Python notebooks and instructions for running explorations of activation analysis and multivariate pattern analysis (MVPA) to demonstrate the interplay between fMRI methods and theory. Created for an undergraduate cognitive neuroscience course at Colby College by Derek Huffman. See the accompanying preprint [here](https://osf.io/preprints/psyarxiv/8kvfu).

- [Data analysis for Neuroimaging (DAFNI)](https://schluppeck.github.io/dafni/) Denis Schluppeck's materials for the MSc Cognitive Neuroscience course at the University of Nottingham, covering SPM, git, FSL and MATLAB.

- [Practice and theory of brain imaging](https://textbook.nipraxis.org/intro.html) A comprehensive course on neuroimaging in Python, with modules on reproducibility in programming/neuroimaging. Created by the Nipraxis team (Matthew Brett, Chris Markiewicz, Oscar Estaban, Zvi Baratz, Peter Rush).

- [Psych 214 – functional MRI methods](https://bic-berkeley.github.io/psych-214-fall-2016/) A 'hands-on course teaching the principles of functional MRI (fMRI) data analysis' created for students at UC Berkeley by Matthew Brett and JB Poline.

#### Meta-analysis of fMRI data
- [NiMARE](https://nimare.readthedocs.io/en/stable/index.html) NiMARE is a Python package for performing meta-analyses, and derivative analyses using meta-analytic data, of the neuroimaging literature, providing a standard syntax for performing a wide range of analyses and for interacting with databases of coordinates and images from fMRI studies.

- [SDM Project](https://www.sdmproject.com/) Seed-based d Mapping (formerly "Signed Differential Mapping") is a statistical technique for meta-analyzing studies on differences in brain activity or structure which used neuroimaging techniques such as fMRI, VBM, DTI or PET.

- [Neurosynth Compose](https://compose.neurosynth.org/) A free and open platform for neuroimaging meta-analysis where you can perform custom neuroimaging meta-analyses entirely in the browser, and quickly get results in the cloud using automated analysis pipelines.

### Neuroimaging software/tools
There are far too many to list, and it doesn't bear mentioning software like [FSL](), [SPM](), [AFNI](), [Freesurfer](), [mricron](), and many others that most people will already know about and use. Instead here are some I think are most important for fMRI research that people may not know about. Many of these are collated on the software section of the NITRC (NeuroImaging Tools and Resources Collaboratory) [website](https://www.nitrc.org/top/toplist.php?type=downloads). 

- [CONN](https://web.conn-toolbox.org/) 'CONN is an open-source SPM-based cross-platform software for the computation, display, and analysis of functional connectivity Magnetic Resonance Imaging (fcMRI). CONN is used to analyze resting state data (rsfMRI) as well as task-related designs'. Developed by [Alfonso Nieto-Castanon](https://web.alfnie.com/) and Susan Whitfield-Gabrieli, Boston University/MIT.

- [dcm2niix](https://github.com/rordenlab/dcm2niix) A popular choice (amongst the many available) used to convert neuroimaging data from the DICOM format to the NIfTI format. Created by the Rorden Lab, University of South Carolina.

- [NeuroDebian](https://neuro.debian.net/) NeuroDebian provides 'a large collection of popular neuroscience research software for the Debian operating system as well as Ubuntu and other derivatives. Popular packages include AFNI, FSL, PyMVPA and many others.' 

- [Neurodesk](https://www.neurodesk.org/docs/overview/) A flexible, scalable and easy to use data analysis environment for reproducible neuroimaging. Similar to NeuroDebian, Neurodesk provides a VM with pre-loaded applications installed for neuroimaging analysis.

- [Brainlife](https://brainlife.io/docs/) An online, community-based platform where users can publish code (Apps) and Data while integrating HPC and cloud-computing resources to run apps.

## Behavioural experiments 
Some platforms commonly used for the recruitment and deployment of behavioural experiments, both online and in person.

### Recruitment
- [Amazon Mechanical Turk](https://www.mturk.com/) and [Prolific](https://www.prolific.com/) are two of the most popular services for recruiting online participants.

### Creating/Hosting experiments

- [Qualtrics](https://www.qualtrics.com/uk/) A survey tool that makes it quick and easy to design surveys to be used in experiments.
- [Gorilla](https://gorilla.sc/) and [lab.js](https://lab.js.org/) are popular platforms for building online experiments where no programming is required.
- [jsPsych](https://www.jspsych.org/7.3/) A JavaScript framework for creating behavioral experiments that run in a web browser.
- [JATOS](https://www.jatos.org/) Just Another Tool for Online Studies (JATOS) is a powerful, open source study hosting and data collection service which integrates with other experiment building and hosting tools.
- [zTree](https://www.ztree.uzh.ch/en.html) A widely used software package for developing and carrying out economic experiments.
- [oTree](https://www.otree.org/), [LIONESS](https://lioness-lab.org/) and [nodeGame](https://nodegame.org/) are three popular options for creating real-time interactive experiments.
- [Phaser](https://phaser.io/learn) An open source framework for creating interactive games. Increasingly used to create 'gamified' behavioural tasks. See [Agnes Norbury's page](https://github.com/agnesnorbury) for some cool examples.

## Computational modeling/computational psychiatry
Resources for learning how to use computational models for understanding brain (dis)function.

### Tutorials/online books
- [The Deep Reinforcement Learning Course on Hugging Face](https://huggingface.co/learn/deep-rl-course/unit0/introduction) A practical, hands-on course in Deep Reinforcement Learning, from beginner to expert level.

- [Behavioural Modeling](https://hannekedenouden.ruhosting.nl/RLtutorial/Instructions.html) A two-part course covering how to model cognitive behaviour using MATLAB. The first part on standard reinforcement learning models is written by Hanneke den Ouden (Donders Institute), with the second section on Bayesian learning models written by Jill O'Reilly (Oxford University).

- [Neuromatch Academy Computational Neuroscience Course](https://compneuro.neuromatch.io/tutorials/intro.html) A wide-spanning curriculum that covers most areas of computational neuroscience. Some material may be more relevant than others, e.g., Modeling, Reinforcement Learning.

- [hbayesDM](https://ccs-lab.github.io/hBayesDM/articles/getting_started.html) Documentation and guides for the hBayesDM package in R, a 'user-friendly package that offers hierarchical Bayesian analysis of various computational models on an array of decision-making tasks'. By Woo-Young Ahn (Seoul), Nathaniel Haines (Ohio State) and Lei Zhang (Birmingham).

- [Bayesian Models of Learning and Integration of Neuroimaging Data](https://training.incf.org/lesson/modelling-cognition-using-bayesian-inference) A four-session course teaching how Bayesian statistics may be used to build cognitive models of processes like learning or perception and theoretical and practical instruction on dynamic causal modeling as applied to fMRI and EEG data. Hosted on the INCF, ran by the Krembil Institute for Neuroinformatics.

- [Bayesian Statistics and Bayesian Cognitive Modeling, Part 2](https://github.com/lei-zhang/BayesCog_Part2) The second part (two-days) of a five-day workshop covering Bayesian statistics and cognitive modeling. This second part focuses on more complex Bayesian models including hierarchical models, as well as Bayesian regression. Created by Lei Zhang, University of Birmingham.

- [Computational Cognitive Neuroscience, Fourth Edition](https://github.com/CompCogNeuro/ed4) A freely available textbook, providing 'a complete, self-contained introduction to the field of Computational Cognitive Neuroscience, where computer models of the brain are used to understand a wide range of cognitive functions, including perception, attention, motor control, learning, memory, language, and executive function.' By Randall C. O’Reilly, Yuko Munakata, Michael J. Frank and Thomas E. Hazy.

- [Modeling Hub](https://www.gingjehli.com/research-blog) A weekly series of tutorials and blogs covering 'various aspects of modeling from the foundational principles of hierarchical/multilevel modeling (spanning both Bayesian and Frequentist approaches) to the nitty-gritty of advanced modeling techniques, including applications with sequential sampling modeling, neural network modeling, and other machine learning techniques'. Created by Nadia Ging-Jehli. You can find the tutorial code on [GitHub](https://github.com/gingjehli).

- [Handbook for Utility Modeling in Social Decision-Making](https://social-utility-modeling.readthedocs.io/en/latest/index.html) A handbook which aims to 'walk, step-by-step, through the process of computationally modeling behavior in value-based social decision-making tasks - complete with conceptual examples and four fully fledged walk-throughs that you can complete yourself'. Created by Elijah Galvan, Donders Institute, Nijmegen.

- [Probability Distribution Explorer](https://distribution-explorer.github.io/index.html) A tool to explore commonly used probability distributions, particularly useful for setting priors in modeling. By Justin Bois, Caltech.

### Workshops/Groups/Summer Schools
- [Computational Psychiatry Course Zurich](https://www.translationalneuromodeling.org/cpcourse/) A leading 6-day course organized by the Translational Neuromodeling Unit (TNU), University of Zurich & ETH Zurich designed to provide MSc and PhD students, scientists clinicians and anyone interested in Computational Psychiatry with the necessary toolkit to master challenges in computational psychiatry research. Whilst the workshop is delivered yearly in person, resources for past courses are made available.

- [London-New York Computational Psychiatry course](https://www.cpcourse.org/) CPC++ is 'a hybrid course/conference format to equip the next generation of scientists and clinicians who study mental disorders with the tools to understand, to build, to analyse and to critically evaluate computational models of mental function and dysfunction'.

- [COSMOS](https://cosmos-konstanz.github.io/) A yearly summer school, the Computational Summer school on Modeling Social and collective behavior (COSMOS) 'is designed to provide attendees from diverse fields (e.g., psychology, economics, neuroscience, biology, computer science, etc…) and career stages (master, PhD, postdoc, and junior PI) with the computational skills required to tackle emerging challenges in understanding social learning and collective behaviour'. Materials for past schools are made available. Organised by Charley Wu (Tubingen) and Wataru Toyokawa (Konstanz/RIKEN).

- [Computational Models of Human Social Behavior and Neuroscience](https://shawnrhoads.github.io/gu-psyc-347/index.html) An introductory course to the computational modeling of social behaviour for those with no prior programming experience needed. The syllabus covers a broad set of social psychological abilities including (1) learning from and for others, (2) learning about others, and (3) social influence on decision-making and mental states. Created by Shawn Rhoads.

- [Summer Program in Computational Psychiatry Education](https://center-for-computational-psychiatry.github.io/course_spice/) A collection of course materials and resources designed for high school and undergraduate students interested in exploring the field of computational psychiatry and neuroscience. Created by Shawn Rhoads and Sarah Banker at the Center for Computational Psychiatry in the Icahn School of Medicine at Mount Sinai.

### Seminar series
- [Transcontinental Computational Psychiatry Workgroup (TCPW)](https://www.quentinhuys.com/tcpw/) A monthly speaker series featuring leading academics in the field of computational psychiatry. Past videos of speakers are available on the website. Organised by Quentin Huys (UCL), Martin Paulus (Laureate Institute) and Michael Browning (Oxford).

- [Computational Psychiatry Seminar Series](https://seowxft.github.io/cptalks/) A weekly, academic term time, computational psychiatry seminar series covering topics ranging from theoretical and basic neuroscience/psychology, to clinical and translational studies. Organised by Tricia Seow and Xin Zhang, at The Max Planck UCL Centre for Computational Psychiatry and Ageing Research.

## Programming
There are loads and loads of online programming courses and resources, I have chosen to list interactive, free guides that focus on learning basic skills.

### R
- [Hands-On Programming with R](https://rstudio-education.github.io/hopr/index.html) The online (and free) version of Garrett Grolemund's R textbook, written for non-programmers using hands-on examples.

- [PsyTeachR Courses](https://psyteachr.github.io) A whole range of courses covering different capabilities of R, created by the psyTeachR team at the University of Glasgow.

- [R for Reproducible Scientific Analysis](https://unirdg-carpentries.github.io/r-novice-gapminder-modified/) Software Carpentries' 2-day workshop on R, with a theme on open and reproducible research. Ran by the University of Reading.

- [R, Open Research, and Reproducibility](https://r-openresearch-reproducibility.netlify.app/) Andrew Stewart's 12-workshop course on R, Open Research, and Reproducibility, taught to students at the University of Manchester.

- [R, Git and bash](https://unirdg-carpentries.github.io/2021-07-27-Reading-R-Git-Bash/) Software Carpentries' 3-day workshop on `git`, `bash` and R, with a theme on open and reproducible research. Ran by the University of Reading.

- [An introduction to R](https://intro2r.com/) An online interactive book detailing R for beginners, including: data manipulation, plotting with ggplot2, basic statistics, functions, markdown and reproducilbity with git/GitHub. Written by Alex Douglas, Deon Roos, Francesca Mancini, Ana Couto & David Lusseau.

- [The R Graph Gallery](https://r-graph-gallery.com/index.html) Not necessarily a learning guide per se, the R Graph Gallery provides an extensive list of the many types of graphs you can make using `ggplot2` giving examples. Created by [Yan Holtz](https://www.yan-holtz.com/). Also see [this tutorial](https://cedricscherer.netlify.app/2019/08/05/a-ggplot2-tutorial-for-beautiful-plotting-in-r/) by Cedric Scherer on how to make plots using `ggplot2` and [this post](https://waterdata.usgs.gov/blog/ggplot-jazz/) by the [Vizlab](https://labs.waterdata.usgs.gov/visualizations/index.html#/) at the U.S. Geological Survey for advanced ggplotting.

- [Introduction to R 2021](https://biocorecrg.github.io/CRG_RIntroduction/) A basic introduction to R, covering data types, functions and plotting. Created by Sarah Bonnin.

- [Data Science for Psychologists](https://bookdown.org/hneth/ds4psy/) An introduction to data science that is tailored to the needs of students in psychology, but is also suitable for students of the humanities and other biological or social sciences. Created by Hansjorg Neth, University of Konstanz.

- [Statistical Inference via Data Science: A ModernDive into R and the Tidyverse](https://moderndive.com/index.html) The electronic version of the data science book which covers data science with tidyverse, data modeling with moderndive and statistical inference with infer. Created by Chester Ismay (Flatiron School) and Albert Y. Kim (Smith College).

- [An Introduction to Data Analysis](https://michael-franke.github.io/intro-data-analysis/index.html) Basic reading material for an introduction to data analysis with R, covering the use of R for data wrangling and plotting, and data analysis from a Bayesian and a frequentist tradition. Created by Michael Franke.

- [Just Enough R](https://benwhalley.github.io/just-enough-r/) Working with data, models (regression, ANOVA, linear models), confidence intervals, multiple comparisons, fixed/random effects. Created by Ben Whalley.

- [Psy 6135: Psychology of Data Visualization](https://friendly.github.io/6135/) A course in the psychology of data visualization, with practical guidance using `ggplot2()` in `R`. By Michael Friendly (York University).

- [easystats](https://easystats.github.io/easystats/) 'a collection of R packages, which aims to provide a unifying and consistent framework to tame, discipline, and harness the scary R statistics and their pesky models.' Developed by Daniel Lüdecke, Dominique Makowski, Mattan S. Ben-Shachar, Indrajeet Patil, Brenton M. Wiernik, Etienne Bacher and Rémi Thériault.

### Python
- [Michael Notter's Introduction to Python](https://miykael.github.io/nipype_tutorial/notebooks/introduction_Python.html) Uses an interactive notebook format.
- [Lucas Snoek's Introduction to Python](https://lukas-snoek.com/introPy/solutions/week_1/0_introduction.html) Also uses an interactive `Jupyter` notebook format.
- [The Python Graph Gallery](https://Python-graph-gallery.com/) The Python companion piece to Yan Holtz's R Graph Gallery.

### Stan
- [Getting Started in Rstan](https://github.com/stan-dev/rstan/wiki/RStan-Getting-Started) Rstans GitHub docs to getting started.
- [NivStan](https://nivlab.github.io/nivstan/) A guide to getting started in `stan` with tutorials written by the Niv Lab at Princeton.
- [RStan: the R interface to Stan](https://cran.r-project.org/web/packages/rstan/vignettes/rstan.html) An illustration of the features of RStan from the RStan developers team.
- [Bayesian Inference with Stan](https://nicholasrjenkins.science/tutorials/bayesian-inference-with-stan/rstan/) A tutorial on how to use `stan` to perform Bayesian inference, covering stan syntax and how to program linear and binary outcome models. Written by Nick Jenkins, General Motors.

### git
- [Version Control with Git](https://swcarpentry.github.io/git-novice/) Software Carpentries workshop on `git`, see the University of Birmingham's version [here](https://bham-carpentries.github.io/git-novice/).
- [Git and GitLab Tutorial](https://julia-pfarr.github.io/git-gitlab_tutorial/) An introductory tutorial on `git` and `GitLab` made for researchers in psychology or neurosciences with little to no background in software development or no other computational expertise. Created by Julia-Katharina Pfarr, Philipps-Universität Marburg.
- [Learn Git Branching](https://learngitbranching.js.org/) A really run and 'gamified' way of learning `git` branching created by Peter Cottle.

### Unix/Linux
- [The Unix Shell](https://swcarpentry.github.io/shell-novice/) Software Carpentries workshop on Unix.
- [Ubuntu Linux Guide](https://www.nutanix.dev/lab_content/dev-setup-lab/contents/master_linux.html) Nutanix's guide to Linux on Ubuntu.

## Tools for writing, organising and teaching through code

### Writing and hosting code
- [Quarto](https://quarto.org/) A visually appealing framework for data science, Quarto documents are fully reproducible and support dozens of output formats, like PDFs, Word files, presentations, and more.
- [Doxygen](https://www.doxygen.nl/) 'A documentation generator tool in software development. It automates the generation of documentation from source code comments, parsing information about classes, functions, and variables to produce output in formats like HTML and PDF.' Also see [roxygen2](https://cran.r-project.org/web/packages/roxygen2/vignettes/roxygen2.html) an R package that allows you to write in-source documentation for your package functions and objects.
- [Bookdown](https://bookdown.org/) Publish online book-style documents (HTML, PDF, ePub, and Kindle books) with R Markdown.
- [pkgdown](https://pkgdown.r-lib.org/) pkgdown is an R package designed to make it quick and easy to build a website for R packages. 
- [Sphinx](https://www.sphinx-doc.org/en/master/) Sphinx is a powerful documentation generator built in Python that has many great features for writing technical documentation.
- [Jupyter Book](https://jupyterbook.org/en/stable/intro.html) Build beautiful, publication-quality books and documents from computational content using Jupyter.
- [MkDocs](https://www.mkdocs.org/) 'MkDocs is a fast, simple and downright gorgeous static site generator that's geared towards building project documentation. Documentation source files are written in Markdown, and configured with a single YAML configuration file.' Also see [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/).
- [Carpentries Template](https://carpentries.github.io/lesson-example/index.html) A template structure for the Software Carpentries.

### Creating Materials
- [Marp](https://marp.app/) Marp (Markdown Presentation Ecosystem) allows you to create slide decks usign Markdown.
- [Thesisdown](https://github.com/ismayc/thesisdown) Similar to bookdown, thesisdown is a Markdown-oriented approach to writing theses using LaTeX templates.

### Coding environments
- [Jupyter](https://peerherholz.github.io/workshop_weizmann/prerequisites/intro_jupyter.html) Jupyter Notebooks are server-client applications that allows editing and running notebook documents via a web browser.
- [Binder](https://mybinder.readthedocs.io/en/latest/introduction.html) 'The Binder project offers an easy place to share computing environments to everyone. by allowing users to specify custom environments and share them with a single link'. See this [link](https://kaust-vislab.github.io/introduction-to-docker-for-data-scientists/02-getting-started-with-binder/index.html) for a tutorial.
- [Google Colab](https://colab.research.google.com/notebooks/intro.ipynb#scrollTo=lSrWNr3MuFUS) A notebook style environment for running code not dissimilar to a combination of Binder and Jupyter Notebooks, but with more GPU.
- [nbviewer](https://nbviewer.org/) An online Jupyter notebook viewer and renderer.
- [Stackblitz](https://stackblitz.com/) An online interactive IDE which boots entire development environments in milliseconds, securely within your browser tab.
- [Codeshare](https://codeshare.io/) Share and work with code editors online with others in real-time.
- [Codepen](https://codepen.io) An interactive three-tiered window where users can create frontend projects using HTML, CSS, and JavaScript in real-time.
- [Replit](https://replit.com/) Replit is an online integrated development environment (IDE) that enables users to write, run, and collaborate on code from their browsers.

## Statistics and statistical thinking

### General statistics knowledge
- [Statistical Thinking for the 21st Century](https://statsthinking21.github.io/statsthinking21-core-site/) Russ Poldrack's guide to statistics and statistical thinking, developed for undergraduates at Stanford.

- [psych252slides](https://github.com/psych252/psych252slides) Tobias Gerstenberg's slides and RMarkdown notes for the course "Psych 252: Statistical methods for the behavioral and social sciences" at Stanford.

- [Answering questions with data](https://www.crumplab.com/statistics/) A free textbook teaching introductory statistics for undergraduates in psychology. Created by Matthew J.C. Crump (City University of New York), Danielle J. Navarro and Jeffrey Suzuki.

- [The Effect: An introduction to Research Design and Causality](https://theeffectbook.net/index.html) The Effect is a book intended to introduce students (and non-students) to the concepts of research design and causality in the context of observational data. Created by Nick Huntington-Klein (Seattle University).

- [Improving Your Statistical Inferences](https://lakens.github.io/statistical_inferences/) A textbook designed 'to improve statistical inferences, design better experiments, and report scientific research more transparently'. Created by Daniel Läkens.

- [Seeing Theory](https://seeing-theory.brown.edu/) A visual guide to probability and statistics created by Daniel Kunin, Jingru Guo, Tyler Dae Devlin, and Daniel Xiang.

- [Learning statistics with R](https://learningstatisticswithr.com/book/) A practical overview of statistics, learned practically through R. By Danielle Navarro, University of Adelaide.

- [Learning statistics with Python](https://ethanweed.github.io/pythonbook/landingpage.html) A Python adaptation of the 'Learning Statistics with R' by Ethan Weed, Aarhus University.

- [How to Interpret Statistical Models Using `marginaleffects` in R and Python](https://marginaleffects.com/) A free online book 'designed to empower researchers who want to translate model outputs into accurate insights that are accessible to a wide audience.' Created by Vincent Arel-Bundock, Noah Greifer and Andrew Heiss.

- [Causal Inference](https://mixtape.scunning.com/) An online book in causal inference using various statistical techniques. Created by Scott Cunningham.

-[STAT 245 Course Notes](https://stacyderuiter.github.io/s245-notes-bookdown/index.html) An online course in regression modelling, covering many different regression model types (linear, zero-inflated, binary) model selection using information criteria, and model validation. Created by Stacy DeRuiter, Calvin University.

### Bayesian statistics
- [An Introduction to Bayesian Thinking](https://statswithr.github.io/book/) The companion for the 'Bayesian Statistics' course on Coursera, providing an introduction to Bayesian inference in decision making and an open-access introduction to Bayesian inference using R.

- [Ben Lambert's website](https://ben-lambert.com/bayesian/) Resources for both a course on Bayesian statistics created for PhD students the University of Oxford and ‘The distribution zoo‘ a shiny app that allows a user to interactively investigate distributions. Created by Ben Lambert, University of Oxford. You can also check out his YouTube channel playlist on Bayesian statistics [here](https://www.youtube.com/watch?v=P_og8H-VkIY&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG).

- [Advanced Analysis Methods in Natural Resources and Environmental Science](https://kevintshoemaker.github.io/NRES-746/LECTURE6.html) Interactive lecture on Bayesian statistics, MCMC and Bayesian modeling as part of a course created by Kevin Shoemaker, University of Nevada, Reno.

- [An Introduction to Bayesian Data Analysis for Cognitive Science](https://vasishth.github.io/bayescogsci/book/) A GitHub online book for the 'relatively gentle introduction to carrying out Bayesian data analysis and cognitive modeling using the probabilistic programming language Stan'. Written by Bruno Nicenboim (Tilburg), Daniel Schad (Potsdam), and Shravan Vasishth (Potsdam).

- [Bayesian Statistics and Bayesian Cognitive Modeling, Part 1](https://github.com/lei-zhang/BayesCog_Part1) The first part (three-days) of a five-day workshop covering Bayesian statistics and modeling. This first part covers the basics of Bayesian inference, probability theory and Markov chain Monte Carlo. Created by Lei Zhang, University of Birmingham.

- [Bayesian Approaches in R](https://m-clark.github.io/mixed-models-with-R/) Part of the larger 'Mixed Models in R' workbook, the Bayesian Approaches section covers Bayesian regression models using the `brms` package in R. Created by Michael Clark. See his [website](https://m-clark.github.io/) for more examples on Bayesian statistics in R including [this article](https://m-clark.github.io/posts/2021-02-28-practical-bayes-part-i/) on Practical Bayes.

- [Course Handouts for Bayesian Data Analysis Class](https://psyc-bayes-notes.netlify.app/) The online collection course handouts for PSYC 621 class taught by Mark Lai, USC. More courses regarding statistics in Psychology can be found on his website [here](https://quantscience.rbind.io/course).

- [Bayes Rules! An Introduction to Applied Bayesian Modeling](https://www.bayesrulesbook.com/) An online book teaching students Bayesian approaches and their everyday modern practice in statistics and data science, using R and `rstan`. By Alicia A. Johnson, Miles Q. Ott and Mine Dogucu.

- [Statistical rethinking with brms, ggplot2, and the tidyverse](https://bookdown.org/content/4857/) An online book designed to accompany Richard McElreath's book of the same name, implementing and testing models under the Bayesian framework using `brms` and `R`. Created by A. Solomon Kurz.

## Research guidance, planning and open research practice
Getting into a field as complicated and challenging as cognitive neuroscience can be overwhelming. These resources are a great guide to organising one's research.

### Journals
- [Open Science Framework](https://osf.io/) The Open Science Framework (OSF) is a tool that promotes open, centralized workflows by enabling capture of different aspects and products of the research lifecycle, including developing a research idea, designing a study, storing and analyzing collected data, and writing and publishing reports or papers.
- [The Journal of Open Source Education](https://jose.theoj.org/) The Journal of Open Source Education is an educator friendly journal for publishing open-source educational materials and software.

### Guides/courses

- Useful papers in the field include: [Open and reproducible neuroimaging: From study inception to publication](https://www.sciencedirect.com/science/article/pii/S1053811922007388#sec0014) (Niso et al., 2022), [A Practical Guide for Improving Transparency and Reproducibility in Neuroimaging Research](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1002506) (Gorgolewski & Poldrack, 2016), [Computational and Informatic Advances for Reproducible Data Analysis in Neuroimaging](https://www.annualreviews.org/content/journals/10.1146/annurev-biodatasci-072018-021237) (Poldrack, Gorgolewski & Varoquaux, 2019) and [Everything Matters: The ReproNim Perspective on Reproducible Neuroimaging](https://www.frontiersin.org/articles/10.3389/fninf.2019.00001/full) (Kennedy et al., 2019).

- [The Turing Way](https://the-turing-way.netlify.app/index.html) - Must-read detailed guide on how to conduct research!

- [The Princeton Handbook for Reproducible Neuroimaging](https://brainhack-princeton.github.io/handbook/index.html) - A great guide for how to conduct reproducible neuroimaging research from the Princeton Neuroscience Institute

- [ARIADNE](https://igor-biodgps.github.io/ARIADNE/intro.html) A guidebook aimed primarily for early career researchers in the field of life sciences, detailing the process of conducting a transparent and reproducible research project from start to finish.

- [Open and reproducible neuroimaging: From study inception to publication](https://www.sciencedirect.com/science/article/pii/S1053811922007388) A useful paper on how to plan and organise a neuroimaging study.

- [Poldrack Lab](https://poldracklab.org/projects.html) A major force in the standardisation and open-nature of neuroimaging research, the Poldrack Lab website contains links to it's manby outputs including [OpenNeuro](https://openneuro.org/), [BIDS](https://bids.neuroimaging.io/), [fMRIPREP](https://fmriprep.org/en/stable/), [MRIQC](https://mriqc.readthedocs.io/en/latest/), [Templateflow](https://www.templateflow.org/) and others.

- [The Good Research Code Handbook](https://goodresearch.dev/index.html) A handbook for organising code with an emphasis on project management. Written by [Patrick Mineault](https://xcorr.net/about/).

- [Friends Don't Make Friends Make Bad Graphs](https://github.com/cxli233/FriendsDontLetFriends) A self-titled 'opinionated essay about good and bad practices in data visualization' with examples demonstrated through R plots. Created by Chenxin Li, University of Georgia.

- [Executable Jupyter Book Template](https://github.com/shawnrhoads/executable-book-template/) Shawn Rhoad's template to host code and visualizations for research projects.

- [ManyBabies](https://manybabies.org/events/) ManyBabies is 'a collaborative project for replication and best practices in developmental psychology research. Our goal is to bring researchers together to address difficult outstanding theoretical and methodological questions about the nature of early development and how it is studied.' Their events page has useful practical talks on best reproducible practices.

- [Research Design in the Social Sciences](https://book.declaredesign.org/) A book that 'introduces a new way of thinking about research designs in the social sciences through the MIDA framework, in which a research design is characterized by four elements: a model, an inquiry, a data strategy, and an answer strategy.' Written by Graeme Blair (UCLA), Alexander Coppock (Yale) and Macartan Humphreys (Columbia/WZB Berlin).

- [Reproducible Computational Environments Using Containers: Introduction to Docker and Singularity](https://epcced.github.io/2024-04-16_containers_bham/index.html) A Carpentries workshop introducing the use of Docker and Singularity containers with the goal of using them to effect reproducible computational environments. Ran by the EPCC Training Team, University of Edinburgh. Also see the [paper](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008316): 'Ten simple rules for writing Dockerfiles for reproducible data science' (Nüst et al., 2020) and associated [GitHub repository](https://github.com/nuest/ten-simple-rules-dockerfiles).

- [Research Data Management (RDM) Workshop](https://julia-pfarr.github.io/rdm_workshop/) A workshop designed to give a generic overview of RDM principles and practices, including OSF, data management, pre-registration, project and data organisation, version control, data storage and sharing, and copyright and licenses. Created by Julia-Katharina Pfarr, Philipps-Universität Marburg.

- [NBIS Tools for reproducible research](https://nbis-reproducible-research.readthedocs.io/en/course_2104/) A course ran by the National Bioinformatics Infrastructure Sweden (NBIS) on reproducibility covering Data management, Conda, Snakemake, Git, Jupyter, Markdown, Docker and Singularity.

- [Computational and Inferential Thinking: The Foundations of Data Science](https://inferentialthinking.com/chapters/intro.html) A online course in data science originally developed for the UC Berkeley course Data 8: Foundations of Data Science by Ani Adhikari, John DeNero and David Wagner.

- [Coding for data](https://lisds.github.io/textbook/intro.html) An introduction to data science by Matthew Brett, borrowing from the Berkeley textbook above.

- [Experimentology: An Open Science Approach to Experimental Psychology Methods](https://experimentology.io/) Experimentology, as described by the authors is 'the set of practices, findings, and approaches that enable the construction of robust, precise, and generalizable experiments'. Created as the foundational course for incoming graduate students in the Stanford psychology department, it provides guidance for preregistration, project management, data sharing, and reproducible report writing. Authored by: Michael C. Frank, Mika Braginsky, Julie Cachia, Nicholas A. Coles, Tom E. Hardwicke, Robert D. Hawkins, Maya B. Mathur and Rondeline Williams.

- [Experiment Cookbook](https://experimentcookbook.com/) A guide book for programming experiments using oTree, a widely-used Python-based framework for behavioral experiments. Created by Ali Seyhun Saral and Austėja Kažemekaitytė.

### Software/tools
- [Cookiecutter](https://drivendata.github.io/cookiecutter-data-science/) 'A logical, reasonably standardized, but flexible project structure for doing and sharing data science work.'
- [Docker](https://davetang.github.io/learning_docker/) A comprehensive introductory course to [Docker](https://docs.docker.com/) by [Dave Tang](https://davetang.org/).

## Philosophy of neuroscience
What are the limitations of fMRI? What can/can't we infer about the brain using neuroimaging? What does it mean to observe statistically significant activity of the prefrontal cortex in response to a specific stimulus? Asking fundamental questions such as these are pivotal as neuroscientists to understand what our tools can and cannot be used for in our research.
- [Tal Yarkoni's Essays](https://talyarkoni.org/writing/) Tal Yarkoni (Research Scientist @ X, the Moonshot Factory) publishes essays/papers on a number of topics, including the use of statistics in neuroimaging/science.

## Free web-courses
- [INCF Training Space](https://training.incf.org/) A wide range of free courses covering range of topics including neuroscience and reproducibilty, curated by the International Neuroinformatics Coordinating Facility.
- [Brainhack School](https://school.brainhackmtl.org/modules/) A list of training modules created by the University of Montreal as part of their Brainhack School. Modules cover introductions to bash, containers, high performance computing, as well as fMRI connectivity and parcellation.

## AI Tools
Artificial intelligence is now a pivotal component of academic work, whether we like for it to be or not. Whilst AI tools such as GPT were initially not recommended to be used for literature searches and summaries, recent models trained on domain-specific data (i.e., research papers) are significantly more effective, and are not plagued by the previous limitations such as generating fake references. Whether or not you decide to implement them in your own work is a personal decision, but here are some useful resources if you decide to.

### Existing lists/resources 
- [There's an AI For That](https://theresanaiforthat.com/) A website compiling 13,114 AIs for 16,561 tasks and 4,847 jobs.
- [Replicate](https://replicate.com/) A community playground for testing LLMs, particularly for image/video generation.

### General search engines/chatbots
- [ChatGPT](https://chat.openai.com/) Does this really need an introduction?
- [Gemini](https://gemini.google.com/app) Google's version of ChatGPT.
- [Claude](https://claude.ai/) Anthropic's answer to ChatGPT. More effective than GPT-4 and Gemini in my experience.
- [GigaBrain](https://thegigabrain.com/) A LLM-like search-engine that scans billions of discussions on Reddit and other online communities to find the most useful posts and comments in response to your prompt.

### Programming assistants 
- [GitHub CoPilot](https://github.com/features/copilot) An interactive coding assistant developed by GitHub that can be implemented in a multitude of environments and IDEs. Costs $10 per month/$100 per year, but free for GitHub Student Developers.
- [Codeium](https://codeium.com/) A free-alternative to GitHub CoPilot.

### Research specific tools (references, chatbots, literature summaries)
- [SciSpace](https://typeset.io/) A great chatbot which can summarise literature/papers in response to a query, and identify simiarly-themed articles. The ChatGPT of research, highly recommended.
- [Research Rabbit](https://researchrabbitapp.com/) A useful tool to generate similarly-themed papers to a reference.
- [scite.ai](https://scite.ai/home) Similar to SciSpace, but asks for a paid subscription (£14 per month) after an initial 7-day free trial period.
- [Elicit](https://elicit.com/) A tool that can help with each stage of paper collection and analysis including finding, screening and extracting data from papers. There are free and paid versions.
- [Humata](https://www.humata.ai/) Concisely summarises research papers. has both free and paid plans.
- [Litmaps](https://app.litmaps.com/) Generate visual maps of connected papers.
- [Connected Papers](https://www.connectedpapers.com/) Similar to Litmaps, another tool to generate visual diagrams of connected papers.
- [RegCheck](https://regcheck.app/) An AI tool for automatically comparing preregistration plans with scientific publications. Lead creator: Jamie Cummins (University of Bern).

## Accessing/sharing data
Open research initiatives are promoting the free availability of code, along with raw behavioural and neuroimaging data. Here are some websites where you can both upload your own data and access the data of others.

### Neuroimaging/behavioural
- [Neurovault](https://neurovault.org/) A public repository of unthresholded statistical maps, parcellations, and atlases of the brain.
- [OpenNeuro](https://openneuro.org/) A public repository of freely available neuroimaging datasets.
- [NITRC-IR](https://www.nitrc.org/xnat/index.php) 'The NITRC Image Repository allows you to search for and freely download public datasets. It includes millions of dollars worth of DICOM and NIfTI images with normal and diagnoses such as child development disorders, Aspergers, Autism, ADHD, Parkinson’s and Schizophrenia'.
- [BrainMap](https://www.brainmap.org/) BrainMap is a database of published task and structural neuroimaging experiments with coordinate-based results (x,y,z) in Talairach or MNI space.
- [OpenCogData](https://nimh-dsst.github.io/OpenCogData/) A database of publicly available cognitive task datasets maintained by Sam Zorowitz and the Data Science and Sharing Team at the National Institute of Mental Health.
- [Psychological stimulus sets and datasets](https://docs.google.com/spreadsheets/u/0/d/1ejOJTNTL5ApCuGTUciV0REEEAqvhI2Rd2FCoj7afops/htmlview#) A Google Sheet listing freely-available datasets within psychology. 

### General output data (code, slides, posters)
- [GitHub](https://github.com/) No explanation needed, this is where you are right now!
- [Zenodo](https://zenodo.org/) An open-access repository developed and maintained by CERN to facilitate the sharing, preservation, and citation of research outputs, including data, presentations and posters.
- [Dryad](https://datadryad.org/stash) 'An open data publishing platform and a community committed to the open availability and routine re-use of all research data'.
- [Code Ocean](https://site.codeocean.com/) A platform where researchers can provision, scale, collaborate, and reproduce computational scientific research by uploading reproducible workstations called 'capsules'.
- [Collaborative Research in Computational Neuroscience](https://crcns.org/) An online data-hosting platform for experimental data sets testing computational models of the brain and new analysis methods. The data include physiological recordings from sensory and memory systems, as well as eye movement data.
- [Figshare](https://plus.figshare.com/) Figshare is a multidisciplinary repository that supports a wide range of research outputs, including datasets, figures, images, posters, presentations, videos.

### Other
- [The Experiment Factory](https://www.expfactory.org/) An open source, modular infrastructure for the deployment of standardized behavioral experiments, surveys, and games ran by the Poldrack Lab. See the docs [here](https://expfactory.github.io/).
- [DataLad](https://www.datalad.org/) DataLad is a data management and distribution tool designed to facilitate handling of large datasets. Check out [this](https://psychoinformatics-de.github.io/rdm-course/) Carpentries course and the [DataLad handbook](https://handbook.datalad.org/en/latest/) for an overview.

## Forums 
(Neuro)science is a team effort where people are always on hand to help. Online forums are a great source of answers for problems that people have faced in the past, as well as a place to ask for help in solving new ones.

- [JISCMail](https://www.jiscmail.ac.uk/) Described as a set of email discussion lists for the UK Education and Research communities, there are literally hundreds of forums and discussion boards covering all aspects of academia. Most pertinent to neuroimaging are the [FSL](https://www.jiscmail.ac.uk/cgi-bin/webadmin?A0=fsl) and [SPM](https://www.jiscmail.ac.uk/cgi-bin/webadmin?A0=SPM) forums.
- [Neurostars](https://neurostars.org/) A question and answer forum for neuroscience researchers, infrastructure providers and software developers, ran by the INCF.
- [CONN Forum](https://www.nitrc.org/forum/forum.php?forum_id=1144) The forum for anything CONN-related, hosted on the NITRC website.

## Other
Miscannelous tools that don't fit into any of the other categories.

### Brain atlases and catalogues
- [Neurosynth](https://neurosynth.org/) A platform for coordinate-based meta-analysis on neuroimaging data.
- [BrainBox](https://brainbox.pasteur.fr/) A platform for real-time collaboration in neuroimaging allowing you to visualise, segment and annotate collaboratively any brain MRI dataset available online.
- [Cognitive Atlas](https://www.cognitiveatlas.org/) 'A collaborative knowledge base characterizing the state of current thought in Cognitive Science'. It covers four main themes: concepts, tasks, disorders and theroies in neuroscience, which are linked together through formal definitions. Ran by Russ Poldrack, Stanford.
- [Neurotorium Brain Atlas](https://neurotorium.org/tool/brain-atlas/) A 3-D interactive brain atlas which describes the function of different brain regions, with references.
- [Brain Catalogue](https://braincatalogue.org/) An online catalogue of brains across many species.

### Icons and illustrations
- [Allison Horst](https://allisonhorst.com/) Artwork for various R-related themes and concepts.
- [Icons8](https://icons8.com/) Vast collection of icons, illustrations, and photos with multiple styles and formats.
- [Flaticon](https://www.flaticon.com/) Extensive database of free vector icons in various formats.
- [The Noun Project](https://thenounproject.com/) Simple and distinctive symbol-based icons for virtually any concept.
- [Font Awesome](https://fontawesome.com/) Popular icon library widely used in web development, with both free and pro versions.
- [Heroicons](https://heroicons.com/) Beautiful hand-crafted SVG icons by the makers of Tailwind CSS.
- [Bootstrap Icons](https://icons.getbootstrap.com/) Free, high quality icon library built for Bootstrap framework.
- [Carbon](https://carbon.now.sh/) Create and share beautiful images of your source code.