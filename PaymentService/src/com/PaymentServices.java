package com;

import javax.annotation.security.RolesAllowed;
import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;

import javax.annotation.security.RolesAllowed;
//For REST Service
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
//For JSON
import com.google.gson.*;
//For XML
import org.jsoup.*;
import org.jsoup.parser.*;
import org.jsoup.nodes.Document;

import model.Payment;

@Path("/payments")
@PermitAll
public class PaymentServices {
	/*
	@GET
	@Path("/")
	@Produces(MediaType.TEXT_HTML)
	public String readItems()
	{
	return "Hello";
	}
	*/
	
	Payment pay = new Payment();
	
	
	@RolesAllowed({ "admin","patient" })
	@GET
	@Path("/readPayment")
	@Produces(MediaType.TEXT_HTML)
	public String readPayment()
	{
		return pay.readPayment();
	}
	
	
	
	@RolesAllowed({ "admin","patient" })
	@POST
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	
	public String addPayment(String payData)
	{
		System.out.println("Insert start");
		
		JsonObject payObject = new JsonParser().parse(payData).getAsJsonObject();
		System.out.println("1");
		
		String nic = payObject.get("nic").getAsString();
		String cardno = payObject.get("cardno").getAsString();
		String amount = payObject.get("amount").getAsString();
		
		System.out.println("2");
		
		String output = pay.addPayment(nic, cardno, amount);
		
		return output;
	}
	
	
	@RolesAllowed("admin")
	@PUT
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String updatePayment(String payData)
	{
		JsonObject payObject = new JsonParser().parse(payData).getAsJsonObject();
				
	
		String id = payObject.get("pID").getAsString();
		String nic = payObject.get("nic").getAsString();
		String cardno = payObject.get("cardno").getAsString();
		String amount = payObject.get("amount").getAsString();
		
		
		String output = pay.updatePayment(id, nic, cardno, amount);
		return output;
		
	}
	
	@RolesAllowed("admin")
	@DELETE
	@Path("/")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String deletePayment(String payData)
	{
		JsonObject jsonObject = new JsonParser().parse(payData).getAsJsonObject();
		System.out.println("1");
		String id = jsonObject.get("pID").getAsString();
		System.out.println("2");
		String output = pay.deletePayment(id);
		
		return output;
	}
	
	
	
	@RolesAllowed("admin")
	@GET
	@Path("/searchPay/{nic}")
	@Produces(MediaType.TEXT_PLAIN)
	public String searchPay(@PathParam("nic") String payData)
	{
		
		return pay.searchPayment(payData);
	}
	
	
	
	

}
