

function makeRegisterPage() {
	return `
	<nav class="navbar navbar-dark">
  		<div class="container-fluid">
    		<a class="navbar-brand" href="" id="home">Transcendence</a>
  		</div>
	</nav>
	<div class="container my-auto">
    <div class="row d-flex justify-content-center">
      <div class="col-6" id="registerForm">
	  <h1 class="px-4 d-flex justify-content-center mb-4">SignUP 2Play</h1>
        <form class="px-4 py-3" id="userRegisterForm"> 
          <!-- Username input -->
          <div class="form-group mb-3">
            <label for="form1Example1">Username</label>
            <input type="text" class="form-control" id="form1Example1" name="username" placeholder="Enter username">
          </div>
		  <!-- Email input -->
          <div class="form-group mb-3">
            <label for="form1Example2">Email</label>
            <input type="email" class="form-control" id="form1Example2" name="email" placeholder="Enter email">
          </div>
          <!-- Password input -->
          <div class="form-group mb-3">
            <label for="form1Example3">Password</label>
            <input type="password" class="form-control" id="form1Example3" name="password" placeholder="Password">
          </div>
		  <!-- Confirm Password input -->
          <div class="form-group mb-5">
            <label for="form1Example4">Confirm Password</label>
            <input type="password" class="form-control" id="form1Example4" name="password2" placeholder="Password">
          </div>
          <!-- Submit button -->
		  <div class="d-grid gap-2 col-6 mx-auto">
          <button type="submit" id="signIn" class="btn btn-primary btn-block" data-value="/users/profile/create/">Sign up</button>
		  </div>
		  <div class="mt-5 d-flex justify-content-center">
		  	<a id="sigInRegister" class="link-opacity-25-hover link-underline link-underline-opacity-0" href="" data-value="/users/profile/login/">Sign In</a>
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

const register_page = makeRegisterPage();

export { register_page }