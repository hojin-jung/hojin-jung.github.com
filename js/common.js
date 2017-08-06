function setNaverMap(latX,latY,mode){
 try{
	if(mode == 'user'){
		var oPoint = new nhn.api.map.TM128(latX,latY);
		nhn.api.map.setDefaultPoint('TM128');
	}else{
		var oPoint = new nhn.api.map.LatLng(latX,latY);
		nhn.api.map.setDefaultPoint('LatLng');
	}
	var oMapTypeBtn = new nhn.api.map.MapTypeBtn();
	oMapTypeBtn.setPosition({
					bottom : 10,
					right : 80
	});
	oMap = new nhn.api.map.Map('naverMap2' ,{
		point : oPoint,
		zoom : 10,
		enableWheelZoom : true,
		enableDragPan : true,
		enableDblClickZoom : false,
		mapMode : 0,
		activateTrafficMap : false,
		activateBicycleMap : false,
		minMaxLevel : [ 1, 14 ],
		size : new nhn.api.map.Size('', 400)
	});
	oMap.addControl(oMapTypeBtn);
	/* 마커 */
	var oSize = new nhn.api.map.Size(28, 37);
	var oOffset = new nhn.api.map.Size(14, 37);
	var oIcon = new nhn.api.map.Icon('http://static.naver.com/maps2/icons/pin_spot2.png', oSize, oOffset);
	var mapInfoTestWindow = new nhn.api.map.InfoWindow(); 
	mapInfoTestWindow.setVisible(false); 
	oMap.addOverlay(mapInfoTestWindow);

	var oLabel = new nhn.api.map.MarkerLabel(); 
	oMap.addOverlay(oLabel); 

	var oMarker = new nhn.api.map.Marker(oIcon, { title : '마커 : ' + oPoint.toString() });
	oMarker.setPoint(oPoint);
	//oLabel.setVisible(true, oMarker); 
	oMap.addOverlay(oMarker);
	
	/* 줌 */
	var oSlider = new nhn.api.map.ZoomControl();
	oMap.addControl(oSlider);
	oSlider.setPosition({
	 top : 10,
	 left : 10
	});                        

	}catch(e){alert('error');}
}