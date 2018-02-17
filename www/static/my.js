var achPhoto="";
var achPhoto2="";
var imageName = "";
var imageName2 = "";
var imagePathA="";
var imagePath2A="";

var latitude="";
var longitude="";

//-----san--------
var achPhoto_san ="";
var imageName_san = "";
var imagePathA_san ="";

var san_latitude="";
var san_longitude="";

//-----wwf--------
var achPhoto_wwf="";
//var achPhoto_2_wwf="";
var imageName_wwf = "";
//var imageName2_wwf = "";
var imagePathA_wwf="";
//var imagePath2A_wwf="";

var wwf_latitude="";
var wwf_longitude="";

//-----wp--------
var achPhoto_wp="";
var imageName_wp = "";
var imagePathA_wp="";

var wp_latitude="";
var wp_longitude="";
//=============
function getLocationInfoAch() {	
	var options = { enableHighAccuracy: true, timeout:30000};
	navigator.geolocation.getCurrentPosition(onSuccess, onError, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccess(position) {
	$("#ach_lat").val(position.coords.latitude);
	$("#ach_long").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
}
// onError Callback receives a PositionError object
function onError(error) {
	//alert(localStorage.latitudeAreaWq+'-'+localStorage.longitudeAreaWq);
   /*$("#ach_lat").val(0);
   $("#ach_long").val(0);*/
   $("#ach_lat").val(localStorage.latitudeAreaWq);
   $("#ach_long").val(localStorage.longitudeAreaWq);
   $(".errorChk").html("Previous Location Confirmed");
}

//=======Sanitaiton======
function getLocationInfoAch_san() {	
	var options = { enableHighAccuracy: true, timeout:30000};	
	navigator.geolocation.getCurrentPosition(onSuccess_san, onError_san, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccess_san(position) {
	$("#ach_lat_san").val(position.coords.latitude);
	$("#ach_long_san").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
}
// onError Callback receives a PositionError object
function onError_san(error) {
	//alert(localStorage.latitudeAreaWq+'-'+localStorage.longitudeAreaWq);
   /*$("#ach_lat_san").val(0);
   $("#ach_long_san").val(0);*/
   $("#ach_lat_san").val(localStorage.latitudeAreaWq);
   $("#ach_long_san").val(localStorage.longitudeAreaWq);
   $(".errorChk").html("Previous Location Confirmed");
}

//=======HWF======
function getLocationInfoAch_wwf() {	
	var options = { enableHighAccuracy: true, timeout:30000};	
	navigator.geolocation.getCurrentPosition(onSuccess_wwf, onError_wwf, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccess_wwf(position) {
	$("#ach_lat_wwf").val(position.coords.latitude);
	$("#ach_long_wwf").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
}
// onError Callback receives a PositionError object
function onError_wwf(error) {
	//alert(localStorage.latitudeAreaWq+'-'+localStorage.longitudeAreaWq);
  /* $("#ach_lat_wwf").val(0);
   $("#ach_long_wwf").val(0);*/
   $("#ach_lat_wwf").val(localStorage.latitudeAreaWq);
   $("#ach_long_wwf").val(localStorage.longitudeAreaWq);
   $(".errorChk").html("Previous Location Confirmed");
}

//=======WP======
function getLocationInfoAch_wp() {	
	var options = { enableHighAccuracy: true, timeout:30000};	
	navigator.geolocation.getCurrentPosition(onSuccess_wp, onError_wp, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccess_wp(position) {
	$("#ach_lat_wp").val(position.coords.latitude);
	$("#ach_long_wp").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
}
// onError Callback receives a PositionError object
function onError_wp(error) {
	//alert(localStorage.latitudeAreaWq+'-'+localStorage.longitudeAreaWq);
   /*$("#ach_lat_wp").val(0);
   $("#ach_long_wp").val(0);*/
   $("#ach_lat_wp").val(localStorage.latitudeAreaWq);
   $("#ach_long_wp").val(localStorage.longitudeAreaWq);
   $(".errorChk").html("Previous Location Confirmed");
}



//=======Area
function getLocationInfoAreaWq() {
	var options = { enableHighAccuracy: true, timeout:30000};
	navigator.geolocation.getCurrentPosition(onSuccessAreaWq, onErrorAreaWq, options);		
	$(".errorChk").html("Confirming location. Please wait.");
}

// onSuccess Geolocation
function onSuccessAreaWq(position) {
	$("#area_lat").val(position.coords.latitude);
	$("#area_long").val(position.coords.longitude);	
	localStorage.latitudeAreaWq=$("#area_lat").val();
	localStorage.longitudeAreaWq=$("#area_long").val();
	
	$(".errorChk").html("Location Confirmed");
	
}
// onError Callback receives a PositionError object
function onErrorAreaWq(error) {
	$("#area_lat").val(0);
	$("#area_long").val(0);
	localStorage.latitudeAreaWq=$("#area_lat").val();
	localStorage.longitudeAreaWq=$("#area_long").val();
	//alert(localStorage.latitudeAreaWq+'-'+localStorage.longitudeAreaWq);
	$(".errorChk").html("Failed to Confirmed Location.");
}

//---- online
var apipath="http://w02.yeapps.com/planbd_sawrp/syncmobile_20180218/";

//--- local
//var apipath="http://127.0.0.1:8000/planbd_sawrp/syncmobile_20180218/";

url ="";
var wpTubTreList='';
var hhIDList='';
var benList='';
var benCount=1;
$(document).ready(function(){
	if (localStorage.synced!='YES'){
			 url = "#pagesync";						
		}else{
			$("#divName").val(localStorage.div_name);
			$("#divCode").val(localStorage.div_code);
			$("#disName").val(localStorage.dis_name);
			$("#disCode").val(localStorage.dis_code);
			$("#upName").val(localStorage.up_name);
			$("#upCode").val(localStorage.up_code);
			$("#unName").val(localStorage.un_name);						
			$("#unCode").val(localStorage.un_code);
			
			//------------
			//$("#btn_new_socialmap").hide();	
			$("#btn_socialmap_home").hide();
			//ben
			$("#btn_new_ben").hide();
			$("#btn_ben_service").hide();
			$("#btn_ben_home").hide();
			//san
			$("#btn_new_ben_san").hide();
			$("#btn_ben_service_san").hide();
			$("#btn_ben_home_san").hide();
			//hwf
			$("#btn_new_ben_hwf").hide();	
			$("#btn_ben_service_hwf").hide();
			$("#btn_ben_home_hwf").hide();
			//wp
			$("#btn_home_wp").hide();	
			
			//===========socialmap
			var wardName='<label for="ward">Ward No</label><select name="ward" id="ward" data-native-menu="false" onblur="social_map_id()"><option value="0">Select Ward No</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option></select>'	
			$("#wardName").html(wardName);
			
			var odfStatusName='<select id="odfStatus" name="odfStatus" data-native-menu="false"><option value="0">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>'
			$("#odfStatusName").html(odfStatusName);
			
			var commExitName='<select id="commExit" name="commExit" data-native-menu="false" onchange="washCommitt()"><option value="0">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>'
			$("#commExitName").html(commExitName);
			
			var commFuncName='<select id="commFunc" name="commFunc" data-native-menu="false"><option value="0">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>'
			$("#commFuncName").html(commFuncName);
			//===========beneficary
			var benWardNo='<label for="ben_ward">Ward No</label><select name="ben_ward" id="ben_ward" data-native-menu="false"  onblur="social_map_id()" onchange="cluster()" ><option value="0">Ward No</option></select>'   
			$("#benWardNo").html(benWardNo);		
			
			var benClusIDName='<label for="ben_clusID">Cluster ID</label><select name="ben_clusID" id="ben_clusID" data-native-menu="false" onblur="social_map_id()"><option value="0">Select Cluster</option></select>' 
			$("#benClusIDName").html(benClusIDName);		
			
			var benGender='<label for="ben_hh_head_gender">HH Head Gender</label><select id="ben_hh_head_gender" name="ben_hh_head_gender" data-native-menu="false"><option value="0">Select HH Head Gender</option><option value="Male">Male</option><option value="Female">Female</option></select>'
			$("#benGender").html(benGender);
			
			var benEcoCondition='<label for="ben_eco_condition">Economic Condition</label><select id="ben_eco_condition" name="ben_eco_condition" data-native-menu="false"><option value="0">Select Economic Condition</option><option value="Rich">A: Rich</option><option value="Middle">B: Middle Class</option><option value="Poor">C: Poor</option><option value="Exterme Poor">D: Exterme Poor</option></select>'
			$("#benEcoCondition").html(benEcoCondition);
			
			var spsFamily_ben='<label for="sps_family">Sponsorship Family</label><select name="sps_family" id="sps_family" data-native-menu="false"><option value="0">Select Sponsorship Family</option><option value="Yes">Yes</option><option value="No">No</option></select>'
			$("#spsFamily_ben").html(spsFamily_ben);
			
			//----------Sanation
			var sanLatType_ben='<label for="san_lat_type">Type of Latrine Provided</label><select name="san_lat_type" id="san_lat_type" data-native-menu="false"><option value="0">Select Type of Latrine Provided</option><option value="Offset Pit">Offset Pit</option><option value="Water Seal Pit">Water Seal Pit</option><option value="Pit Latrine with Sato Pan">Pit Latrine with Sato Pan</option><option value="Shared Offset Pit">Shared-Offset Pit</option><option value="Shared Water Seal Pit">Shared-Water Seal Pit</option><option value="Shared Pit Latrine with Sato Pan">Shared-Pit Latrine with Sato Pan</option></select>'
			$("#sanLatType_ben").html(sanLatType_ben);
			
			var sanActType_ben='<label for="san_act_type">Type of Activity</label><select name="san_act_type" id="san_act_type" data-native-menu="false"><option value="0">Select Type of Activity</option><option value="New">New</option><option value="Renovation">Renovation</option></select>'	
			$("#sanActType_ben").html(sanActType_ben);
			
			var sanSubsidized_ben='<label for="san_subsidized">Subsidized</label><select name="san_subsidized" id="san_subsidized" data-native-menu="false"><option value="0">Select Subsidized</option><option value="Yes">Yes</option><option value="No">No</option></select>'			
			$("#sanSubsidized_ben").html(sanSubsidized_ben);
			//----------hwf
			var hwType_hwf='<label for="hw_type">Type of Handwash Facilities</label><select name="hw_type" id="hw_type" data-native-menu="false"><option value="0">Select Type of Handwash Facilities</option><option value="Water tank with tap">Water tank with tap</option><option value="Barrel Drum Bucket Jerrican with Tap">Barrel/Drum/Bucket/Jerrican with Tap</option><option value="Pitcher with Tap">Pitcher with Tap</option><option value="Tippy Tap">Tippy Tap</option><option value="Hand TubeWell">Hand TubeWell</option></select>'

			$("#hwType_hwf").html(hwType_hwf);	
			
			//==========wp
			var clusterIDNameWP='<label for="clusterIDName">Select Cluster</label><select name="clusterIDName" id="clusterIDName" data-native-menu="false"><option value="0">Select Cluster</option></select>'  
			$("#clusterIDNameWP").html(clusterIDNameWP);
			
			var wpActType='<label for="wp_act_type">Type of Activity</label><select name="wp_act_type" id="wp_act_type" data-native-menu="false"><option value="0">Select Type of Activity</option><option value="New">New</option><option value="Renovation">Renovation</option></select>'
			$("#wpActType").html(wpActType);
			
			var wpTechnology='<label for="wp_technology">Water Point Technology </label><select name="wp_technology" id="wp_technology" data-native-menu="false"><option value="0">Select Water Point Technology</option><option value="Deep Hand Tubewell">Deep Hand Tubewell</option><option value="Deep Set Pump">Deep Set Pump</option><option value="Shallow Tubewell">Shallow Tubewell</option><option value="Semi Deep Tubewell">Semi-Deep Tubewell</option><option value="Rain Water Harvesting">Rain Water Harvesting</option></select>'
			$("#wpTechnology").html(wpTechnology);
			
			var wpSubsidized='<label for="wp_subsidized">Subsidized</label><select name="wp_subsidized" id="wp_subsidized" data-native-menu="false"><option value="0">Select Subsidized</option><option value="Yes">Yes</option><option value="No">No</option></select>'	
			$("#wpSubsidized").html(wpSubsidized);
			
			var wpWq='<label for="wp_wq">Water Quality Test Type</label><select name="wp_wq" id="wp_wq" data-native-menu="false"><option value="0">Select Water Quality Test Type</option><option value="Arsenic">Arsenic</option><option value="Bacterial">Bacterial</option><option value="Both Arsenic And Bacteria">Both Arsenic & Bacteria</option></select>'
			$("#wpWq").html(wpWq);
			
			var wpWqResult='<label for="wp_wq_result">Result Water Quality Test</label><select name="wp_wq_result" id="wp_wq_result" data-native-menu="false"><option value="0">Select Result Water Quality Test</option><option value="Potable">Potable</option><option value="Not Potable">Not Potable</option><option value="Not Undertaken Yet">Not Undertaken Yet</option></select>'	
			$("#wpWqResult").html(wpWqResult);	
			
			var wpTubPre='<label for="wp_tub_pre">Tubewell Located on Premises</label><select name="wp_tub_pre" id="wp_tub_pre" data-native-menu="false"><option value="0">Select TW Located on Premises</option><option value="1">On Premises</option><option value="2">Up to 30 min (\u2266 30)</option><option value="3">More than 30 min (&#62 30)</option></select>'	
			$("#wpTubPre").html(wpTubPre);
			
			//-----------
			var wpPreHHId='';
			
			$("#benAdd").click(function(){
			$(".errorChk").text("");	
			 wp_hhSerail=$("#wp_hhSerail").val();
			 wp_tub_pre=$("#wp_tub_pre").val();
			 //sps_family=$("#sps_family").val();
			
			wpHHserial=wp_hhSerail.split("-");
			 wpHHID=wpHHserial[0]
			 wpHHName=wpHHserial[1].replace(/%20/g," ")
			
			if(wpHHID=='' || wpHHID==0){
				$(".errorChk").text('Required HH Name');
			}else if(wp_tub_pre=='' || wp_tub_pre==0){
				$(".errorChk").text('Required Tubewell Located on Premises');
			/*}else if(sps_family=='' || sps_family==0){
				$(".errorChk").text('Required Sponsorship Family');*/
			}else{
				
				/*if( hhIDList.indexOf(wpHHID) >-1 ){
					$(".errorChk").text("Already Exit HH Name");			
				}else{
					if( wpTubTreList.indexOf(wp_tub_pre) >-1 ){			
						$(".errorChk").text("Already Exit TW Located on Premises");
						/*if( hhIDList.indexOf(wpHHID) >=0 && hhIDList.indexOf(parseInt(wpPreHHId)) >=0 ){
							
					}else{	*/
					
					
					errorFlag=0
					if(benList=="" ){
						benList=wpHHID+"|"+wpHHName+"|"+wp_tub_pre;
					}else{
						h=0
						s=0
						benListH=benList.split('||');
						for (m=0;m<benListH.length;m++){
							benListS=benListH[m].split('|');
							
							if (benListS[0]==wpHHID){
								h=1								
							}															
							
						}
						
						if(wp_tub_pre==1){
							benListH1=benList.split('||');
							for (m=0;m<benListH1.length;m++){
								benListS1=benListH1[m].split('|');								
								if(benListS1[0]==wpHHID && benListS1[2]==wp_tub_pre ){
									s=1
								}else if(benListS1[0]!=wpHHID && benListS1[2]==wp_tub_pre ){
									s=1
								}														
							}						
						}else{
							s=0
						}
														
							
						
						if (h==1){
							errorFlag=1							
						}else {
							if (h==0 && s==1){
								errorFlag=2								
							}else{
								if (h==1 && s==1){
									errorFlag=2
								}else{
									benList +="||"+wpHHID+"|"+wpHHName+"|"+wp_tub_pre;
								}
							}
						}
						
						
					}
					
					
						
						/*if(hhIDList=="" ){
							hhIDList=wpHHID;
						}else{
							hhIDList +="||"+wpHHID;
						}
						
						if(wpTubTreList=="" ){
							wpTubTreList=wp_tub_pre;
						}else{
							wpTubTreList +="||"+wp_tub_pre;
						}*/
						
						if(errorFlag==1){
							$(".errorChk").text("Already Exit HH Name");
						}else{
							if(errorFlag==2){
								$(".errorChk").text("Already Exit TW Located on Premises");
								}else{
									
									benListH=benList.split('||');
									i="";
									for (m=0;m<benListH.length;m++){
										benListS=benListH[m].split('|');
										
																
										tub_pre='';
										if(benListS[2]==1){
											tub_pre='On Premises'
											//wpPreHHId=wpHHID
										}else if(benListS[2]==2){
											tub_pre='Up to 30 min (\u2266 30)'
										}else{
											tub_pre='More than 30 min (&#62 30)'
										}
									
										 i+="<tr id='"+benListS[0]+"'><td>"+benListS[0]+"-"+benListS[1]+"</td><td>"+tub_pre+"</td><td>"+'<input style="background-color:#99dfff;" type="button" onclick="rowRemove(\''+benListS[0]+'\')" value="X">'+"</td></tr>";
										benCount+=1;
									
									}
									$("#benTable").html(i);
																		
									}
							
							}
											
							
							
				/*	}
				}*/
				
			}
			
		 });
							
			url = "#homePage";
		}
	$.mobile.navigate(url);
	
});

function rowRemove(wpHHID){
	$("#"+wpHHID).remove();	
	//alert(wpHHID);
	benCount-=1;
	var listS='';
	iStrS=benList.split('||');
	iLenS=iStrS.length
	for(i=0;i<iLenS;i++){
		iStrDS=iStrS[i].split('|');
		
		if(iStrDS[0]!=wpHHID){
			if (listS==''){
				listS=iStrS[i]
			}else{
				listS+='||'+iStrS[i]
			}	
		}		
	}
	
	benList=listS
	//alert(benList)
	//==========
	/*var repl1='';
	iStr=hhIDList.split('||');
	iLen=iStr.length
	for(i=0;i<iLen;i++){
		iStrD=iStr[i].split(',');
		
		if(iStrD[0]!=wpHHID){
			if (repl1==''){
				repl1=iStr[i]
			}else{
				repl1+='||'+iStr[i]
			}	
		}		
	}
	hhIDList=repl1*/
	
	//============
	
	
	/*var repWpTub='';
	iStrWp=benList.split('||');
	iLenWp=iStrWp.length
	for(j=0;j<iLenWp;j++){
		iStrDwp=iStrWp[j].split(',');
		
		if(iStrDwp[0]!=wp_tub_pre){
			if (repWpTub==''){
				repWpTub=iStrWp[j]
			}else{
				repWpTub+='||'+iStrWp[j]
			}	
		}		
	}
	wpTubTreList=repWpTub
	alert(wpTubTreList);*/
}

function syncBasic(){
	var mobile=$("#mobile").val() ;
	var password=$("#password").val() ;
	
	if (mobile=="" || password==""){
		$(".errorMsg").html("Required mobile no and password");	
	}else{	
		$('#syncBasic').hide();			 
		$(".errorMsg").html("Sync in progress. Please wait...");
		if(localStorage.sync_code==undefined || localStorage.sync_code==""){
			localStorage.sync_code=0;
		}
	
		//alert(apipath+'passwordCheck?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
		$.ajax({
		  url:apipath+'passwordCheck?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
		  success: function(result) {
			syncResult=result
			var syncResultArray = syncResult.split('rdrd');
				localStorage.synced=syncResultArray[0];
				if (localStorage.synced=='YES'){	
					localStorage.sync_code=syncResultArray[1];										
					localStorage.ffID=syncResultArray[2];					
					localStorage.ffName=syncResultArray[3];
					localStorage.mobile_no=syncResultArray[4];
					localStorage.pnGO=syncResultArray[5];
					localStorage.listAll=syncResultArray[6];					
					
					$("#totalList").val(localStorage.listAll);					
					
					localStorage.listStr=$("#totalList").val();
					
					var totalLi=localStorage.listStr.split(',');
					
					localStorage.div_name=totalLi[0]
					localStorage.div_code=totalLi[1]
					localStorage.dis_name=totalLi[2]
					localStorage.dis_code=totalLi[3]
					localStorage.up_name=totalLi[4]
					localStorage.up_code=totalLi[5]
					localStorage.un_name=totalLi[6]
					localStorage.un_code=totalLi[7]					
										
					$("#divName").val(localStorage.div_name);
					$("#divCode").val(localStorage.div_code);
					$("#disName").val(localStorage.dis_name);
					$("#disCode").val(localStorage.dis_code);
					$("#upName").val(localStorage.up_name);
					$("#upCode").val(localStorage.up_code);
					$("#unName").val(localStorage.un_name);						
					$("#unCode").val(localStorage.un_code);
					
					
					//===========socialmap
					var wardName='<label for="ward">Ward No</label><select name="ward" id="ward" data-native-menu="false" onblur="social_map_id()"><option value="0">Select Ward No</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option></select>'	
					$("#wardName").html(wardName);
					
					var odfStatusName='<select id="odfStatus" name="odfStatus" data-native-menu="false"><option value="0">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>'
					$("#odfStatusName").html(odfStatusName);
					
					var commExitName='<select id="commExit" name="commExit" data-native-menu="false" onchange="washCommitt()"><option value="0">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>'
					$("#commExitName").html(commExitName);
					
					var commFuncName='<select id="commFunc" name="commFunc" data-native-menu="false"><option value="0">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>'
					$("#commFuncName").html(commFuncName);
					
					$("#btn_socialmap_home").hide();
					
					//===========Beneficary
					var benWardNo='<label for="ben_ward">Ward No</label><select name="ben_ward" id="ben_ward" data-native-menu="false"  onblur="social_map_id()" onchange="cluster()" ><option value="0">Ward No</option></select>'   
					$("#benWardNo").html(benWardNo);
					
					var benClusIDName='<label for="ben_clusID">Cluster ID</label><select name="ben_clusID" id="ben_clusID" data-native-menu="false" onblur="social_map_id()"><option value="0">Select Cluster</option></select>' 
					$("#benClusIDName").html(benClusIDName);
					
					var benGender='<label for="ben_hh_head_gender">HH Head Gender</label><select id="ben_hh_head_gender" name="ben_hh_head_gender" data-native-menu="false"><option value="0">Select HH Head Gender</option><option value="Male">Male</option><option value="Female">Female</option></select>'
					$("#benGender").html(benGender);
					
					var benEcoCondition='<label for="ben_eco_condition">Economic Condition</label><select id="ben_eco_condition" name="ben_eco_condition" data-native-menu="false"><option value="0">Select Economic Condition</option><option value="Rich">A: Rich</option><option value="Middle">B: Middle Class</option><option value="Poor">C: Poor</option><option value="Exterme Poor">D: Exterme Poor</option></select>'
					$("#benEcoCondition").html(benEcoCondition);
					
					var spsFamily_ben='<label for="sps_family">Sponsorship Family</label><select name="sps_family" id="sps_family" data-native-menu="false"><option value="0">Select Sponsorship Family</option><option value="Yes">Yes</option><option value="No">No</option></select>'
					$("#spsFamily_ben").html(spsFamily_ben);
					
					$("#btn_ben_home").hide();
					$("#btn_ben_service_san").hide();
					$("#btn_ben_home_san").hide();
					$("#btn_ben_service").hide();
					$("#btn_ben_service_hwf").hide();
					$("#btn_ben_home_hwf").hide();
					
					//----------Sanation
					var sanLatType_ben='<label for="san_lat_type">Type of Latrine Provided</label><select name="san_lat_type" id="san_lat_type" data-native-menu="false"><option value="0">Select Type of Latrine Provided</option><option value="Offset Pit">Offset Pit</option><option value="Water Seal Pit">Water Seal Pit</option><option value="Pit Latrine with Sato Pan">Pit Latrine with Sato Pan</option><option value="Shared Offset Pit">Shared-Offset Pit</option><option value="Shared Water Seal Pit">Shared-Water Seal Pit</option><option value="Shared Pit Latrine with Sato Pan">Shared-Pit Latrine with Sato Pan</option></select>'
					$("#sanLatType_ben").html(sanLatType_ben);
					
					var sanActType_ben='<label for="san_act_type">Type of Activity</label><select name="san_act_type" id="san_act_type" data-native-menu="false"><option value="0">Select Type of Activity</option><option value="New">New</option><option value="Renovation">Renovation</option></select>'	
					$("#sanActType_ben").html(sanActType_ben);
					
					var sanSubsidized_ben='<label for="san_subsidized">Subsidized</label><select name="san_subsidized" id="san_subsidized" data-native-menu="false"><option value="0">Select Subsidized</option><option value="Yes">Yes</option><option value="No">No</option></select>'			
					$("#sanSubsidized_ben").html(sanSubsidized_ben);
					
					//----------hwf
					var hwType_hwf='<label for="hw_type">Type of Handwash Facilities</label><select name="hw_type" id="hw_type" data-native-menu="false"><option value="0">Select Type of Handwash Facilities</option><option value="Water tank with tap">Water tank with tap</option><option value="Barrel Drum Bucket Jerrican with Tap">Barrel/Drum/Bucket/Jerrican with Tap</option><option value="Pitcher with Tap">Pitcher with Tap</option><option value="Tippy Tap">Tippy Tap</option><option value="Hand TubeWell">Hand TubeWell</option></select>'
					
					$("#hwType_hwf").html(hwType_hwf);
					
					//============wp
					var clusterIDNameWP='<label for="clusterIDName">Select Cluster</label><select name="clusterIDName" id="clusterIDName" data-native-menu="false"><option value="0">Select Cluster</option></select>'  
					$("#clusterIDNameWP").html(clusterIDNameWP);
					
					var wpActType='<label for="wp_act_type">Type of Activity</label><select name="wp_act_type" id="wp_act_type" data-native-menu="false"><option value="0">Select Type of Activity</option><option value="New">New</option><option value="Renovation">Renovation</option></select>'
					$("#wpActType").html(wpActType);
					
					var wpTechnology='<label for="wp_technology">Water Point Technology </label><select name="wp_technology" id="wp_technology" data-native-menu="false"><option value="0">Select Water Point Technology</option><option value="Deep Hand Tubewell">Deep Hand Tubewell</option><option value="Deep Set Pump">Deep Set Pump</option><option value="Shallow Tubewell">Shallow Tubewell</option><option value="Semi Deep Tubewell">Semi-Deep Tubewell</option><option value="Rain Water Harvesting">Rain Water Harvesting</option></select>'
					$("#wpTechnology").html(wpTechnology);
					
					var wpSubsidized='<label for="wp_subsidized">Subsidized</label><select name="wp_subsidized" id="wp_subsidized" data-native-menu="false"><option value="0">Select Subsidized</option><option value="Yes">Yes</option><option value="No">No</option></select>'	
					$("#wpSubsidized").html(wpSubsidized);
					
					var wpWq='<label for="wp_wq">Water Quality Test Type</label><select name="wp_wq" id="wp_wq" data-native-menu="false"><option value="0">Select Water Quality Test Type</option><option value="Arsenic">Arsenic</option><option value="Bacterial">Bacterial</option><option value="Both Arsenic And Bacteria">Both Arsenic & Bacteria</option></select>'
					$("#wpWq").html(wpWq);
					
					var wpWqResult='<label for="wp_wq_result">Result Water Quality Test</label><select name="wp_wq_result" id="wp_wq_result" data-native-menu="false"><option value="0">Select Result Water Quality Test</option><option value="Potable">Potable</option><option value="Not Potable">Not Potable</option><option value="Not Undertaken Yet">Not Undertaken Yet</option></select>'	
					$("#wpWqResult").html(wpWqResult);
					
					var wpTubPre='<label for="wp_tub_pre">Tubewell Located on Premises</label><select name="wp_tub_pre" id="wp_tub_pre" data-native-menu="false"><option value="0">Select TW Located on Premises</option><option value="1">On Premises</option><option value="2">Up to 30 min (\u2266 30)</option><option value="3">More than 30 min (&#62 30)</option></select>'	
					$("#wpTubPre").html(wpTubPre);
															
					$(".errorMsg").html("Sync Successful");
					$('#syncBasic').show();
											
					url = "#homePage";
					$.mobile.navigate(url);																		
				}else{						
					$(".errorMsg").html("Sync Failed. Authorization or Network Error.");
					$('#syncBasic').show();
				}				
		  }//----/success f
		});//------/ajax			
	}//-----/field			
}
	
function menuClick(){
	$(".errorChk").text("");
	$(".sucChk").text("");
	
	$("#btn_take_pic").show();
	$("#btn_ach_lat_long").show();
	
	url = "#homePage";
	$.mobile.navigate(url);
}
//----------------back button
function backClick(){
	$(".errorChk").text("");
}

//----------
var planData="";
var plan2Data="";
var plan3Data="";

var div_name;
var div_code;
var dis_name;
var dis_code;
var up_name;
var up_code;
var un_name;
var un_code;

var ward;
var village;
var clusID;
var clusName;
var socialMapID;

var rich;
var middle;
var poor;
var exPoor;

var hyLatrine;
var unhyLatrine;
var noLatrine;

var hyTub;
var unhyTub;
var noTub; //not use

var hwYes;
var hwNo;

var odfStatus;

var commExit;
var commFunc;

var commFemale;
var commMale;
var benTotal;

var benG_5;
var benB_5;
var benG_5_18;
var benB_5_18;
var benF_18_plus;
var benM_18_plus;
var EthF;
var EthM;
var disG_5;
var disB_5;
var disG_5_18;
var disB_5_18;
var disF_18_plus;
var disM_18_plus;
var b_clsID;
function social_map_id(){
	
	div_code=$("#divCode").val();
	dis_code=$("#disCode").val();
	up_code=$("#upCode").val();
	un_code=$("#unCode").val();
	ward=$("#ward").val();
	clusID=$("#clusID").val();
	
	ben_ward=$("#ben_ward").val();
	ben_clusID=$("#ben_clusID").val();
	ben_hh_serial=$("#ben_hh_serial").val();
	
	b_clusList=ben_clusID.split("-");
	b_clsID=b_clusList[0];
	b_clsName=b_clusList[1];
	
	if (social=='social'){
		socialFullID=div_code+dis_code+up_code+un_code+ward+clusID;	
		$("#socialMapID").val(socialFullID);		
	}else{		
		benSocialFullID=div_code+dis_code+up_code+un_code+ben_ward+b_clsID+'-'+ben_hh_serial;	
		$("#ben_hh_id").val(benSocialFullID);
	}
}

function totalBeneficiary(){
	 benG_5=$("#benG_5").val();
	 benB_5=$("#benB_5").val();
	 benG_5_18=$("#benG_5_18").val();
	 benB_5_18=$("#benB_5_18").val();
	 benF_18_plus=$("#benF_18_plus").val();
	 benM_18_plus=$("#benM_18_plus").val();
	
	if(benG_5==''){
		benG_5=0;
	}
	if(benB_5==''){
		benB_5=0;
	}	
	if(benG_5_18==''){
		benG_5_18=0;
	}	
	if(benB_5_18==''){
		benB_5_18=0;
	}		
	if(benF_18_plus==''){
		benF_18_plus=0;
	}	
	if(benM_18_plus==''){
		benM_18_plus=0;
	}			
	var totalGB=eval(benG_5)+eval(benB_5)+eval(benG_5_18)+eval(benB_5_18)+eval(benF_18_plus)+eval(benM_18_plus);	
	$("#benTotal").val(totalGB);
}

function totalhh(){
	rich=$("#rich").val();
	middle=$("#middle").val();
	poor=$("#poor").val();
	exPoor=$("#exPoor").val();
	
	if(rich==''){
		rich=0;
	}
	if(middle==''){
		middle=0;
	}	
	if(poor==''){
		poor=0;
	}	
	if(exPoor==''){
		exPoor=0;
	}		
		
	var totalHh=eval(rich)+eval(middle)+eval(poor)+eval(exPoor);	
	$("#TotalHh").val(totalHh);
}
	
var social;
function social_mapping(socialMap){
	if(localStorage.sync_code==undefined || localStorage.sync_code==""){
		$(".errorChk").text("Required Sync");
	}else{
		social=socialMap
		div_name=$("#divName").val();
		div_code=$("#divCode").val();
		dis_name=$("#disName").val();
		dis_code=$("#disCode").val();
		up_name=$("#upName").val();
		up_code=$("#upCode").val();
		un_name=$("#unName").val();
		un_code=$("#unCode").val();
		 
		if(div_name==''){
			$(".errorChk").text("Required Division");	
		}else if(dis_name==''){
			$(".errorChk").text("Required District");	
		}else if(up_name==''){
			$(".errorChk").text("Required Upzila Name");
		}else if(un_name==''){
			$(".errorChk").text("Required Union Name");
		}else{
			//planData="||div_name="+div_name+"||dis_name="+dis_name+"||up_name="+up_name+"||un_name="+un_name
			//alert(planData);
			$("#divi_soc").text(localStorage.div_name);
			$("#dis_soc").text(localStorage.dis_name);
			$("#upaz_soc").text(localStorage.up_name);
			$("#uni_soc").text(localStorage.un_name);
			
			$(".errorChk").text("");			
			url="#first_page";					
			$.mobile.navigate(url);	
		}
	}
}

function planbdData1Next(){
	ward=$("#ward").val();
	village=$("#village").val();
	clusID=$("#clusID").val();
	clusName=$("#clusName").val();
	socialMapID=$("#socialMapID").val();
	
	if(ward=='' || ward==0){
		$(".errorChk").text("Required ward no");
	}else if(clusID==''){
		$(".errorChk").text("Required Cluster ID");
	}else if(clusID.length !=2){
		$(".errorChk").text("Maximum Two Digit Cluster ID");
	}else if(socialMapID==''){
		$(".errorChk").text("Required Social Map ID");
	}else if(socialMapID.length !=12){
		$(".errorChk").text("Invalid Social Map ID");
	}else{
		//alert(apipath+"social_mapdata_exit?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ward="+ward+"&clusID="+clusID+"&socialMapID="+socialMapID);
		$.ajax({
		type: 'POST',
		url:apipath+"social_mapdata_exit?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ward="+ward+"&clusID="+clusID+"&socialMapID="+socialMapID,
																																																												
		success: function(result) {			
			if(result=='Success'){				
				$(".errorChk").text("");		
				url="#second_page";					
				$.mobile.navigate(url);	
			}else{
				$(".errorChk").text('Data Already Exist');			
				url="#first_page";					
				$.mobile.navigate(url);		
			}
		}
		})		
		
	}
}

function washCommitt(){
	commExit=$("#commExit").val();	
	if(commExit=='No'){
		/*$("#commFemale").attr('readonly','readonly').css("background-color","#F9F9F9");
		$("#commMale").attr('readonly','readonly').css("background-color","#F9F9F9");*/
		$("#washCommmember").hide();
	}else{
		$("#washCommmember").show();
		/*$("#commFemale").removeAttr('readonly');
		$("#commMale").removeAttr('readonly');*/
	}
}

function planbdData2Next(){
	rich=$("#rich").val();
	middle=$("#middle").val();
	poor=$("#poor").val();
	exPoor=$("#exPoor").val();
	
	hyLatrine=$("#hyLatrine").val();
	unhyLatrine=$("#unhyLatrine").val();
	noLatrine=$("#noLatrine").val();
	
	hyTub=$("#hyTub").val();
	unhyTub=$("#unhyTub").val();
	//noTub=$("#noTub").val();
	
	hwYes=$("#hwYes").val();
	hwNo=$("#hwNo").val();
	
	odfStatus=$("#odfStatus").val();
	
	commExit=$("#commExit").val();
	commFunc=$("#commFunc").val();
	
	commFemale=$("#commFemale").val();
	commMale=$("#commMale").val();	
	
	benG_5=$("#benG_5").val();
	benB_5=$("#benB_5").val();
	benG_5_18=$("#benG_5_18").val();
	benB_5_18=$("#benB_5_18").val();
	benF_18_plus=$("#benF_18_plus").val();
	benM_18_plus=$("#benM_18_plus").val();
	benTotal=$("#benTotal").val();
	EthF=$("#EthF").val();
	EthM=$("#EthM").val();
	disG_5=$("#disG_5").val();
	disB_5=$("#disB_5").val();
	disG_5_18=$("#disG_5_18").val();
	disB_5_18=$("#disB_5_18").val();
	disF_18_plus=$("#disF_18_plus").val();
	disM_18_plus=$("#disM_18_plus").val();
	
	ecoStatus=eval(rich)+eval(middle)+eval(poor)+eval(exPoor);
	sanTotal=eval(hyLatrine)+eval(unhyLatrine)+eval(noLatrine);
	wpTotal=eval(hyTub)+eval(unhyTub)//+eval(noTub);
	hwTotal=eval(hwYes)+eval(hwNo);
	
	benGtotal=eval(benG_5)+eval(benG_5_18)+eval(benF_18_plus);
	benBtotal=eval(benB_5)+eval(benB_5_18)+eval(benM_18_plus);
	
	if(rich==''){
		$(".errorChk").text("Required rich");
	}else if(middle==''){
		$(".errorChk").text("Required middle");
	}else if(poor==''){
		$(".errorChk").text("Required poor");
	}else if(exPoor==''){
		$(".errorChk").text("Required extreme poor");
	}else if(hyLatrine==''){
		$(".errorChk").text("Required hygienic latrine");
	}else if(unhyLatrine==''){
		$(".errorChk").text("Required unhygienic latrine");
	}else if(noLatrine==''){
		$(".errorChk").text("Required no latrine");
	}else if(hyTub==''){
		$(".errorChk").text("Required hygienic tubewell ");
	}else if(unhyTub==''){
		$(".errorChk").text("Required unhygienic tubewell ");
	/*}else if(noTub==''){
		$(".errorChk").text("Required No Tubewell");*/
	}else if(hwYes==''){
		$(".errorChk").text("Required handwashing facility yes");
	}else if(hwNo==''){
		$(".errorChk").text("Required handwashing facility no");
	}else if(odfStatus=='' || odfStatus==0){
		$(".errorChk").text("Required ODF status of community");
	}else if(commExit=='' || commExit==0){
		$(".errorChk").text("Required wash committee exist");
	}else if(commFunc=='' || commFunc==0){
		$(".errorChk").text("Required wash committee functional");		
	}else if(commFemale=='' && commExit=='Yes'){	
		$(".errorChk").text("Required female ");
	}else if(commMale=='' && commExit=='Yes'){
		$(".errorChk").text("Required male");
	/*}else if(benG_5==''){
		$(".errorChk").text("Required Girl (<=5)");
	}else if(benB_5==''){
		$(".errorChk").text("Required Boy (<=5)");
	}else if(benG_5_18==''){
		$(".errorChk").text("Required Girl (5+ to <=18)");  
	}else if(benB_5_18==''){
		$(".errorChk").text("Required Boy (5+ to <=18)");	
	}else if(benF_18_plus==''){
		$(".errorChk").text("Required Female (18+)");  
	}else if(benM_18_plus==''){
		$(".errorChk").text("Required Male (18+)");	
	}else if(benGtotal<EthF){
		$(".errorChk").text("Invalid Ethnic Female");*/	
	}else if(benBtotal<EthM){
		$(".errorChk").text("Invalid ethnic male ");
	}else if(benTotal<(eval(EthF)+eval(EthM))){
		$(".errorChk").text("Invalid total number of HH ");
		
	}else if(ecoStatus < sanTotal){
		$(".errorChk").text("Number of HHs by Economic Status Less than or Equal Sanitation Information");
	}else if(ecoStatus < wpTotal){
		$(".errorChk").text("Number of HHs by Economic Status Not Match Water Point Information");
	}else if(ecoStatus != hwTotal){
		$(".errorChk").text("Number of HHs by Economic Status Not Match Handwashing Facility Infomrationn");
	}else if(ecoStatus > benTotal){
		$(".errorChk").text("Number of HHs by Economic Status Grater than or Equal Beneficiaries Count");
	
	}else if(benG_5<disG_5){
		$(".errorChk").text("Disabilities < Beneficiaries  Girl (<=5)");
	}else if(benB_5<disB_5){
		$(".errorChk").text("Disabilities < Beneficiaries  Boy (<=5)");
	}else if(benG_5_18<disG_5_18){
		$(".errorChk").text("Disabilities < Beneficiaries  Girl (5+ to <=18)");
	}else if(benB_5_18<disB_5_18){
		$(".errorChk").text("Disabilities < Beneficiaries  Boy (5+ to <=18)");
	}else if(benF_18_plus<disF_18_plus){
		$(".errorChk").text("Disabilities < Beneficiaries  Female (18+)");	
	}else if(benM_18_plus<disM_18_plus){
		$(".errorChk").text("Disabilities < Beneficiaries  Male (18+)");		
	}else{
		
		//plan3Data="||rich="+rich+"||middle="+middle+"||poor="+poor+"||exPoor="+exPoor+"||hyLatrine="+hyLatrine+"||unhyLatrine="+unhyLatrine+"||noLatrine="+noLatrine+"||hyTub="+hyTub+"||unhyTub="+unhyTub+"||noTub="+noTub+"||hwYes="+hwYes+"||hwNo="+hwNo+"||odfStatus="+odfStatus+"||commExit="+commExit+"||commFunc="+commFunc+"||commFemale="+commFemale+"||commMale="+commMale+"||benTotal="+benTotal+"||benG_5="+benG_5+"||benB_5="+benB_5+"||benG_5_18="+benG_5_18+"||benB_5_18="+benB_5_18+"||benF_18_plus="+benF_18_plus+"||benM_18_plus="+benM_18_plus+"||EthF="+EthF+"||EthM="+EthM+"||disG_5="+disG_5+"||disB_5="+disB_5+"||disG_5_18="+disG_5_18+"||disB_5_18="+disB_5_18+"||disF_18_plus="+disF_18_plus+"||disM_18_plus="+disM_18_plus
		//alert(plan3Data);
		$(".errorChk").text("");	
		url="#inPhoto";					
		$.mobile.navigate(url);
	}
}


function dataSubmit(){
	$("#btn_submit").hide();
	
	var d = new Date();	
	var get_time=d.getTime();	
	
	latitude=$("#ach_lat").val();
	longitude=$("#ach_long").val();
	
	achPhoto=$("#achPhoto").val();
	achPhoto2=$("#achPhoto_2").val();
	
	if (latitude==undefined || latitude==''){
		latitude=0;
	}
	if (longitude==undefined || longitude==''){
		longitude=0;
	}
	if (achPhoto=='' || achPhoto==undefined){
		$(".errorChk").text("Please confirm Photo 1 ");
		$("#btn_submit").show();
	}else if (achPhoto_2=='' || achPhoto_2==undefined){
		$(".errorChk").text("Please confirm Photo 2 ");
		$("#btn_submit").show();
	}else if((latitude==0 || longitude==0) ||(localStorage.latitudeAreaWq==0 || localStorage.longitudeAreaWq==0)||(localStorage.latitudeAreaWq==undefined || localStorage.longitudeAreaWq==undefined)){
		$(".errorChk").text("Please confirm your location");
		$("#btn_ach_lat_long").show();
		$("#btn_submit").show();
	}else{				
		//imagePathA="test"					
		if (imagePathA!=""){							
			$(".errorChk").text("Syncing photo 1..");
			imageName = localStorage.mobile_no+"_"+get_time+".jpg";										
			uploadPhotoAch(imagePathA, imageName);	
			//$("#btn_submit").show();					
		}		
		//syncData();
	}//chk photo
	

	
}

//------------------------------------image 1

function getAchivementImage1() { 
	navigator.camera.getPicture(onSuccessA, onFailA, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });	
}

function onSuccessA(imageURI) {		
    var image = document.getElementById('myImageA');
    image.src = imageURI;
	imagePathA = imageURI;	
	$("#achPhoto").val(imagePathA);
	
}

function onFailA(message) {
	imagePathA="";
    alert('Failed because: ' + message);
}

function uploadPhotoAch(imageURI, imageName) { 	
	//winAchInfo();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd_image/planbd_image/"),winAchInfo,onfail,options);
}

function winAchInfo(r) {	
	$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
	
	var d = new Date();	
	var get_time=d.getTime();
		
	//imagePath2A="test2"
	if (imagePath2A!=""){							
		$(".errorChk").text("Syncing photo 2..");
		imageName2 = localStorage.mobile_no+"_"+get_time+".jpg";
				
		uploadPhoto2Ach(imagePath2A, imageName2);
		//$("#btn_submit").show();		
	}
}

function onfail(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_submit").show();
}

//-----------------------image 2
function getAchivementImage2() { 
	navigator.camera.getPicture(onSuccess2A, onFail2A, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess2A(imageURI) {	
    var image = document.getElementById('myImage2A');
    image.src = imageURI;
	imagePath2A = imageURI;	
	$("#achPhoto_2").val(imagePath2A);
}

function onFail2A(message) { 
	imagePath2A="";
    alert('Failed because: ' + message);
}

function uploadPhoto2Ach(imageURI, imageName2) { // second step	
	//winComInfo2();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName2;
    options.mimeType="image/jpeg";
	
    var params = {};
    params.value1 = "test";
    params.value2 = "param";	
    options.params = params;
	
	options.chunkedMode = false;
	
    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd_image/planbd_image/"),winComInfo2,onfail,options);
}

function winComInfo2(r) {
	$(".errorChk").text('Image 2 upload successfull. Syncing Data ...');
	syncData();
}

function syncData(){
	if(latitude==0 || longitude==0){
		latitude=localStorage.latitudeAreaWq;
		longitude=localStorage.longitudeAreaWq;
	}				
	//alert(apipath+"submitData?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName+"&achPhoto2="+imageName2+"&latitude="+latitude+"&longitude="+longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ward="+ward+"&village="+village+"&clusID="+clusID+"&clusName="+clusName+"&socialMapID="+socialMapID+"&rich="+rich+"&middle="+middle+"&poor="+poor+"&exPoor="+exPoor+"&hyLatrine="+hyLatrine+"&unhyLatrine="+unhyLatrine+"&noLatrine="+noLatrine+"&hyTub="+hyTub+"&unhyTub="+unhyTub+"&noTub="+noTub+"&hwYes="+hwYes+"&hwNo="+hwNo+"&odfStatus="+odfStatus+"&commExit="+commExit+"&commFunc="+commFunc+"&commFemale="+commFemale+"&commMale="+commMale+"&benTotal="+benTotal+"&benG_5="+benG_5+"&benB_5="+benB_5+"&benG_5_18="+benG_5_18+"&benB_5_18="+benB_5_18+"&benF_18_plus="+benF_18_plus+"&benM_18_plus="+benM_18_plus+"&EthF="+EthF+"&EthM="+EthM+"&disG_5="+disG_5+"&disB_5="+disB_5+"&disG_5_18="+disG_5_18+"&disB_5_18="+disB_5_18+"&disF_18_plus="+disF_18_plus+"&disM_18_plus="+disM_18_plus);
	$.ajax({
		type: 'POST',
		url:apipath+"submitData?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName+"&achPhoto2="+imageName2+"&latitude="+latitude+"&longitude="+longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ward="+ward+"&village="+village+"&clusID="+clusID+"&clusName="+clusName+"&socialMapID="+socialMapID+"&rich="+rich+"&middle="+middle+"&poor="+poor+"&exPoor="+exPoor+"&hyLatrine="+hyLatrine+"&unhyLatrine="+unhyLatrine+"&noLatrine="+noLatrine+"&hyTub="+hyTub+"&unhyTub="+unhyTub+"&hwYes="+hwYes+"&hwNo="+hwNo+"&odfStatus="+odfStatus+"&commExit="+commExit+"&commFunc="+commFunc+"&commFemale="+commFemale+"&commMale="+commMale+"&benTotal="+benTotal+"&benG_5="+benG_5+"&benB_5="+benB_5+"&benG_5_18="+benG_5_18+"&benB_5_18="+benB_5_18+"&benF_18_plus="+benF_18_plus+"&benM_18_plus="+benM_18_plus+"&EthF="+EthF+"&EthM="+EthM+"&disG_5="+disG_5+"&disB_5="+disB_5+"&disG_5_18="+disG_5_18+"&disB_5_18="+disB_5_18+"&disF_18_plus="+disF_18_plus+"&disM_18_plus="+disM_18_plus,
																																																												
		success: function(result) {			
			if(result=='Success'){
				
				$("#ward").val(0);
				$("#village").val("");
				$("#clusID").val("");
				$("#clusName").val("");
				$("#socialMapID").val("");
				
				$("#rich").val("");
				$("#middle").val("");
				$("#poor").val("");
				$("#exPoor").val("");
				$("#TotalHh").val("");
				
				$("#hyLatrine").val("");
				$("#unhyLatrine").val("");
				$("#noLatrine").val("");
				
				$("#hyTub").val("");
				$("#unhyTub").val("");
				//$("#noTub").val("");
				
				$("#hwYes").val("");
				$("#hwNo").val("");
				
				$("#odfStatus").val(0);
				
				$("#commExit").val(0);
				$("#commFunc").val(0);
				
				$("#commFemale").val("");
				$("#commMale").val("");
				$("#benTotal").val("");
				
				$("#benG_5").val("");
				$("#benB_5").val("");
				$("#benG_5_18").val("");
				$("#benB_5_18").val("");
				$("#benF_18_plus").val("");
				$("#benM_18_plus").val("");
				$("#EthF").val("");
				$("#EthM").val("");
				$("#disG_5").val("");
				$("#disB_5").val("");
				$("#disG_5_18").val("");
				$("#disB_5_18").val("");
				$("#disF_18_plus").val("");
				$("#disM_18_plus").val("");				
				//--------------
				$("#ach_lat").val(0);
				$("#ach_long").val(0);
				
				$("#myImageA").val("");										
				$("#myImage2A").val("");
				
				$("#achPhoto").val("");										
				$("#achPhoto_2").val("");
				document.getElementById('myImageA').src = '';
				document.getElementById('myImage2A').src = '';
								
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_submit").hide();
				//$("#btn_new_socialmap").show();	
				$("#btn_socialmap_home").show();					
			}else{
				$(".errorChk").text('Cluster ID Already Exist');																	
				$("#btn_submit").show();
				//$("#btn_new_socialmap").hide();	
				$("#btn_socialmap_home").hide();	
			}
			
		}//end result
	});//end ajax
}

/*function addNewSocialMap(){
	$("#btn_submit").show();
	//$("#btn_new_socialmap").hide();	
	$("#btn_socialmap_home").hide();
	
	$(".errorChk").text("");
	$(".sucChk").text("");			
	url="#first_page";					
	$.mobile.navigate(url);
}*/

function socialMapHome(){
	var wardName='<label for="ward">Ward No</label><select name="ward" id="ward" data-native-menu="false" onblur="social_map_id()"><option value="0">Select Ward No</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option></select>'	
	$("#wardName").html(wardName).trigger('create');
	
	var odfStatusName='<select id="odfStatus" name="odfStatus" data-native-menu="false"><option value="0">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>'
	$("#odfStatusName").html(odfStatusName).trigger('create');
	
	var commExitName='<select id="commExit" name="commExit" data-native-menu="false" onchange="washCommitt()"><option value="0">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>'
	$("#commExitName").html(commExitName).trigger('create');
	
	var commFuncName='<select id="commFunc" name="commFunc" data-native-menu="false"><option value="0">Select</option><option value="Yes">Yes</option><option value="No">No</option></select>'
	$("#commFuncName").html(commFuncName).trigger('create');
	
	$("#btn_submit").show();	
	$("#btn_socialmap_home").hide();	
	
	$(".errorChk").text("");
	$(".sucChk").text("");					
	url="#homePage";					
	$.mobile.navigate(url);
}


function social_map_data(){
	
	//alert(apipath+"social_map_data_show?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code);
	$.ajax({
		type:'POST',
		url:apipath+"social_map_data_show?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code,
		success: function(resStr){
			socialMapList=resStr.split('fdfd');					
			var socialListStr='<ul data-role="listview" data-inset="true" >';	        
			for(i=0; i<socialMapList.length; i++){						
				socialListStr+='<li style="margin-bottom:1px;">'+socialMapList[i]+'</li>';			
			}
			socialListStr+='</ul>';
			
			$('#data_show').empty();
			$('#data_show').append(socialListStr).trigger('create');	
		}
	})
}

//============================Beneficiary============================
var ben_ward;
var ben_village;
var ben_clusID;
var ben_clusName;
var ben_socialMapID;
var ben_hh_serial;
var ben_hh_id;
var ben_hh_head_name;
var ben_hh_head_gender;
var ben_eco_condition;
var sps_family;
var ben_benG_5;
var ben_benB_5;
var ben_benG_5_18;
var ben_benB_5_18;
var ben_benF_18_plus;
var ben_benM_18_plus;
var benBen_Total;
var ben_EthF;
var ben_EthM;
var ben_disG_5;
var ben_disB_5;
var ben_disG_5_18;
var ben_disB_5_18;
var ben_disF_18_plus;
var ben_disM_18_plus;

function beneficiary(beneficiary){
	if(localStorage.sync_code==undefined || localStorage.sync_code==""){
		$(".errorChk").text("Required Sync");
	}else{
		social=beneficiary;
		
		div_name=$("#divName").val();
		div_code=$("#divCode").val();
		dis_name=$("#disName").val();
		dis_code=$("#disCode").val();
		up_name=$("#upName").val();
		up_code=$("#upCode").val();
		un_name=$("#unName").val();
		un_code=$("#unCode").val();
		 
		if(div_name==''){
			$(".errorChk").text("Required Division");	
		}else if(dis_name==''){
			$(".errorChk").text("Required District");	
		}else if(up_name==''){
			$(".errorChk").text("Required Upzila Name");
		}else if(un_name==''){
			$(".errorChk").text("Required Union Name");
		}else{
			//planData="||div_name="+div_name+"||dis_name="+dis_name+"||up_name="+up_name+"||un_name="+un_name
			//alert(planData);
			//alert(apipath+"searchWord?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code);
			$.ajax({
				type:'POST',
				url:apipath+"searchWord?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code,
				success: function(resStr){					
					wordList=resStr.split('fdfd');					
					var woListStr="";	
					woListStr+='<option value="0">Select Ward No</option>'		        
					for(i=0; i<wordList.length; i++){						
						woListStr+="<option value="+encodeURIComponent(wordList[i])+">"+wordList[i]+"</option>";			
					}
					
					var rpt_rep_ob=$("#ben_ward");					
					rpt_rep_ob.empty();					
					rpt_rep_ob.append(woListStr);					
					rpt_rep_ob.selectmenu("refresh");	
				}
			})
			
			$("#divi_ben").text(localStorage.div_name);
			$("#dis_ben").text(localStorage.dis_name);
			$("#upaz_ben").text(localStorage.up_name);
			$("#uni_ben").text(localStorage.un_name);
			
			$(".errorChk").text("");			
			url="#ben_first_page";					
			$.mobile.navigate(url);	
		}
	}
}


function cluster(){	
	div_code=$("#divCode").val();
	dis_code=$("#disCode").val();
	up_code=$("#upCode").val();
	un_code=$("#unCode").val();
	ben_ward=$("#ben_ward").val();
	//alert(apipath+"cluster_list?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ben_ward="+ben_ward);
	$.ajax({		
		url:apipath+"cluster_list?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ben_ward="+ben_ward,
		success: function(clusterStr) {
			clusterLiStr=clusterStr.split("fdfd");
			
			clsListS="";
			for (i=0;i<clusterLiStr.length;i++){
			  cls=clusterLiStr[i]
			  clsListS+="<option value="+encodeURIComponent(cls)+">"+cls+"</option>";					  
			}	
			
			var rpt_rep_ob=$("#ben_clusID");
			rpt_rep_ob.empty();
			rpt_rep_ob.append(clsListS);
			rpt_rep_ob.selectmenu("refresh");
			
			}		  
		});		
}

function ben_planbdData1Next(){
	$(".errorChk").text("");
	$(".sucChk").text("");	
	
	ben_ward=$("#ben_ward").val();
	ben_village=$("#ben_village").val();
	ben_clusIDNameList=$("#ben_clusID").val();
	ben_clusIDStr=ben_clusIDNameList.split("-");
	ben_clusID=ben_clusIDStr[0];
	ben_clusName=ben_clusIDStr[1];
	
	ben_socialMapID=$("#ben_socialMapID").val();
	ben_hh_serial=$("#ben_hh_serial").val();
	
	localStorage.hh_serial=ben_hh_serial;
	
	if(ben_ward=='' || ben_ward==0){
		$(".errorChk").text("Required ward no");
	}else if(ben_clusID=='' || ben_clusID==0){
		$(".errorChk").text("Required Cluster ID");	
	/*}else if(ben_socialMapID==''){
		$(".errorChk").text("Required Social Map ID");
	}else if(ben_socialMapID.length !=12){
		$(".errorChk").text("Invalid Social Map ID");*/
	}else if(ben_hh_serial=='' || ben_hh_serial==undefined){
		$(".errorChk").text("Required HH Serial");
	}else if(ben_hh_serial.length !=3){
		$(".errorChk").text("Maximum 3 digit HH Serial");		
	}else{
		
		//alert(apipath+"search_benData?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ben_ward="+ben_ward+"&ben_clusID="+ben_clusID+"&ben_hh_serial="+localStorage.hh_serial);
		$.ajax({
			type:'POST',
			url:apipath+"search_benData?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ben_ward="+ben_ward+"&ben_clusID="+ben_clusID+"&ben_hh_serial="+localStorage.hh_serial,
			success: function(result){				
				searchResult=result;			
				var searchResultArray = searchResult.split('||');
					resultSearch=searchResultArray[0];
					
					if (resultSearch=='Success'){
						
						//$("#btn_ben_service").hide();								
						$(".errorChk").text("");			
						url="#ben_new_page";					
						$.mobile.navigate(url);
					}else{	
						$(".errorChk").text("");			
						url="#ben_second_page";					
						$.mobile.navigate(url);
					}
							
			}
		})
		
		$("#divi_ben_2").text(localStorage.div_name);
		$("#dis_ben_2").text(localStorage.dis_name);
		$("#upaz_ben_2").text(localStorage.up_name);
		$("#uni_ben_2").text(localStorage.un_name);
		$("#wardNo_ben_2").text(ben_ward);
		$("#cLuster_ben_2").text(ben_clusID+"-"+(ben_clusName).replace(/%20/g," "));
	}
}

function ben_update(){
		var benGender='<label for="ben_hh_head_gender">HH Head Gender</label><select id="ben_hh_head_gender" name="ben_hh_head_gender" data-native-menu="false"><option value="0">Select HH Head Gender</option><option value="Male">Male</option><option value="Female">Female</option></select>'
		$("#benGender").html(benGender);
		
		var benEcoCondition='<label for="ben_eco_condition">Economic Condition</label><select id="ben_eco_condition" name="ben_eco_condition" data-native-menu="false"><option value="0">Select Economic Condition</option><option value="Rich">A: Rich</option><option value="Middle">B: Middle Class</option><option value="Poor">C: Poor</option><option value="Exterme Poor">D: Exterme Poor</option></select>'
		$("#benEcoCondition").html(benEcoCondition);
		
		var spsFamily_ben='<label for="sps_family">Sponsorship Family</label><select name="sps_family" id="sps_family" data-native-menu="false"><option value="0">Select Sponsorship Family</option><option value="Yes">Yes</option><option value="No">No</option></select>'
		$("#spsFamily_ben").html(spsFamily_ben);
	
		//alert(apipath+"update_beneficary?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ben_ward="+ben_ward+"&ben_clusID="+ben_clusID+"&ben_hh_serial="+localStorage.hh_serial);
		$.ajax({
			type:'POST',
			url:apipath+"update_beneficary?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ben_ward="+ben_ward+"&ben_clusID="+ben_clusID+"&ben_hh_serial="+localStorage.hh_serial,
			success: function(result){				
				searchResult=result;			
				var searchResultArray = searchResult.split('||');
					resultSearch=searchResultArray[0];
					
					if (resultSearch=='Success'){	
						ben_hh_head_name=searchResultArray[1];
						ben_hh_head_gender=searchResultArray[2];	
						ben_eco_condition=searchResultArray[3];	
						ben_benG_5=searchResultArray[4];	
						ben_benB_5=searchResultArray[5];	
						ben_benG_5_18=searchResultArray[6];	
						ben_benB_5_18=searchResultArray[7];	
						ben_benF_18_plus=searchResultArray[8];	
						ben_benM_18_plus=searchResultArray[9];	
						ben_EthF=searchResultArray[10];		
						ben_EthM=searchResultArray[11];	
						ben_disG_5=searchResultArray[12];
						ben_disB_5=searchResultArray[13];
						ben_disG_5_18=searchResultArray[14];	
						ben_disB_5_18=searchResultArray[15];	
						ben_disF_18_plus=searchResultArray[16];	
						ben_disM_18_plus=searchResultArray[17];
						sps_family=searchResultArray[18];					
						
						$("#ben_hh_head_name").val(ben_hh_head_name);
						$("#ben_hh_head_gender").val(ben_hh_head_gender);
						$("#ben_eco_condition").val(ben_eco_condition);
						$("#ben_benG_5").val(ben_benG_5);
						$("#ben_benB_5").val(ben_benB_5);
						$("#ben_benG_5_18").val(ben_benG_5_18);
						$("#ben_benB_5_18").val(ben_benB_5_18);
						$("#ben_benF_18_plus").val(ben_benF_18_plus);
						$("#ben_benM_18_plus").val(ben_benM_18_plus);
						$("#ben_EthF").val(ben_EthF);
						$("#ben_EthM").val(ben_EthM);
						$("#ben_disG_5").val(ben_disG_5);
						$("#ben_disB_5").val(ben_disB_5);
						$("#ben_disG_5_18").val(ben_disG_5_18);
						$("#ben_disB_5_18").val(ben_disB_5_18);
						$("#ben_disF_18_plus").val(ben_disF_18_plus);
						$("#ben_disM_18_plus").val(ben_disM_18_plus);				
						$("#sps_family").val(sps_family);
						
						$("#btn_ben_submit").show();
						$(".errorChk").text("");			
						url="#ben_second_page";					
						$.mobile.navigate(url);
					}else{
						$(".errorChk").text("");			
						url="#ben_second_page";					
						$.mobile.navigate(url);
					}			
			}
		})
		
}

function joinSocialID(){
	ben_socialMapID=$("#ben_socialMapID").val();
	ben_hh_serial=$("#ben_hh_serial").val();
	benSocialHH=ben_socialMapID+'-'+ben_hh_serial
	
	$("#ben_hh_id").val(benSocialHH);
}

function benTotalBeneficiary(){
	ben_benG_5=$("#ben_benG_5").val();
	ben_benB_5=$("#ben_benB_5").val();
	ben_benG_5_18=$("#ben_benG_5_18").val();
	ben_benB_5_18=$("#ben_benB_5_18").val();
	ben_benF_18_plus=$("#ben_benF_18_plus").val();
	ben_benM_18_plus=$("#ben_benM_18_plus").val();
	
	if(ben_benG_5==''){
		ben_benG_5=0;
	}
	if(ben_benB_5==''){
		ben_benB_5=0;
	}	
	if(ben_benG_5_18==''){
		ben_benG_5_18=0;
	}	
	if(ben_benB_5_18==''){
		ben_benB_5_18=0;
	}		
	if(ben_benF_18_plus==''){
		ben_benF_18_plus=0;
	}	
	if(ben_benM_18_plus==''){
		ben_benM_18_plus=0;
	}			
	var totalBenGB=eval(ben_benG_5)+eval(ben_benB_5)+eval(ben_benG_5_18)+eval(ben_benB_5_18)+eval(ben_benF_18_plus)+eval(ben_benM_18_plus);	
	$("#benBen_Total").val(totalBenGB);	
}

function benDataSubmit(){
	$(".errorChk").text("");
	$(".sucChk").text("");	
		
	ben_hh_id=$("#ben_hh_id").val();
	ben_hh_head_name=$("#ben_hh_head_name").val();
	ben_hh_head_gender=$("#ben_hh_head_gender").val();
	ben_eco_condition=$("#ben_eco_condition").val();
	sps_family=$("#sps_family").val();
	ben_benG_5=$("#ben_benG_5").val();
	ben_benB_5=$("#ben_benB_5").val();
	ben_benG_5_18=$("#ben_benG_5_18").val();
	ben_benB_5_18=$("#ben_benB_5_18").val();
	ben_benF_18_plus=$("#ben_benF_18_plus").val();
	ben_benM_18_plus=$("#ben_benM_18_plus").val();
	benBen_Total=$("#benBen_Total").val();
	ben_EthF=$("#ben_EthF").val();
	ben_EthM=$("#ben_EthM").val();
	ben_disG_5=$("#ben_disG_5").val();
	ben_disB_5=$("#ben_disB_5").val();
	ben_disG_5_18=$("#ben_disG_5_18").val();
	ben_disB_5_18=$("#ben_disB_5_18").val();
	ben_disF_18_plus=$("#ben_disF_18_plus").val();
	ben_disM_18_plus=$("#ben_disM_18_plus").val();
	
	localStorage.hh_head_name=ben_hh_head_name;
	
	benBenGtotal=eval(ben_benG_5)+eval(ben_benG_5_18)+eval(ben_benF_18_plus);
	benBenBtotal=eval(ben_benB_5)+eval(ben_benB_5_18)+eval(ben_benM_18_plus);
	
	if(ben_hh_id==''){
		$(".errorChk").text("Required HH ID");
	}else if(ben_hh_head_name==''){
		$(".errorChk").text("Required HH Head Name");
	}else if(ben_hh_head_gender=='' || ben_hh_head_gender==0 || ben_hh_head_gender==null){
		$(".errorChk").text("Required Gender");	
	}else if(ben_eco_condition=='' || ben_eco_condition==0 || ben_eco_condition==null){
		$(".errorChk").text("Required Economic Condition");	
	}else if(sps_family=='' || sps_family==0 || sps_family==null){
		$(".errorChk").text("Required Sponsorship Family");		
	/*}else if(ben_benG_5==''){
		$(".errorChk").text("Required Girl (<=5)");
	}else if(ben_benB_5==''){
		$(".errorChk").text("Required Boy (<=5)");
	}else if(ben_benG_5_18==''){
		$(".errorChk").text("Required Girl (5+ to <=18)");  
	}else if(ben_benB_5_18==''){
		$(".errorChk").text("Required Boy (5+ to <=18)");	
	}else if(ben_benF_18_plus==''){
		$(".errorChk").text("Required Female (18+)");  
	}else if(ben_benM_18_plus==''){
		$(".errorChk").text("Required Male (18+)");	*/
	}else if(benBenGtotal<ben_EthF){
		$(".errorChk").text("Invalid Ethnic Female");	
	}else if(benBenBtotal<ben_EthM){
		$(".errorChk").text("Invalid Ethnic Male ");
	/*}else if(benBen_Total<(eval(ben_EthF)+eval(ben_EthM))){
		$(".errorChk").text("Invalid Total number of HH ");	*/
	}else if(ben_benG_5<ben_disG_5){
		$(".errorChk").text("Disabilities < Beneficiaries  Girl (<=5)");
	}else if(ben_benB_5<ben_disB_5){
		$(".errorChk").text("Disabilities < Beneficiaries  Boy (<=5)");
	}else if(ben_benG_5_18<ben_disG_5_18){
		$(".errorChk").text("Disabilities < Beneficiaries  Girl (5+ to <=18)");
	}else if(ben_benB_5_18<ben_disB_5_18){
		$(".errorChk").text("Disabilities < Beneficiaries  Boy (5+ to <=18)");
	}else if(ben_benF_18_plus<ben_disF_18_plus){
		$(".errorChk").text("Disabilities < Beneficiaries  Female (18+)");	
	}else if(ben_benM_18_plus<ben_disM_18_plus){
		$(".errorChk").text("Disabilities < Beneficiaries  Male (18+)");
	}else{
			
		//alert(apipath+"submitData_ben?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ben_ward="+ben_ward+"&ben_clusID="+ben_clusID+"&ben_clusName="+ben_clusName+"&ben_hh_serial="+ben_hh_serial+"&ben_hh_id="+ben_hh_id+"&ben_hh_head_name="+ben_hh_head_name+"&ben_hh_head_gender="+ben_hh_head_gender+"&ben_eco_condition="+ben_eco_condition+"&ben_benG_5="+ben_benG_5+"&ben_benB_5="+ben_benB_5+"&ben_benG_5_18="+ben_benG_5_18+"&ben_benB_5_18="+ben_benB_5_18+"&ben_benF_18_plus="+ben_benF_18_plus+"&ben_benM_18_plus="+ben_benM_18_plus+"&ben_EthF="+ben_EthF+"&ben_EthM="+ben_EthM+"&ben_disG_5="+ben_disG_5+"&ben_disB_5="+ben_disB_5+"&ben_disG_5_18="+ben_disG_5_18+"&ben_disB_5_18="+ben_disB_5_18+"&ben_disF_18_plus="+ben_disF_18_plus+"&ben_disM_18_plus="+ben_disM_18_plus+"&sps_family="+sps_family);
		$.ajax({
		type: 'POST',
		url:apipath+"submitData_ben?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ben_ward="+ben_ward+"&ben_clusID="+ben_clusID+"&ben_clusName="+ben_clusName+"&ben_hh_serial="+ben_hh_serial+"&ben_hh_id="+ben_hh_id+"&ben_hh_head_name="+ben_hh_head_name+"&ben_hh_head_gender="+ben_hh_head_gender+"&ben_eco_condition="+ben_eco_condition+"&ben_benG_5="+ben_benG_5+"&ben_benB_5="+ben_benB_5+"&ben_benG_5_18="+ben_benG_5_18+"&ben_benB_5_18="+ben_benB_5_18+"&ben_benF_18_plus="+ben_benF_18_plus+"&ben_benM_18_plus="+ben_benM_18_plus+"&ben_EthF="+ben_EthF+"&ben_EthM="+ben_EthM+"&ben_disG_5="+ben_disG_5+"&ben_disB_5="+ben_disB_5+"&ben_disG_5_18="+ben_disG_5_18+"&ben_disB_5_18="+ben_disB_5_18+"&ben_disF_18_plus="+ben_disF_18_plus+"&ben_disM_18_plus="+ben_disM_18_plus+"&sps_family="+sps_family,
																																																											
		success: function(result) {			
			if(result=='Success'){
				/*localStorage.hh_serial=ben_hh_serial;
				localStorage.hh_head_name=ben_hh_head_name;*/
				
				$("#ben_ward").val(0);
				$("#ben_clusID").val(0);
				$("#ben_hh_serial").val("");								
				
				$("#ben_hh_id").val("");
				$("#ben_hh_head_name").val("");
				$("#ben_hh_head_gender").val(0);
				$("#ben_eco_condition").val(0);
				$("#sps_family").val(0);
				$("#ben_benG_5").val("");
				$("#ben_benB_5").val("");
				$("#ben_benG_5_18").val("");
				$("#ben_benB_5_18").val("");
				$("#ben_benF_18_plus").val("");
				$("#ben_benM_18_plus").val("");
				$("#benBen_Total").val("");
				$("#ben_EthF").val("");
				$("#ben_EthM").val("");
				$("#ben_disG_5").val("");
				$("#ben_disB_5").val("");
				$("#ben_disG_5_18").val("");
				$("#ben_disB_5_18").val("");
				$("#ben_disF_18_plus").val("");
				$("#ben_disM_18_plus").val("");
														
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_ben_submit").hide();
				//$("#btn_new_ben").show();
				$("#btn_ben_service").show();
				$("#btn_ben_home").show();
			}else{
				$(".errorChk").text('Submission Failed.');																	
				$("#btn_ben_submit").show();
				//$("#btn_new_ben").hide();
				$("#btn_ben_service").hide();
				$("#btn_ben_home").hide();
			}
			
		}//end result
	});//end ajax
		
	}
}


function goToHome(){
	var benWardNo='<label for="ben_ward">Ward No</label><select name="ben_ward" id="ben_ward" data-native-menu="false"  onblur="social_map_id()" onchange="cluster()" ><option value="0">Ward No</option></select>'   
	$("#benWardNo").html(benWardNo).trigger('create');
	
	var benClusIDName='<label for="ben_clusID">Cluster ID</label><select name="ben_clusID" id="ben_clusID" data-native-menu="false" onblur="social_map_id()"><option value="0">Select Cluster</option></select>' 
	$("#benClusIDName").html(benClusIDName).trigger('create');
	
	var benGender='<label for="ben_hh_head_gender">HH Head Gender</label><select id="ben_hh_head_gender" name="ben_hh_head_gender" data-native-menu="false"><option value="0">Select HH Head Gender</option><option value="Male">Male</option><option value="Female">Female</option></select>'
	$("#benGender").html(benGender).trigger('create');
	
	var benEcoCondition='<label for="ben_eco_condition">Economic Condition</label><select id="ben_eco_condition" name="ben_eco_condition" data-native-menu="false"><option value="0">Select Economic Condition</option><option value="Rich">A: Rich</option><option value="Middle">B: Middle Class</option><option value="Poor">C: Poor</option><option value="Exterme Poor">D: Exterme Poor</option></select>'
	$("#benEcoCondition").html(benEcoCondition).trigger('create');
	
	var spsFamily_ben='<label for="sps_family">Sponsorship Family</label><select name="sps_family" id="sps_family" data-native-menu="false"><option value="0">Select Sponsorship Family</option><option value="Yes">Yes</option><option value="No">No</option></select>'
	$("#spsFamily_ben").html(spsFamily_ben).trigger('create');
	
	$("#btn_ben_submit").show();
	//$("#btn_new_ben").hide();
	$("#btn_ben_service").hide();	
	$("#btn_ben_home").hide();
	$("#ben_hh_serial").val("");	
	
	//san
	var sanLatType_ben='<label for="san_lat_type">Type of Latrine Provided</label><select name="san_lat_type" id="san_lat_type" data-native-menu="false"><option value="0">Select Type of Latrine Provided</option><option value="Offset Pit">Offset Pit</option><option value="Water Seal Pit">Water Seal Pit</option><option value="Pit Latrine with Sato Pan">Pit Latrine with Sato Pan</option><option value="Shared Offset Pit">Shared-Offset Pit</option><option value="Shared Water Seal Pit">Shared-Water Seal Pit</option><option value="Shared Pit Latrine with Sato Pan">Shared-Pit Latrine with Sato Pan</option></select>'
	
	$("#sanLatType_ben").html(sanLatType_ben).trigger('create');
	
	var sanActType_ben='<label for="san_act_type">Type of Activity</label><select name="san_act_type" id="san_act_type" data-native-menu="false"><option value="0">Select Type of Activity</option><option value="New">New</option><option value="Renovation">Renovation</option></select>'	
	$("#sanActType_ben").html(sanActType_ben).trigger('create');
	
	var sanSubsidized_ben='<label for="san_subsidized">Subsidized</label><select name="san_subsidized" id="san_subsidized" data-native-menu="false"><option value="0">Select Subsidized</option><option value="Yes">Yes</option><option value="No">No</option></select>'			
	$("#sanSubsidized_ben").html(sanSubsidized_ben).trigger('create');
				
	$("#btn_san_submit").show();
	$("#btn_new_ben_san").hide();
	$("#btn_ben_service_san").hide();
	$("#btn_ben_home_san").hide();
	
	//hwf
	var hwType_hwf='<label for="hw_type">Type of Handwash Facilities</label><select name="hw_type" id="hw_type" data-native-menu="false"><option value="0">Select Type of Handwash Facilities</option><option value="Water tank with tap">Water tank with tap</option><option value="Barrel Drum Bucket Jerrican with Tap">Barrel/Drum/Bucket/Jerrican with Tap</option><option value="Pitcher with Tap">Pitcher with Tap</option><option value="Tippy Tap">Tippy Tap</option><option value="Hand TubeWell">Hand TubeWell</option></select>'
	
	$("#hwType_hwf").html(hwType_hwf).trigger('create');
	
	$("#btn_wwf_submit").show();
	$("#btn_new_ben_hwf").hide();	
	$("#btn_ben_service_hwf").hide();
	$("#btn_ben_home_hwf").hide();	
	
	//wp
	var clusterIDNameWP='<label for="clusterIDName">Select Cluster</label><select name="clusterIDName" id="clusterIDName" data-native-menu="false"><option value="0">Select Cluster</option></select>'  
	$("#clusterIDNameWP").html(clusterIDNameWP).trigger('create');
	
	var wpActType='<label for="wp_act_type">Type of Activity</label><select name="wp_act_type" id="wp_act_type" data-native-menu="false"><option value="0">Select Type of Activity</option><option value="New">New</option><option value="Renovation">Renovation</option></select>'
	$("#wpActType").html(wpActType).trigger('create');
	
	var wpTechnology='<label for="wp_technology">Water Point Technology </label><select name="wp_technology" id="wp_technology" data-native-menu="false"><option value="0">Select Water Point Technology</option><option value="Deep Hand Tubewell">Deep Hand Tubewell</option><option value="Deep Set Pump">Deep Set Pump</option><option value="Shallow Tubewell">Shallow Tubewell</option><option value="Semi Deep Tubewell">Semi-Deep Tubewell</option><option value="Rain Water Harvesting">Rain Water Harvesting</option></select>'
	
	$("#wpTechnology").html(wpTechnology).trigger('create');
	
	var wpSubsidized='<label for="wp_subsidized">Subsidized</label><select name="wp_subsidized" id="wp_subsidized" data-native-menu="false"><option value="0">Select Subsidized</option><option value="Yes">Yes</option><option value="No">No</option></select>'	
	$("#wpSubsidized").html(wpSubsidized).trigger('create');
	
	var wpWq='<label for="wp_wq">Water Quality Test Type</label><select name="wp_wq" id="wp_wq" data-native-menu="false"><option value="0">Select Water Quality Test Type</option><option value="Arsenic">Arsenic</option><option value="Bacterial">Bacterial</option><option value="Both Arsenic And Bacteria">Both Arsenic & Bacteria</option></select>'
	$("#wpWq").html(wpWq).trigger('create');
	
	var wpWqResult='<label for="wp_wq_result">Result Water Quality Test</label><select name="wp_wq_result" id="wp_wq_result" data-native-menu="false"><option value="0">Select Result Water Quality Test</option><option value="Potable">Potable</option><option value="Not Potable">Not Potable</option><option value="Not Undertaken Yet">Not Undertaken Yet</option></select>'	
	$("#wpWqResult").html(wpWqResult).trigger('create');
	
	var wpTubPre='<label for="wp_tub_pre">Tubewell Located on Premises</label><select name="wp_tub_pre" id="wp_tub_pre" data-native-menu="false"><option value="0">Select TW Located on Premises</option><option value="1">On Premises</option><option value="2">Up to 30 min (\u2266 30)</option><option value="3">More than 30 min (&#62 30)</option></select>'	
	$("#wpTubPre").html(wpTubPre).trigger('create');
		
	benList='';	
	hhIDList='';	
	wpTubTreList='';
	$("#benTable").empty();				
	$("#btn_wp_submit").show();
	$("#btn_home_wp").hide();
	
	$(".sucChk").text("");		
	$(".errorChk").text("");			
	url="#homePage";					
	$.mobile.navigate(url);	
}
/*function addNewBen(){
	var benWardNo='<label for="ben_ward">Ward No</label><select name="ben_ward" id="ben_ward" data-native-menu="false"  onblur="social_map_id()" onchange="cluster()" ><option value="0">Ward No</option></select>'   
	$("#benWardNo").html(benWardNo).trigger('create');
	
	var benClusIDName='<label for="ben_clusID">Cluster ID</label><select name="ben_clusID" id="ben_clusID" data-native-menu="false" onblur="social_map_id()"><option value="0">Select Cluster</option></select>' 
	$("#benClusIDName").html(benClusIDName).trigger('create');
	
	var benGender='<label for="ben_hh_head_gender">HH Head Gender</label><select id="ben_hh_head_gender" name="ben_hh_head_gender" data-native-menu="false"><option value="0">Select HH Head Gender</option><option value="Male">Male</option><option value="Female">Female</option></select>'
	$("#benGender").html(benGender).trigger('create');
	
	var benEcoCondition='<label for="ben_eco_condition">Economic Condition</label><select id="ben_eco_condition" name="ben_eco_condition" data-native-menu="false"><option value="0">Select Economic Condition</option><option value="Rich">A: Rich</option><option value="Middle">B: Middle Class</option><option value="Poor">C: Poor</option><option value="Exterme Poor">D: Exterme Poor</option></select>'
	$("#benEcoCondition").html(benEcoCondition).trigger('create');
	
	$("#btn_ben_submit").show();
	$("#btn_new_ben").hide();
	$("#btn_ben_service").hide();	
	$("#btn_ben_home").hide();
	
	//san
	$("#btn_san_submit").show();
	$("#btn_new_ben_san").hide();
	$("#btn_ben_service_san").hide();
	$("#btn_ben_home_san").hide();
	
	//hwf
	$("#btn_wwf_submit").show();
	$("#btn_new_ben_hwf").hide();	
	$("#btn_ben_service_hwf").hide();
	$("#btn_ben_home_hwf").hide();	
	
	$(".errorChk").text("");
	$(".sucChk").text("");					
	url="#ben_first_page";					
	$.mobile.navigate(url);	
}*/

var div_name;
var div_code;
var dis_name;
var dis_code;
var up_name;
var up_code;
var un_name;
var un_code;

function services_ben(){
	var hhSerial=localStorage.hh_serial;
	//alert(apipath+"searchSanitation?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ward="+ben_ward+"&cluster_id="+ben_clusID+"&hhSerial="+hhSerial);
	$.ajax({
		type:'POST',
		url:apipath+"searchSanitation?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ward="+ben_ward+"&cluster_id="+ben_clusID+"&hhSerial="+hhSerial,
		success: function(resStr){					
			sanhhList=resStr.split('fdfd');
			if (hhSerial==sanhhList){
				$("#sanitationBtn").hide();
			}else{
				$("#sanitationBtn").show();
			}
		}
	})
	
	$.ajax({
		type:'POST',
		url:apipath+"searchHwf?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&ward="+ben_ward+"&cluster_id="+ben_clusID+"&hhSerial="+hhSerial,
		success: function(result){					
			hwfList=result.split('fdfd');
			if (hhSerial==hwfList){
				$("#hwfBtn").hide();
			}else{
				$("#hwfBtn").show();
			}
		}
	})
	
	
	
	$("#divi_san_c").text(localStorage.div_name);
	$("#dis_san_c").text(localStorage.dis_name);
	$("#upaz_san_c").text(localStorage.up_name);
	$("#uni_san_c").text(localStorage.un_name);
	$("#ward_san_c").text(ben_ward);
	$("#cluster_san_c").text(ben_clusID+"-"+(ben_clusName).replace(/%20/g," "));
	
	$(".errorChk").text("");
	$(".sucChk").text("");					
	url="#service_page";					
	$.mobile.navigate(url);		
}

function san(){
	$(".sucChk").text("");
	$(".errorChk").text("");	
	
	$("#divi_san_san").text(localStorage.div_name);
	$("#dis_san_san").text(localStorage.dis_name);
	$("#upaz_san_san").text(localStorage.up_name);
	$("#uni_san_san").text(localStorage.un_name);
	$("#ward_san_san").text(ben_ward);
	$("#cluster_san_san").text(ben_clusID+"-"+(ben_clusName).replace(/%20/g," "));
	
	$(".errorChk").text("");
	url="#san_page";
	$.mobile.navigate(url);
}


function san_planbdData2Next(){
	san_lat_type=$("#san_lat_type").val();
	san_act_type=$("#san_act_type").val();
	san_subsidized=$("#san_subsidized").val();
	san_com_date=$("#san_com_date").val();

	san_com_date_chk=san_com_date.split('/');
	san_com_dateS=new Date(san_com_date_chk[1]+"/"+ san_com_date_chk[2]+"/"+san_com_date_chk[0]);
	today = new Date()
	
	if(san_lat_type=='' || san_lat_type==0){
		$(".errorChk").text("Required Type of Latrine Provided");  
	}else if(san_act_type=='' || san_act_type==0){
		$(".errorChk").text("Required Type of Activity");  
	}else if(san_subsidized==''|| san_subsidized==0){
		$(".errorChk").text("Required Subsidized"); 
	}else if(san_com_date==''){
		$(".errorChk").text("Required Date of Completion");
	}else if(san_com_dateS > today){
		$(".errorChk").text("Invalid Completion Date");
	}else{
		$(".errorChk").text("");
		url="#san_inPhoto";
		$.mobile.navigate(url);
	}		
}

function sanDataSubmit() {
	$(".sucChk").text("");
    $(".errorChk").text("");	
	$("#btn_san_submit").hide();
	
	var d = new Date();	
	var get_time=d.getTime();	
	
	san_latitude=$("#ach_lat_san").val();
	san_longitude=$("#ach_long_san").val();
	
	achPhoto_san=$("#achPhoto_sanitation").val();
	
	if (san_latitude==undefined || san_latitude==''){
		san_latitude=0;
	}
	if (san_longitude==undefined || san_longitude==''){
		san_longitude=0;
	}
	
	if (achPhoto_san=='' || achPhoto_san==undefined){
		$(".errorChk").text("Please confirm Photo 1 ");
		$("#btn_san_submit").show();
	}else if((san_latitude==0 || san_longitude==0) ||(localStorage.latitudeAreaWq==0 || localStorage.longitudeAreaWq==0)||(localStorage.latitudeAreaWq==undefined || localStorage.longitudeAreaWq==undefined)){
		$(".errorChk").text("Please confirm your location");
		$("#btn_ach_lat_long_san").show();
		$("#btn_san_submit").show();
	}else{				
		//imagePathA_san="test"					
		if (imagePathA_san != ""){							
			$(".errorChk").text("Syncing photo 1..");
			imageName_san = localStorage.mobile_no + "_" + get_time + ".jpg";								
            uploadPhotoAch_san(imagePathA_san, imageName_san);	
			//$("#btn_san_submit").show();					
		}		
		//syncDataSan();
	}//chk photo
	
                        
	
}

//------------------------------------image 1
function getAchivementImage1_san() {
	navigator.camera.getPicture(onSuccessA_san, onFailA_san, { quality: 50,
	targetWidth: 300,
    destinationType: Camera.DestinationType.FILE_URI, correctOrientation: true
    });		
}

function onSuccessA_san(imageURI) {		
    var image = document.getElementById('myImageA_san');
    image.src = imageURI;
	imagePathA_san = imageURI;	
    $("#achPhoto_sanitation").val(imagePathA_san);
	
}

function onFailA_san(message) {
	imagePathA_san="";
    alert('Failed because: ' + message);
}

function uploadPhotoAch_san(imageURI, imageName_san) { 	
	//winAchInfo();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName = imageName_san;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd_image/planbd_image/"),winAchInfo_san,onfail_san,options);
}

function winAchInfo_san(r) {	
	$(".errorChk").text('Image upload Successful. Syncing Data...');
	syncDataSan();	
}

function onfail_san(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_san_submit").show();
}


function syncDataSan(){	
	if(san_latitude==0 || san_longitude==0){
		san_latitude=localStorage.latitudeAreaWq;
		san_longitude=localStorage.longitudeAreaWq;
	}	
		
	//alert(apipath+"submitData_san?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_san+"&latitude="+san_latitude+"&longitude="+san_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ben_ward="+ben_ward+"&clsId="+ben_clusID+"&clsName="+encodeURIComponent(ben_clusName)+"&sanHHserial="+localStorage.hh_serial+"&sanHHName="+encodeURIComponent(localStorage.hh_head_name)+"&san_lat_type="+san_lat_type+"&san_act_type="+san_act_type+"&san_subsidized="+san_subsidized+"&san_com_date="+san_com_date);
	$.ajax({
		type:'POST',
		url:apipath+"submitData_san?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_san+"&latitude="+san_latitude+"&longitude="+san_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ben_ward="+ben_ward+"&clsId="+ben_clusID+"&clsName="+encodeURIComponent(ben_clusName)+"&sanHHserial="+localStorage.hh_serial+"&sanHHName="+encodeURIComponent(localStorage.hh_head_name)+"&san_lat_type="+san_lat_type+"&san_act_type="+san_act_type+"&san_subsidized="+san_subsidized+"&san_com_date="+san_com_date,
		success: function(result) {			
			if(result=='Success'){				
				$("#ben_hh_serial").val("");
				
				$("#san_lat_type").val(0);
				$("#san_act_type").val(0);
				$("#san_subsidized").val(0);
				$("#san_com_date").val("");							
				//--------------
				$("#ach_lat_san").val(0);
				$("#ach_long_san").val(0);
				$("#achPhoto_sanitation").val("");	
				$("#myImageA_san").val("");		
				document.getElementById('myImageA_san').src = '';				
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_san_submit").hide();
				$("#btn_new_ben_san").show();
				$("#btn_ben_service_san").show();
				$("#btn_ben_home_san").show();						
			}else{
				$(".errorChk").text('Already Submitted');																	
				$("#btn_san_submit").show();
				$("#btn_new_ben_san").hide();
				$("#btn_ben_service_san").hide();
				$("#btn_ben_home_san").hide();
			}
			
		}//end result
	});//end ajax
}


//===========WWF================
function wwf(wwf){
	$(".sucChk").text("");
	$(".errorChk").text("");	
	
	$("#divi_san_hwf").text(localStorage.div_name);
	$("#dis_san_hwf").text(localStorage.dis_name);
	$("#upaz_san_hwf").text(localStorage.up_name);
	$("#uni_san_hwf").text(localStorage.un_name);
	$("#ward_san_hwf").text(ben_ward);
	$("#cluster_san_hwf").text(ben_clusID+"-"+(ben_clusName).replace(/%20/g," "));
	
	$(".errorChk").text("");
	url="#wwf_four_page";
	$.mobile.navigate(url);		
}


function wwf_planbdData2Next(){
	
	hw_type=$("#hw_type").val();
	hw_com_date=$("#hw_com_date").val();	
	
	hw_com_date_chk=hw_com_date.split('/');
	hw_com_dateS=new Date(hw_com_date_chk[1]+"/"+ hw_com_date_chk[2]+"/"+hw_com_date_chk[0]);
	today = new Date()
	
	if(hw_type=='' || hw_type==0){
		$(".errorChk").text('Required Type of Handwash Facilities');		
	}else if(hw_com_date==''){
		$(".errorChk").text('Required Date of Completion');	
	}else if(hw_com_dateS > today){
		$(".errorChk").text("Invalid Completion Date");	
	}else{
		$(".errorChk").text("");
		url="#wwf_inPhoto";
		$.mobile.navigate(url);	
	}
}


function wwfDataSubmit(){
	$(".sucChk").text("");
	$(".errorChk").text("");	
	$("#btn_wwf_submit").hide();
	
	var d = new Date();	
	var get_time=d.getTime();	
	
	wwf_latitude=$("#ach_lat_wwf").val();
	wwf_longitude=$("#ach_long_wwf").val();
	
	achPhoto_wwf=$("#achPhoto_wwf").val();
	//achPhoto_2_wwf=$("#achPhoto_2_wwf").val();
	
	if (wwf_latitude==undefined || wwf_latitude==''){
		wwf_latitude=0;
	}
	if (wwf_longitude==undefined || wwf_longitude==''){
		wwf_longitude=0;
	}
	
	if (achPhoto_wwf=='' || achPhoto_wwf==undefined){
		$(".errorChk").text("Please confirm Photo 1 ");
		$("#btn_wwf_submit").show();
	}else if((wwf_latitude==0 || wwf_longitude==0) ||(localStorage.latitudeAreaWq==0 || localStorage.longitudeAreaWq==0)||(localStorage.latitudeAreaWq==undefined || localStorage.longitudeAreaWq==undefined)){
		$(".errorChk").text("Please confirm your location");
		$("#btn_ach_lat_long_wwf").show();
		$("#btn_wwf_submit").show();
	}else{
		//if (achPhoto_2_wwf=='' || achPhoto_2_wwf==undefined){
//			$(".errorChk").text("Please confirm Photo 2 ");
//			$("#btn_wwf_submit").show();
//		}else{		
			//if(latitude==0 || latitude==0){
			//	$(".errorChk").text("Please confirm your location ");
			//	$("#btn_wwf_submit").show();
			//}else{				
				//imagePathA_wwf="test"					
				if (imagePathA_wwf!=""){							
					$(".errorChk").text("Syncing photo 1..");
					imageName_wwf = localStorage.mobile_no+"_"+get_time+".jpg";										
					uploadPhotoAch_wwf(imagePathA_wwf, imageName_wwf);	
					//$("#btn_wwf_submit").show();					
				}
				//syncDataHwf();					
			//} //-end check location
			
		//}//Photo 2
	}//chk photo
	

	
}

//------------------------------------image 1
function getAchivementImage1_wwf() {
	navigator.camera.getPicture(onSuccessA_wwf, onFailA_wwf, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccessA_wwf(imageURI) {		
    var image = document.getElementById('myImageA_wwf');
    image.src = imageURI;
	imagePathA_wwf = imageURI;	
	$("#achPhoto_wwf").val(imagePathA_wwf);
	
}

function onFailA_wwf(message) {
	imagePathA_wwf="";
    alert('Failed because: ' + message);
}

function uploadPhotoAch_wwf(imageURI, imageName_wwf) { 	
	//winAchInfo();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName_wwf;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd_image/planbd_image/"),winAchInfo_wwf,onfail_wwf,options);
}

/*function winAchInfo_wwf(r) {	
	$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
	
	var d = new Date();	
	var get_time=d.getTime();
		
	//imagePath2A_wwf="test2"
	if (imagePath2A_wwf!=""){							
		$(".errorChk").text("Syncing photo 2..");
		imageName2_wwf = localStorage.mobile_no+"_"+get_time+".jpg";
				
		uploadPhoto2Ach_wwf(imagePath2A_wwf, imageName2_wwf);
		//$("#btn_wwf_submit").show();		
	}
}

function onfail_wwf(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_wwf_submit").show();
}

//-----------------------image 2
function getAchivementImage2_wwf() { 
	navigator.camera.getPicture(onSuccess2A_wwf, onFail2A_wwf, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess2A_wwf(imageURI) {		
    var image = document.getElementById('myImage2A_wwf');
    image.src = imageURI;
	imagePath2A_wwf = imageURI;	
	$("#achPhoto_2_wwf").val(imagePath2A_wwf);
}

function onFail2A_wwf(message) { 
	imagePath2A_wwf="";
    alert('Failed because: ' + message);
}

function uploadPhoto2Ach_wwf(imageURI, imageName2_wwf) { // second step	
	//winComInfo2();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName2_wwf;
    options.mimeType="image/jpeg";
	
    var params = {};
    params.value1 = "test";
    params.value2 = "param";	
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd_image/planbd_image/"),winComInfo2_wwf,onfail_wwf,options);
}

function winComInfo2_wwf(r) {
	$(".errorChk").text('Image 2 upload successfull. Syncing Data ...');
	syncDataHwf();
}*/
function winAchInfo_wwf(r) {	
	$(".errorChk").text('Image upload Successful. Syncing Data...');
	syncDataHwf();	
}

function onfail_wwf(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_wwf_submit").show();
}

function syncDataHwf(){	
	if(wwf_latitude==0 || wwf_longitude==0){
		wwf_latitude=localStorage.latitudeAreaWq;
		wwf_longitude=localStorage.longitudeAreaWq;
	}
		
	//alert(apipath+"submitData_hwf?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_wwf+"&latitude="+wwf_latitude+"&longitude="+wwf_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ben_ward="+ben_ward+"&clsId="+ben_clusID+"&clsName="+encodeURIComponent(ben_clusName)+"&sanHHserial="+localStorage.hh_serial+"&sanHHName="+encodeURIComponent(localStorage.hh_head_name)+"&hw_type="+hw_type+"&hw_com_date="+hw_com_date);
	$.ajax({
		type:'POST',
		url:apipath+"submitData_hwf?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_wwf+"&latitude="+wwf_latitude+"&longitude="+wwf_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ben_ward="+ben_ward+"&clsId="+ben_clusID+"&clsName="+encodeURIComponent(ben_clusName)+"&sanHHserial="+localStorage.hh_serial+"&sanHHName="+encodeURIComponent(localStorage.hh_head_name)+"&hw_type="+hw_type+"&hw_com_date="+hw_com_date,																																																							
		success: function(result) {			
			if(result=='Success'){				
				$("#ben_hh_serial").val("");
				
				$("#hw_type").val(0);							
				//--------------
				$("#ach_lat_wwf").val(0);
				$("#ach_long_wwf").val(0);
				$("#achPhoto_wwf").val("");
				$("#myImageA_wwf").val("");										
				//$("#achPhoto_2_wwf").val("");
				document.getElementById('myImageA_wwf').src = '';				
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_wwf_submit").hide();
				$("#btn_new_ben_hwf").show();	
				$("#btn_ben_service_hwf").show();
				$("#btn_ben_home_hwf").show();					
			}else{
				$(".errorChk").text('Already Submitted');																	
				$("#btn_wwf_submit").show();
				$("#btn_new_ben_hwf").hide();	
				$("#btn_ben_service_hwf").hide();
				$("#btn_ben_home_hwf").hide();
			}
			
		}//end result
	});//end ajax
}




var san_ward;
var clsId;
var clsName;
var san_lat_type;
var san_act_type;
var san_subsidized;
var san_com_date;
//------
var hw_type;
var hw_com_date;

function wp(wp){
	if(localStorage.sync_code==undefined || localStorage.sync_code==""){
		$(".errorChk").text("Required Sync");
	}else{
		social=wp;
		
		div_name=$("#divName").val();
		div_code=$("#divCode").val();
		dis_name=$("#disName").val();
		dis_code=$("#disCode").val();
		up_name=$("#upName").val();
		up_code=$("#upCode").val();
		un_name=$("#unName").val();
		un_code=$("#unCode").val();
		 
		if(div_name==''){
			$(".errorChk").text("Required Division");	
		}else if(dis_name==''){
			$(".errorChk").text("Required District");	
		}else if(up_name==''){
			$(".errorChk").text("Required Upzila Name");
		}else if(un_name==''){
			$(".errorChk").text("Required Union Name");
		}else{
			
			//alert(apipath+"benSearchWord?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code);
			$.ajax({
				type:'POST',
				url:apipath+"benSearchWord?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code,
				success: function(resStr){					
					sanWordList=resStr.split('fdfd');
										
					var sanWoListStr="";
					sanWoListStr+='<option value="0">Select Ward No</option>'					        
					for(i=0; i<sanWordList.length; i++){						
						sanWoListStr+="<option value="+encodeURIComponent(sanWordList[i])+">"+sanWordList[i]+"</option>";			
					}
					
					var rpt_rep_ob=$("#san_ward");					
					rpt_rep_ob.empty();					
					rpt_rep_ob.append(sanWoListStr);					
					rpt_rep_ob.selectmenu("refresh");	
				}
			});
			
			$("#divi_san").text(localStorage.div_name);
			$("#dis_san").text(localStorage.dis_name);
			$("#upaz_san").text(localStorage.up_name);
			$("#uni_san").text(localStorage.un_name);
			
			$(".errorChk").text("");			
			url="#san_first_page";					
			$.mobile.navigate(url);	
		}
		
	}
}

var wp_ward;
var wp_serial;
var wp_org_id;
var wp_act_type;
var wp_technology;
var wp_subsidized;
var wp_com_date;
var wp_wq_result;
function wp1Next(){
	wp_ward=$("#san_ward").val();
	clusIDName=$("#clusterIDName").val();
	wp_serial=$("#wp_serial").val();
	wp_org_id=$("#wp_org_id").val();
	wp_act_type=$("#wp_act_type").val();
	wp_technology=$("#wp_technology").val();
	wp_subsidized=$("#wp_subsidized").val();
	wp_com_date=$("#wp_com_date").val();
	wp_wq=$("#wp_wq").val();
	wp_wq_date=$("#wp_wq_date").val();
	wp_wq_result=$("#wp_wq_result").val();
	
	clsIdName=clusIDName.split("-");
	clsId=clsIdName[0];
	clsName=clsIdName[1];
	
	
	wp_com_date_chk=wp_com_date.split('/');	
	wp_com_dateS=new Date(wp_com_date_chk[1]+"/"+ wp_com_date_chk[2]+"/"+wp_com_date_chk[0]);	
	today = new Date()
	
	wp_wq_date_chk=wp_wq_date.split('/');
	wp_wq_dateS=new Date(wp_wq_date_chk[1]+"/"+ wp_wq_date_chk[2]+"/"+wp_wq_date_chk[0]);
	currentDate = new Date()
	
	
	if(wp_ward=='' || wp_ward==0){
		$(".errorChk").text('Required ward no');	
	}else if (clsId=="" || clsId==0){
		$(".errorChk").text("Required cluster");
	}else if(wp_serial==''){
		$(".errorChk").text('Required wp serial');	
	}else if(wp_serial.length !=3){
		$(".errorChk").text('Maximum 3 digit wp serial');
	/*}else if(wp_org_id==''){
		$(".errorChk").text('Required organization ID');*/	
	}else if(wp_org_id.length >15){
		$(".errorChk").text('Maximum 15 digit organization ID');		
	}else if(wp_act_type=='' || wp_act_type==0){
		$(".errorChk").text("Required type of activity"); 
	}else if(wp_technology=='' || wp_technology==0){
		$(".errorChk").text('Required water point technology');	
	}else if(wp_subsidized=='' || wp_subsidized==0){
		$(".errorChk").text('Required subsidized');		
	}else if(wp_com_date==''){
		$(".errorChk").text('Required date of completion');	
	}else if(wp_com_dateS > today){
		$(".errorChk").text("Invalid completion date");	
	}else if(wp_wq=='' || wp_wq==0){
		$(".errorChk").text("Required water quality test type");	
	}else if(wp_wq_date==''){
		$(".errorChk").text('Required date of water quality test');	
	}else if(wp_wq_dateS > currentDate){
		$(".errorChk").text("Invalid Date of Water Quality Test");	
	}else if(wp_wq_result=='' || wp_wq_result==0){
		$(".errorChk").text("Required result water quality test");		
	}else{
		//alert(apipath+"wp_serial_check?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&wp_ward="+wp_ward+"&clsId="+clsId+"&wp_serial="+wp_serial);
		$.ajax({
		type:'POST',
		url:apipath+"wp_serial_check?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&wp_ward="+wp_ward+"&clsId="+clsId+"&wp_serial="+wp_serial,
																																																										
		success: function(result) {			
			if(result=='Success'){
				
				//========
				var clusterList="";
				//alert(apipath+"seatchHH?div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&wp_ward="+wp_ward+"&clsId="+clsId+"&clsName="+clsName);
				$.ajax({
				type:'POST',
				url:apipath+"seatchHH?div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&wp_ward="+wp_ward+"&clsId="+clsId+"&clsName="+clsName,
				success: function(resStr){
					houseHList=resStr.split('fdfd')
					
					var hhListStr="";	
					hhListStr +='<option value="0">Select HH Name</option>'		        
					for(i=0; i<houseHList.length; i++){
						hhList=houseHList[i];
						hhListStr +='<option value='+encodeURIComponent(hhList)+'><a>'+hhList+'</a></option>'
					}
									
					var rpt_rep_ob_wp=$("#wp_hhSerail");					
					rpt_rep_ob_wp.empty();					
					rpt_rep_ob_wp.append(hhListStr);					
					rpt_rep_ob_wp.selectmenu("refresh");	
					}
				})				
				$("#divi_san_w").text(localStorage.div_name);
				$("#dis_san_w").text(localStorage.dis_name);
				$("#upaz_san_w").text(localStorage.up_name);
				$("#uni_san_w").text(localStorage.un_name);
				$("#ward_san_w").text(san_ward);
				$("#cluster_san_w").text(clsId+"-"+clsName);
				$("#wpActType_wp").text(wp_act_type).slice(3);
				$("#wpSerial_wp").text(wp_serial);
				
				$(".errorChk").text("");
				url="#san_second_page";
				$.mobile.navigate(url);				
			}else{
				$(".errorChk").text("Already exits wp serial");
				url="#san_first_page";				
			}
		}
		});
		
	}	
}
	

var san_ward;
function clusterIDNAme(){	
	div_code=$("#divCode").val();
	dis_code=$("#disCode").val();
	up_code=$("#upCode").val();
	un_code=$("#unCode").val();
	san_ward=$("#san_ward").val();
	//alert(apipath+"cluster_list?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&san_ward="+san_ward);
	$.ajax({		
		url:apipath+"wp_cluster_list?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code+"&san_ward="+san_ward,
		success: function(clusterStr) {
			clusterLiStr=clusterStr.split("fdfd");
			
			clsListS="";
			for (i=0;i<clusterLiStr.length;i++){
			  cls=clusterLiStr[i]
			  clsListS+="<option value="+encodeURIComponent(cls)+">"+cls+"</option>";					  
			}	
			
			var rpt_rep_ob=$("#clusterIDName");
			rpt_rep_ob.empty();
			rpt_rep_ob.append(clsListS);
			rpt_rep_ob.selectmenu("refresh");
			
			}		  
		});		
}


function clusterData(){
	if(benList==''){
		$(".errorChk").text("Required HH List");		
	}else{
			
		$(".errorChk").text("");
		url="#wp_inPhoto";
		$.mobile.navigate(url);	
	}
}


function wpDataSubmit(){
	$(".sucChk").text("");
	$(".errorChk").text("");	
	$("#btn_wp_submit").hide();
	
	var d = new Date();	
	var get_time=d.getTime();	
	
	wp_latitude=$("#ach_lat_wp").val();
	wp_longitude=$("#ach_long_wp").val();
	
	achPhoto_wp=$("#achPhoto_wp").val();
	
	if (wp_latitude==undefined || wp_latitude==''){
		wp_latitude=0;
	}
	if (wp_longitude==undefined || wp_longitude==''){
		wp_longitude=0;
	}
	
	if (achPhoto_wp=='' || achPhoto_wp==undefined){
		$(".errorChk").text("Please confirm Photo 1 ");
		$("#btn_wp_submit").show();
	}else if((wp_latitude==0 || wp_longitude==0) ||(localStorage.latitudeAreaWq==0 || localStorage.longitudeAreaWq==0)||(localStorage.latitudeAreaWq==undefined || localStorage.longitudeAreaWq==undefined)){
		$(".errorChk").text("Please confirm your location");
		$("#btn_ach_lat_long_wp").show();
		$("#btn_wp_submit").show();
	}else{		
		//if(latitude==0 || latitude==0){
		//	$(".errorChk").text("Please confirm your location ");
		//	$("#btn_wp_submit").show();
		//}else{				
			//imagePathA_wp="test"					
			if (imagePathA_wp!=""){							
				$(".errorChk").text("Syncing photo 1..");
				imageName_wp = localStorage.mobile_no+"_"+get_time+".jpg";										
				uploadPhotoAch_wp(imagePathA_wp, imageName_wp);	
				//$("#btn_wp_submit").show();					
			}
			//syncDataWp();					
		//} //-end check location
		
	}//chk photo
	

	
}

//------------------------------------image 1
function getAchivementImage1_wp() {
	navigator.camera.getPicture(onSuccessA_wp, onFailA_wp, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccessA_wp(imageURI) {		
    var image = document.getElementById('myImageA_wp');
    image.src = imageURI;
	imagePathA_wp = imageURI;	
	$("#achPhoto_wp").val(imagePathA_wp);
	
}

function onFailA_wp(message) {
	imagePathA_wp="";
    alert('Failed because: ' + message);
}

function uploadPhotoAch_wp(imageURI, imageName_wp) { 	
	//winAchInfo();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName_wp;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
	
	options.chunkedMode = false;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd_image/planbd_image/"),winAchInfo_wp,onfail_wp,options);
}

function winAchInfo_wp(r) {	
	$(".errorChk").text('Image upload Successful. Syncing Data...');
	syncDataWp();	
}

function onfail_wp(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_wp_submit").show();
}


function syncDataWp(){
	if(wp_latitude==0 || wp_longitude==0){
		wp_latitude=localStorage.latitudeAreaWq;
		wp_longitude=localStorage.longitudeAreaWq;
	}
	
    //alert(apipath+"submitData_wp?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_wp+"&latitude="+wp_latitude+"&longitude="+wp_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&wp_ward="+wp_ward+"&clsId="+clsId+"&clsName="+encodeURIComponent(clsName)+"&wp_serial="+wp_serial+"&wp_org_id="+wp_org_id+"&wp_act_type="+wp_act_type+"&wp_technology="+wp_technology+"&wp_subsidized="+wp_subsidized+"&wp_com_date="+wp_com_date+"&wp_wq="+wp_wq+"&wp_wq_date="+wp_wq_date+"&wp_wq_result="+wp_wq_result+"&benList="+encodeURIComponent(benList))
	$.ajax({
		type:'POST',
		url:apipath+"submitData_wp?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.mobile_no+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_wp+"&latitude="+wp_latitude+"&longitude="+wp_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&wp_ward="+wp_ward+"&clsId="+clsId+"&clsName="+encodeURIComponent(clsName)+"&wp_serial="+wp_serial+"&wp_org_id="+wp_org_id+"&wp_act_type="+wp_act_type+"&wp_technology="+wp_technology+"&wp_subsidized="+wp_subsidized+"&wp_com_date="+wp_com_date+"&wp_wq="+wp_wq+"&wp_wq_date="+wp_wq_date+"&wp_wq_result="+wp_wq_result+"&benList="+encodeURIComponent(benList),
																																																										
		success: function(result) {			
			if(result=='Success'){
				$("#san_ward").val(0);
				$("#clusterIDName").val(0);
				
				$("#wp_serial").val("");
				$("#wp_org_id").val("");
				$("#wp_act_type").val(0);
				$("#wp_technology").val(0);
				$("#wp_subsidized").val(0);
				$("#wp_com_date").val("");
				
				$("#wp_wq").val(0);
				$("#wp_wq_date").val("");
				$("#wp_wq_result").val(0);
				
				$("#wp_hhSerail").val(0);
				$("#wp_tub_pre").val(0);											
				//--------------
				$("#ach_lat_wp").val(0);
				$("#ach_long_wp").val(0);
				$("#achPhoto_wp").val("");
				$("#myImageA_wp").val("");
				document.getElementById('myImageA_wp').src = '';	
				benList='';	
				hhIDList='';
				wpTubTreList='';
				$("#benTable").empty();
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_wp_submit").hide();
				$("#btn_home_wp").show();	
			}else{
				$(".errorChk").text('Already Submitted WP Serial');																	
				$("#btn_wp_submit").show();
				$("#btn_home_wp").hide();	
			}
			
		}//end result
	});//end ajax
}

/*function addNewWP(){
	
	
	$(".sucChk").text("");			
	$(".errorChk").text("");			
	url="#homePage";					
	$.mobile.navigate(url);		
}*/

//======================


function exit() {
	navigator.app.exitApp();
	//navigator.device.exitApp();
}
