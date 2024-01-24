// navbar.js

function loadNavbar() {
  // Create a div to hold the content
  var container = document.createElement('div');

  // Set the HTML content for the navigation bar
  container.innerHTML = `
<header>
  <div class="container">
    <div class="nav-wrapper">
      <a href="./index.html" class="logo">
        <img src="your_logo.png" alt="CasinoCanada Logo">
      </a>
      <span class="site-name">CASINOCANADA</span>
      <a href="./about.html" class="about-us">About Us</a>
    </div>
    <nav>
      <ul>
        
        <li>
		  <a href="#">CASINO ONLINE▾</a>
		  <div class="casino-online-submenu">
			<ul>
			  <li><a href="./fastpay.html">Fast Pay</a></li>
			  <li><a href="./bestpay.html">Best Pay</a></li>
			  <li><a href="#">Payments▸</a>
        <!-- Add a nested submenu for "Payments" -->
				<div class="sub-submenu">
				  <ul>
					<li><a href="./bitcoins.html">Bitcoin</a></li>
					<li><a href="./neteller.html">Neteller</a></li>
					<li><a href="./debitcards.html">Debit Card</a></li>
				  </ul>
				</div>
			  </li>
			</ul>
		  </div>
		</li>

        <li><a href="#">REVIEWS▾</a>
		<div class="casino-online-submenu">
			<ul>
			  <li><a href="./newcasinos.html">New Casinos</a></li>
			  <li><a href="#">Mobile Casinos▸</a>
			  <div class="sub-submenu">
				  <ul>
					<li><a href="./android.html">Android</a></li>
					<li><a href="./iphone.html">IPhone</a></li>
					
				  </ul>
				</div></li>
			  <li><a href="./realmoney.html">Real Money Casinos</a></li>
			</ul>
		  </div></li>
        <li><a href="#">CASINO CAMES▾</a>
		<div class="casino-online-submenu">
			<ul>
			  <li><a href="./blackjack">Blackjack</a></li>
			  <li><a href="./bingo">Bingo</a></li>
			  <li><a href="./onlinelottery">Online Lottery</a></li>
			</ul>
		  </div></li>
        
        <li><a href="#">BONUSES▾</a>
		<div class="casino-online-submenu">
			<ul>
			  <li><a href="./nodepositbonus">No Deposit Bonuses</a></li>
			  <li><a href="./freespins">Free Spins</a></li>
			  <li><a href="./cashback">Cashback</a></li>
			</ul>
		  </div></li>
        <li><a href="#">FREE SLOTS▾</a>
		<div class="casino-online-submenu">
			<ul>
			  <li><a href="./popularslots">Popular Slots</a></li>
			  <li><a href="./realmoneyslots">Real Money Slots</a></li>
			  
			</ul>
		  </div></li>
        
      </ul>
    </nav>
  </div>
</header>
  `;

  // Append the content to the container
  document.getElementById('navbar-container').appendChild(container);
}

// Call the function to load the navbar when the DOM is ready
document.addEventListener('DOMContentLoaded', loadNavbar);