$(document).ready(function(){


    common();
    
    var w = window.innerWidth;
      if( w < 992 ) {
        $("#footer-block1").addClass("center");
        $("#footer-block2").addClass("center");
      } else {
        $("#footer-block1").removeClass("center");
        $("#footer-block2").removeClass("center");
      }

    // check login
    var ref = new Firebase("https://sizzling-heat-2499.firebaseio.com");
    var authData = ref.getAuth();
    if (authData) {
        console.log("User " + authData.uid + " is logged in with " + authData.provider);
        $(".nav-login").hide();

    } else {
        console.log("User is not logged in.");
        $(".nav-account").hide();
    }


    var current_year = new Date().getFullYear();
    var start_year = 1998;

    // conference
    type = ["conference", "journal"];
    var t;
    for(t = 0 ; t < 2 ; t++) {
        query_firebase(type[t], start_year, current_year);
    } // end tab

}); // end of document ready



/*
function query_firebase(type, start_year, current_year) {

        var tab = $("#" + type);
        var myFirebaseRef = new Firebase("https://sizzling-heat-2499.firebaseio.com/" + type );

        myFirebaseRef.on("value", function(snapshot) {

            papers = snapshot.val();

            // sort by year
            paper_dict = {};
            for(var key in papers) {

                var paper = papers[key];
                var y = paper.year;
                if( !(y in paper_dict) ) {
                    paper_dict[y] = [];
                }
                paper_dict[y].push(paper);
            }

        
            for(var year = current_year ; year >= start_year ; year--) {
                // skip if no papers
                if( !(year in paper_dict) ) {
                    continue;
                }

                // create header row
                var row = $("<div/>", {"class": "row"});
                var col = $("<div/>", {"class": "col s12 title center"});
                col.text(year.toString());
                row.append(col);
                tab.append(row);
                tab.append($("<hr/>"));

                paper_year = paper_dict[year];

                // sort by month
                month_dict = {}
                for(var key in paper_year) {
                    var paper = paper_year[key];
                    var month = 0;
                    if( paper.month ) {
                        month = paper.month;
                    }
                    
                    if( !(month in month_dict) ) {
                        month_dict[month] = [];
                    }
                    month_dict[month].push(paper);
                    //console.log(month);
                }



                for(var month = 12 ; month >= 0 ; month--) {

                    if( !(month in month_dict) ) {
                        continue;
                    }

                    paper_month = month_dict[month];


                    // sort by conference
                    conf_dict = {}
                    for(var key in paper_month) {
                        var paper = paper_month[key];
                        var conf = paper.conference;
                        //console.log(conf);
                        if( !(conf in conf_dict) ) {
                            conf_dict[conf] = [];
                        }
                        conf_dict[conf].push(paper);
                    }

                    

                    for(var key_conf in conf_dict) {

                        for(var key in conf_dict[key_conf]) {

                            var paper = conf_dict[key_conf][key];

                            // create row
                            row = $("<div/>", {"class": "row"});

                            // create image column
                            var img_col = $("<div/>", {'class': "col s3 offset-s1 col-img center"});
                            
                            // image block
                            var img = $("<img/>", {"class": "responsive-img publication-img"}).attr("src", paper.img);
                            img.error(function(){
                                $(this).attr('src', '../images/publication/comingsoon.jpg');
                            });
                            img_col.append(img);

                            // paper info column
                            var info_col = $("<div/>", {'class': "col s8"});

                            // title
                            var title = $("<b/>", {"class": "paper-title"});
                            if( paper.pdf ) {
                                title.append($("<a/>").text(paper.title).attr("href", paper.pdf).attr("target", "_blank"));
                            } else {
                                title.append(paper.title);
                            }
                            info_col.append(title).append($("<br>"));

                            // author
                            info_col.append(paper.author).append($("<br>"));

                            // conference
                            var conf_abbr = $("<b/>").text(paper.conference.toUpperCase());
                            var conf_full = $("<i/>").text(conference_mapping(paper.conference));
                            info_col.append(conf_full).append(" (").append(conf_abbr).append("), ");

                            // vol
                            if( paper.vol ) {
                                info_col.append("vol. ").append(paper.vol).append(", ");
                            }

                            // no
                            if( paper.no ) {
                                info_col.append("no. ").append(paper.no).append(", ");
                            }

                            // pp
                            if( paper.pp ) {
                                info_col.append("pp. ").append(paper.pp).append(", ");
                            }

                            // month
                            if( paper.month ) {
                                info_col.append(month_str(paper.month)).append(", ");    
                            }
                            
                            // year
                            info_col.append(paper.year).append($("<br>"));
                            console.log(paper.supp);
                            // supp
                            if( paper.supp != undefined && paper.supp != "" ) {
                                var supp = $("<div/>", {"class": "paper-link"});
                                supp.append($("<a/>").text("supplementary material").attr("href", paper.supp).attr("target", "_blank"));
                                info_col.append(supp);
                            }
                            // project
                            if( paper.project != undefined && paper.project != "" ) {
                                var project = $("<div/>", {"class": "paper-link"});
                                project.append($("<a/>").text("project website").attr("href", paper.project).attr("target", "_blank"));
                                info_col.append(project);
                            }
                            
                            row.append(img_col).append(info_col);
                            tab.append(row);
                        }


                        
                    }
    
                    
                } // end of month


                tab.append($("<br>")).append($("<br>"));

            } // end of year

        }); // end firebase

}


function conference_mapping(conf) {

    conf = conf.toUpperCase();
    switch(conf) {
        case "PAMI"     : return "IEEE Transactions on Pattern Analysis and Machine Intelligence";
        case "ITS"      : return "IEEE Transactions on Intelligent Transportation Systems";
        case "IJCV"     : return "International Journal of Computer Vision";
        case "TIP"      : return "IEEE Transactions on Image Processing";
        case "TIT"      : return "IEEE Transactions on Information Theory";
        case "CVIU"     : return "Computer Vision and Image Understanding";
        case "PR"       : return "Pattern Recognition";
        case "JMLR"     : return "Journal of Machine Learning Research";
        case "TOG"      : return "ACM Transactions on Graphics";
        case "SIGGRAPH" : return "ACM Transactions on Graphics";
        case "NIPS"     : return "Advances in Neural Information Processing Systems";
        case "CVPR"     : return "IEEE Conference on Computer Vision and Pattern Recognition";
        case "ECCV"     : return "European Conference on Computer Vision";
        case "ICCV"     : return "IEEE International Conference on Computer Vision";
        case "ICIP"     : return "IEEE International Conference on Image Processing";
        case "ICCP"     : return "IEEE International Conference on Computational Photography";
        case "BMVC"     : return "British Machine Vision Conference";
        case "ACMMM"    : return "ACM International conference on Multimedia";
        case "ICPR"     : return "International Conference on Pattern Recognition";
        case "ICME"     : return "IEEE International Conference on Multimedia and Expo";
        case "VMV"      : return "Vision, Modelling and Visualization";
        case "ICASSP"   : return "IEEE International Conference on Acoustics, Speech, and Signal Processing";
        case "WACV"     : return "IEEE Winter Conference on Applications of Computer Vision";
        case "SPIE"     : return "SPIE: Image and Signal Processing";
        case "FG"       : return "IEEE Conference on Automatic Face and Gesture Recognition";
        case "TOMM"     : return "ACM Transactions on Multimedia Computing Communications and Applications";
        case "AAAI"     : return "Proceedings of National Conference on Artificial Intelligence";
        case "ITS"      : return "IEEE Transactions on Intelligent Transportation Systems";
        default: return conf;
    }
    
}

function month_str(month) {

    map = ["January", "February", "March", 'April', "May", "June", "July", "August", "September", "October", "November", "December"]
    if( month >= 1 && month <= 12 ) {
        return map[month-1];
    } else {
        return month;
    }

}
*/