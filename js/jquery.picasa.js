/**
 * Picasa Webalbum Integration jQuery plugin
 * This library was inspired aon pwi by Jeroen Diderik - http://www.jdee.nl/
 * @name jquery.picasa.js
 * @author Sebastiaan de Rooij
 * @revision 1.0
 * @date march 2011
 * @license Creative Commons Attribution-Share Alike 3.0 Netherlands License - http://creativecommons.org/licenses/by-sa/3.0/nl/
 */
(function ($) {
    var oElement, oOptions = {};
    
    $.fn.picasa = function (oOptions) {
    
        var $self, oSettings = {};
        oOptions = $.extend({}, $.fn.picasa.defaults, oOptions);
        oElement = this;
        
        function _initialize() {
		
            oSettings = oOptions;
            sTimeStamp = new Date().getTime();
            oSettings.id = sTimeStamp;
			if ( !oSettings.debug && "sessionStorage" in window && window["sessionStorage"] != null ) {
				oSettings.sessionStorage = true;
			} else {
				oSettings.sessionStorage = false;
			}
			if(oSettings.mode == 'slideshow') {
				oElement.addClass('picasa_container');
				$self = $(oSettings.imgElSelector, oElement);
				$self.addClass('picasa_img_container');
			} else {
				$self = $(oElement);
				//$self = $("<div id='picasa_" + sTimeStamp + "'/>").appendTo(oElement);
				$self.addClass('picasa_container');
			}
            _start();
            return false;
        }
        function _start() {
            if (oSettings.username === '') {
                alert('Make sure you specify at least your username.');
                return;
            }
            switch (oSettings.mode) {
                case 'slideshow':
                    getSlideshow();
                    break;
                case 'albums':
                	getAlbums();
                    break;
                default:
                    return null;
                    break;
            }
        }
        function formatDate($dt) {
            var $today = new Date(Number($dt)),
			$year = $today.getUTCFullYear();
            if ($year < 1000) {
                $year += 1900;
            }
            return (oSettings.months[($today.getUTCMonth())] + " " + $today.getUTCDate() + ", " + $year);
        }
        function parseUri (str) {
        	var	o   = { strictMode: false,
	        	    	key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
	        	    	q:   {
	        	    		name:   "queryKey",
	        	    		parser: /(?:^|&)([^&=]*)=?([^&]*)/g
	        	    	},
	        	    	parser: {
	        	    		strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
	        	    		loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	        	    	}
        	},
    		m   = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
    		uri = {},
    		i   = 14;

	    	while (i--) uri[o.key[i]] = m[i] || "";
	
	    	uri[o.q.name] = {};
	    	uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
	    		if ($1) uri[o.q.name][$1] = $2;
	    	});
	
	    	return uri;
	    }
        function nl2br(s) {
            return s.replace(/\n/g, '<br />\n');
        }
        function formatDateTime($dt) {
            var $today = new Date(Number($dt));
            $year = $today.getUTCFullYear();
            if ($year < 1000) {
                $year += 1900;
            }
            if ($today == "Invalid Date") {
                return $dt;
            } else {
                return ($today.getUTCDate() + "-" + ($today.getUTCMonth() + 1) + "-" + $year + " " + $today.getUTCHours() + ":" + ($today.getUTCMinutes() < 10 ? "0" + $today.getUTCMinutes() : $today.getUTCMinutes()));
            }
        }
        //srooij: this function returns a photo element with comments and all
        function photo(j,oPhotoSettings) {
			if(typeof(oPhotoSettings) != 'object') { oPhotoSettings = new Object(); }
            var $oPhotoEl, $d = "", $c = "", $img_base = j.content.src,
				$id_base = j.gphoto$id.$t,$photoJson = null;
			if(!oSettings.parsePhotoComment || !j.summary.$t || !$photoJson) {
				$c = nl2br(j.summary ? j.summary.$t : "");
				$c = $c.replace(new RegExp("'", "g"), "&#39;");
			}
			
			//srooij: attach json data to photo element
			if(oSettings.parsePhotoComment && oPhotoSettings.parseJson && j.summary.$t) {
				try{ $photoJson = $.parseJSON(j.summary.$t); }catch(err){};
			}
			
			if(oPhotoSettings.onlyUrl)
			{
				oPhotoData = new Object();
				oPhotoData.url = $img_base;
				//srooij: create the url for the fullscreen image
				oUriParts = parseUri($img_base);
				aDir = oUriParts.directory.split("/");
				aDir.pop();aDir.pop();
				oPhotoData.fullUrl = oUriParts.protocol+"://"+oUriParts.host+aDir.join("/")+"/"+oUriParts.file;
				
				if($photoJson)
				{
					oPhotoData.jsonData = $photoJson;
				}
				else
				{
					oPhotoData.jsonData = false;
				}
				return oPhotoData;
			}
			
            $oPhotoEl = $("<div class='picasa_photo' style='height:" + (oSettings.thumbSize + 1) + "px;cursor: pointer;'/>");
			if(oSettings.thumbWrap && oSettings.thumbWrap.length) {
				var $start='',$end='';
				$.each(oSettings.thumbWrap, function(i, val) {
					switch (val) {
						case 'a':
							$start += '<a href="' + $img_base + '?imgmax=' + oSettings.photoSize + '">';
							$end = '</a>'+$end;
							break;
						default:
							$start += '<'+val+'>';
							$end = '</'+val+'>'+$end;
							break;
					}
				});
				$start += '<img src="'+$img_base+'"/>';
				$oPhotoEl.append($start + $end);
			}
			else  {
				$oPhotoEl.append('<img src="'+$img_base+'"/>');
			}
            if (typeof (oSettings.onclickThumb) === "function") { var obj = j; $oPhotoEl.bind('click.picasa', obj, clickThumb); }
			//srooij: attach json data to photo element
			if(oSettings.parsePhotoComment && j.summary.$t) {
				if($photoJson)
				{
					$oPhotoEl.data('jsonData', $photoJson);
				}
			}
			return $oPhotoEl;
        }

        function albums(j,k) {
            var $elTemp,
			$np = j.feed.openSearch$totalResults.$t,
			$npi = k.feed.openSearch$totalResults.$t,
			$at = "",
			$elLi = '<div><li><a class="thumb" name="leaf" href="" title="Title #0">'+
						'<img src="" alt="Title #0" />'+
			    		'</a>'+
						'<div class="caption">'+
							'<div class="image-title">Title #0</div>'+
							'<div class="image-props">Kenmerken</div>'+
							'<div class="image-desc">Omschrijving</div>'+
						'</div>'+
					'</li></div>',
			$item_plural = ($np == "1") ? false : true;
            if($np != $npi ){ return false; }
            
            
            $elLi = $($elLi);
            
            $elTemp = $('<ul class="thumbs noscript"></ul>');
            var i = ((oSettings.page - 1) * oSettings.maxResults);

            while (i < (oSettings.maxResults * oSettings.page) && i < $np) {
                var $oPhotoSmaller = photo(j.feed.entry[i],{onlyUrl:true});
                var $oPhotoLarger = photo(k.feed.entry[i],{onlyUrl:true,parseJson:true});
                
                $elLi.find("img").attr('src', $oPhotoSmaller.url);
                $elLi.find("a.thumb").attr('href', $oPhotoLarger.url);
                $elLi.find("a.original").attr('href', $oPhotoLarger.fullUrl);
                
                //add description to image
            	if (oSettings.parsePhotoComment && $oPhotoLarger.jsonData) {
            		$sProperties = '"'+$oPhotoLarger.jsonData.sTitle+'" - '+$oPhotoLarger.jsonData.oFormat.iWidth+'cm x '+$oPhotoLarger.jsonData.oFormat.iHeight+'cm - '+$oPhotoLarger.jsonData.sPaint+' op '+$oPhotoLarger.jsonData.sCanvas;
            		
            		$elLi.find("img").attr('alt', $oPhotoLarger.jsonData.sTitle);
                    $elLi.find("a.thumb").attr('title', $oPhotoLarger.jsonData.sTitle);
                    $elLi.find("div.image-title").text($oPhotoLarger.jsonData.sTitle);
                    $elLi.find("a.thumb").attr('name', $oPhotoLarger.jsonData.sTitle.replace(/[^a-zA-Z0-9]+/g,''));
                    $elLi.find("div.image-props").text($sProperties);
                    $elLi.find("div.image-desc").text($oPhotoLarger.jsonData.sDescription);
				}
            	else
            	{
            		$elLi.find("img").attr('alt', 'thumbnail');
                    $elLi.find("a.thumb").removeAttr('title');
                    $elLi.find("a.thumb").removeAttr('name');
                    $elLi.find("div.image-title").text('');
                    $elLi.find("div.image-props").text('');
                    $elLi.find("div.image-desc").text('');
            	}
                
                $elTemp.append($elLi.html());
                i++;
            }
            $elTemp = $("<div/>").append($elTemp);
			
			if (oSettings.sessionStorage) {
				sessionStorage.setItem(oSettings.album) = JSON.stringify(j);
			} else {
				oSettings.photostore[oSettings.album] = j;
			}
            show(false, $elTemp.html());
        }


        function slideshow(j) {
            var $elTemp,
			$np = j.feed.openSearch$totalResults.$t,
			$at = "",
			$item_plural = ($np == "1") ? false : true;
            
            $elTemp = $("<div/>");

            var i = ((oSettings.page - 1) * oSettings.maxResults);

            while (i < (oSettings.maxResults * oSettings.page) && i < $np) {
                var $oPhoto = photo(j.feed.entry[i],{parseJson:true});
                
                //add description to image
            	if (oSettings.parsePhotoComment && $oPhoto.data('jsonData')) {
            		$oDesData = $oPhoto.data('jsonData');
            		//$sDescription = '"'+$oDesData.sTitle+'" - '+$oDesData.oFormat.iWidth+'cm x '+$oDesData.oFormat.iHeight+'cm - '+$oDesData.sPaint+' op '+$oDesData.sCanvas;
            		//$elCaption = $('<div id="slideshowDescription'+i+'" class="nivo-html-caption">'+$sDescription+'</div>');
            		//$self.parent().append($elCaption);
             		//$oPhoto.find("img").attr('title', '#slideshowDescription'+i);
             		if($oDesData.sTitle && oSettings.slideshowUrl) {
             			$sSlideshowUrl = oSettings.slideshowUrl+encodeURI($oDesData.sTitle);
             			$oPhoto.find("a").attr('href', $sSlideshowUrl);
             		}
				}
                
                $elTemp.append($oPhoto.html());
                i++;
            }
			
			if (oSettings.sessionStorage) {
				sessionStorage.setItem(oSettings.album) = JSON.stringify(j);
			} else {
				oSettings.photostore[oSettings.album] = j;
			}
            var $s = $(".picasa_photo", $elTemp).css(oSettings.thumbCss);
            show(false, $elTemp.html());
        }
        function getAlbums() {
            if (oSettings.photostore[oSettings.album]) {
                albums(oSettings.photostore[oSettings.album]);
            } else {
                var $si = ((oSettings.page - 1) * oSettings.maxResults) + 1;
                var $u = 'http://picasaweb.google.com/data/feed/api/user/' + oSettings.username + '/album/' + oSettings.album + '?kind=photo&alt=json'+ ((oSettings.thumbSize !== "") ? "&imgmax=" + oSettings.thumbSize : "") + ((oSettings.authKey !== "") ? "&authkey=" + oSettings.authKey : "") + ((oSettings.keyword !== "") ? "&tag=" + oSettings.keyword : "");
                var $v = 'http://picasaweb.google.com/data/feed/api/user/' + oSettings.username + '/album/' + oSettings.album + '?kind=photo&alt=json'+ ((oSettings.secondThumbSize !== "") ? "&imgmax=" + oSettings.secondThumbSize : "") + ((oSettings.authKey !== "") ? "&authkey=" + oSettings.authKey : "") + ((oSettings.keyword !== "") ? "&tag=" + oSettings.keyword : "");
                show(true, '');
                $.when( $.getJSON($u, 'callback=?'), $.getJSON($v, 'callback=?') ).done(
        		   function(x,y){ albums(x[0],y[0]); }
        		);
            }
            return $self;
        }
        function getSlideshow() {
            if (oSettings.photostore[oSettings.album] && !oSettings.debug) {
                slideshow(oSettings.photostore[oSettings.album]);
            } else if (oSettings.sessionStorage && sessionStorage.getItem(oSettings.album)) {
				slideshow(sessionStorage.getItem($.parseJSON(oSettings.album)));
			} else {
                var $si = ((oSettings.page - 1) * oSettings.maxResults) + 1;
                var $u = 'http://picasaweb.google.com/data/feed/api/user/' + oSettings.username + '/album/' + oSettings.album + '?kind=photo&alt=json'+ ((oSettings.thumbSize !== "") ? "&imgmax=" + oSettings.thumbSize : "") + ((oSettings.authKey !== "") ? "&authkey=" + oSettings.authKey : "") + ((oSettings.keyword !== "") ? "&tag=" + oSettings.keyword : "");
                show(true, '');
                $.when( $.getJSON($u, 'callback=?') ).done(
        		   function(x){ slideshow(x); }
        		);
            }
            return $self;
        }
        function show(loading, data) {
            if (loading) {
                //document.body.style.cursor = "wait";
                //if ($.blockUI){ $self.block(oSettings.blockUIConfig);}
            } else {
                document.body.style.cursor = "default";
                //if ($.blockUI){ $self.unblock(); }
                $self.html(data);
				if(typeof(oSettings.onSuccess) == 'function')
				{
					oSettings.onSuccess();
				}
            }
        }
        _initialize();
    };

    $.fn.picasa.defaults = {
        mode: 'albums', //-- can be: album, albums, latest (keyword = obsolete but backwards compatible, now just fill in a keyword in the settings to enable keyword-photos)
        imgElSelector: '#slider', //-- selector for the image container (slideshow mode)
		parsePhotoComment: true, //-- parse the photo comment as json
		slideshowUrl: "", //-- use this url as basis for a link url
        username: '', //-- Must be explicitly set!!!
        album: "", //-- For loading a single album
        authKey: "", //-- for loading a single album that is private (use in 'album' mode only)
        albums: [], //-- use to load specific albums only: ["MyAlbum", "TheSecondAlbumName", "OtherAlbum"]
        keyword: "", 
        albumCrop: 1, //-- crop thumbs on albumpage to have all albums in square thumbs (see albumThumbSize for supported sizes)
        albumTitle: "", //-- overrule album title in 'album' mode
        albumThumbSize: 150, //-- specify thumbnail size of albumthumbs (default: 72, cropped not supported, supported cropped/uncropped: 32, 48, 64, 160 and uncropped only: 72, 144, 200, 288, 320, 400, 512, 576, 640, 720, 800)
        albumMaxResults: 999, //-- load only the first X albums
        albumsPerPage: 999, //-- show X albums per page (activates paging on albums when this amount is less then the available albums)
        albumPage: 1, //-- force load on specific album
        albumTypes: "public", //-- load public albums, not used for now
        page: 1, //-- initial page for an photo page
        photoSize: 650, //-- size of large photo loaded in slimbox, fancybox or other
        largePhotoSize: 800, //-- size of large photo loaded in slimbox, fancybox or other
        maxResults: 50, //-- photos per page
        showPager: 'bottom', //'top', 'bottom', 'both' (for both albums and album paging)
        thumbSize: 75,  //-- specify thumbnail size of photos (default: 72, cropped not supported, supported cropped/uncropped: 32, 48, 64, 160 and uncropped only: 72, 144, 200, 288, 320, 400, 512, 576, 640, 720, 800) 
        secondThumbSize: '500u', //-- specify thumbnail size of albumthumbs (default: 72, cropped not supported, supported cropped/uncropped: 32, 48, 64, 160 and uncropped only: 72, 144, 200, 288, 320, 400, 512, 576, 640, 720, 800)
        thumbCrop: 0, //-- force crop on photo thumbnails (see thumbSize for supported sized)
        thumbCss: {
            'margin': '5px'
        },
        thumbWrap: ['a'], //-- to wrap a thumbnail with
        onclickThumb: "", //-- overload the function when clicked on a photo thumbnail
        onclickAlbumThumb: "", //-- overload the function when clicked on a album thumbnail
        popupExt: "", //-- extend the photos by connecting them to for example Fancybox (see demos for example)
        showAlbumTitles: true,  //--following settings should be self-explanatory
        showAlbumThumbs: true,
        showAlbumdate: true,
        showAlbumPhotoCount: true,
        showAlbumDescription: true,
        showAlbumLocation: true,
        showSlideshowLink: true,
        showPhotoCaption: false,
        showPhotoCaptionDate: false,
        showCaptionLength: 9999,
        showPhotoDownload: false,
        showPhotoDate: true,
        labels: {
            photo: "photo",
            photos: "photos",
            albums: "Back to albums",
            slideshow: "Display slideshow",
            loading: "picasa fetching data...",
            page: "Page",
            prev: "Previous",
            next: "Next",
            devider: "|"
        }, //-- translate if needed
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        slimbox_config: {
            loop: false,
            overlayOpacity: 0.6,
            overlayFadeDuration: 400,
            resizeDuration: 400,
            resizeEasing: "swing",
            initialWidth: 250,
            initlaHeight: 250,
            imageFadeDuration: 400,
            captionAnimationDuration: 400,
            counterText: "{x}/{y}",
            closeKeys: [27, 88, 67, 70],
            prevKeys: [37, 80],
            nextKeys: [39, 83]
        }, //-- overrule defaults is needed
        blockUIConfig: {
            message: "<div class='lbLoading picasa_loader'>loading...</div>",
            css: "picasa_loader"
        }, //-- overrule defaults if needed
        albumstore: {}, //-- don't touch
        photostore: {}, //-- don't touch
        token: "",
		debug: true
    };
})(jQuery);