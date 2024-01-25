# Useful resources for neuroscientists
Simultaneously taking inspiration from others' lists and wanting to have a decidicated space for my own without having to save dozens of tabs, I have decided to create my own (non-exhaustive) list of links and pages for neuroscientists covering neuroimaging, programming and research skills. I aim to update it frequently, and will purposely leave out some resources covered by others which I have not used personally. I also will focus more on resources that are 'online-oriented' i.e., not articles or textbooks, although I will include guides written in the style of an 'online book' as they are interactive and often are the best method of learning. Feel free to star/fork this repo or to suggest your own resources for me to add!

## Existing lists of resources
Here are some current 'meta-lists' which already cover a lot of resources, if you don't see a particularly obvious resource in my list, odds are that it is in one of these: 
- [Methods in Neuro](https://github.com/smweis/methods_in_neuro) Steven Weisberg's GitHub extensive list of resources covering the physics of MRI/fMRI, computational/programming, tools for the analysis of MRI/fMRI data, and online datasets, as part of his 'Methods in Neuroimaging' course at the University of Florida
- [Methods in Neuro](https://github.com/smweis/methods_in_neuro) sm
- [Methods in Neuro](https://github.com/smweis/methods_in_neuro) sm
- [Methods in Neuro](https://github.com/smweis/methods_in_neuro) sm


## Neuroimaging
### Conceptual understanding
Struggling to grasp the fundamentals of MRI/fMRI? Want to quickly refresh your mind on the physiological basis of the BOLD signal? Well, these resources are for you!
- [Principles of fMRI](https://www.youtube.com/@principlesoffmri6920) 
- []() 
- []()
### Practical application
Time to put that knowledge into action. These guides exclusively cover MRI/fMRI analysis as I don't use other imaging modalities such as EEG/MEG, fNIRS, TMS. I highly recommend reading through the official documentation released for the software (e.g., FSL, SPM) as well. [This paper](https://applications.emro.who.int/imemrf/Basic_Clin_Neurosci/Basic_Clin_Neurosci_2012_3_5_71_83.pdf) provides a good overview of such tools.
- [Introduction to Working with MRI Data in Python](https://carpentries-incubator.github.io/SDC-BIDS-IntroMRI/index.html) A Software Carpentries course covering MRI file types, organisational formats (e.g., BIDS) and working with open datasets
- [Andy's Brain Book](https://andysbrainbook.readthedocs.io/en/latest/) The OG of neuroimaging tutorials. I don't know many trainee neuroimagers who hasn't used Andy's amazing guides. Highly recommended to check out his [YouTube channel](https://www.youtube.com/@AndrewJahn) as well. Created by Andrew Jahn, University of Michigan
- [NI-edu](https://lukas-snoek.com/NI-edu/index.html) A website covering two courses, “fMRI-introduction” (basic concepts and methodology of functional MRI (fMRI) research) and “fMRI-pattern-analysis” (machine-learning based ‘decoding’ and representational similarity analysis (RSA)), which are in a notebook format. Created by Lucas Snoek, University of Amsterdam
- [U of A: Neuroimaging Core Documentation](https://neuroimaging-core-docs.readthedocs.io/en/latest/index.html) Docs covering a range of neuroimaging tutorials including BIDS, ANTS, FSL, ITK-SNAP and more. Created by Dianne Paterson, University of Arizona
- [Functional Neuroimaging Analysis in Python](https://carpentries-incubator.github.io/SDC-BIDS-fMRI/) A Software Carpentries course covering pre-processing of fMRI data using fMRIPREP and using Python for image manipulation, plotting, cleaning and resting-state connectivity analysis
- [Nilearn](https://nilearn.github.io/stable/index.html#) Official docs for nilearn, 'a package that makes it easy to use advanced machine learning techniques to analyze data acquired with MRI machines'
- [MRI analysis in Python using Nipype, Nilearn and more](https://peerherholz.github.io/workshop_weizmann/index.html) A Jupyter book containing material for a workshop detailing how to use Python to conduct neuroimaging analyses. Created by Peer Herholz, McGill University for The Azrieli National Institute for Human Brain Imaging and Research, Weizmann Institute of Science
- [BrainIAK](https://brainiak.org/tutorials/) Tutorials for more advanced fMRI analysis including machine learning and real-time fMRI
- []() 
- []()


## Computational modeling
- [](https://huggingface.co/learn/deep-rl-course/unit0/introduction) 
- [](https://hannekedenouden.ruhosting.nl/RLtutorial/Instructions.html) 
- [](https://gateway.ipfs.io/ipfs/bafykbzacech7brpxgpckr4zalot5xc5m3336xgb6fuistzod2dlkdftiti4y4?filename=Richard%20S.%20Sutton%2C%20Andrew%20G%20Barto%20-%20Reinforcement%20Learning_%20An%20Introduction%2C%202nd%20Edition-Bradford%20Books%20%282018%29.pdf) 
- [](https://compneuro.neuromatch.io/tutorials/intro.html)
- [](https://ccs-lab.github.io/hBayesDM/articles/getting_started.html)
- [Bayesian Models of Learning and Integration of Neuroimaging Data](https://training.incf.org/lesson/modelling-cognition-using-bayesian-inference) A four-session course teaching how Bayesian statistics may be used to build cognitive models of processes like learning or perception and theoretical and practical instruction on dynamic causal modeling as applied to fMRI and EEG data. Hosted on the INCF, ran by the Krembil Institute for Neuroinformatics
- - [Bayesian Statistics and Bayesian Cognitive Modeling, Part 2](https://github.com/lei-zhang/BayesCog_Part2) The second part (two-days) of a five-day workshop covering Bayesian statistics and cognitive modeling. This second part focuses on more complex Bayesian models including hierarchical models, as well as Bayesian regression. Created by Lei Zhang, University of Birmingham

## Programming
There are loads and loads of online programming courses and resources, I have chosen to list interactive, free guides that focus on learning basic skills.
### R
- [Hands-On Programming with R](https://rstudio-education.github.io/hopr/index.html) The online (and free) version of Garrett Grolemund's R textbook, written for non-programmers using hands-on examples.
- [PsyTeachR Courses](https://psyteachr.github.io) A whole range of courses covering different capabilities of R, created by the psyTeachR team at the University of Glasgow.
- [R for Reproducible Scientific Analysis](https://unirdg-carpentries.github.io/r-novice-gapminder-modified/) Software Carpentries' 2-day workshop on R, with a theme on open and reproducible research. Ran by the University of Reading.
- [R, Open Research, and Reproducibility](https://r-openresearch-reproducibility.netlify.app/) Andrew Stewart's 12-workshop course on R, Open Research, and Reproducibility, taught to students at the University of Manchester
- [R, Git and bash](https://unirdg-carpentries.github.io/2021-07-27-Reading-R-Git-Bash/) Software Carpentries' 3-day workshop on Git, Bash and R, with a theme on open and reproducible research. Ran by the University of Reading.
### Python
- [Michael Notter's Introduction to Python](https://miykael.github.io/nipype_tutorial/notebooks/introduction_python.html) Uses an interactive notebook format
- [Lucas Snoek's Introduction to Python](https://lukas-snoek.com/introPy/solutions/week_1/0_introduction.html) Also uses an interactive Jupyter notebook format
### stan
- [Getting Started in Rstan](https://github.com/stan-dev/rstan/wiki/RStan-Getting-Started) Rstans GitHub docs to getting started
- [NivStan](https://nivlab.github.io/nivstan/) A guide to getting started in stan with tutorials written by the Niv Lab at Princeton
### git
- [Version Control with Git](https://swcarpentry.github.io/git-novice/) Software Carpentries workshop on Git, see the University of Birmingham's version [here](https://bham-carpentries.github.io/git-novice/)
- [Learn Git Branching](https://learngitbranching.js.org/) A really run and 'gamified' way of learning Git branching created by Peter Cottle
- []() 
### Unix/Linux
- [The Unix Shell](https://swcarpentry.github.io/shell-novice/) Software Carpentries workshop on Unix
- [Ubuntu Linux Guide](https://www.nutanix.dev/lab_content/dev-setup-lab/contents/master_linux.html) Nutanix's guide to Linux on Ubuntu

## Other miscellaneous skills cognitive neuroscientists may be interested in learning
- [Quarto](https://quarto.org/) 
- [Binder](https://mybinder.readthedocs.io/en/latest/introduction.html) 
- [Google Colab](https://colab.research.google.com/notebooks/intro.ipynb#scrollTo=lSrWNr3MuFUS) 
- [Binder](https://kaust-vislab.github.io/introduction-to-docker-for-data-scientists/02-getting-started-with-binder/index.html) 
- [Jupyter](https://peerherholz.github.io/workshop_weizmann/prerequisites/intro_jupyter.html) 
- [Phaser](https://phaser.io/learn)

## Statistics
### General statistics knowledge
- [Statistical Thinking for the 21st Century](https://statsthinking21.github.io/statsthinking21-core-site/) Russ Poldrack's guide to statistics and statistical thinking, developed for undergraduates at Stanford
- [psych252slides](https://github.com/psych252/psych252slides) Tobias Gerstenberg's slides and RMarkdown notes for the course "Psych 252: Statistical methods for the behavioral and social sciences" at Stanford
### Bayesian statistics
- [An Introduction to Bayesian Thinking](https://statswithr.github.io/book/) The companion for the 'Bayesian Statistics' course on Coursera, providing an introduction to Bayesian inference in decision making and an open-access introduction to Bayesian inference using R
- [Ben Lambert's website](https://ben-lambert.com/bayesian/) Resources for both a course on Bayesian statistics created for PhD students the University of Oxford and ‘The distribution zoo‘ a shiny app that allows a user to interactively investigate distributions. Created by Ben Lambert, University of Oxford. Check out his YouTube channel playlist on Bayesian statistics [here](https://www.youtube.com/watch?v=P_og8H-VkIY&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG)
- [Advanced Analysis Methods in Natural Resources and Environmental Science](https://kevintshoemaker.github.io/NRES-746/LECTURE6.html) Interactive lecture on Bayesian statistics, MCMC and Bayesian modeling as part of a course created by Kevin Shoemaker, University of Nevada, Reno.
- [An Introduction to Bayesian Data Analysis for Cognitive Science](https://vasishth.github.io/bayescogsci/book/) A GitHub online book for the 'relatively gentle introduction to carrying out Bayesian data analysis and cognitive modeling using the probabilistic programming language Stan'. Written by Bruno Nicenboim (Tilburg), Daniel Schad (Potsdam), and Shravan Vasishth (Potsdam)
- [Bayesian Statistics and Bayesian Cognitive Modeling, Part 1](https://github.com/lei-zhang/BayesCog_Part1) The first part (three-days) of a five-day workshop covering Bayesian statistics and modeling. This first part covers the basics of Bayesian inference, probability theory and Markov chain Monte Carlo. Created by Lei Zhang, University of Birmingham
- []()

## Research guidance, planning and open research practice
Getting into a field as complicated and challenging as cognitive neuroscience can be overwhelming. These resources are a great guide to organising one's research, 
- [The Turing Way](https://the-turing-way.netlify.app/index.html) - Must-read detailed guide on how to conduct research!
- [The Princeton Handbook for Reproducible Neuroimaging](https://brainhack-princeton.github.io/handbook/index.html) - A great guide for how to conduct reproducible neuroimaging research from the Princeton Neuroscience Institute
- [ARIADNE](https://igor-biodgps.github.io/ARIADNE/intro.html) A guidebook aimed primarily for early career researchers in the field of life sciences, detailing the process of conducting a transparent and reproducible research project from start to finish
- [Open and reproducible neuroimaging: From study inception to publication](https://www.sciencedirect.com/science/article/pii/S1053811922007388) A useful paper on how to plan and organise a neuroimaging study


## Free web-courses
- [INCF Training Space](https://training.incf.org/) A wide range of free courses covering range of topics including neuroscience and reproducibilty, curated by the International Neuroinformatics Coordinating Facility
- []()


## AI Tools
Artificial intelligence is now a pivotal component of academic work, whether we like for it to be or not. Whilst AI tools such as GPT were initially not recommended to be used for literature searches and summaries, recent models trained on domain-specific data (i.e., research papers) are significantly more effective, and are not plagued by the previous limitations such as generating fake references.
### General search engines/chatbots
- [ChatGPT](https://chat.openai.com/) Does this need an introduction?
- [Bard](https://bard.google.com/) Google's version of ChatGPT
### Research specific tools (references, chatbots, literature summaries)
- [SciSpace](https://typeset.io/) A great chatbot which can summarise literature/papers in response to a query, and identify simiarly-themed articles. The ChatGPT of research, highly recommended.
- [Research Rabbit](https://researchrabbitapp.com/) A useful tool to generate similarly-themed papers to a reference
- [scite.ai](https://scite.ai/home) Similar to SciSpace, but asks for a paid subscription (£14 per month) after an initial 7-day free trial period
- [Elicit](https://elicit.com/) A tool that can help with each stage of paper collection and analysis including finding, screening and extracting data from papers. There are free and paid versions.
- [Humata](https://www.humata.ai/) Concisely summarises research papers. has both free and paid plans
- [Litmaps](https://app.litmaps.com/) Generate visual maps of connected papers
- [Connected Papers](https://www.connectedpapers.com/) Similar to Litmaps, another tool to generate visual diagrams of connected papers




## Miscellaneous tools




