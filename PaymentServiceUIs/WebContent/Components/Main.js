$(document).ready(function() {
	if ($("#alertSuccess").text().trim() == "") {
		$("#alertSuccess").hide();
	}
	$("#alertError").hide();
	refresh();

});

$(document).on("click","#btnSave",function(event) {
	
					// Clear alerts---------------------
					$("#alertSuccess").text("");
					$("#alertSuccess").hide();
					$("#alertError").text("");
					$("#alertError").hide();
					// Form validation-------------------
					var status = validateItemForm();
					if (status != true) {
						$("#alertError").text(status);
						$("#alertError").show();
						return;
					}

					var formObj = $("#formPayment")
					var payment = {}
					
					payment["nic"] = formObj.find("#nic").val().trim()
					payment["cardno"] = formObj.find("#cardno").val().trim()
					payment["amount"] = formObj.find("#amount").val().trim()
					
					

					var type = ($("#hidItemIDSave").val() == "") ? "POST"
							: "PUT";
					serviceUrl = "http://localhost:8081/PaymentService/PaymentServices/payments"
					if (type == "PUT") {
						serviceUrl = "http://localhost:8081/PaymentService/PaymentServices/payments"
							payment["pID"] = $("#hidItemIDSave").val()
					}
					
					$.ajax({
						url : serviceUrl,
						type : type,
						data : JSON.stringify(payment),
						contentType : "application/json",
						beforeSend : function(xhr) {
							xhr.setRequestHeader("Authorization", "Basic "
									+ btoa("admin" + ":" + "admin"));
						},
						complete : function(response, status) {
							onItemSaveComplete(response.responseText,
									status);
						}
					});
				});




$(document).on("click",".btnUpdate",function(event) {
	
					$("#heading").text("Update Payment");
					$("#hidItemIDSave").val($(this).closest("tr").find('#hidItemIDUpdate').val());
					$("#nic").val($(this).closest("tr").find('td:eq(0)').text());
					$("#cardno").val($(this).closest("tr").find('td:eq(1)').text());
					$("#amount").val($(this).closest("tr").find('td:eq(2)').text());
					
					
				});




$(document).on("click",".btnRemove",function(event) {
			
					var r = confirm("Do you want to delete this record");
					if (r == true) {
						
						serviceUrl = "http://localhost:8081/PaymentService/PaymentServices/payments"
							
							
						$.ajax({
							url : serviceUrl,
							type : "DELETE",
							data : "{pID: " + $(this).data("itemid") +"}",
							contentType : "application/json",
							beforeSend : function(xhr) {
								xhr.setRequestHeader("Authorization", "Basic "
										+ btoa("admin" + ":" + "admin"));
							},
							complete : function(response, status) {
								onItemDeleteComplete(response.responseText,
										status);
							}

						});
					}
				});


function validateItemForm() {
	//  nic
	if ($("#nic").val().trim() == "") {
		return "Insert NIC number.";
	}
	// Card NO
	if ($("#cardno").val().trim() == "") {
		return "Insert Card Number.";
	}
	// Amount
	if ($("#amount").val().trim() == "") {
		return "Insert Amount.";
	}
	
	

	

	return true;
}

function onItemSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);

		if (resultSet.status.trim() == "success") {
			
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divItemsGrid").html(resultSet.data);
			
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}

	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}

	$("#hidItemIDSave").val("");
	$("#formPayment")[0].reset();
	
	refresh();
} 


function onItemDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#table").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
	refresh()
}

function refresh() {

	serviceUrl = "http://localhost:8081/PaymentService/PaymentServices/payments/"
	$.ajax({
		dataType : 'html',
		url : serviceUrl,
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic "
					+ btoa("admin" + ":" + "admin"));
		},
		success : function(data) {
			
			$("#table").html(data);
			
		
		}
	});

}
