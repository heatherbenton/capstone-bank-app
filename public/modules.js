var ui = {};

ui.navigation = `
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<a className="navbar-brand" href="#" onClick="defaultModule()">
			Third Coast Bank
		</a>

		<button
			className="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
				<li className="nav-item">
					<a
						className="nav-link"
						href="#/CreateAccount/"
						onClick="loadcreateAccount()"
						id="createAccount"
					>
						Create Account
					</a>
				</li>

				<li className="nav-item">
					<a
						className="nav-link"
						href="#/login/"
						onClick="loadLogin()"
						id="login"
					>
						Login
					</a>
				</li>

				<li className="nav-item">
					<a
						className="nav-link"
						href="#/deposit/"
						onClick="loadDeposit()"
						id="deposit"
					>
						Deposit
					</a>
				</li>

				<li className="nav-item">
					<a
						className="nav-link"
						href="#/withdraw/"
						onClick="loadWithdraw()"
						id="withdraw"
					>
						Withdraw
					</a>
				</li>

				<li className="nav-item">
					<a
						className="nav-link"
						href="#/balance/"
						onClick="loadBalance()"
						id="balance"
					>
						Balance
					</a>
				</li>

				<li className="nav-item">
					<a
						className="nav-link"
						href="#/alldata/"
						onClick="loadAllData()"
						id="alldata"
					>
						All Data
					</a>
				</li>
			</ul>
		</div>
	</nav>
`;

var navigation = document.getElementById("navigation");
navigation.innerHTML += ui.navigation;

// individual bootstrap cards
ui.createAccount = `
<div class="card text black bg-light">
	<div class="card-header">Create Account</div>
      <div class="card-body text-center">
			Name<br>
			<input type="input" class="form-control" id="name" placeholder="enter name"><br>
			Email<br>
			<input type="input" class="form-control" id="email" placeholder="enter email"><br>
			Password<br>
			<input type="password" class="form-control" id="password" placeholder="enter password"><br>
			<button type="submit" id="submit" class="btn" onclick="create()">Create Account</button>
				<div id='createStatus'></div>
    </div>
</div>
	`;

ui.login = `
<div class="card text black bg-light">
		<div class="card-header">Login</div>
  <div class="card-body text-center">
		Email<br>
		<input type="input" class="form-control" id="loginEmail" placeholder="enter email"><br>
		Password<br>
		<input type="password" class="form-control" id="loginPassword" placeholder="enter password"><br>

			<button type="submit" id="submit" class="btn" onclick="login()">Login</button>
			<div id='loginStatus'></div>
  </div>
</div>
	`;

ui.deposit = `
<div class="card text black bg-light">
			<div class="card-header">Deposit</div>
    <div class="card-body text-center">
			Email<br>
			<input type="input" class="form-control" id="depositEmail" placeholder="enter email"><br>

			Amount<br>
			<input type="number" class="form-control" id="depositAmount" placeholder="enter amount"><br>

			<button type="submit" class="btn" onclick="deposit()">Deposit</button>
			<div id='depositStatus'></div>
    </div>
</div>
	`;

ui.withdraw = `
<div class="card text black bg-light">
					<div class="card-header">Withdraw</div>
      <div class="card-body text-center">
				Email<br>
				<input type="input" class="form-control" id="withdrawEmail" placeholder="enter email"><br>

				Amount<br>
				<input type="number" class="form-control" id="withdrawAmount" placeholder="enter amount"><br>
				<button type="submit" class="btn" onclick="withdraw()">Sumbit</button>
					<div id='withdrawStatus'></div>
		</div>
</div>
	`;

ui.balance = `
<div class="card text black bg-light">
					<div class="card-header">Balance</div>

      <div class="card-body text-center">
			Email<br>
			<input type="input" class="form-control" id="balanceEmail" placeholder="enter email"><br>
			<button type="submit" class="btn" onclick"balance()">show balance</button>
							<div id='balanceStatus'></div>
    </div>
</div>
	`;

ui.default = `
<div class="card text black bg-light">
		<div class="card-header">Third Coast Bank</div>
  		<div class="card-body text-center">
			<h5 class="card-title">the bank of the freshest coast</h5>
        <p class="card-text">We are here to make your banking as relaxing as the rolling waves.</p>
				<img src="bank.png" class="img-fluid" alt="responsive image">
      </div>
  </div>
	`;

ui.allData = `
<div class="card text black bg-light">
	<div class="card-header">All Bank Data</div>
	<div class="card-body text-center">
		<h5 class="card-title">Are you authorized?</h5>
		Email<br />
		<input
			type="input"
			class="form-control"
			id="authEmail"
			placeholder="enter email"
		/><br />
		Password<br />
		<input
			type="password"
			class="form-control"
			id="authPassword"
			placeholder="enter password"
		/><br />

		<button type="submit" id="submit" class="btn" onclick="auth()">
			Authorized
		</button>
		<div id="allDataStatus"></div>
	</div>
</div>
	`;

var loadCreateAccount = function () {
	target.innerHTML = ui.createAccount;
};

var loadLogin = function () {
	target.innerHTML = ui.login;
};

var loadDeposit = function () {
	target.innerHTML = ui.deposit;
};

var loadWithdraw = function () {
	target.innerHTML = ui.withdraw;
};

var loadBalance = function () {
	target.innerHTML = ui.balance;
};

var loadDefault = function () {
	target.innerHTML = ui.default;
};

var loadAllData = function () {
	target.innerHTML = ui.allData;
};

defaultModule();
