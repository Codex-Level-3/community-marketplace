# Community Marketplace

This Community Marketplace project embodies the culmination of my learning journey this semester. It encompasses a diverse range of skills and technologies acquired, from intializing a Next.js project to the integration of essential npm packages like react-bootstrap and axios. Leveraging Firebase's authentication and Firestore database capabilities, I constructed a robust CRUD (Create, Read, Update, Delete) application, allowing seamless data management. Furthermore, I implemented features such as fetching data from external APIs and crafting dynamic components to showcase this information effectively.

In addition to becoming proficient in backend functionality, I also honed my frontend development skills by employing Tailwind CSS to meticulously style and design the webpage. This comprehensive project not only demonstrates my proficiency in various tools and frameworks but also highlights my ability to integrate them cohesively to build a fully functional and visually appealing web application.

## Daily Project Logs

### Day 1 Log

#### Tasks Completed :

- Intialized a Next.js project.
- Set up Firebase integration for authentication and Firestore database.
- Installed axios for fetching data from GNews API.
- Created components for the following:
  - Footer
  - Header
  - Hero
  - LocalNews
  - NewsCard
  - Sponsors
- Created a wireframe sign-in and sign-up components.

#### Challenges and Solutions :

- One challenge I faced was trying to implement tailwind designs on a bootstrap component.
  - I was recommended <a href='https://readymadeui.com'>Readymadeui.com</a> because it works well with Tailwind CSS.

#### Learnings and Insights :

- Learned about using .env files to prevent important information like API keys from being publish to Github.
- Gained more experience creating Next.js projects and implementing Firebase's authentication.

#### Next Steps :

- Start implementing sign-in and sign-up components.
- Start designing and creating components for dashboard page.
- Finalize a theme for website and add styling to pages.

#### Screenshots

##### Sign-up & Sign-in Wireframes

![alt text](image.png)

### Day 2 Log

#### Tasks Completed :

- Finished designing and styling the Header and Hero Components.
- Fixed and completed designs for Home/ Splash Page.

#### Challenges and Solutions :

- One challenge I faced was trying to convert the readymade Tailwind header into a Next.js component. Another was attempting to apply a background image to the hero section.
  - I solved these problems by researching the issues and examining how others approached them. I tested multiple methods until finding one that worked for me.

#### Learnings and Insights :

- I was able to delve a little deeper into the Tailwind documentation and discover methods that I can apply to future projects. For instance, using arbitrary values to customize my design rather than relying solely on Tailwind's preset sizes.

#### Next Steps :

- Create components for Email & Password: signin and signup, Google authentication, and Signing out.
- Style sign-in and sign-out pages.
- Finalize a design layout for a Dashboard page.

### Day 3 Log

#### Tasks completed :

- Implemented Firebase authentication by creating components for the following:
  - Signing up with email and password
  - Signing in with email and password
  - Logging in with Google
  - Signing out
- Created Sign-In and Sign-Up pages.
- Applied Tailwind CSS styles to both pages using Unsplash images.
- Designed a wireframe for the dashboard page.

#### Challenges and Solutions :

- A problem I faced was figuring out how to layout the dashboard in a logical way.
  - I tackled this issue by utilizing sites like Pinterest to find inspiration and explore similar websites.

#### Learnings and Insights :

- I learned how to create SVG components and pass functions from one component to another as props, then reference them back to the original component. For example, my `Gmail` component contains the SVG for the logo, and I passed the `handleGoogleSignIn` function as a prop, then referenced it back in the `GoogleSignIn` component.

#### Next Steps :

- Develop and style the dashboard page.
- Implement CRUD functionality on the dashboard page.

#### Screenshots

##### Dashboard Wireframe

![alt text](image-1.png)

### Day 4 Log

#### Tasks Completed

- Created `Product.jsx` component to render a list of products.
- Developed `productList.js` to provide static data for products.
- Implemented basic styling for the product display using Tailwind CSS classes.
- Established Firebase integration for user authentication in `Post.jsx` and `Modal.jsx` components.
- Constructed `Post.jsx` component to display individual posts with delete and edit functionality.
  - Created svg componentes with editing functionality - `Edit.jsx` and post deletion functionality - `Trash.jsx`.
- Built `Posts.jsx` component to fetch and display posts, managing user authentication.
- Created `AddComment.jsx` component to enable users to add comments to posts.
- Implemented `ViewComments.jsx` component to display comments for a post.
- Developed `Modal.jsx` component for adding and editing posts with form inputs.
- Added `AddPost.jsx` component for initiating post creation process with a button click.

#### Challenges and Solutions

- The only problem I encountered was the typos/errors/bugs with the signin and signup pages. I fixed it by paying attention to the behavior of the pages and going over the code line by line.

#### Learnings and Insights

As I explore the CRUD (Create, Read, Update, Delete) process, It helps me to realize how data behaves in an application. Each action – creating, reading, updating, or deleting – shows me how users engage with information. I'm intrigued to dive deeper into the CRUD process. Understanding how each action impacts data gives me a clearer picture of how to design user-friendly interfaces.

#### Next Steps

- Add routing to the signin and signup pages.
- Figure out a way to add messages to inform users they must sign in or sign up to see the dashboard page.
- Add more styling to the comment section of posts.

### Day 5 Log

#### Tasks Completed :

- Applied Tailwind CSS styling to components to finalize the overall look of the website.
- Installed react-bootstrap for the comment section and applied their accordion component to `Post.jsx`.
- Added a CTA button to `Hero.jsx`.
- Implemented Next.js `useRouter()` on the sign-in and sign-up pages.
- Enhanced `AddComment.jsx` by adding a displayName feature.
  - If the user is logged in and has a display name, it shows `Logged in as: [displayName]`.
  - If a user doesn't have a display name, it displays an input field for the user to enter their name.

#### Challenges and Solutions :

- I encountered an issue with my Bootstrap accordion not displaying comments. Using Google's dev tools, I identified the issue and initially fixed it in `global.css`. However, I later uninstalled and reinstalled Bootstrap, which resolved the problem.
- Additionally, I faced a strange bug with my Tailwind signup button. I resolved it by using the !important keyword in the CSS file.

#### Learnings and Insights :

- Through working with Next.js's useRouter() and CRUD operations, I gained valuable experience. Dealing with the encountered bugs also helped enhance my problem-solving skills.

#### Next Steps :

- Proceed with refining the site's functionality and implementing Framer Motion.

## Image Credits:

The images for the Sponsor's section were AI-generated. The Hero, Signin, and Signup Images came from Unsplash. The images for the product cards also came from Unsplash.

- Hero: Tim Mossholder
- Signin & Signup: Youssef Naddam
- Vintage Table: Elyssa Fahndrich
- Painting: Mayur Deshpande
- Handbag: Arno Senoner
- iPad: Rahul Chakraborty
- Jewlery: Tara Yates
- Pottery: Toa Heftiba

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
