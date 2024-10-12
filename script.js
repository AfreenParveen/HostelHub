//showing navbar when click menu on mobile view
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

//close menu when click
mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth<=768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.toggle("active");
    }
})

// move the menu to right and left when click back and next
var step = 100;
var stepFilter=60;
var scrolling = true;

$(".back").bind(".click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").bind(".click", function(e){
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

//when click back and next on menu filters
$(".back-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").bind("click", function(e){
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});

// Function to fetch and display rooms
async function fetchRooms() {
    try {
      const response = await fetch('http://localhost:5000/api/rooms');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const rooms = await response.json();
  
      // Display the rooms
      const roomsContainer = document.getElementById('rooms-container');
      roomsContainer.innerHTML = ''; // Clear existing rooms
  
      rooms.forEach(room => {
        const roomElement = document.createElement('div');
        roomElement.className = 'room';
        roomElement.innerHTML = `
          <img src="${room.imageUrl}" alt="${room.name}">
          <h3>${room.name}</h3>
          <p>${room.description}</p>
          <p>₹${room.price}/-</p>
        `;
        roomsContainer.appendChild(roomElement);
      });
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  }
  
  // Call the fetchRooms function on page load
  window.onload = fetchRooms;
  