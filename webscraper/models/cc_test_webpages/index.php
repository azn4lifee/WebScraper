<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<HTML lang="en">
<HEAD>
		<META http-equiv="Content-Type" content="text/html; charset=utf-8">
	
	<META http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
	<META http-equiv="Pragma" content="no-cache">
	<META http-equiv="Expires" content="0">
	<META name="referrer" content="no-referrer-when-downgrade">
	<title>CANADA COMPUTERS ONLINE - Moneris Solutions</title>
<script type="text/javascript" src="/HPPDP/hpp/components/jquery-3.2.1.min.js"></script>
		<link rel="stylesheet" href="/HPPDP/hpp/components/css_hpp.php?hppdp_id=TENZUU5961" type="text/css">
<script type="text/javascript" >$(document).ready(function()
{
	$( "#cvdOpenID" ).hover(
		function() { showCVDInfo();},
 	 	 function(){ closeCVDInfo();}
 	 ).focusin(
 	 	function() { showCVDInfo();}
 	 ).focusout(
 	 	function(){ closeCVDInfo();}
 	 );
	
});

var transaction_timeout_msg = "<li>Transaction record not found.  Please try transaction again.</li>";

function displayProcessing(display_text,target_id)
{
	processing = "<div id=processingImage><img src='/HPPDP/hpp/images/processing_bars_bluegrey.gif' alt='Processing'></div>" +
				"<div id=processingText>" + display_text + "</div>";
	
	document.getElementById(target_id).innerHTML = processing;
}

function postRequestJSON(url, parameters,target_id,func_to_call)
{

	request = false;

	if (window.XMLHttpRequest) // FIREFOX
	{
		request = new XMLHttpRequest();
	}
	else if (window.ActiveXObject) // IE
    { 
        try
        {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e)
        {
            try
            {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } 
            catch (e) {}
        }
    }
    if (!request)
    {
        alert('Cannot create XMLHTTP instance');
        return false;
    }
       
	request.open('POST', url, true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");

	request.onreadystatechange = function() 
	{
		if (request.readyState == 4)
		{
			if (request.status == 200)
			{
				var jresp = eval ("(" + request.responseText + ")");
				
				if (func_to_call)
				{
					eval(func_to_call + "( target_id,jresp.response.html,jresp.response.success,jresp.response.error,jresp.response.data );");
				}
				else
				{
					handleStandardResponse(target_id,jresp.response.html,jresp.response.success,jresp.response.error,jresp.response.html);
				}
			}
			else if (request.status >= 400)
			{
				document.getElementById("error_box" ).style.display = "block";
				document.getElementById("error_box" ).innerHTML = "Error -" + request.status;
			}
		}
	}

	request.send(parameters);
}

function handleStandardResponse (target_id, html, success, error, data)
{
	if (html)
	{
		document.getElementById(target_id).innerHTML = html;
	}
	handleResponseMessages(target_id,success,error);
}

function showError(error)
{
	if(error === "transaction_timeout")
	{
		error = transaction_timeout_msg;
	}

	document.getElementById("error_box").innerHTML = "<ul id=\"errorTextId\">" + error + '</ul><input type="button" name="ok" value="OK" class=closeButton onclick=closeError() id=errorCloseButton>';
	document.getElementById('error_box').style.display = 'block';
	document.getElementById('errorCloseButton').focus();
}

function closeError()
{
	document.getElementById('error_box').style.display = 'none';
	document.getElementById("error_box").innerHTML = "";
	document.getElementById('mainContent').focus();
}

function showCalculateConvFee()
{
	document.getElementById('convfee_amount_display').innerHTML = " Calculating...";
	document.getElementById('convfee_total_display').innerHTML = " Calculating...";
}

function calculateConvFee()
{
	has_conv_fee = 0;
	var pan = document.getElementById("pan").value;
	var val_pan = /^(\d{10,18})?$/;
	
	
	if (pan.length > 10 && val_pan.test(pan) )
	{
		var post_data = "hpp_id=TENZUU5961" +
						"&hpp_ticket=" + encodeURIComponent("hpp1602964726rL68ZtMT64UVCY8bK") +
						"&pan=" + encodeURIComponent(document.getElementById("pan").value ) +
						"&doTransaction=get_convfee";
									
		document.getElementById('convfee_amount_display').innerHTML = " Calculating...";
		document.getElementById('convfee_total_display').innerHTML = " Calculating...";
		document.getElementById('buttonProcessCC').disabled=true;
		postRequestJSON('hprequest.php', post_data, "", "handleConvFeeResponse");												

	}
}

function handleConvFeeResponse (target_id, html, success, error, data)
{
	has_conv_fee = 1;
	document.getElementById("convfee_amount").value = data.fee ;
	document.getElementById("convfee_amount_display").innerHTML = data.fee ;
	document.getElementById("convfee_total").value = data.total;
	document.getElementById("convfee_total_display").innerHTML = data.total ;
	document.getElementById('buttonProcessCC').disabled=false;
	
}

function displayPayment(div_id)
{
	document.getElementById("error_box").style.display = 'none';
	
	document.getElementById("hppFinancialCC").style.display = 'none';
	document.getElementById("hppFinancialIOP").style.display = 'none';
	document.getElementById("hppFinancialMasterpass").style.display = 'none';
	document.getElementById("hppFinancialVme").style.display = 'none';

	document.getElementById(div_id).style.display = 'block';
}

function setPOBox()
{
	po_value = document.getElementById("avs_is_po_box").checked;

	if (po_value == true)
	{
		document.getElementById("poBoxDiv").style.display = 'inline';
		document.getElementById("strAddrDiv").style.display = 'none';
	}
	else
	{
		document.getElementById("poBoxDiv").style.display = 'none';
		document.getElementById("strAddrDiv").style.display = 'inline';
	}
}

//------------------ TRANSACTIONS ----------------

function callCCPurchase()
{
	document.getElementById("error_box").style.display = 'none';
	document.getElementById("error_box").innerHTML = '';

	document.getElementById('hppContent').style.display = 'none';
	document.getElementById('hppProcessing').style.display = 'block';
	displayProcessing("Processing Transaction.  Please Wait.","hppProcessing");
	
	var avs_details = getAvsDetails();
	var cust_info = getCustInfo();
	var cvd_details = getCvdDetails();
	var gift_details = getGiftCards();
	var loyalty_details = getLoyaltyDetails();
	var convfee_details = getConvFeeDetails();
	
	//handle expdate
	var exp_date = document.getElementById('exp_date').value;
	var exp_month = exp_date.substr(0,2);
	var exp_year = exp_date.substr(2,4);
	
	var input_fields = ['pan','cardholder','exp_date'];
	resetFieldErrors(input_fields);
	
	var post_data = "hpp_id=TENZUU5961"  +
					"&hpp_ticket=hpp1602964726rL68ZtMT64UVCY8bK" +
					"&pan=" + encodeURIComponent(document.getElementById('pan').value) +
					"&pan_mm=" + encodeURIComponent(exp_month) +
					"&pan_yy=" + encodeURIComponent(exp_year) +
					cvd_details +
					"&cardholder=" + document.getElementById('cardholder').value +
					avs_details +
					cust_info +
					gift_details +
					loyalty_details +
					convfee_details + 
					"&doTransaction=cc_purchase";

	postRequestJSON("hprequest.php", post_data,"hppContent","handlePurchaseResponse"); 
	
	
	
}

function handlePurchaseResponse(target_id, html, success, error, data)
{
	document.getElementById('hppContent').style.display = 'block';
	document.getElementById('hppProcessing').style.display = 'none';
	
	if (error)
	{
		showError(error);
		
		for (var key in data) 
		{
			if (data.hasOwnProperty(key)) 
			{
				document.getElementById(key+"_label").style.color = "#C9000B";

				if(data[key]['error'] === "transaction_timeout")
				{
					document.getElementById(key+"_label_msg").innerHTML = transaction_timeout_msg;
				}
				else
				{
					document.getElementById(key+"_label_msg").innerHTML = data[key]['error'];
				}
			}
		}
	}

	else
	{
		if (data.vme_confirm == 'true')
		{
			document.getElementById('hppContent').style.display = 'none';
			document.getElementById('hppProcessing').style.display = 'none';
			document.getElementById('vmeConfirm').style.display = 'block';
		}
		else if(data.doVbv == 'true')
		{
			document.getElementById('hppContent').innerHTML = base64_decode(data.form) ;
			document.downloadForm.submit();
		}
		else if (data.response_method == "GENERIC")
        {
            document.getElementById('mainContent').innerHTML = base64_decode(data.form);
        }
		else if (data.response_method == "POST" || data.response_method == "GET" || data.response_method == "POST_XML")
		{
			document.getElementById('hppContent').style.display = 'none';
		    document.getElementById('hppProcessing').style.display = 'block';
			displayProcessing("Loading Response","hppProcessing");
			
			document.getElementById('hppContent').innerHTML = base64_decode(data.form);
			document.responseForm.submit();	
		}
	}
}

function callVmeProcess(callid, event_type)
{
	document.getElementById("error_box").style.display = 'none';
	document.getElementById("error_box").innerHTML = '';

	document.getElementById('hppContent').style.display = 'none';
	document.getElementById('hppProcessing').style.display = 'block';
	displayProcessing("Processing Transaction.  Please Wait.","hppProcessing");
	
	var cust_info = getCustInfo();
	var gift_details = getGiftCards();
	var loyalty_details = getLoyaltyDetails();

	var post_data = "hpp_id=TENZUU5961"  +
					"&hpp_ticket=hpp1602964726rL68ZtMT64UVCY8bK" +
					"&vme_callid=" + callid +
					"&vme_event_type=" + event_type +
					gift_details +
					cust_info +
					loyalty_details +
					"&doTransaction=vme_dopurchase";
					
	postRequestJSON("hprequest.php", post_data,"hppContent","handlePurchaseResponse");	
}

function callIopInit()
{
	document.getElementById("error_box").style.display = 'none';
	document.getElementById("error_box").innerHTML = '';

	document.getElementById('hppContent').style.display = 'none';
	document.getElementById('hppProcessing').style.display = 'block';
	displayProcessing("Connecting to Interac Online","hppProcessing");

	var gift_details = getGiftCards();
	var cust_info = getCustInfo();
    var loyalty_details = getLoyaltyDetails();


	var post_data = "hpp_id=TENZUU5961"  +
					"&hpp_ticket=hpp1602964726rL68ZtMT64UVCY8bK" +
					gift_details +
					cust_info +
					loyalty_details +
					"&doTransaction=init_iop";

	postRequestJSON("hprequest.php", post_data,"hppContent","handleIopInitResponse");	
}


function handleIopInitResponse(target_id, html, success, error, data)
{
    if (error)
    {
       showError(error);
    }
    else
    {
    	document.getElementById('hppContent').innerHTML = html ;
    	document.iop_submit.submit();
    }
}


function callMasterpassInit()
{
	document.getElementById("error_box").style.display = 'none';
	document.getElementById("error_box").innerHTML = '';

	document.getElementById('hppContent').style.display = 'none';
	document.getElementById('hppProcessing').style.display = 'block';
	displayProcessing("Connecting to MasterPass","hppProcessing");

	var cust_info = getCustInfo();
	var gift_details = getGiftCards();
	var loyalty_details = getLoyaltyDetails();

	var post_data = "hpp_id=TENZUU5961"  +
					"&hpp_ticket=hpp1602964726rL68ZtMT64UVCY8bK" +
					gift_details +
					cust_info +
					loyalty_details +
					"&doTransaction=init_masterpass";

	postRequestJSON("hprequest.php", post_data,"hppContent","handleMasterpassInitResponse");	
}


function handleMasterpassInitResponse(target_id, html, success, error, data)
{
	if (error)
	{
		document.getElementById('hppContent').style.display = 'block';
        document.getElementById('hppProcessing').style.display = 'none';

		showError(error);
	}
	else
	{
		window.location = html ;
	}
}

function callVmeConfirm ()
{
	document.getElementById("error_box").style.display = 'none';
	document.getElementById("error_box").innerHTML = '';

	document.getElementById('hppContent').style.display = 'none';
	document.getElementById('vmeConfirm').style.display = 'none';
	document.getElementById('hppProcessing').style.display = 'block';
	displayProcessing("Processing Transaction.  Please Wait.","hppProcessing");

	var post_data = "hpp_id=TENZUU5961"  +
					"&hpp_ticket=hpp1602964726rL68ZtMT64UVCY8bK" +
					"&doTransaction=vme_dopurchase";

	postRequestJSON("hprequest.php", post_data,"hppContent","handlePurchaseResponse"); 	
}

function getGiftCards()
{
	var gift_data = '';
	return gift_data;
}

function getLoyaltyDetails()
{
	var details = '';
	return details;
}


function getAvsDetails ()
{
	var details = '';
	po_value = document.getElementById("avs_is_po_box").checked;

	if (po_value == true)
	{
		details = "&po_box=true";
	}
		
	details = details +
				"&avs_str_num=" + encodeURIComponent(document.getElementById("avs_str_num").value) +
				"&avs_str_name=" + encodeURIComponent(document.getElementById("avs_str_name").value) +
				"&avs_zip_code=" + encodeURIComponent(document.getElementById("avs_zip_code").value) +
				"&avs_po_box_addr=" + encodeURIComponent(document.getElementById("avs_po_box_addr").value);
	
	var input_fields = ['avs_str_num','avs_str_name','avs_zip_code','avs_po_box_addr'];			
	resetFieldErrors(input_fields);
					
	return details;
}

function getCustInfo ()
{
    var details = '';
    return details;
}

function getCvdDetails ()
{
	var details = '';
		details = "&pan_cvd=" + encodeURIComponent(document.getElementById('cvd_value').value);
		
		var input_fields = ['cvd_value'];			
		resetFieldErrors(input_fields);	
	return details;
}

function getConvFeeDetails ()
{
	var details = '';
	return details;
}



function doCancel(cancel_id)
{
	
		document.getElementById("error_box").style.display = 'none';
		document.getElementById("error_box").innerHTML = '';
	
		document.getElementById('hppContent').style.display = 'none';
		document.getElementById('hppProcessing').style.display = 'block';
		displayProcessing("Cancelling Transaction","hppProcessing");
				
		var post_data = "hpp_id=TENZUU5961"  +
						"&hpp_ticket=hpp1602964726rL68ZtMT64UVCY8bK" +
						"&doTransaction=cancel_transaction";
	
		postRequestJSON("hprequest.php", post_data,"hppContent","handlePurchaseResponse");
	 
}

function showCVDInfo()
{
	document.getElementById("cvd_info_box").style.display = 'block';
//	document.getElementById("cvdTitleId").focus();
	
	
}
function closeCVDInfo()
{
	document.getElementById("cvd_info_box").style.display = 'none';
//	document.getElementById("cvd_value").focus();	
}

function base64_decode (data) 
{
  // http://kevin.vanzonneveld.net

  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    dec = "",
    tmp_arr = [];

  if (!data) {
    return data;
  }

  data += '';

  do { // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join('');

  return dec;
//	return decodeURIComponent(toHex(dec));
}

function resetFieldErrors(fields)
{
	var arrayLength = fields.length;

	if (arrayLength > 0)
	{
		for (var i = 0; i < arrayLength; i++) 
		{
			var fieldname = fields[i];
    		document.getElementById(fields[i]+"_label").style.color = "#000000";
			document.getElementById(fields[i]+"_label_msg").innerHTML = '';
		}
	}
}


</script></HEAD>
<BODY>
<div id="hppContent">
		<h1>CANADA COMPUTERS ONLINE</h1>
		<div class="td1_bg_top">&nbsp;</div>
	<div id="mainContent">
	
		Mandatory fields marked by *	 		
		<div id="hppItems">
				<h4 class="td2_bg">Item Details</h4>
	
	<table id="item_table">	
		<tr id="item_head">
			<th class="item_head" style="width:270px">Description</th>
			<th class="item_head" style="width:100px">Product Code</th>
			<th class="item_head" style="width:65px">Quantity</th>
			<th class="item_head" style="width:65px">Price</th>
<td class="item_head" style="width:65px">Subtotal</td>
		</tr>

	       	 	<tr><td class="item_body" style="width:270px">Kingston DT50 64GB USB 3.1 Gen 1 (USB 3.0) up to 110MB/s Read USB Drive (DT50/64GBCR)</td>
	        		<td class="item_body" style="width:100px">098934</td>
	        		<td class="item_body" style="width:65px">1</td>
	        		<td class="item_body_amount" style="width:65px">$9.99</td>
<td class="item_body_amount" style="width:65px">$9.99</td>				</tr>
	<tr><Td id="item_body" rowspan="6" colspan="2">&nbsp;</td>
		<td colspan="3" class="item_totals">&nbsp;</td>
	</tr>

		<tr><th colspan="2" class="item_totals">Shipping:</th>
			<td class="item_body_amount">$8.99</td></tr>
        <tr>
            <th colspan="2" class="item_totals">HST:</th>
            <td class="item_body_amount">$2.47</td></tr>
		<tr>
			<th colspan="2" class="item_totals">Total (CAD):</th>
			<td class="item_body_amount">$21.45</td></tr>
	</table>

		</div>
		
		<div id="hppCustDetails">
			
	<h4 class="td2_bg">Customer Details</h4>
	<p><span  class=longLabel >Customer ID:</span>&nbsp;		T6306406</p>
	<p><span  class=longLabel >Email Address:</span>&nbsp;		anthonyma940603@gmail.com</p>
	<p><span  class=longLabel >Note:</span>&nbsp;		</p>
	<div id=address_info>
	<div class="colclear"></div>
	</div>
		</div>
	
		<div id="hppGift">
					</div>
	
		<div id="hppFinancial">
		
			<div id="hppFinancalLoyaltyAcc">
							</div>
		
			<div id="hppFinancialChoice">
							</div>
		
			<div id="hppFinancialCC" style="display:block">
				  
	   <h4 class="td2_bg">Cardholder Details</h4>
	    <p class="textDesc">Please enter the following address exactly as it appears on your card statement.</p>
	    
			<p><input type="checkbox" class="checkBox" id="avs_is_po_box" name="avs_is_po_box"  onChange="setPOBox()" value="1">			<label for="avs_is_po_box" id="avs_is_po_box_label"  >PO Box<span class="label_error" id="avs_is_po_box_label_msg"></span>:</label>&nbsp;</p>
			<div id=poBoxDiv style=display:none>
			<p><label for="avs_po_box_addr" id="avs_po_box_addr_label"  >PO Box Information<span class="label_error" id="avs_po_box_addr_label_msg"></span>:</label>&nbsp;			<input type="text" name="avs_po_box_addr" id="avs_po_box_addr" value="" maxlength="25" size="25" autocomplete="no" ></p>
			</div>
			<div id=strAddrDiv style=display:inline>
			<p><label for="avs_str_num" id="avs_str_num_label"  class="req_label" >Street Number*<span class="label_error" id="avs_str_num_label_msg"></span>:</label>&nbsp;			<input type="text" name="avs_str_num" id="avs_str_num" value="" maxlength="7" size="7" autocomplete="no" ></p>
			<p><label for="avs_str_name" id="avs_str_name_label"  class="req_label" >Street Name*<span class="label_error" id="avs_str_name_label_msg"></span>:</label>&nbsp;			<input type="text" name="avs_str_name" id="avs_str_name" value="" maxlength="20" size="20" autocomplete="address-line1" ></p>
			</div>
		
		<p><label for="avs_zip_code" id="avs_zip_code_label"  class="req_label" >Postal/Zip Code*<span class="label_error" id="avs_zip_code_label_msg"></span>:</label>&nbsp;		<input type="text" name="avs_zip_code" id="avs_zip_code" value="" maxlength="10" size="10" autocomplete="postal-code" ></p>
		            
	<h4 class="td2_bg">Payment Details</h4>
	<!--  <div style="margin-bottom:10px;text-align:center"><img src="/HPPDP/hpp/images/ca_visa.png"  alt="Visa"> <img src="/HPPDP/hpp/images/ca_mc.png"  alt="Mastercard"> <img src="/HPPDP/hpp/images/ca_amex.png"  alt="American Express"> <img src="/HPPDP/hpp/images/ca_novus.png"  alt="Discover"> <img src="/HPPDP/hpp/images/ca_visadebit.png"  alt="Visa Debit"> <img src="/HPPDP/hpp/images/ca_jcb.png"  alt="JCB"> </div> -->  
		<div class="colleft50">
		<p><span  class=longLabel >Transaction Amount:</span>&nbsp;$ 21.45 (CAD)</p>
		
				
		<p><span  class=longLabel >Order ID:</span>&nbsp;CC_1799853_CC5961</p>
	</div>
	
			<div class="colright50 logos"> 
			<img src="/HPPDP/hpp/images/ca_visa.png"  alt="Visa"> <img src="/HPPDP/hpp/images/ca_mc.png"  alt="Mastercard"> <img src="/HPPDP/hpp/images/ca_amex.png"  alt="American Express"> <img src="/HPPDP/hpp/images/ca_novus.png"  alt="Discover"> <img src="/HPPDP/hpp/images/ca_visadebit.png"  alt="Visa Debit"> <img src="/HPPDP/hpp/images/ca_jcb.png"  alt="JCB"> 		</div>    
		                  
	<div class="colclear textDesc">Please complete the following details exactly as they appear on your card. </div>
	<div class="colleft textDesc" style="font-style:italic;padding-bottom:10px">Do not put spaces or hyphens in the card number.</div>
	
	<div class="colleft" style="margin-bottom:15px">
		
		<p><label for="cardholder" id="cardholder_label"  class="req_label" >Cardholder Name*<span class="label_error" id="cardholder_label_msg"></span>:</label>&nbsp;			<input type="text" name="cardholder" id="cardholder" value="" maxlength="60" size="30" autocomplete="cc-name" ></p>
		<p><label for="pan" id="pan_label"  class="req_label" >Card Number*<span class="label_error" id="pan_label_msg"></span>:</label>&nbsp;			<input type="text" name="pan" id="pan" value="" maxlength="19" size="20" autocomplete="cc-number" ></p>
		<p><label for="exp_date" id="exp_date_label"  class="req_label" >Expiry Date (MMYY)*<span class="label_error" id="exp_date_label_msg"></span>:</label>&nbsp;			<input type="text" name="exp_date" id="exp_date" value="" maxlength="4" size="4" autocomplete="cc-exp" ></p>	
	
					<p><label for="cvd_value" id="cvd_value_label"  class="req_label" >Card Security Code*<span class="label_error" id="cvd_value_label_msg"></span>:</label>&nbsp;				<input type="text" name="cvd_value" id="cvd_value" value="" maxlength="4" size="4" autocomplete="cc-csc" >		    	<a href="#" onclick="showCVDInfo()" style="cursor:pointer" id="cvdOpenID"><img src="/HPPDP/hpp/images/cvd_question_mark.gif" alt="CVD Definition" align="bottom" border="0"></a></p>
			</div>
	
	<div class="colright" style="margin:40px 0px -40px 0px">
		</div>
	
	 <div class="colclear textDesc" style="margin-bottom:10px">Click 'Process Transaction' to charge your card.  Only click the button once. Using the 'Back','Refresh' or 'Cancel' button after you press the 'Process Transaction' button will not stop the transaction from being processed and may result in a double charge.</div>
	
			
	<noscript><div style="color:#FF0000">Javascript must be enabled to process the transaction.</div></noscript>
	 
	<div class=buttonContainer>
		<div class="leftSubmitButton"><input type="button" name="process" value="Process Transaction"  onClick="callCCPurchase()" id="buttonProcessCC" class="buttonProcess"></div>
		<div class="rightSubmitButton"><input type="button" name="cancel" value="Cancel Transaction"  onClick="doCancel('buttonCancelCC')" id="buttonCancelCC" class="buttonCancel"> </div>
	</div>
	<div style="clear:both"></div>
		<div style="display:none;height:1px;width:1px;overflow:hidden"><img src="https://www.offlinx.com/pixel.gif?program_id=07MBY2L5746BE185&visitor_id=hpp1602964726rL68ZtMT64UVCY8bK" alt="moneris_logo"></div>
			</div>
			<div id="hppFinancialIOP" style="display:none">
							</div>
			<div id="hppFinancialMasterpass" style="display:none">
							</div>
			<div id="hppFinancialVme" style="display:none">
							</div>
	
		</div>
		</fieldset>
		<div id="error_box" class="errorBox"   role="alertdialog" aria-label="Error" aria-describedby="errorTextId"></div>
	</div>
	<div class="td1_bg_bottom"></div>

</div>
<div id="hiddenProcess"></div>
<form action="" name="cancelForm" id="cancelForm">
	<input type="hidden" name="order_id" id="order_id" value="CC_1799853_CC5961">	<input type="hidden" name="cancelTXN" id="cancelTXN" value="Cancel Transaction"> 
</form>
<div id=cvd_info_box   role="alert" aria-live="assertive">
	<h3 class="cvdTitle" id="cvdTitleId">CVD - Card Validation Digits</h3>
	<h4 class="cvdSubtitle">Visa, Mastercard and Gift Cards</h4>
	<div class="cvdText">The CVD appears on the back your credit card, it is the last three digits printed on the signature panel. These digits should not appear anywhere else on the card.</div>
	<h4 class="cvdSubtitle">American Express</h4>
	<div class="cvdText">The CVD appears on the front of your credit card.  It is the printed four digits that appear above and to the right of the embossed card number.  On OPTIMA cards the CVD appears above and to the left of the embossed card number.</div>
</div>


<div id="hppProcessing" class="processingFullScreen">
	<div id="processingImage"><img src='/HPPDP/hpp/images/processing_bars_bluegrey.gif' alt='Processing'></div>
	<div id="processingText">Processing Transaction.  Please Wait.</div>
</div>
<div id="ThirdPartyDiv"></div>
</BODY>
