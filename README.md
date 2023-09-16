#Add at least 3 Project features
Ans: My project named Course Registration includes 9 cards with course details
obtained from fake api using ChatGPT. Beside the 9 cards there is another card
where the purchased courses details is stored. One of the unique feature is that
one course can not be purchased twice, if tried a toaster will pop up. Also there
is a limited credit hour which means you can only select courses that add upto
not more than 20 credit hours. The last feature I want to mention is this webpage
is all device responsive.

#Discuss how you managed the state in your assignment project.
Ans: State management is a process where the components are managed for rendering themselves.
As a complex project I've used 5 states to manage the complete screen.
The first state is used used to fetch data into the project.
The second state manages the selected course name,price,credit hour and displays them into the Cart section. The last three states were completely optional. Could have been avoided by replacing with a function. Third state manages the total cost by adding the selected course prices all together. The last 2states manages the credit hours by adding and subtracting.
