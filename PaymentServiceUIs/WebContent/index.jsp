<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Health Care System</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.3.1.min.js"></script>
<script src="Components/Main.js"></script>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-md-4">
<!-- jkjkj -->
				<h1 id="heading">Insert Payment</h1>

				<form id="formPayment" name="formPayment">
				
					NIC Number:<input id="nic" name="nic" type="text"
						class="form-control form-control-sm"> <br>
						
					Card Number: <input id="cardno" name="cardno" type="text"
						class="form-control form-control-sm"> <br>
				
					Amount : <input id="amount" name="amount" type="text"
						class="form-control form-control-sm"> <br>	
				
					
					<!-- 	
					Username: <input id="username" name="username" type="text"
						class="form-control form-control-sm"> <br>
					
					Password: <input id="password" name="password" type="password"
						class="form-control form-control-sm"> <br>
					
 -->
					 <br> <input id="btnSave" name="btnSave" type="button"
						value="Save" class="btn btn-primary"> <input type="hidden"
						id="hidItemIDSave" name="hidItemIDSave" value="">
				</form>
				<hr>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>



			</div>
			<div class="col-md-8">

				<div class="container">
					<h2>Payments Table</h2>
					<p>Available Payments In The System</p>
					<div id="table">
					
					
					</div>
					<!-- <table class="table table-striped" id="paymentTable">
						<thead>
							<tr>
								<th>NIC Number</th>
								<th>Card Number</th>
								<th>Amount</th>
								<th>Update</th>
								<th>Remove</th>
							</tr>
						</thead>
						<tbody>
							
						</tbody>
					</table> -->
				</div>
			</div>
		</div>
	</div>
</body>



</html>