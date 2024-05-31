
function makeSignInPage() {
	return `
	<nav class="navbar navbar-dark">
  		<div class="container-fluid">
    		<a class="navbar-brand" href="" id="home">Transcendence</a>
  		</div>
	</nav>
	<div class="container my-auto">
    <div class="row d-flex justify-content-center">
      <div class="col-6" id="signInForm">
	  <h1 class="px-4 d-flex justify-content-center mb-4">Sign In 2Play</h1>
        <form class="px-4 py-3" id="userSignInForm"> 
          <!-- Username input -->
          <div class="form-group mb-3">
            <label for="form1Example1">Username</label>
            <input type="text" class="form-control" id="form1Example1" name="username" placeholder="Enter username or email">
          </div>
          <!-- Password input -->
          <div class="form-group mb-5">
            <label for="form1Example3">Password</label>
            <input type="password" class="form-control" id="form1Example3" name="password" placeholder="Password">
          </div>
          <!-- Submit button -->
		  <div class="d-grid gap-2 col-6 mx-auto">
          	<button type="submit" id="signInUser" class="btn btn-primary btn-block" data-value="/users/profile/login/">Sign in</button>
		  </div>
		  <div class="mt-3 d-flex justify-content-center">
		  	<p id="error-message" style="display: none; color: red;"></p>
		  </div>
        </form>
      </div>
    </div>
	</div>
	<p id="user-list"></p>`;
}

const signIn_page = makeSignInPage();

export { signIn_page }