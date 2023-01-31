import Video from "./Video";
import React, { useEffect, useState } from "react";

export default function VideoList(props) {
  // fetch(
  //   "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAKCgFPyy3efcz0Ov2Cc_DkTqPAHF9g06g",
  //   {
  //     part: "snippet",
  //     channelId: "@TurkeyTom",
  //     type: "video",
  //     key: "AIzaSyCWOkxJ0FOSI8J9NZQYUJxR4158DJrResc",
  //     maxResults: 5,
  //     q: "term"
  //   }
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setVideos(data);
  //     console.log(data);
  //   });

  // var searchValue = "";
  // var videoArray = [];

  // // STRATEGIC ISOTOPE
  // var qsRegex = new RegExp(searchValue, "gi");
  // var buttonFilter = "";
  // var itemSelector = ".strategic--modern-news";
  // var itemsPerPage = 6;
  // var currentNumberPages = 1;
  // var totalPages = Math.ceil(videoArray.length / itemsPerPage);
  // var currentPage = 1;
  // var pageAtribute = "data-page";
  // var pagerClass = "isotope-pager";
  // var sortByValue = "original-order";
  // var currentItemCount = videoArray.length;

  // // jQuery(".library .strategic--modern-news").each(function (index) {
  // //   jQuery(this).attr("data-filter-order", index);
  // // });

  // useEffect(() => {
  //   if (props.theme === "dark") {
  //     lottieRef.current.playSegments([1, 50], true);
  //   }
  // }, []);

  // // Initialize Isotope
  // var $grid = document.querySelector(".library").isotope({
  //   itemSelector: ".strategic--modern-news",
  //   layoutMode: "fitRows",
  //   fitRows: {
  //     gutter: 12
  //   },
  //   hiddenStyle: {
  //     opacity: 0
  //   },
  //   visibleStyle: {
  //     opacity: 1
  //   },
  //   filter: () => {
  //     var buttonResult = buttonFilter
  //       ? this.is(buttonFilter) && this.is('[data-page="' + currentPage + '"]')
  //       : true;
  //     var searchResult = qsRegex
  //       ? this.text().match(qsRegex) &&
  //         this.is('[data-page="' + currentPage + '"]')
  //       : true;

  //     return buttonResult && searchResult;
  //   },
  //   getSortData: {
  //     name: ".strategic--news-post-title a",
  //     symbol: ".symbol",
  //     number: ".number parseInt",
  //     category: ".strategic--news-post-overlay-domain"
  //   }
  // });

  // // On Layout Complete, set animation direction
  // $grid.on("layoutComplete", function (event, laidOutItems) {
  //   if (currentItemCount < laidOutItems.length) {
  //     jQuery(".strategic--news-wrapper").addClass(
  //       "strategic--alternate-animation"
  //     );
  //   } else {
  //     jQuery(".strategic--news-wrapper").removeClass(
  //       "strategic--alternate-animation"
  //     );
  //   }

  //   jQuery(".strategic--news-wrapper").addClass("strategic--layout-complete");
  // });

  // // bind filter buttons
  // const filterButton = (filter) => {
  //   buttonFilter = filter;

  //   setPagination();
  // };

  // // bind filter buttons
  // const postsPerPage = (e) => {
  //   itemsPerPage = parseInt(e.current.value);

  //   setPagination();
  // };

  // // bind sort button click
  // // jQuery("#sorts").on("change", function () {
  // //   sortByValue = jQuery(this).val();

  // //   $grid.isotope({ sortBy: sortByValue });
  // // });

  // // change is-checked class on buttons
  // jQuery(".button-group").each(function (i, buttonGroup) {
  //   var $buttonGroup = jQuery(buttonGroup);
  //   $buttonGroup.on("click", "button", function () {
  //     $buttonGroup
  //       .find(".strategic--news-tab-selected")
  //       .removeClass("strategic--news-tab-selected");
  //     jQuery(this).addClass("strategic--news-tab-selected");
  //   });
  // });

  // // debounce so filtering doesn't happen every millisecond
  // function debounce(fn, threshold) {
  //   var timeout;
  //   threshold = threshold || 100;
  //   return function debounced() {
  //     clearTimeout(timeout);
  //     var args = arguments;
  //     var _this = this;
  //     function delayed() {
  //       fn.apply(_this, args);
  //     }
  //     timeout = setTimeout(delayed, threshold);
  //   };
  // }

  // // use value of search field to filter
  // const quickSearch = debounce(() => {
  //   qsRegex = new RegExp(searchValue, "gi");

  //   if (searchValue == "") {
  //     jQuery(".strategic--news-wrapper").removeClass(
  //       "strategic--news-searching"
  //     );
  //   } else {
  //     jQuery(".strategic--news-wrapper").addClass("strategic--news-searching");
  //   }

  //   setPagination();
  // });

  // // Go to page
  // const goToPage = (n) => {
  //   currentPage = n;
  //   jQuery(".isotope-pager a").removeClass("current");
  //   jQuery(".isotope-pager a:nth-of-type(" + n + ")").addClass("current");
  //   jQuery(".strategic--news-wrapper").removeClass(
  //     "strategic--layout-complete"
  //   );

  //   $grid.isotope();
  // };

  // // Set pagination
  // function setPagination() {
  //   currentNumberPages = 1;

  //   var item = 1;
  //   var selector = itemSelector;
  //   var itemsArray = [];

  //   jQuery(".library")
  //     .children(selector)
  //     .each(function () {
  //       itemsArray.push(jQuery(this));
  //     });

  //   var totalItemCount = 0;

  //   itemsArray.forEach(function (element) {
  //     if (
  //       jQuery(element).text().match(qsRegex) &&
  //       jQuery(element).is(buttonFilter)
  //     ) {
  //       totalItemCount++;
  //     }
  //   });

  //   if (totalItemCount != 0) {
  //     jQuery(".no-results").fadeOut();

  //     jQuery(".library").children(selector).attr(pageAtribute, "");

  //     itemsArray.forEach(function (element) {
  //       if (
  //         jQuery(element).text().match(qsRegex) &&
  //         jQuery(element).is(buttonFilter)
  //       ) {
  //         if (item > itemsPerPage) {
  //           currentNumberPages++;
  //           item = 1;
  //         }

  //         jQuery(element).attr(pageAtribute, currentNumberPages);

  //         if (
  //           jQuery(element).hasClass("strategic--news-post-pinned") &&
  //           !jQuery(".strategic--news-searching").length
  //         ) {
  //           item += 2;
  //         }

  //         item++;
  //       } else {
  //         jQuery(element).attr(pageAtribute, "");
  //       }
  //     });

  //     if (!jQuery("." + pagerClass).length) {
  //       var $isotopePager =
  //         jQuery("." + pagerClass).length == 0
  //           ? jQuery(
  //               '<div class="' + pagerClass + '" style="z-index: 999"></div>'
  //             )
  //           : jQuery("." + pagerClass);

  //       $isotopePager.html("");

  //       for (var i = 0; i < totalPages; i++) {
  //         var $pager = jQuery(
  //           '<a href="javascript:void(0);" class="pager" ' +
  //             pageAtribute +
  //             '="' +
  //             (i + 1) +
  //             '">' +
  //             (i + 1) +
  //             "</a>"
  //         );

  //         $pager.click(function () {
  //           var page = jQuery(this).eq(0).attr(pageAtribute);
  //           goToPage(page);
  //         });

  //         $pager.appendTo($isotopePager);
  //       }

  //       jQuery(".library").after($isotopePager);

  //       for (var i = 1; i <= currentNumberPages; i++) {
  //         jQuery("." + pagerClass + " a:nth-of-type(" + i + ")")
  //           .delay(500)
  //           .fadeIn();
  //       }

  //       for (var i = 1; i <= totalPages - currentNumberPages; i++) {
  //         jQuery("." + pagerClass + " a:nth-last-of-type(" + i + ")").fadeOut();
  //       }
  //     } else {
  //       for (var i = 1; i <= currentNumberPages; i++) {
  //         jQuery("." + pagerClass + " a:nth-of-type(" + i + ")")
  //           .delay(500)
  //           .fadeIn();
  //       }

  //       for (var i = 1; i <= totalPages - currentNumberPages; i++) {
  //         jQuery("." + pagerClass + " a:nth-last-of-type(" + i + ")").fadeOut();
  //       }
  //     }
  //   } else {
  //     jQuery("." + pagerClass + " a").fadeOut();
  //     jQuery(".no-results").fadeIn();
  //   }

  //   goToPage(1);
  // }

  // setPagination();

  const isotope = React.useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    isotope.current = new Isotope(".library", {
      itemSelector: ".column",
      layoutMode: "fitRows",
      fitRows: {
        gutter: 20
      }
    });
  }, [props.videos]);

  const test = () => {
    isotope.current.arrange();
  };

  // handling filter key change
  useEffect(() => {
    props.filter === "*"
      ? isotope.current.arrange({ filter: `*` })
      : isotope.current.arrange({ filter: `.${props.filter}` });
  }, [props.filter]);

  return (
    <div className="library animate__animated animate__fadeIn animate__delay-5s">
      {props.videos
        ? props.videos.items?.map((video, index) => (
            <div
              className={`column ${video.author
                .toLowerCase()
                .split(" ")
                .join("")}`}
              key={video.id}
            >
              <Video
                title={video.title}
                date={new Date(video.pubDate).toDateString()}
                src={video.guid}
                author={video.author}
                img={video.thumbnail.replace("hqdefault", "mqdefault")}
                handleModalClick={props.handleModalClick}
              />
            </div>
          ))
        : ""}
    </div>
  );
}
