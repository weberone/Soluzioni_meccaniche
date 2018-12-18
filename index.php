
<?php
	include 'header.php';
?>
	<section>
		<div class="slider_home flexslider"> <!-- wrapper -->
			<ul class="slides">
				<!--|||-->
				<li>
			        <div class="video">
			        	<div class="sfuma_top"></div>
			        	<div class="btn_cover"></div>
			        	<div class="btn_video"><span>chiudi video</span></div>
			            <video class="cover_video" preload="auto" loop autoplay muted poster="video/video.jpg" > <!-- loop autoplay muted -->
			                <!-- MP4 must be first for iPad! -->
			                <source src="video/video.mp4" type="video/mp4" /><!-- Safari / iOS video    -->
			                <source src="video/video.webm" type="video/webm" /><!-- Firefox / Opera / Chrome10 -->
			           </video>

			           
			           <video class="file_video" preload="auto" > <!-- poster="video/Comelit-Architetti-01_2.jpg" loop autoplay muted -->
			                <!-- MP4 must be first for iPad! -->
			                <!-- https://youtu.be/PkCzGC-qNCg -->
			                <source src="video/video.mp4" type="video/mp4" /><!-- Safari / iOS video    -->
			                <source src="video/video.webm" type="video/webm" /><!-- Firefox / Opera / Chrome10 -->
			           </video>

			            <div class="frase">
			                <div class="cont_frase">
			                    <div class="testo_frase">
			                        <h3><strong>lavorazioni meccaniche</strong></br>su ogni tipo di <strong>materiale</strong><br/>e <strong>dimensione</strong></h3>
			                        <div class="btn_read"><img src="images/video_btn.png"><p>Guarda il video</p></div>
			                    </div>
			                </div>
			            </div>
			        </div>
				</li>
				<!--|||-->
				<li>
					<div class="sfuma_top"></div>
					<div class="immagine"><div class="cont"><img src="images/slide.jpg"/></div></div>
			    	<div class="flex-caption sx_cap"> <!--  IMPORTANTE ========= aggiungere sx_cap per allineare a sinistra -->
			    		<div class="testi">
			    			<div class="block txt_bianco"> <!--  IMPORTANTE ========= aggiungere txt_bianco per testo bianco -->
			    				<h5>lavorazioni</h5>
								<h1>Tagli laser<br/>di precisione</h1>
							</div>
			    			<a href="#"><div class="btn">Scopri di pi&ugrave;</div></a>
			    		</div>
			    	</div>
				</li>
				<!--|||-->
				<li>
					<div class="sfuma_top"></div>
					<div class="immagine"><div class="cont"><img src="images/slide2.jpg"/></div></div>
			    	<div class="flex-caption sx_cap"> <!--  IMPORTANTE ========= aggiungere bagliore per alone bianco -->
			    		<div class="testi">
			    			<div class="block txt_bianco">
			    				<h5>Progettazione cad</h5>
								<h1>progettazione<br/>e realizzazione.</h1>
							</div>
			    			<a href="#"><div class="btn">Scopri di pi&ugrave;</div></a>
			    		</div>
			    	</div>
				</li>
				<!--|||-->
				<li>
					<div class="sfuma_top"></div>
					<div class="immagine"><div class="cont"><img src="images/slide3.jpg"/></div></div>
			    	<div class="flex-caption sx_cap"> <!--  IMPORTANTE ========= aggiungere bagliore per alone bianco -->
			    		<div class="testi">
			    			<div class="block txt_bianco">
			    				<h5>certificazioni</h5>
								<h1>Certificati<br/>ISO 9001 e Accredia.</h1>
							</div>
			    		</div>
			    	</div>
				</li>
			</ul>
		</div>
	</section>
	<section>
		<div class="w100">
			<div class="testo_intro ingranaggio">
				<h3>Ultime Novit&agrave;</h3>
			</div>
		</div>
	</section>
	<section>
		<div class="row_img_txt">
			<div class="punta"></div>
			<div class="liena_divisorio"></div>
		 	<div class="blocco_img_text">
		 		<div class="block_alt">
		 			<div class="image"><img src="images/taglio_laser.jpg"/></div>
		 			<div class="testo">
						<div class="cent_test_alt">
							<div class="cent_test_alt_int">
								<p>22 Settembre 2018</p>
								<h4>Nuovo sistema<br/>taglio laser.</h4>
								<!--<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo pulvinar metus, ac tempus mi sollicitudin nec.<br/>
								<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</strong></p>-->
								<a href="servizi_aziende.html"><div class="btn">Scopri di pi&ugrave;</div></a>
							</div>
						</div>
		 			</div>
		 		</div>
		 	</div>
		 	<div class="blocco_img_text">
		 		<div class="block_alt">
		 			<div class="image"><img src="images/certificato.jpg"/></div>
		 			<div class="testo">
						<div class="cent_test_alt">
							<div class="cent_test_alt_int">
								<p>2 Ottobre 2018</p>
								<h4>Ottenuta<br/>la certificazione<br/>Iso 9001</h4>
								<a href="servizi_dipendenti.html"><div class="btn">Scopri di pi&ugrave;</div></a>
							</div>
						</div>
		 			</div>
		 		</div>
		 	</div>
		 	<div class="clear_float"></div>
		</div>
	</section>
<?php
	include 'sidebar_competenze.php';
?>
<?php
	include 'sidebar_certificazioni.php';
?>
<?php
	include 'footer.php';
?>
<script>
	$(document).ready(function() {
		$('body').removeClass('page_int');
	});
</script>
