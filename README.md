# Useful resources for neuroscientists 🧠 📚
Simultaneously taking inspiration from others' lists and wanting to have a decidicated space for my own without having to save dozens of tabs, I have decided to create my own (non-exhaustive) list of links and pages for neuroscientists covering neuroimaging, programming and research skills. I aim to update it frequently, and will purposely leave out some resources covered by others which I have not used personally. I also will focus more on resources that are 'online-oriented' i.e., not articles or textbooks, although I will include guides written in the style of an 'online book' as they are interactive and often are the best method of learning. Feel free to star/fork this repo or to suggest your own resources for me to add!

## Existing lists of resources
Here are some current 'meta-lists' which already cover a lot of resources, if you don't see a particularly obvious resource in my list, odds are that it is in one of these: 
- [Methods in Neuro](https://github.com/smweis/methods_in_neuro) Steven Weisberg's GitHub extensive list of resources covering the physics of MRI/fMRI, computational/programming, tools for the analysis of MRI/fMRI data, and online datasets, as part of his 'Methods in Neuroimaging' course at the University of Florida.
- [Hitchhacker's guide to the brain](https://learn-neuroimaging.github.io/hitchhackers_guide_brain/) A 'docs' style website with lists of resources for each stage of neuroimaging analysis including file organisation, planning. preregistration, data collection, pre-processing and analysis, and sharing data. By Remi Gau, McGill University and others.
- [On-line neuroimaging resources](https://github.com/Remi-Gau/online_neuroimaging_resources/blob/master/Main.md) A farily comprehensive list of 'softwares, databases, tutorials, blogs and other resources relevant to learn about neuroimaging or to help perform neuroimaging analysis'. Curated by Remi Gau, McGill University.
- [Dartbrains](https://dartbrains.org/content/intro.html) A notebook style introduction to neuroimaging in `Python`. The materials cover how scanner generates data, how psychological states can be probed in the scanner, and how this data can be processed and analyzed. Created by Luke Chang, Dartmouth College.
- [Awesome statistics](https://github.com/erikgahner/awesome-statistics) This list covers the different aspects of statistics, including probability, causality, hypothesis testing, statistical tests (correlation, regression, Bayesian, Meta-analysis, machine learning), data visulatization and software. In total there are 279 links in the GitHub repo, but the attached dataset in the repository has 1838!! Created by Erik Gahner Lahsen, who also created [Awesome ggplot2](https://github.com/erikgahner/awesome-ggplot2), a similar collection of links for learning about `ggplot2`.

## Neuroimaging
### Conceptual understanding
Struggling to grasp the fundamentals of MRI/fMRI? Want to quickly refresh your mind on the physiological basis of the BOLD signal? Well, these resources are for you!
- [Principles of fMRI](https://www.youtube.com/@principlesoffmri6920) The OG YouTube series for understanding the conceptual basis of MRI/fMRI. Created by Martin Lindquist and Tor Wager of Dartmouth College.
- [Neuroimaging Research Methods](https://www.youtube.com/@neuroimagingresearchmethods) Another YouTube channel for learning about MRI/fMRI including research methods. Created by Rasmus Birn, University of Wisconsin-Madison.
- [Introduction to Principles of MRI](https://larsonlab.github.io/MRI-education-resources/Introduction.html) A short book and associated simulation code for learning the principles of magnetic resonance imaging (MRI). Created by Peder Larson for students at UCSF.
- [Questions and Answers in MRI](https://mriquestions.com/index.html) Ever had a question about the basis of MRI/fMRI? Written from the perspective of a physicist, this website was specifically made to answer these questions. Created by Allen Elster, Washington University School of Medicine.
- [fMRI Bootcamp](https://cbmm.mit.edu/fmri-bootcamp) A lecture series on fMRI, both conceptual and methodological by Rebecca Saxe, MIT.
- [MIT 9.13 The Human Brain, Spring 2019](https://www.youtube.com/playlist?list=PLUl4u3cNGP60IKRN_pFptIBxeiMc0MCJP) A course which 'surveys the core perceptual and cognitive abilities of the human mind and explores how they are implemented in the brain'. Delivered by Nancy Kanwisher, MIT.

### Practical application
Time to put that knowledge into action. These guides exclusively cover MRI/fMRI analysis as I don't use other imaging modalities such as EEG/MEG, fNIRS or TMS. I highly recommend reading through the official documentation released for the software (e.g., FSL, SPM) as well, which I have left out purposely. [This paper](https://applications.emro.who.int/imemrf/Basic_Clin_Neurosci/Basic_Clin_Neurosci_2012_3_5_71_83.pdf) provides a good overview of neuroimaging tools commonly used.
- [Introduction to Working with MRI Data in `Python`](https://carpentries-incubator.github.io/SDC-BIDS-IntroMRI/index.html) A Software Carpentries course covering MRI file types, organisational formats (e.g., BIDS) and working with open datasets.
- [Andy's Brain Book](https://andysbrainbook.readthedocs.io/en/latest/) The OG of neuroimaging tutorials. I don't know many trainee neuroimagers who hasn't used Andy's amazing guides. Highly recommended to check out his [YouTube channel](https://www.youtube.com/@AndrewJahn) as well. Created by Andrew Jahn, University of Michigan.
- [NI-edu](https://lukas-snoek.com/NI-edu/index.html) A website covering two courses, “fMRI-introduction” (basic concepts and methodology of functional MRI (fMRI) research) and “fMRI-pattern-analysis” (machine-learning based ‘decoding’ and representational similarity analysis (RSA)), which are in a notebook format. Created by Lucas Snoek, University of Amsterdam.
- [U of A: Neuroimaging Core Documentation](https://neuroimaging-core-docs.readthedocs.io/en/latest/index.html) Docs covering a range of neuroimaging tutorials including BIDS, ANTS, FSL, ITK-SNAP and more. Created by Dianne Paterson, University of Arizona.
- [Functional Neuroimaging Analysis in `Python`](https://carpentries-incubator.github.io/SDC-BIDS-fMRI/) A Software Carpentries course covering pre-processing of fMRI data using fMRIPREP and using `Python` for image manipulation, plotting, cleaning and resting-state connectivity analysis.
- [Nilearn](https://nilearn.github.io/stable/index.html#) Official docs for nilearn, 'a package that makes it easy to use advanced machine learning techniques to analyze data acquired with MRI machines'.
- [MRI analysis in `Python` using Nipype, Nilearn and more](https://peerherholz.github.io/workshop_weizmann/index.html) A Jupyter book containing material for a workshop detailing how to use `Python` to conduct neuroimaging analyses. Created by Peer Herholz, McGill University for The Azrieli National Institute for Human Brain Imaging and Research, Weizmann Institute of Science.
- [NEURO `Python` and GLM](https://github.com/N-HEDGER/NEURO_`Python`) An interactive guide to using `Python` for fMRI data analysis, as well as a visual demonstration of concepts in neuroimaging such as proprcessing and the General Linear Model (GLM). The more basic overview of FSL/FEAT and GLM stuff is [here](https://github.com/N-HEDGER/training-fens/tree/main/UoReading). Materials by Nick Hedger, University of Reading.
- [BrainIAK](https://brainiak.org/tutorials/) Tutorials for more advanced fMRI analysis including machine learning and real-time fMRI.
- [Explorations of fMRI methods and theory](https://github.com/huffman-spatial-cognition-lab/exploration_of_fMRI_methods_and_theory) A course containing `Python` notebooks and instructions for running explorations of activation analysis and multivariate pattern analysis (MVPA) to demonstrate the interplay between fMRI methods and theory. Created for an undergraduate cognitive neuroscience course at Colby College by Derek Huffman. See the accompanying preprint [here](https://osf.io/preprints/psyarxiv/8kvfu).

## Computational modeling/computational psychiatry
### Tutorials
- [The Deep Reinforcement Learning Course on Hugging Face](https://huggingface.co/learn/deep-rl-course/unit0/introduction) A practical, hands-on course in Deep Reinforcement Learning, from beginner to expert level.
- [Behavioural Modeling](https://hannekedenouden.ruhosting.nl/RLtutorial/Instructions.html) A two-part course covering how to model cognitive behaviour using MATLAB. The first part on standard reinforcement learning models is written by Hanneke den Ouden (Donders Institute), with the second section on Bayesian learning models written by Jill O'Reilly (Oxford University).
- [Neuromatch Academy Computational Neuroscience Course](https://compneuro.neuromatch.io/tutorials/intro.html) A wide-spanning curriculum that covers most areas of computational neuroscience. Some material may be more relevant than others, e.g., Modeling, Reinforcement Learning.
- [hbayesDM](https://ccs-lab.github.io/hBayesDM/articles/getting_started.html) Documentation and guides for the hBayesDM package in `R`, a 'user-friendly package that offers hierarchical Bayesian analysis of various computational models on an array of decision-making tasks'. By Woo-Young Ahn (Seoul), Nathaniel Haines (Ohio State) and Lei Zhang (Birmingham).
- [Bayesian Models of Learning and Integration of Neuroimaging Data](https://training.incf.org/lesson/modelling-cognition-using-bayesian-inference) A four-session course teaching how Bayesian statistics may be used to build cognitive models of processes like learning or perception and theoretical and practical instruction on dynamic causal modeling as applied to fMRI and EEG data. Hosted on the INCF, ran by the Krembil Institute for Neuroinformatics.
- [Bayesian Statistics and Bayesian Cognitive Modeling, Part 2](https://github.com/lei-zhang/BayesCog_Part2) The second part (two-days) of a five-day workshop covering Bayesian statistics and cognitive modeling. This second part focuses on more complex Bayesian models including hierarchical models, as well as Bayesian regression. Created by Lei Zhang, University of Birmingham.
### Workshops/Groups/Summer Schools
- [Computational Psychiatry Course Zurich](https://www.translationalneuromodeling.org/cpcourse/) A leading 6-day course organized by the Translational Neuromodeling Unit (TNU), University of Zurich & ETH Zurich designed to provide MSc and PhD students, scientists clinicians and anyone interested in Computational Psychiatry with the necessary toolkit to master challenges in computational psychiatry research. Whilst the workshop is delivered yearly in person, resources for past courses are made available.
- [London-New York Computational Psychiatry course](https://www.cpcourse.org/) CPC++ is 'a hybrid course/conference format to equip the next generation of scientists and clinicians who study mental disorders with the tools to understand, to build, to analyse and to critically evaluate computational models of mental function and dysfunction'.
- [Transcontinental Computational Psychiatry Workgroup (TCPW)](https://www.quentinhuys.com/tcpw/) A monthly speaker series featuring leading academics in the field of computational psychiatry. Past videos of speakers are available on the website. Organised by Quentin Huys (UCL), Martin Paulus (Laureate Institute) and Michael Browning (Oxford).
- [COSMOS](https://cosmos-konstanz.github.io/) A yearly summer school, the Computational Summer school on Modeling Social and collective behavior (COSMOS) 'is designed to provide attendees from diverse fields (e.g., psychology, economics, neuroscience, biology, computer science, etc…) and career stages (master, PhD, postdoc, and junior PI) with the computational skills required to tackle emerging challenges in understanding social learning and collective behaviour'. Materials for past schools are made available. Organised by Charley Wu (Tubingen) and Wataru Toyokawa (Konstanz/RIKEN).

## Programming
There are loads and loads of online programming courses and resources, I have chosen to list interactive, free guides that focus on learning basic skills.
### R
- [Hands-On Programming with R](https://rstudio-education.github.io/hopr/index.html) The online (and free) version of Garrett Grolemund's `R` textbook, written for non-programmers using hands-on examples.
- [PsyTeachR Courses](https://psyteachr.github.io) A whole range of courses covering different capabilities of `R`, created by the psyTeachR team at the University of Glasgow.
- [R for Reproducible Scientific Analysis](https://unirdg-carpentries.github.io/r-novice-gapminder-modified/) Software Carpentries' 2-day workshop on `R`, with a theme on open and reproducible research. Ran by the University of Reading.
- [R, Open Research, and Reproducibility](https://r-openresearch-reproducibility.netlify.app/) Andrew Stewart's 12-workshop course on `R`, Open Research, and Reproducibility, taught to students at the University of Manchester.
- [R, Git and bash](https://unirdg-carpentries.github.io/2021-07-27-Reading-R-Git-Bash/) Software Carpentries' 3-day workshop on `git`, `bash` and `R`, with a theme on open and reproducible research. Ran by the University of Reading.
- [An introduction to R](https://intro2r.com/) An online interactive book detailing `R` for beginners, including: data manipulation, plotting with ggplot2, basic statistics, functions, markdown and reproducilbity with git/GitHub. Written by Alex Douglas, Deon Roos, Francesca Mancini, Ana Couto & David Lusseau.
- [The R Graph Gallery](https://r-graph-gallery.com/index.html) Not necessarily a learning guide per se, the `R` Graph Gallery provides an extensive list of the many types of graphs you can make using `ggplot2` giving examples. Created by [Yan Holtz](https://www.yan-holtz.com/). Also see [this tutorial](https://cedricscherer.netlify.app/2019/08/05/a-ggplot2-tutorial-for-beautiful-plotting-in-r/) by Cedric Scherer on how to make plots using `ggplot2` and [this post](https://waterdata.usgs.gov/blog/ggplot-jazz/) by the [Vizlab](https://labs.waterdata.usgs.gov/visualizations/index.html#/) at the U.S. Geological Survey for advanced ggplotting.
### `Python`
- [Michael Notter's Introduction to Python](https://miykael.github.io/nipype_tutorial/notebooks/introduction_`Python`.html) Uses an interactive notebook format.
- [Lucas Snoek's Introduction to Python](https://lukas-snoek.com/introPy/solutions/week_1/0_introduction.html) Also uses an interactive `Jupyter` notebook format.
- [The Python Graph Gallery](https://`Python`-graph-gallery.com/) The `Python` companion piece to Yan Holtz's `R` Graph Gallery.
### stan
- [Getting Started in Rstan](https://github.com/stan-dev/rstan/wiki/RStan-Getting-Started) Rstans GitHub docs to getting started.
- [NivStan](https://nivlab.github.io/nivstan/) A guide to getting started in `stan` with tutorials written by the Niv Lab at Princeton.
- [RStan: the R interface to Stan](https://cran.r-project.org/web/packages/rstan/vignettes/rstan.html) An illustration of the features of RStan from the RStan developers team.
- [Bayesian Inference with Stan](https://nicholasrjenkins.science/tutorials/bayesian-inference-with-stan/rstan/) A tutorial on how to use `stan` to perform Bayesian inference, covering stan syntax and how to program linear and binary outcome models. Written by Nick Jenkins, General Motors.
### git
- [Version Control with Git](https://swcarpentry.github.io/git-novice/) Software Carpentries workshop on `git`, see the University of Birmingham's version [here](https://bham-carpentries.github.io/git-novice/).
- [Learn Git Branching](https://learngitbranching.js.org/) A really run and 'gamified' way of learning `git` branching created by Peter Cottle.
### Unix/Linux
- [The Unix Shell](https://swcarpentry.github.io/shell-novice/) Software Carpentries workshop on Unix.
- [Ubuntu Linux Guide](https://www.nutanix.dev/lab_content/dev-setup-lab/contents/master_linux.html) Nutanix's guide to Linux on Ubuntu.

## Software/useful tools
- [Quarto](https://quarto.org/) A visually appealing framework for data science, Quarto documents are fully reproducible and support dozens of output formats, like PDFs, Word files, presentations, and more.
- [Binder](https://mybinder.readthedocs.io/en/latest/introduction.html) 'The Binder project offers an easy place to share computing environments to everyone. by allowing users to specify custom environments and share them with a single link'. See this [link](https://kaust-vislab.github.io/introduction-to-docker-for-data-scientists/02-getting-started-with-binder/index.html) for a tutorial.
- [Google Colab](https://colab.research.google.com/notebooks/intro.ipynb#scrollTo=lSrWNr3MuFUS) A notebook style environment for running code not dissimilar to Binder, but with more GPU.
- [Jupyter](https://peerherholz.github.io/workshop_weizmann/prerequisites/intro_jupyter.html) An interactive environment for running code.
- [Phaser](https://phaser.io/learn) An open source framework for creating interactive games. Increasingly used to create 'gamified' behavioural tasks. See [Agnes Norbury's page](https://github.com/agnesnorbury) for some cool examples.
- [Neurodesk](https://www.neurodesk.org/docs/overview/) A flexible, scalable and easy to use data analysis environment for reproducible neuroimaging. Essentially provides a VM with pre-loaded applications installed for neuroimaging analysis.
- [Brainlife](https://brainlife.io/docs/) An online, community-based platform where users can publish code (Apps) and Data while integrating HPC and cloud-computing resources to run apps.

## Statistics
### General statistics knowledge
- [Statistical Thinking for the 21st Century](https://statsthinking21.github.io/statsthinking21-core-site/) Russ Poldrack's guide to statistics and statistical thinking, developed for undergraduates at Stanford.
- [psych252slides](https://github.com/psych252/psych252slides) Tobias Gerstenberg's slides and RMarkdown notes for the course "Psych 252: Statistical methods for the behavioral and social sciences" at Stanford.
### Bayesian statistics
- [An Introduction to Bayesian Thinking](https://statswithr.github.io/book/) The companion for the 'Bayesian Statistics' course on Coursera, providing an introduction to Bayesian inference in decision making and an open-access introduction to Bayesian inference using `R`.
- [Ben Lambert's website](https://ben-lambert.com/bayesian/) Resources for both a course on Bayesian statistics created for PhD students the University of Oxford and ‘The distribution zoo‘ a shiny app that allows a user to interactively investigate distributions. Created by Ben Lambert, University of Oxford. You can also check out his YouTube channel playlist on Bayesian statistics [here](https://www.youtube.com/watch?v=P_og8H-VkIY&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG).
- [Advanced Analysis Methods in Natural Resources and Environmental Science](https://kevintshoemaker.github.io/NRES-746/LECTURE6.html) Interactive lecture on Bayesian statistics, MCMC and Bayesian modeling as part of a course created by Kevin Shoemaker, University of Nevada, Reno.
- [An Introduction to Bayesian Data Analysis for Cognitive Science](https://vasishth.github.io/bayescogsci/book/) A GitHub online book for the 'relatively gentle introduction to carrying out Bayesian data analysis and cognitive modeling using the probabilistic programming language Stan'. Written by Bruno Nicenboim (Tilburg), Daniel Schad (Potsdam), and Shravan Vasishth (Potsdam).
- [Bayesian Statistics and Bayesian Cognitive Modeling, Part 1](https://github.com/lei-zhang/BayesCog_Part1) The first part (three-days) of a five-day workshop covering Bayesian statistics and modeling. This first part covers the basics of Bayesian inference, probability theory and Markov chain Monte Carlo. Created by Lei Zhang, University of Birmingham.
- [Bayesian Approaches in R](https://m-clark.github.io/mixed-models-with-R/) Part of the larger 'Mixed Models in `R`' workbook, the Bayesian Approaches section covers Bayesian regression models using the `brms` package in `R`. Created by Michael Clark. See his [website](https://m-clark.github.io/) for more examples on Bayesian statistics in R including [this article](https://m-clark.github.io/posts/2021-02-28-practical-bayes-part-i/) on Practical Bayes.
- [Course Handouts for Bayesian Data Analysis Class](https://psyc-bayes-notes.netlify.app/) The online collection course handouts for PSYC 621 class taught by Mark Lai, USC. More courses regarding statistics in Psychology can be found on his website [here](https://quantscience.rbind.io/course).

## Research guidance, planning and open research practice
Getting into a field as complicated and challenging as cognitive neuroscience can be overwhelming. These resources are a great guide to organising one's research.
- [The Turing Way](https://the-turing-way.netlify.app/index.html) - Must-read detailed guide on how to conduct research!
- [The Princeton Handbook for Reproducible Neuroimaging](https://brainhack-princeton.github.io/handbook/index.html) - A great guide for how to conduct reproducible neuroimaging research from the Princeton Neuroscience Institute
- [ARIADNE](https://igor-biodgps.github.io/ARIADNE/intro.html) A guidebook aimed primarily for early career researchers in the field of life sciences, detailing the process of conducting a transparent and reproducible research project from start to finish.
- [Open and reproducible neuroimaging: From study inception to publication](https://www.sciencedirect.com/science/article/pii/S1053811922007388) A useful paper on how to plan and organise a neuroimaging study.
- [Poldrack Lab](https://poldracklab.org/projects.html) A major force in the standardisation and open-nature of neuroimaging research, the Poldrack Lab website contains links to it's manby outputs including [OpenNeuro](https://openneuro.org/), [BIDS](https://bids.neuroimaging.io/), [fMRIPREP](https://fmriprep.org/en/stable/), [MRIQC](https://mriqc.readthedocs.io/en/latest/), [Templateflow](https://www.templateflow.org/) and others.
- [The Good Research Code Handbook](https://goodresearch.dev/index.html) A handbook for organising code with an emphasis on project management. Written by [Patrick Mineault](https://xcorr.net/about/).
- [Friends Don't Make Friends Make Bad Graphs](https://github.com/cxli233/FriendsDontLetFriends) A self-titled 'opinionated essay about good and bad practices in data visualization' with examples demonstrated through `R` plots. Created by Chenxin Li, University of Georgia. 

## Philosophy of neuroscience
What are the limitations of fMRI? What can/can't we infer about the brain using neuroimaging? What does it mean to observe statistically significant activity of the prefrontal cortex in response to a specific stimulus? Asking fundamental questions such as these are pivotal as neuroscientists to understand what our tools can and cannot be used for in our research.
- [Tal Yarkoni's Essays](https://talyarkoni.org/writing/) Tal Yarkoni publishes essays/papers on a number of topics, including the use of statistics in neuroimaging/science.

## Free web-courses
- [INCF Training Space](https://training.incf.org/) A wide range of free courses covering range of topics including neuroscience and reproducibilty, curated by the International Neuroinformatics Coordinating Facility.
- [Brainhack School](https://school.brainhackmtl.org/modules/) A list of training modules created by the University of Montreal as part of their Brainhack School. Modules cover introductions to bash, containers, high performance computing, as well as fMRI connectivity and parcellation.

## AI Tools
Artificial intelligence is now a pivotal component of academic work, whether we like for it to be or not. Whilst AI tools such as GPT were initially not recommended to be used for literature searches and summaries, recent models trained on domain-specific data (i.e., research papers) are significantly more effective, and are not plagued by the previous limitations such as generating fake references.
### General search engines/chatbots
- [ChatGPT](https://chat.openai.com/) Does this really need an introduction?
- [Bard](https://bard.google.com/) Google's version of ChatGPT.
### Research specific tools (references, chatbots, literature summaries)
- [SciSpace](https://typeset.io/) A great chatbot which can summarise literature/papers in response to a query, and identify simiarly-themed articles. The ChatGPT of research, highly recommended.
- [Research Rabbit](https://researchrabbitapp.com/) A useful tool to generate similarly-themed papers to a reference.
- [scite.ai](https://scite.ai/home) Similar to SciSpace, but asks for a paid subscription (£14 per month) after an initial 7-day free trial period.
- [Elicit](https://elicit.com/) A tool that can help with each stage of paper collection and analysis including finding, screening and extracting data from papers. There are free and paid versions.
- [Humata](https://www.humata.ai/) Concisely summarises research papers. has both free and paid plans.
- [Litmaps](https://app.litmaps.com/) Generate visual maps of connected papers.
- [Connected Papers](https://www.connectedpapers.com/) Similar to Litmaps, another tool to generate visual diagrams of connected papers.

## Repos
- [Neurovault](https://neurovault.org/) A public repository of unthresholded statistical maps, parcellations, and atlases of the brain.
- [OpenNeuro](https://openneuro.org/) A public repository of freely available neuroimaging datasets.
- [The Experiment Factory](https://www.expfactory.org/) An online repository for online behavioral experiments.

## Other
- [Neurosynth](https://neurosynth.org/) A platform for coordinate-based meta-analysis on neuroimaging data.
- [BrainBox](https://brainbox.pasteur.fr/) A platform for real-time collaboration in neuroimaging allowing you to visualise, segment and annotate collaboratively any brain MRI dataset available online.
- [Cognitive Atlas](https://www.cognitiveatlas.org/) 'A collaborative knowledge base characterizing the state of current thought in Cognitive Science'. It covers four main themes: concepts, tasks, disorders and theroies in neuroscience, which are linked together through formal definitions. Ran by Russ Poldrack, Stanford.
- [Brain Catalogue](https://braincatalogue.org/) An online catalogue of brains across many species



