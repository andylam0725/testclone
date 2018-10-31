//------join_btn---//
	document.getElementsByTagName('p')[5].insertAdjacentHTML("beforebegin",'<a href="https://demo-hk.trade.z.com/join/pcweb/account?locale=zh_TW" target="_blank" class="btn-style-navy btn-dl:before" style="margin: auto auto 20px auto;background-color: #F88900; font-size: 14px; font-weight: bold; line-height: 40px; width: 440px; height: 40px;" onmouseover="join_btn_over(this)" onmouseout="join_btn_out(this)">馬上申請模擬帳戶，體驗superchart</a>')
	function join_btn_over(x) {
		x.style.backgroundColor = "#faa43a";
	}
	function join_btn_out(x) {
		x.style.backgroundColor = "#F88900";
	}
//-----top_image---//
	var changebg = document.getElementsByClassName("bg-img");
    	changebg[0].style.backgroundImage = "url(http://www.nd-studio.com/zcom/img_05_renew.jpg)";
	//--------top image description---//
	var txt = document.getElementsByClassName("txt");
		txt[0].style.width="280px";
		txt[0].style.right="48px";
		txt[0].style.marginTop="50px";
		txt[0].style.color="white";
//-----content01----//
	document.getElementsByTagName("p")[7].innerHTML = '<img src="http://www.nd-studio.com/zcom/superchart_title_01.png"/></br>SUPER CHART內置38種最受歡迎的技術技標，例如<font color="red">簡單移動平均線(SMA) , 指數加權移動平均線(EMA) 、 RSI、 RCI、 MACD、 保歷加通道、 一目均衡表、隨機指數、平均足等</font>，以配合閣下的需要。';
	document.getElementsByTagName("p")[6].innerHTML = '<img src="/hk/static/tc/trading_platforms/images/img_super_01.png" onmouseover="img_super_01_over(this)" onmouseout="img_super_01_out(this)">';
	function img_super_01_over(x) {
	x.src = "http://www.nd-studio.com/zcom/img_super_01.gif";
	}
	function img_super_01_out(x) {
	x.src = "/hk/static/tc/trading_platforms/images/img_super_01.png";
	}
//-----content02----//
	document.getElementsByTagName("p")[11].innerHTML = '<img src="http://www.nd-studio.com/zcom/superchart_title_02.png"/></br>本軟件可以在<font color="red">同一畫面中，最多分別顯示16組不同貨幣對的圖表。</font>閣下可以利用我們內置的技術分析及多圖顯示功能，輕易捕捉出市場趨勢。';
	document.getElementsByTagName("p")[10].innerHTML = '<img src="/hk/static/tc/trading_platforms/images/img_super_02.png" onmouseover="img_super_02_over(this)" onmouseout="img_super_02_out(this)">';
	function img_super_02_over(x) {
	x.src = "http://www.nd-studio.com/zcom/img_super_02.gif";
	}
	function img_super_02_out(x) {
	x.src = "/hk/static/tc/trading_platforms/images/img_super_01.png";
	}
//-----content03----//
	document.getElementsByTagName("p")[13].innerHTML = '<img src="http://www.nd-studio.com/zcom/superchart_title_03.png"/></br>點擊新聞標誌可閱覽於不同時間有關經濟的新聞及通告對外匯價格影響的詳細資料。';
	document.getElementsByTagName("p")[12].innerHTML = '<img src="/hk/static/tc/trading_platforms/images/img_super_03.png" onmouseover="img_super_03_over(this)" onmouseout="img_super_03_out(this)">';
	function img_super_03_over(x) {
	x.src = "http://www.nd-studio.com/zcom/img_super_03.jpg";
	}
	function img_super_03_out(x) {
	x.src = "/hk/static/tc/trading_platforms/images/img_super_03.png";
	}
//-----content04----//	
	document.getElementsByTagName("p")[16].innerHTML = '<img src="http://www.nd-studio.com/zcom/superchart_title_04.png"/></br>在檢視價格圖表的同時，不妨善用<font color="red">水平線、趨勢線、江恩線、菲波納奇線等</font>多種繪圖工具，協助閣下作出全面的技術分析。';
	document.getElementsByTagName("p")[15].innerHTML = '<img src="/hk/static/tc/trading_platforms/images/img_super_04.png" onmouseover="img_super_04_over(this)" onmouseout="img_super_04_out(this)">';
	function img_super_04_over(x) {
	x.src = "http://www.nd-studio.com/zcom/img_super_04.gif";
	}
	function img_super_04_out(x) {
	x.src = "/hk/static/tc/trading_platforms/images/img_super_04.png";
	}
//--------delete h2 title---//
	for (var i = 5 -1; i >= 0; i--)
   	document.getElementsByTagName("h2")[i].remove();
