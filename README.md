# SelectAnime
<!-- ## Submission for Microsoft Engage 2022 🌟 -->

Your intelligent Anime Recommender Buddy !


<p align="center">
<a href="https://selectanime.herokuapp.com/">
<img src="Images/Icon.png" alt="Selectanime-logo"/>
</a>
</p>
 

<p align="center">
 <a target="_blank" href="https://selectanime.herokuapp.com/">Link to the App</a>
    ·
 <a target="_blank" href="https://drive.google.com/file/d/1cXyD6B5MSzdpG4QpVkH6Em8UBRqaCBaN/view?usp=sharing">Video Demo</a>
</p>
    
<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
               <li><a href="#motivation-for-this-project">Motivation</a></li>
        <li><a href="#salient-features">Salient Features</a></li>
        <li><a href="#compatible-platforms">Compatible Platforms</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
      </ul>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequesities</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#navigating-through-the-app">Navigating Through The App</a></li><ul>
        <li><a href="#select-anime--web-application">Select-Anime  Web appliaction</a></li>
        <li><a href="#anime-recommendation-machine-learning-model">Anime Reommendation Machine learning model</a></li>
      </ul>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
* SelectAnime is my project that I built during Microsoft Engage 2022 program. 
* It is a Content Based Anime Recommender System which is an end to end unsupervised ML project built using React and Django and deployed to Heroku Cloud Platform. 
* Created to help Anime lovers make better choice and help buissness of streaming platforms grow .

## Motivation for this project 
During lockdown or even now , there are times I am bored of movies ans tv shows and want something different and entertaining at the same time . Anime is the next cool option in this case ! But  even after deciding I want to watch anime I am always confused  and the question of ’what to watch next?’ never leaves my mind! This was the idea behind my project . I wanted to help all the anime lovers stuck like me to find their perfect choice !

## Salient Features
* User can select animes from a database of 12,294 anime
* This data set contains information on user preference data from 73,516 users.Each user is able to add anime to their completed list and give it a rating and this data set is a compilation of those ratings.
* User can also search their favourite anime and get recommendations from the model which provides us with more than 20 choices .
 
## Compatible Platforms
Laptops, Desktops and Tablet PCs

## Technologies Used

<p align="left"> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://user-images.githubusercontent.com/82705387/170838888-04528cf0-abc2-41e0-8967-a2656c72d17e.png" width="40" height="40/> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <img src="https://pluralsight2.imgix.net/paths/images/react-c618d5c243.png" alt="mongodb" width="40" height="40"/> <img src="https://www.fullstackpython.com/img/logos/django.png" alt="nodejs" width="40" height="40"/> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png" alt="sass" width="40" height="40"/> </a> <img src="https://user-images.githubusercontent.com/82705387/170839156-823b1356-e096-4064-8c48-b5db2ccf45d4.png" width="40" height="40"/><img src="https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/04/21032431/redux-cover-imgage-1024x768.jpg" width="40" height="40"/> </a> </p>


<!-- installing the project -->
## Getting Started

## Prerequisites
Make sure to install the required dependencies via node package manager 
```bash
  npm install
```
 
 
## Installation

1.   Clone my github repository on your local system
 ```bash
 git clone https://github.com/Charud25/MicrosoftEngage-2022
 ```
2.   Go over to the project directory
 ```bash
 cd ./selectanime
 ```
3.   For setting up client , you can go over to this <a href="https://github.com/Charud25/MicrosoftEngage-2022/tree/main/Client#getting-started-with-create-react-app">link </a>.
 
4.   For setting up server , follow these steps :

 5.   Setup a virtual environment in the project 
 ```bash
 python3 -m venv env
 ``` 

 5.   Run server by using the command,
 ```bash
 python manage.py runserver
 ```
6.    The app is now running at http://127.0.0.1:8000

<!-- APP TUTORIAL-->
## Navigating Through The App

## Select-Anime  Web application

1.  To use my app, you can directly go to the link in the description of this github repository and access the recommedation system application. 

<p align="center"><img src="Images/Homesecreen.png" alt="video call welcome screen" width="700"/></p>

2.  User can also search various animes of his/her choice and the search algorithm gives results in milliseconds also after searching user can get recommnedations down below.

<p align="center">


https://user-images.githubusercontent.com/82705387/170839999-04374f9c-77e5-4b4d-91c7-17fd66b82d8d.mov

</p>



3. The process of input , output and display of results are completely seamless and the recommedation provided by the algorithm are quite accurate according to user experience.
  
## Anime Recommendation Machine learning model

Objectives of the project -

1.   Meet and greet data — Konnichiwa (こんにちわ)
2.   Analyze the data- Byakugan (白ガン)
3.   Preparing data for consumption- Sonaeru (備える)
4.   Recommendation building phase — Tsukuru (作る)
 
### Recommendation algorithm
 
In my recommendation engine , With the ability of machine learning, I have explored the dataset in search of ‘what to watch next?’ using content based and collaborative filtering.

## Collaborative Filtering

Collaborative filtering is a technique that can filter out items that a user might like on the basis of reactions by similar users. It works by searching a large group of people and finding a smaller set of users with tastes similar to a particular user.To implement an item based collaborative filtering, KNN is a perfect go-to model and also a very good baseline for recommender system development.

<p align="center"><img src="Images/1_6_NlX6CJYhtxzRM-t6ywkQ.png" alt="video call welcome screen" width="700"/></p>
 
Cosine Similarity using KNN

Cosine similarity is a metric used to measure how similar the documents are irrespective of their size. Mathematically, it measures the cosine of the angle between two vectors projected in a multi-dimensional space. The cosine similarity is advantageous because even if the two similar documents are far apart by the Euclidean distance (due to the size of the document), chances are they may still be oriented closer together. The smaller the angle, higher the cosine similarity .

 ## Content based filtering

Content-based filtering, also referred to as cognitive filtering, recommends items based on a comparison between the content of the items and a user profile. The content of each item is represented as a set of descriptors or terms, typically the words that occur in a document.A content based recommender works with data that the user provides, either explicitly (rating) or implicitly (clicking on a link). Based on that data, a user profile is generated, which is then used to make suggestions to the user. As the user provides more inputs or takes actions on the recommendations, the engine becomes more and more accurate. 

 <p align="center"><img src="Images/content.png" alt="video call welcome screen" width="700"/></p>
 
 I have explained about my whole recommendation engine in this <a href="https://docs.google.com/document/d/1EVpnFQ2vMfes9e8y2Wy2ba_oDIkxAQbIxEbBCEv4Fgo/edit?usp=sharing"> document</a> feel free to check it out !
 
Combined these all these points I have created a highly accurate anime recomender system using content based and collaborative filtering. After creating the model I have integrated it with the front end of the website which was built using ReactJS by using django framework and deployed the final app on Heroku cloud platform.
 
 
 <!-- ACKNOWLEDGEMENTS -->


