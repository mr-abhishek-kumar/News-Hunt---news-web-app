# About this project :-

+ This is a news reading web app.
+ Using this app user can read category related news like `Technology`, `Science`, `Medicine` etc on his/her interest.
+ This project is a meaningfull implementation of my development skills as it facilitates its user to read news which is a real world use case.

# How it is developed.......
1. Frontend of this project is designed using **`React JS`**.
2. For news data and backend, i have used a [News API](https://newsapi.org/v2/top-headlines?Country=us&apiKey=0411ee05757d4caeafbd689f1a70672b) which is free of cost to use in projects.
3. Problem of using this API is that it can be only used during development but it can not be used in hosted server.
4. There are two main endpoints in this api.
5. I have used some of them endpoints to make project more interactive.
6. Some endpoints are `everything`, `top-headlines`<br/>
**top-headlines**<br/>
This endpoint provides live top and breaking headlines for a country, specific category in a country, single source, or multiple sources. You can also search with keywords. Articles are sorted by the earliest date published first.
This endpoint is great for retrieving headlines for use with news tickers or similar.<br/>
**everything**<br/>
Search through millions of articles from over 150,000 large and small news sources and blogs.
This endpoint suits article discovery and analysis
7. There are some request parameters which i use to filter the news data according to user need.<br/>
**category**<br/>
Find sources that display news of this category. Possible options: `business`,  `entertainment` `general` ,`health` ,`science`, `sports`, technology. Default: all categories<br/>
**language**<br/>
Find sources that display news in a specific language. Possible options: `ar` `de` `en` `es` `fr` `he` `it` `nl` `no` `pt` `ru` `sv` `ud` `zh`. Default: all languages.<br/>
**country**<br/>
Find sources that display news in a specific country. Possible options: `ae` `ar` `at` `au` `be` `us` `in` etc. Default: all countries.<br/>
<br/>

# How to run this project on local system.....

### Step 1:-
+ First of all you you have to setup you development environment to run the javascript code on local system.
+ To set up the environment follow the steps:-

Download NodeJs
> [Download](https://download-nodejs.com) nodejs so that javascript code can be run on systen.
### Step 2:-
+ Create a folder on system

### Step 3:-
+ Clone this repository to get the code from github
+ To Clone this reposistory, open folder in command prompt and run these command one by one...
1. ``` js
     git clone https://github.com/mr-abhishek-kumar/News-Hunt---news-web-app.git
   ```

### Step 4:-
+ Run the code
> To run the code follow the steps...
>  1. Change directory
>  ``` js
>    cd News-Hunt---news-web-app
>  ```
>  2. Open terminal in that directory
>  3. Run the command in terminal
>  ``` js
>    npm start
>  ```
