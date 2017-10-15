var achPhoto="";
var achPhoto2="";
var imageName = "";
var imageName2 = "";
var imagePathA="";
var imagePath2A="";

var latitude="";
var longitude="";

//----benficiary----
var achPhoto_ben="";
var achPhoto_2_ben="";
var imageName_ben = "";
var imageName2_ben = "";
var imagePathA_ben="";
var imagePath2A_ben="";

var ben_latitude="";
var ben_longitude="";

//-----san--------
var achPhoto_san="";
var achPhoto_2_san="";
var imageName_san = "";
var imageName2_san = "";
var imagePathA_san="";
var imagePath2A_san="";

var san_latitude="";
var san_longitude="";

//-----wwf--------
var achPhoto_wwf="";
var achPhoto_2_wwf="";
var imageName_wwf = "";
var imageName2_wwf = "";
var imagePathA_wwf="";
var imagePath2A_wwf="";

var wwf_latitude="";
var wwf_longitude="";

//-----wp--------
var achPhoto_wp="";
var achPhoto_2_wp="";
var imageName_wp = "";
var imageName2_wp = "";
var imagePathA_wp="";
var imagePath2A_wp="";

var wp_latitude="";
var wp_longitude="";
//=============
function getLocationInfoAch() {	
	var options = { enableHighAccuracy: false};	
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
   $("#ach_lat").val(0);
   $("#ach_long").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
}

//=======Beneficiary======
function getLocationInfoAch_ben() {	
	var options = { enableHighAccuracy: false};	
	navigator.geolocation.getCurrentPosition(onSuccess_ben, onError_ben, options);				
	$(".errorChk").html("Confirming location. Please wait.");
}
// onSuccess Geolocation
function onSuccess_ben(position) {
	$("#ach_lat_ben").val(position.coords.latitude);
	$("#ach_long_ben").val(position.coords.longitude);
	$(".errorChk").html("Location Confirmed");
}
// onError Callback receives a PositionError object
function onError_ben(error) {
   $("#ach_lat_ben").val(0);
   $("#ach_long_ben").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
}

//=======Sanitaiton======
function getLocationInfoAch_san() {	
	var options = { enableHighAccuracy: false};	
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
   $("#ach_lat_san").val(0);
   $("#ach_long_san").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
}

//=======HWF======
function getLocationInfoAch_wwf() {	
	var options = { enableHighAccuracy: false};	
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
   $("#ach_lat_wwf").val(0);
   $("#ach_long_wwf").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
}

//=======WP======
function getLocationInfoAch_wp() {	
	var options = { enableHighAccuracy: false};	
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
   $("#ach_lat_wp").val(0);
   $("#ach_long_wp").val(0);
   $(".errorChk").html("Failed to Confirmed Location.");
}
//---- online
var apipath="http://i001.yeapps.com/planbd_sawrp/syncmobile/";

//--- local
//var apipath="http://127.0.0.1:8000/planbd_sawrp/syncmobile/";

url ="";

$(document).ready(function(){
	if (localStorage.synced!='YES'){
		url = "#pagesync";						
	}else{			
		url = "#homePage";
	}
	$.mobile.navigate(url);
	
});

function syncBasic(){					
	var mobile=$("#mobile").val() ;
	var password=$("#password").val() ;
	
	if (mobile=="" || password==""){
		$(".errorMsg").html("Required mobile no and password");	
	}else{	
		$('#syncBasic').hide();			 
		$(".errorMsg").html("Sync in progress. Please wait...");
		if(localStorage.sync_code==undefined || localStorage.sync_code==""){
			localStorage.sync_code=0
		}
	
		//alert(apipath+'passwordCheck?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code);
		$.ajax({
		  url:apipath+'passwordCheck?mobile='+mobile+'&password='+encodeURIComponent(password)+'&sync_code='+localStorage.sync_code,
		  success: function(result) {
			syncResult=result
			//alert(syncResult);
			var syncResultArray = syncResult.split('rdrd');
				localStorage.synced=syncResultArray[0];
				if (localStorage.synced=='YES'){	
					localStorage.sync_code=syncResultArray[1];						
					localStorage.div_name=syncResultArray[2];
					localStorage.div_code=syncResultArray[3];	
					localStorage.dis_name=syncResultArray[4];	
					localStorage.dis_code=syncResultArray[5];	
					localStorage.up_name=syncResultArray[6];	
					localStorage.up_code=syncResultArray[7];		
					localStorage.un_name=syncResultArray[8];	
					localStorage.un_code=syncResultArray[9];
					localStorage.unCodeUnique=syncResultArray[10];
					localStorage.ffID=syncResultArray[11];					
					localStorage.ffName=syncResultArray[12];
					localStorage.ffMobile=syncResultArray[13];
					localStorage.pnGO=syncResultArray[14];
											
					
					$("#divName").val(localStorage.div_name);
					$("#divCode").val(localStorage.div_code);
					$("#disName").val(localStorage.dis_name);
					$("#disCode").val(localStorage.dis_code);
					$("#upName").val(localStorage.up_name);
					$("#upCode").val(localStorage.up_code);
					$("#unName").val(localStorage.un_name);						
					$("#unCode").val(localStorage.un_code);
					
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
var noTub;

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
	
/*function totalDisabilities(){
	disG_5=$("#disG_5").val();
	disB_5=$("#disB_5").val();
	disG_5_18=$("#disG_5_18").val();
	disB_5_18=$("#disB_5_18").val();
	disF_18_plus=$("#disF_18_plus").val();
	disM_18_plus=$("#disM_18_plus").val();
	
	if(disG_5==''){
		disG_5=0;
	}
	if(disB_5==''){
		disB_5=0;
	}
	if(disG_5_18==''){
		disG_5_18=0;		
	}
	if(disB_5_18==''){
		disB_5_18=0;
	}
	if(disF_18_plus==''){
		disF_18_plus=0;		
	}
	if(disM_18_plus==''){
		disM_18_plus=0;
	}
	var totalDisabilities=eval(disG_5)+eval(disB_5)+eval(disG_5_18)+eval(disB_5_18)+eval(disF_18_plus)+eval(disM_18_plus);
	$("#").val(totalDisabilities);		
}*/	

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
		$(".errorChk").text("Required ward");
	}else if(clusID==''){
		$(".errorChk").text("Required Cluster ID");
	}else if(clusID.length !=2){
		$(".errorChk").text("Maximum Two Digit Cluster ID");
	}else if(socialMapID==''){
		$(".errorChk").text("Required Social Map ID");
	}else if(socialMapID.length !=12){
		$(".errorChk").text("Invalid Social Map ID");
	}else{
		//plan2Data="||ward="+ward+"||village="+village+"||clusID="+clusID+"||clusName="+clusName+"||socialMapID="+socialMapID;
		//alert(plan2Data);
		$(".errorChk").text("");		
		url="#second_page";					
		$.mobile.navigate(url);
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
	noTub=$("#noTub").val();
	
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
	wpTotal=eval(hyTub)+eval(unhyTub)+eval(noTub);
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
		$(".errorChk").text("Required extreme Poor");
	}else if(hyLatrine==''){
		$(".errorChk").text("Required Hygienic Latrine");
	}else if(unhyLatrine==''){
		$(".errorChk").text("Required Unhygienic Latrine");
	}else if(noLatrine==''){
		$(".errorChk").text("Required No Latrine");
	}else if(hyTub==''){
		$(".errorChk").text("Required Hygienic Tubewell ");
	}else if(unhyTub==''){
		$(".errorChk").text("Required Unhygienic Tubewell ");
	}else if(noTub==''){
		$(".errorChk").text("Required No Tubewell");
	}else if(hwYes==''){
		$(".errorChk").text("Required Handwashing Facility Yes");
	}else if(hwNo==''){
		$(".errorChk").text("Required Handwashing Facility No");
	}else if(commFemale==''){	
		$(".errorChk").text("Required Female ");
	}else if(commMale==''){
		$(".errorChk").text("Required Male");
	}else if(benG_5==''){
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
		$(".errorChk").text("Invalid Ethnic Female");	
	}else if(benBtotal<EthM){
		$(".errorChk").text("Invalid Ethnic Male ");
	}else if(benTotal<(eval(EthF)+eval(EthM))){
		$(".errorChk").text("Invalid Total number of HH ");
		
	}else if(ecoStatus != sanTotal){
		$(".errorChk").text("Number of HHs by Economic Status Not Match Sanitation Information");
	}else if(ecoStatus != wpTotal){
		$(".errorChk").text("Number of HHs by Economic Status Not Match Water Point Information");
	}else if(ecoStatus != hwTotal){
		$(".errorChk").text("Number of HHs by Economic Status Not Match Handwashing Facility Infomrationn");
	}else if(ecoStatus != benTotal){
		$(".errorChk").text("Number of HHs by Economic Status Not Match Beneficiaries Count");
	
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
	var get_time_pmt=d.getTime();	
	
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
	}else{
		if (achPhoto_2=='' || achPhoto_2==undefined){
			$(".errorChk").text("Please confirm Photo 2 ");
			$("#btn_submit").show();
		}else{		
			//if(latitude==0 || latitude==0){
			//	$(".errorChk").text("Please confirm your location ");
			//	$("#btn_submit").show();
			//}else{				
				//imagePathA="test"					
				if (imagePathA!=""){							
					$(".errorChk").text("Syncing photo 1..");
					imageName = localStorage.mobile_no+"_"+get_time+".jpg";										
					uploadPhotoAch(imagePathA, imageName);	
					//$("#btn_submit").show();					
				}
									
			//} //-end check location
			
		}//Photo 2
	}//chk photo
	
//syncData();
	
}

//------------------------------------image 1
function getAchivementImage1() {
	navigator.camera.getPicture(onSuccesstA, onFailA, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
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

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winAchInfo,onfail,options);
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
function getAchivementImage2() { //unused
	navigator.camera.getPicture(onSuccess2A, onFail2A, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess2A(imageURI) {	//unused	
    var image = document.getElementById('myImage2A');
    image.src = imageURI;
	imagePath2A = imageURI;	
	$("#achPhoto_2").val(imagePath2A);
}

function onFail2A(message) { //unused
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

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winComInfo2,onfail,options);
}

function winComInfo2(r) {
	$(".errorChk").text('Image 2 upload successfull. Syncing Data ...');
	//syncData();
}

function syncData(){				
	//alert(apipath+"submitData?&syncCode="+localStorage.sync_code+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName+"&achPhoto2="+imageName2+"&latitude="+latitude+"&longitude="+longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ward="+ward+"&village="+village+"&clusID="+clusID+"&clusName="+clusName+"&socialMapID="+socialMapID+"&rich="+rich+"&middle="+middle+"&poor="+poor+"&exPoor="+exPoor+"&hyLatrine="+hyLatrine+"&unhyLatrine="+unhyLatrine+"&noLatrine="+noLatrine+"&hyTub="+hyTub+"&unhyTub="+unhyTub+"&noTub="+noTub+"&hwYes="+hwYes+"&hwNo="+hwNo+"&odfStatus="+odfStatus+"&commExit="+commExit+"&commFunc="+commFunc+"&commFemale="+commFemale+"&commMale="+commMale+"&benTotal="+benTotal+"&benG_5="+benG_5+"&benB_5="+benB_5+"&benG_5_18="+benG_5_18+"&benB_5_18="+benB_5_18+"&benF_18_plus="+benF_18_plus+"&benM_18_plus="+benM_18_plus+"&EthF="+EthF+"&EthM="+EthM+"&disG_5="+disG_5+"&disB_5="+disB_5+"&disG_5_18="+disG_5_18+"&disB_5_18="+disB_5_18+"&disF_18_plus="+disF_18_plus+"&disM_18_plus="+disM_18_plus);
	$.ajax({
		type: 'POST',
		url:apipath+"submitData?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.ffMobile+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName+"&achPhoto2="+imageName2+"&latitude="+latitude+"&longitude="+longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ward="+ward+"&village="+village+"&clusID="+clusID+"&clusName="+clusName+"&socialMapID="+socialMapID+"&rich="+rich+"&middle="+middle+"&poor="+poor+"&exPoor="+exPoor+"&hyLatrine="+hyLatrine+"&unhyLatrine="+unhyLatrine+"&noLatrine="+noLatrine+"&hyTub="+hyTub+"&unhyTub="+unhyTub+"&noTub="+noTub+"&hwYes="+hwYes+"&hwNo="+hwNo+"&odfStatus="+odfStatus+"&commExit="+commExit+"&commFunc="+commFunc+"&commFemale="+commFemale+"&commMale="+commMale+"&benTotal="+benTotal+"&benG_5="+benG_5+"&benB_5="+benB_5+"&benG_5_18="+benG_5_18+"&benB_5_18="+benB_5_18+"&benF_18_plus="+benF_18_plus+"&benM_18_plus="+benM_18_plus+"&EthF="+EthF+"&EthM="+EthM+"&disG_5="+disG_5+"&disB_5="+disB_5+"&disG_5_18="+disG_5_18+"&disB_5_18="+disB_5_18+"&disF_18_plus="+disF_18_plus+"&disM_18_plus="+disM_18_plus,
																																																												
		success: function(result) {			
			if(result=='Success'){
				
				$("#ward").val("");
				$("#village").val("");
				$("#clusID").val("");
				$("#clusName").val("");
				$("#socialMapID").val("");
				
				$("#rich").val("");
				$("#middle").val("");
				$("#poor").val("");
				$("#exPoor").val("");
				
				$("#hyLatrine").val("");
				$("#unhyLatrine").val("");
				$("#noLatrine").val("");
				
				$("#hyTub").val("");
				$("#unhyTub").val("");
				$("#noTub").val("");
				
				$("#hwYes").val("");
				$("#hwNo").val("");
				
				$("#odfStatus").val("");
				
				$("#commExit").val("");
				$("#commFunc").val("");
				
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
				$("#achPhoto").val("");										
				$("#achPhoto_2").val("");
								
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_submit").show();						
			}else{
				$(".errorChk").text('Unauthorized Access');																	
				$("#btn_submit").show();
			}
			
		}//end result
	});//end ajax
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
	ben_ward=$("#ben_ward").val();
	ben_village=$("#ben_village").val();
	ben_clusIDNameList=$("#ben_clusID").val();
	ben_clusIDStr=ben_clusIDNameList.split("-");
	ben_clusID=ben_clusIDStr[0];
	ben_clusName=ben_clusIDStr[1];
	
	ben_socialMapID=$("#ben_socialMapID").val();
	ben_hh_serial=$("#ben_hh_serial").val();
	
	if(ben_ward=='' || ben_ward==0){
		$(".errorChk").text("Required ward");
	}else if(ben_clusID=='' || ben_clusID==0){
		$(".errorChk").text("Required Cluster ID");	
	/*}else if(ben_socialMapID==''){
		$(".errorChk").text("Required Social Map ID");
	}else if(ben_socialMapID.length !=12){
		$(".errorChk").text("Invalid Social Map ID");*/
	}else if(ben_hh_serial==''){
		$(".errorChk").text("Required HH Serial");
	}else if(ben_hh_serial.length !=3){
		$(".errorChk").text("Invalid HH Serial");		
	}else{
		
		//"&ben_ward="+ben_ward+&ben_village="+ben_village"+&ben_clusID="+ben_clusID+"&ben_clusName="+ben_clusName+"&ben_socialMapID="+ben_socialMapID+"&ben_hh_serial="+ben_hh_serial
		/*$(".errorChk").text("");			
		url="#ben_second_page";					
		$.mobile.navigate(url);*/
		//alert(apipath+"search_benData?&ben_hh_serial="+ben_hh_serial);
		$.ajax({
			type:'POST',
			url:apipath+"search_benData?&ben_hh_serial="+ben_hh_serial,
			success: function(result){				
				searchResult=result;			
				var searchResultArray = searchResult.split('||');
					resultSearch=searchResultArray[0];
					
					if (resultSearch=='Success'){							
						/*div_name=searchResultArray[1];
						div_code=searchResultArray[2];	
						dis_name=searchResultArray[3];	
						dis_code=searchResultArray[4];	
						up_name=searchResultArray[5];	
						up_code=searchResultArray[6];		
						un_name=searchResultArray[7];	
						un_code=searchResultArray[8];
						ben_ward=searchResultArray[9];
						ben_village=searchResultArray[10];
						ben_clusID=searchResultArray[11];
						ben_clusName=searchResultArray[12];
						ben_socialMapID=searchResultArray[13];
						ben_hh_serial=searchResultArray[14];
						ben_hh_id=searchResultArray[15];*/
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
}


function joinSocialID(){
	ben_socialMapID=$("#ben_socialMapID").val();
	ben_hh_serial=$("#ben_hh_serial").val();
	benSocialHH=ben_socialMapID+'-'+ben_hh_serial
	
	$("#ben_hh_id").val(benSocialHH);
}

function ben_planbdData2Next(){
	ben_hh_id=$("#ben_hh_id").val();
	ben_hh_head_name=$("#ben_hh_head_name").val();
	ben_hh_head_gender=$("#ben_hh_head_gender").val();
	ben_eco_condition=$("#ben_eco_condition").val();
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
	
	benBenGtotal=eval(ben_benG_5)+eval(ben_benG_5_18)+eval(ben_benF_18_plus);
	benBenBtotal=eval(ben_benB_5)+eval(ben_benB_5_18)+eval(ben_benM_18_plus);
	
	if(ben_hh_id==''){
		$(".errorChk").text("Required HH ID");
	}else if(ben_hh_head_name==''){
		$(".errorChk").text("Required HH Head Name");
	}else if(ben_hh_head_gender=='' || ben_hh_head_gender==null){
		$(".errorChk").text("Required Gender");	
	}else if(ben_eco_condition=='' || ben_eco_condition==null){
		$(".errorChk").text("Required Economic Condition");	
	}else if(ben_benG_5==''){
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
		$(".errorChk").text("Required Male (18+)");	
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
		/*"&ben_hh_id="+ben_hh_id+"&ben_hh_head_name="+ben_hh_head_name+"&ben_hh_head_gender="+ben_hh_head_gender+"
		&ben_eco_condition="+ben_eco_condition+"&ben_benG_5="+ben_benG_5+"&ben_benB_5="+ben_benB_5+"
		&ben_benG_5_18="+ben_benG_5_18+"&ben_benB_5_18="+ben_benB_5_18+"&ben_benF_18_plus="+ben_benF_18_plus+"
		&ben_benM_18_plus="+ben_benM_18_plus+"&benBen_Total="+benBen_Total+"&ben_EthF="+ben_EthF+"&ben_EthM="+ben_EthM+"
		&ben_disG_5="+ben_disG_5+"&ben_disB_5="+ben_disB_5+"&ben_disG_5_18="+ben_disG_5_18+"&ben_disB_5_18="+ben_disB_5_18+"
		&ben_disF_18_plus="+ben_disF_18_plus+"&ben_disM_18_plus="+ben_disM_18_plus*/
	
		$(".errorChk").text("");			
		url="#ben_inPhoto";					
		$.mobile.navigate(url);	
	}
}



function benDataSubmit(){
	$("#btn_ben_submit").hide();
	
	var d = new Date();	
	var get_time_pmt=d.getTime();	
	
	ben_latitude=$("#ach_lat_ben").val();
	ben_longitude=$("#ach_long_ben").val();
	
	achPhoto_ben=$("#achPhoto_ben").val();
	achPhoto_2_ben=$("#achPhoto_2_ben").val();
	
	if (ben_latitude==undefined || ben_latitude==''){
		ben_latitude=0;
	}
	if (ben_longitude==undefined || ben_longitude==''){
		ben_longitude=0;
	}
	if (achPhoto_ben=='' || achPhoto_ben==undefined){
		$(".errorChk").text("Please confirm Photo 1 ");
		$("#btn_ben_submit").show();
	}else{
		if (achPhoto_2_ben=='' || achPhoto_2_ben==undefined){
			$(".errorChk").text("Please confirm Photo 2 ");
			$("#btn_ben_submit").show();
		}else{		
			//if(latitude==0 || latitude==0){
			//	$(".errorChk").text("Please confirm your location ");
			//	$("#btn_ben_submit").show();
			//}else{				
				//imagePathA_ben="test"					
				if (imagePathA_ben!=""){							
					$(".errorChk").text("Syncing photo 1..");
					imageName_ben = localStorage.mobile_no+"_"+get_time+".jpg";										
					uploadPhotoAch_ben(imagePathA_ben, imageName_ben);	
					//$("#btn_ben_submit").show();					
				}
									
			//} //-end check location
			
		}//Photo 2
	}//chk photo
	
//syncDataBen();
	
}

//------------------------------------image 1
function getAchivementImage1_ben() {
	navigator.camera.getPicture(onSuccesstA_ben, onFailA_ben, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccesstA_ben(imageURI) {		
    var image = document.getElementById('myImageA_ben');
    image.src = imageURI;
	imagePathA_ben = imageURI;	
	$("#achPhoto_ben").val(imagePathA_ben);
	
}

function onFailA_ben(message) {
	imagePathA_ben="";
    alert('Failed because: ' + message);
}

function uploadPhotoAch_ben(imageURI, imageName_ben) { 	
	//winAchInfo();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName_ben;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winAchInfo_ben,onfail_ben,options);
}

function winAchInfo_ben(r) {	
	$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
	
	var d = new Date();	
	var get_time=d.getTime();
		
	//imagePath2A_ben="test2"
	if (imagePath2A_ben!=""){							
		$(".errorChk").text("Syncing photo 2..");
		imageName2_ben = localStorage.mobile_no+"_"+get_time+".jpg";
				
		uploadPhoto2Ach_ben(imagePath2A_ben, imageName2_ben);
		//$("#btn_ben_submit").show();		
	}
}

function onfail_ben(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_ben_submit").show();
}

//-----------------------image 2
function getAchivementImage2_ben() { //unused
	navigator.camera.getPicture(onSuccess2A_ben, onFail2A_ben, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess2A_ben(imageURI) {	//unused	
    var image = document.getElementById('myImage2A_ben');
    image.src = imageURI;
	imagePath2A_ben = imageURI;	
	$("#achPhoto_2_ben").val(imagePath2A_ben);
}

function onFail2A_ben(message) { //unused
	imagePath2A_ben="";
    alert('Failed because: ' + message);
}

function uploadPhoto2Ach_ben(imageURI, imageName2_ben) { // second step	
	//winComInfo2();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName2_ben;
    options.mimeType="image/jpeg";
	
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
	
    options.params = params;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winComInfo2_ben,onfail_ben,options);
}

function winComInfo2_ben(r) {
	$(".errorChk").text('Image 2 upload successfull. Syncing Data ...');
	//syncDataBen();
}

function syncDataBen(){				
	//alert(apipath+"submitData_ben?&syncCode="+localStorage.sync_code+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_ben+"&achPhoto2="+imageName2_ben+"&latitude="+ben_latitude+"&longitude="+ben_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ben_ward="+ben_ward+"&ben_clusID="+ben_clusID+"&ben_clusName="+ben_clusName+"&ben_hh_serial="+ben_hh_serial+"&ben_hh_id="+ben_hh_id+"&ben_hh_head_name="+ben_hh_head_name+"&ben_hh_head_gender="+ben_hh_head_gender+"&ben_eco_condition="+ben_eco_condition+"&ben_benG_5="+ben_benG_5+"&ben_benB_5="+ben_benB_5+"&ben_benG_5_18="+ben_benG_5_18+"&ben_benB_5_18="+ben_benB_5_18+"&ben_benF_18_plus="+ben_benF_18_plus+"&ben_benM_18_plus="+ben_benM_18_plus+"&ben_EthF="+ben_EthF+"&ben_EthM="+ben_EthM+"&ben_disG_5="+ben_disG_5+"&ben_disB_5="+ben_disB_5+"&ben_disG_5_18="+ben_disG_5_18+"&ben_disB_5_18="+ben_disB_5_18+"&ben_disF_18_plus="+ben_disF_18_plus+"&ben_disM_18_plus="+ben_disM_18_plus);
	$.ajax({
		type: 'POST',
		url:apipath+"submitData_ben?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.ffMobile+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_ben+"&achPhoto2="+imageName2_ben+"&latitude="+ben_latitude+"&longitude="+ben_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&ben_ward="+ben_ward+"&ben_clusID="+ben_clusID+"&ben_clusName="+ben_clusName+"&ben_hh_serial="+ben_hh_serial+"&ben_hh_id="+ben_hh_id+"&ben_hh_head_name="+ben_hh_head_name+"&ben_hh_head_gender="+ben_hh_head_gender+"&ben_eco_condition="+ben_eco_condition+"&ben_benG_5="+ben_benG_5+"&ben_benB_5="+ben_benB_5+"&ben_benG_5_18="+ben_benG_5_18+"&ben_benB_5_18="+ben_benB_5_18+"&ben_benF_18_plus="+ben_benF_18_plus+"&ben_benM_18_plus="+ben_benM_18_plus+"&ben_EthF="+ben_EthF+"&ben_EthM="+ben_EthM+"&ben_disG_5="+ben_disG_5+"&ben_disB_5="+ben_disB_5+"&ben_disG_5_18="+ben_disG_5_18+"&ben_disB_5_18="+ben_disB_5_18+"&ben_disF_18_plus="+ben_disF_18_plus+"&ben_disM_18_plus="+ben_disM_18_plus,
																																																											
		success: function(result) {			
			if(result=='Success'){
				
				$("#ward").val("");
				$("#village").val("");
				$("#clusID").val("");
				$("#ben_hh_serial").val("");
				$("#ben_hh_id").val("");
								
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
				$("#achPhoto").val("");										
				$("#achPhoto_2").val("");
								
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_ben_submit").show();						
			}else{
				$(".errorChk").text('Unauthorized Access');																	
				$("#btn_ben_submit").show();
			}
			
		}//end result
	});//end ajax
}

<!--===========Sanitation=================-->
var san_ward;
var clsId;
var clsName;
var sanHHID;
var sanHHName;
var san_lat_type;
var san_act_type;
var san_subsidized;
var san_com_date;
var san_overlap_status;
//------
var hw_type;
var hw_com_date;
var hw_overlap_status;

function sanitaion(sanitaion){
	if(localStorage.sync_code==undefined || localStorage.sync_code==""){
		$(".errorChk").text("Required Sync");
	}else{
		social=sanitaion;
		
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
			//alert(apipath+"benSearchWord?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code);
			$.ajax({
				type:'POST',
				url:apipath+"benSearchWord?&div_code="+div_code+"&dis_code="+dis_code+"&up_code="+up_code+"&un_code="+un_code,
				success: function(resStr){					
					sanWordList=resStr.split('fdfd');
										
					var sanWoListStr="";			        
					for(i=0; i<sanWordList.length; i++){						
						sanWoListStr+="<option value="+encodeURIComponent(sanWordList[i])+">"+sanWordList[i]+"</option>";			
					}
					
					var rpt_rep_ob=$("#san_ward");					
					rpt_rep_ob.empty();					
					rpt_rep_ob.append(sanWoListStr);					
					rpt_rep_ob.selectmenu("refresh");	
				}
			})
			
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


function san_planbdData1Next(){
	san_ward=$("#san_ward").val();	
	var clusterList="";
	//alert(apipath+"searchCluster?&sanWard="+san_ward);
	$.ajax({
		type:'POST',
		url:apipath+"searchCluster?&sanWard="+san_ward,
		success: function(resStr){
			
			clusterList=resStr.split('fdfd')
				var listStr="";
				for(i=0; i<clusterList.length; i++){
					clsList=clusterList[i].split(',');
					listStr+="<option value="+encodeURIComponent(clsList)+">"+clsList+"</option>";
				}
								
				var rpt_rep_ob=$("#clusterIDName");					
				rpt_rep_ob.empty();					
				rpt_rep_ob.append(listStr);					
				rpt_rep_ob.selectmenu("refresh");
		}
	})
	$(".errorChk").text("");
	url="#san_second_page";
	$.mobile.navigate(url);
}


function clusterData(){	
	clusIDName=$("#clusterIDName").val();

	clsIdName=clusIDName.split("-");
	clsId=clsIdName[0];
	clsName=clsIdName[1];
	
	//alert(apipath+"seatchHH?&clsId="+clsId+"&clsName="+clsName);
	$.ajax({
		type:'POST',
		url:apipath+"seatchHH?&clsId="+clsId+"&clsName="+clsName,
		success: function(resStr){
			
			houseHList=resStr.split('fdfd')
			
				var hhListStr="";			        
				for(i=0; i<houseHList.length; i++){
					hhList=houseHList[i];
					hhListStr +="<option value="+encodeURIComponent(hhList)+"><a>"+hhList+"</a></option>"
				}
						
				var rpt_rep_ob=$("#hhSerail");					
				rpt_rep_ob.empty();					
				rpt_rep_ob.append(hhListStr);					
				rpt_rep_ob.selectmenu("refresh");			
				
		}
	})
	$(".errorChk").text("");
	url="#san_three_page";
	$.mobile.navigate(url);			
}


function san(){
	hhIdName=$("#hhSerail").val();
	
	sanHHserial=hhIdName.split("-");
	 sanHHID=sanHHserial[0]
	 sanHHName=sanHHserial[1]
	
	$(".errorChk").text("");
	url="#san_four_page";
	$.mobile.navigate(url);	
}

function san_planbdData2Next(){
	san_lat_type=$("#san_lat_type").val();
	san_act_type=$("#san_act_type").val();
	san_subsidized=$("#san_subsidized").val();
	san_com_date=$("#san_com_date").val();	
	san_overlap_status=$("#san_overlap_status").val();
	
	if(san_lat_type=='' || san_lat_type==0){
		$(".errorChk").text("Required Type of Latrine Provided");  
	}else if(san_act_type==''){
		$(".errorChk").text("Required Type of Activity");  
	}else if(san_subsidized==''){
		$(".errorChk").text("Required Subsidized"); 
	}else if(san_com_date==''){
		$(".errorChk").text("Required Date of Completion");
	}else if(san_overlap_status==''){
		$(".errorChk").text("Required Orientation on Hygiene given");
	}else{
		$(".errorChk").text("");
		url="#san_inPhoto";
		$.mobile.navigate(url);
	}		
}

function sanDataSubmit(){
	$("#btn_san_submit").hide();
	
	var d = new Date();	
	var get_time_pmt=d.getTime();	
	
	san_latitude=$("#ach_lat_san").val();
	san_longitude=$("#ach_long_san").val();
	
	achPhoto_san=$("#achPhoto_san").val();
	achPhoto_2_san=$("#achPhoto_2_san").val();
	
	if (san_latitude==undefined || san_latitude==''){
		san_latitude=0;
	}
	if (san_longitude==undefined || san_longitude==''){
		san_longitude=0;
	}
	
	if (achPhoto_san=='' || achPhoto_san==undefined){
		$(".errorChk").text("Please confirm Photo 1 ");
		$("#btn_san_submit").show();
	}else{
		if (achPhoto_2_san=='' || achPhoto_2_san==undefined){
			$(".errorChk").text("Please confirm Photo 2 ");
			$("#btn_san_submit").show();
		}else{		
			//if(latitude==0 || latitude==0){
			//	$(".errorChk").text("Please confirm your location ");
			//	$("#btn_san_submit").show();
			//}else{				
				//imagePathA_ben="test"					
				if (imagePathA_ben!=""){							
					$(".errorChk").text("Syncing photo 1..");
					imageName_san = localStorage.mobile_no+"_"+get_time+".jpg";										
					uploadPhotoAch_san(imagePathA_san, imageName_san);	
					//$("#btn_san_submit").show();					
				}
									
			//} //-end check location
			
		}//Photo 2
	}//chk photo
	
//syncDataSan();
	
}

//------------------------------------image 1
function getAchivementImage1_san() {
	navigator.camera.getPicture(onSuccesstA_san, onFailA_san, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccesstA_san(imageURI) {		
    var image = document.getElementById('myImageA_san');
    image.src = imageURI;
	imagePathA_san = imageURI;	
	$("#achPhoto_san").val(imagePathA_san);
	
}

function onFailA_san(message) {
	imagePathA_san="";
    alert('Failed because: ' + message);
}

function uploadPhotoAch_san(imageURI, imageName_san) { 	
	//winAchInfo();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName_san;
    options.mimeType="image/jpeg";

    var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winAchInfo_san,onfail_san,options);
}

function winAchInfo_san(r) {	
	$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
	
	var d = new Date();	
	var get_time=d.getTime();
		
	//imagePath2A_ben="test2"
	if (imagePath2A_san!=""){							
		$(".errorChk").text("Syncing photo 2..");
		imageName2_san = localStorage.mobile_no+"_"+get_time+".jpg";
				
		uploadPhoto2Ach_san(imagePath2A_san, imageName2_san);
		//$("#btn_san_submit").show();		
	}
}

function onfail_san(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_san_submit").show();
}

//-----------------------image 2
function getAchivementImage2_san() { //unused
	navigator.camera.getPicture(onSuccess2A_san, onFail2A_san, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess2A_san(imageURI) {	//unused	
    var image = document.getElementById('myImage2A_san');
    image.src = imageURI;
	imagePath2A_san = imageURI;	
	$("#achPhoto_2_san").val(imagePath2A_san);
}

function onFail2A_san(message) { //unused
	imagePath2A_san="";
    alert('Failed because: ' + message);
}

function uploadPhoto2Ach_san(imageURI, imageName2_san) { // second step	
	//winComInfo2();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName2_san;
    options.mimeType="image/jpeg";
	
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
	
    options.params = params;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winComInfo2_san,onfail_san,options);
}

function winComInfo2_san(r) {
	$(".errorChk").text('Image 2 upload successfull. Syncing Data ...');
	//syncDataSan();
}

function syncDataSan(){		
	//alert(apipath+"submitData_san?&syncCode="+localStorage.sync_code+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_san+"&achPhoto2="+imageName2_san+"&latitude="+san_latitude+"&longitude="+san_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&san_ward="+san_ward+"&clsId="+clsId+"&clsName="+clsName+"&sanHHserial="+sanHHID+"&sanHHName="+sanHHName+"&san_lat_type="+san_lat_type+"&san_act_type="+san_act_type+"&san_subsidized="+san_subsidized+"&san_com_date="+san_com_date+"&san_overlap_status="+san_overlap_status);
	$.ajax({
		type:'POST',
		url:apipath+"submitData_san?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.ffMobile+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_san+"&achPhoto2="+imageName2_san+"&latitude="+san_latitude+"&longitude="+san_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&san_ward="+san_ward+"&clsId="+clsId+"&clsName="+clsName+"&sanHHserial="+sanHHID+"&sanHHName="+sanHHName+"&san_lat_type="+san_lat_type+"&san_act_type="+san_act_type+"&san_subsidized="+san_subsidized+"&san_com_date="+san_com_date+"&san_overlap_status="+san_overlap_status,
																																																										
		success: function(result) {			
			if(result=='Success'){
				
				$("#ward").val("");
				$("#village").val("");
				$("#clusID").val("");
				$("#clusName").val("");
				$("#socialMapID").val("");
											
				//--------------
				$("#ach_lat").val(0);
				$("#ach_long").val(0);
				$("#achPhoto").val("");										
				$("#achPhoto_2").val("");
								
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_san_submit").show();						
			}else{
				$(".errorChk").text('Unauthorized Access');																	
				$("#btn_san_submit").show();
			}
			
		}//end result
	});//end ajax
}


<!--===========WWF================-->
function wwf(wwf){
	hhIdName=$("#hhSerail").val();
	sanHHserial=hhIdName.split("-");
	 sanHHID=sanHHserial[0]
	 sanHHName=sanHHserial[1]
	
	$(".errorChk").text("");
	url="#wwf_four_page";
	$.mobile.navigate(url);		
}

function wwf_planbdData2Next(){
	hw_type=$("#hw_type").val();
	hw_com_date=$("#hw_com_date").val();
	hw_overlap_status=$("#hw_overlap_status").val();	
	
	if(hw_type=='' || hw_type==0){
		$(".errorChk").text('Required Type of Handwash Facilities');		
	}else if(hw_com_date==''){
		$(".errorChk").text('Required Date of Completion');	
	}else if(hw_overlap_status==''){
		$(".errorChk").text('Orientation on Hygiene given');	
	}else{
		$(".errorChk").text("");
		url="#wwf_inPhoto";
		$.mobile.navigate(url);	
	}
}


function wwfDataSubmit(){
	$("#btn_wwf_submit").hide();
	
	var d = new Date();	
	var get_time_pmt=d.getTime();	
	
	wwf_latitude=$("#ach_lat_wwf").val();
	wwf_longitude=$("#ach_long_wwf").val();
	
	achPhoto_wwf=$("#achPhoto_wwf").val();
	achPhoto_2_wwf=$("#achPhoto_2_wwf").val();
	
	if (wwf_latitude==undefined || wwf_latitude==''){
		wwf_latitude=0;
	}
	if (wwf_longitude==undefined || wwf_longitude==''){
		wwf_longitude=0;
	}
	
	if (achPhoto_wwf=='' || achPhoto_wwf==undefined){
		$(".errorChk").text("Please confirm Photo 1 ");
		$("#btn_wwf_submit").show();
	}else{
		if (achPhoto_2_wwf=='' || achPhoto_2_wwf==undefined){
			$(".errorChk").text("Please confirm Photo 2 ");
			$("#btn_wwf_submit").show();
		}else{		
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
									
			//} //-end check location
			
		}//Photo 2
	}//chk photo
	
//syncDataHwf();
	
}

//------------------------------------image 1
function getAchivementImage1_wwf() {
	navigator.camera.getPicture(onSuccesstA_wwf, onFailA_wwf, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccesstA_wwf(imageURI) {		
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

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winAchInfo_san,onfail_san,options);
}

function winAchInfo_wwf(r) {	
	$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
	
	var d = new Date();	
	var get_time=d.getTime();
		
	//imagePath2A_ben="test2"
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
function getAchivementImage2_wwf() { //unused
	navigator.camera.getPicture(onSuccess2A_wwf, onFail2A_wwf, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess2A_wwf(imageURI) {	//unused	
    var image = document.getElementById('myImage2A_wwf');
    image.src = imageURI;
	imagePath2A_wwf = imageURI;	
	$("#achPhoto_2_wwf").val(imagePath2A_wwf);
}

function onFail2A_wwf(message) { //unused
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

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winComInfo2_wwf,onfail_wwf,options);
}

function winComInfo2_wwf(r) {
	$(".errorChk").text('Image 2 upload successfull. Syncing Data ...');
	//syncDataHwf();
}

function syncDataHwf(){		
	//alert(apipath+"submitData_hwf?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.ffMobile+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_wwf+"&achPhoto2="+imageName2_wwf+"&latitude="+wwf_latitude+"&longitude="+wwf_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&san_ward="+san_ward+"&clsId="+clsId+"&clsName="+clsName+"&sanHHserial="+sanHHID+"&sanHHName="+sanHHName+"&hw_type="+hw_type+"&hw_com_date="+hw_com_date+"&hw_overlap_status="+hw_overlap_status);
	$.ajax({
		type:'POST',
		url:apipath+"submitData_hwf?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.ffMobile+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_wwf+"&achPhoto2="+imageName2_wwf+"&latitude="+wwf_latitude+"&longitude="+wwf_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&san_ward="+san_ward+"&clsId="+clsId+"&clsName="+clsName+"&sanHHserial="+sanHHID+"&sanHHName="+sanHHName+"&hw_type="+hw_type+"&hw_com_date="+hw_com_date+"&hw_overlap_status="+hw_overlap_status,
																																																										
		success: function(result) {			
			if(result=='Success'){
				
				$("#ward").val("");
				$("#village").val("");
				$("#clusID").val("");
				$("#clusName").val("");
				$("#socialMapID").val("");
											
				//--------------
				$("#ach_lat").val(0);
				$("#ach_long").val(0);
				$("#achPhoto").val("");										
				$("#achPhoto_2").val("");
								
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_wwf_submit").show();						
			}else{
				$(".errorChk").text('Unauthorized Access');																	
				$("#btn_wwf_submit").show();
			}
			
		}//end result
	});//end ajax
}


<!--===========WP================-->
var wp_technology;
var wp_tub_pre;
var wp_subsidized;
var wp_com_date;
var wp_overlap_status;

function wp(wp){
	hhIdName=$("#hhSerail").val();
	sanHHserial=hhIdName.split("-");
	 sanHHID=sanHHserial[0]
	 sanHHName=sanHHserial[1]
	
	$(".errorChk").text("");
	url="#wp_four_page";
	$.mobile.navigate(url);		
}

function wp_planbdData2Next(){
	wp_technology=$("#wp_technology").val();
	wp_tub_pre=$("#wp_tub_pre").val();
	wp_subsidized=$("#wp_subsidized").val();
	wp_com_date=$("#wp_com_date").val();
	wp_overlap_status=$("#wp_overlap_status").val();
	
	if(wp_technology=='' || wp_technology==0){
		$(".errorChk").text('Required Water Point Technology');			
	}else if(wp_tub_pre=='' || wp_tub_pre==0){
		$(".errorChk").text('Required Tubewell Located on Premises');
	}else if(wp_subsidized==''){
		$(".errorChk").text('Required Subsidized');		
	}else if(wp_com_date==''){
		$(".errorChk").text('Required Date of Completion');		
	}else if(wp_overlap_status==''){
		$(".errorChk").text('Required Orientation on Hygiene given');		
	}else{
		$(".errorChk").text("");
		url="#wp_inPhoto";
		$.mobile.navigate(url);
	}	
}

function wpDataSubmit(){
	$("#btn_wp_submit").hide();
	
	var d = new Date();	
	var get_time_pmt=d.getTime();	
	
	wp_latitude=$("#ach_lat_wp").val();
	wp_longitude=$("#ach_long_wp").val();
	
	achPhoto_wp=$("#achPhoto_wp").val();
	achPhoto_2_wp=$("#achPhoto_2_wp").val();
	
	if (wp_latitude==undefined || wp_latitude==''){
		wp_latitude=0;
	}
	if (wp_longitude==undefined || wp_longitude==''){
		wp_longitude=0;
	}
	
	if (achPhoto_wp=='' || achPhoto_wp==undefined){
		$(".errorChk").text("Please confirm Photo 1 ");
		$("#btn_wp_submit").show();
	}else{
		if (achPhoto_2_wp=='' || achPhoto_2_wp==undefined){
			$(".errorChk").text("Please confirm Photo 2 ");
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
					uploadPhotoAch_wpf(imagePathA_wp, imageName_wp);	
					//$("#btn_wp_submit").show();					
				}
									
			//} //-end check location
			
		}//Photo 2
	}//chk photo
	
//syncDataWp();
	
}

//------------------------------------image 1
function getAchivementImage1_wp() {
	navigator.camera.getPicture(onSuccesstA_wp, onFailA_wp, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true});		
}

function onSuccesstA_wp(imageURI) {		
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

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winAchInfo_wp,onfail_wp,options);
}

function winAchInfo_wp(r) {	
	$(".errorChk").text('Image 1 upload Successful. Syncing image 2...');
	
	var d = new Date();	
	var get_time=d.getTime();
		
	//imagePath2A_wp="test2"
	if (imagePath2A_wp!=""){							
		$(".errorChk").text("Syncing photo 2..");
		imageName2_wp = localStorage.mobile_no+"_"+get_time+".jpg";
				
		uploadPhoto2Ach_wp(imagePath2A_wp, imageName2_wp);
		//$("#btn_wp_submit").show();		
	}
}

function onfail_wp(r) {
	$(".errorChk").text('File upload Failed. Please check internet connection.');
	$("#btn_wp_submit").show();
}

//-----------------------image 2
function getAchivementImage2_wp() { //unused
	navigator.camera.getPicture(onSuccess2A_wp, onFail2A_wp, { quality: 50,
	targetWidth: 300,
	destinationType: Camera.DestinationType.FILE_URI,correctOrientation: true });		
}

function onSuccess2A_wp(imageURI) {	//unused	
    var image = document.getElementById('myImage2A_wp');
    image.src = imageURI;
	imagePath2A_wp = imageURI;	
	$("#achPhoto_2_wp").val(imagePath2A_wp);
}

function onFail2A_wp(message) { //unused
	imagePath2A_wp="";
    alert('Failed because: ' + message);
}

function uploadPhoto2Ach_wp(imageURI, imageName2_wp) { // second step	
	//winComInfo2();
	var options = new FileUploadOptions();
    options.fileKey="upload";
    options.fileName=imageName2_wp;
    options.mimeType="image/jpeg";
	
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
	
    options.params = params;

    var ft = new FileTransfer();
	ft.upload(imageURI, encodeURI("http://i001.yeapps.com/image_hub/planbd/upload_image/"),winComInfo2_wp,onfail_wp,options);
}

function winComInfo2_wp(r) {
	$(".errorChk").text('Image 2 upload successfull. Syncing Data ...');
	//syncDataWp();
}


function syncDataWp(){		
	//alert(apipath+"submitData_wp?&syncCode="+localStorage.sync_code+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_wp+"&achPhoto2="+imageName2_wp+"&latitude="+wp_latitude+"&longitude="+wp_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&san_ward="+san_ward+"&clsId="+clsId+"&clsName="+clsName+"&sanHHserial="+sanHHID+"&sanHHName="+sanHHName+"&wp_technology="+wp_technology+"&wp_tub_pre="+wp_tub_pre+"&wp_subsidized="+wp_subsidized+"&wp_com_date="+wp_com_date+"&wp_overlap_status="+wp_overlap_status);
	$.ajax({
		type:'POST',
		url:apipath+"submitData_wp?&syncCode="+localStorage.sync_code+"&ffID="+localStorage.ffID+"&ffName="+localStorage.ffName+"&ffMobile="+localStorage.ffMobile+"&pnGo="+localStorage.pnGO+"&achPhoto="+imageName_wp+"&achPhoto2="+imageName2_wp+"&latitude="+wp_latitude+"&longitude="+wp_longitude+"&div_name="+div_name+"&div_code="+div_code+"&dis_name="+dis_name+"&dis_code="+dis_code+"&up_name="+up_name+"&up_code="+up_code+"&un_name="+un_name+"&un_code="+un_code+"&san_ward="+san_ward+"&clsId="+clsId+"&clsName="+clsName+"&sanHHserial="+sanHHID+"&sanHHName="+sanHHName+"&wp_technology="+wp_technology+"&wp_tub_pre="+wp_tub_pre+"&wp_subsidized="+wp_subsidized+"&wp_com_date="+wp_com_date+"&wp_overlap_status="+wp_overlap_status,
																																																										
		success: function(result) {			
			if(result=='Success'){
				/*$("#divName").val("");
				$("#divCode").val("");
				$("#disName").val("");
				$("#disCode").val("");
				$("#upName").val("");
				$("#upCode").val("");
				$("#unName").val("");
				$("#unCode").val("");*/
				
				$("#ward").val("");
				$("#village").val("");
				$("#clusID").val("");
				$("#clusName").val("");
				$("#socialMapID").val("");
											
				//--------------
				$("#ach_lat").val(0);
				$("#ach_long").val(0);
				$("#achPhoto").val("");										
				$("#achPhoto_2").val("");
								
				$(".sucChk").text('Successfully Submitted');
				$(".errorChk").text("");
				$("#btn_wp_submit").show();						
			}else{
				$(".errorChk").text('Unauthorized Access');																	
				$("#btn_wp_submit").show();
			}
			
		}//end result
	});//end ajax
}


function exit() {
	navigator.app.exitApp();
	//navigator.device.exitApp();
}