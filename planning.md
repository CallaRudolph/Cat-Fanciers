## Planning

1. Configuration/dependencies
  * Angular CLI
  * Bower
  * Bootstrap
  * Firebase
2. Specs
  * It will contain one model: Member, with the following attributes (with data types):
    * Name (string), Bio (string), Number of cats (number), Cat Picture .jpg (string), Location (string)
  * Members will be stored in Firebase
  * User can visit a page to see list of all members
  * User can click on a member to visit their profile page, which will include more details about them
  * User can visit an About page that explains what the club is and what it does
  * Admin can add new members to the club
  * Admin can edit user profiles
  * Admin can delete a user
3. Integration
  * Nav-bar will contain links to landing page, about component, group component, and member-detail component
  * Welcome component will hold brief blurb as landing page
  * About component will hold information on what the club is and what it does
  * Group component will display list of all members (names only). User can click on a member's name to be routed to member-detail component
  * Member-detail component will contain additional attributes about member
  * Footer will contain link to Admin component
  * Admin component will allow for new members to be added, as well as a display back to the Group component.
  * Group component holds a branch to display the edit-member component on the admin route, allowing for editing and deleting individual members.
4. UX/UI
  * Nav-bar will be used to display club name and a picture
  * Develop custom style with bootstrap
5. Polish
  * Develop README with functionality to include in the future, given the opportunity
  * Consider adding additional features, such as:
    * Include timestamp to show when a new member was added
    * Add a message board area, where club members may chat with each other
    * Include an area called "announcements", "events", "games", etc. where users can post what events, matches, or meetings the club has planned.
    * Deploy application with a link to the live site in the project's README.
    * Include a pipe to filter users based on one of their attributes (number of cats?)
